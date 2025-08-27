import prisma from "@/lib/prisma";

export async function GET(request, context) {

    const params = await context.params;
    const userId = params.id;

    if (!userId) {
        return new Response(JSON.stringify({ success: true, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const bets = await prisma.bet.findMany({ where: { user_id: Number(userId) }, include: { bet_lines: { include: { leagues: true } } }, orderBy: { created_at: 'desc' } });

    return new Response(JSON.stringify({ success: true, message: bets.length + ' apostas encontradas!', bets }), { status: 200 });
}


export async function PUT(request, context) {
    const params = await context.params;
    const betId = Number(params.id);

    const betUpdated = await request.json();

    if (!betId) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const bet = await prisma.bet.findFirst({ where: { id: Number(betId) } });

    if (!bet) {
        return new Response(JSON.stringify({ success: false, message: 'Aposta não encontrada!' }), { status: 200 });
    }

    await prisma.$transaction(async ($transaction) => {

        const userWallet = await $transaction.wallet.findFirst({ where: { user_id: Number(bet.user_id) } });

        if (bet.stake !== betUpdated.stake) {
            if (userWallet) {
                if (bet.stake > betUpdated.stake) {
                    const difference = (bet.stake * userWallet.stake) - (betUpdated.stake * userWallet.stake);
                    await $transaction.wallet.update({ where: { id: userWallet.id }, data: { balance: userWallet.balance + difference } });
                } else {
                    const difference = (betUpdated.stake * userWallet.stake) - (bet.stake * userWallet.stake);
                    if (userWallet.balance >= difference) {
                        await $transaction.wallet.update({ where: { id: userWallet.id }, data: { balance: userWallet.balance - difference } });
                    } else {
                        return new Response(JSON.stringify({ success: false, message: 'Saldo insuficiente!' }), { status: 200 });
                    }
                }
            }
        }

        var profit = 0;
        if (bet.result === 'Ganha') {
            profit = (betUpdated.stake * userWallet.stake) * (betUpdated.betOdd);
        }

        await $transaction.bet.update({
            where: { id: Number(betId) }, data: {
                bet_type: betUpdated.betType,
                stake: Number(betUpdated.stake),
                odds: betUpdated.betOdd,
                result: betUpdated.result,
                profit: parseFloat(profit),
            }
        })


        for (const line of betUpdated.betLines) {
            await $transaction.betLine.update({
                where: { id: Number(line.id) },
                data: {
                    league_id: Number(line.league_id),
                    match: line.match,
                    prediction: line.prediction,
                    odd: parseFloat(line.odd),
                    status: Number(line.status),
                },
            });
        }
    })

    return new Response(JSON.stringify({ success: true, message: 'Aposta atualizada com sucesso!' }), { status: 200 });

}