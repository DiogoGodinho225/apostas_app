import prisma from "@/lib/prisma";

export async function POST(request) {

    const { bet } = await request.json();

    if (!bet) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const user = await prisma.user.findFirst({ where: { id: bet.userId } });

    if (!user) {
        return new Response(JSON.stringify({ success: false, message: 'Utilizador não encontrado!' }), { status: 200 });
    }

    const wallet = await prisma.wallet.findFirst({where: {user_id: user.id}});

    if(!wallet){
        return new Response(JSON.stringify({success: false, message: 'Carteira não encontrada!'}), {status: 200});
    }

    const balance = wallet.balance - (bet.stake * wallet.stake);

    if(balance < 0){
        return new Response(JSON.stringify({success: false, message: 'Montante disponível insuficiente!'}), {status: 200});
    }

    await prisma.$transaction(async (transaction) => {

        const newBet = await transaction.bet.create({
            data: {
                user: {
                    connect: {
                        id: Number(bet.userId),
                    }
                },
                bet_type: Number(bet.betType),
                stake: Number(bet.stake),
                odds: parseFloat(bet.betOdd),
                result: 'Pendente',
                profit: 0,
                bet_lines: {
                    create: bet.betLines.map(betLine => ({
                        leagues: { connect: { id: Number(betLine.leagueId) } },
                        match: betLine.home + ' x ' + betLine.away,
                        prediction: betLine.prediction,
                        odd: parseFloat(betLine.odd),
                        status: 1,
                    })),
                }
            }
        })

        if(newBet){
            await transaction.wallet.update({
                where: {user_id: Number(newBet.user_id)},
                data: {
                    balance: wallet.balance - (newBet.stake * wallet.stake)
                }
            })
        }

        await transaction.walletTransaction.create({
            data: {
                user: {
                    connect: {
                        id: Number(bet.userId),
                    }
                },
                transaction_type: {
                    connect: {
                        id: 7,
                    }
                },
                amount: bet.stake * wallet.stake,
                balance: balance,
            }
        })
    })

    return new Response(JSON.stringify({success: true, message: "Aposta realizada!"}), {status: 200});
}