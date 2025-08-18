import prisma from "@/lib/prisma";

export async function PUT(request, context) {
    const params = await context.params;
    const { id, betLineId } = params;
    const { status } = await request.json();

    if (!id || !betLineId) {
        return new Response(JSON.stringify({ success: true, message: "Dados não fornecidos!" }), { status: 200 });
    }

    await prisma.betLine.update({
        where: { bet_id: Number(id), id: Number(betLineId) },
        data: { status: Number(status) }
    });

    const betLines = await prisma.betLine.findMany({ where: { bet_id: Number(id) } });

    const betWin =
        betLines.every(bl => bl.status === 2 || bl.status === 4) &&
        betLines.some(bl => bl.status === 2);
    const betLose = betLines.some(bl => bl.status === 3);
    const LinebetsReturned = betLines.filter(bl => bl.status === 4);

    const bet = await prisma.bet.findFirst({
        where: { id: Number(id) },
        include: { bet_lines: true }
    });


    const wallet = await prisma.wallet.findFirst({
        where: { user_id: bet.user_id }
    });


    if (betWin) {

        await prisma.$transaction(async (transaction) => {

            let valorApostado = bet.stake * wallet.stake;
            let profit = (valorApostado * bet.odds) - valorApostado;

            await transaction.bet.update({
                where: { id: Number(id) },
                data: { result: 'Ganha', profit: profit }
            });

            await transaction.wallet.update({
                where: { user_id: bet.user_id },
                data: {
                    balance: wallet.balance + ((bet.stake * wallet.stake) * bet.odds)
                }
            })

            await transaction.walletTransaction.create({
                data: {
                    user: {
                        connect: {
                            id: Number(bet.user_id),
                        }
                    },
                    transaction_type: {
                        connect: {
                            id: 4,
                        }
                    },
                    amount: (bet.stake * wallet.stake) * bet.odds,
                    balance: wallet.balance + ((bet.stake * wallet.stake) * bet.odds),
                }
            })

        });



    } else if (betLose) {

        let valorApostado = bet.stake * wallet.stake;

        await prisma.bet.update({
            where: { id: Number(id) },
            data: { result: 'Perdida', profit: -valorApostado }
        })
    } else if (LinebetsReturned.length > 0) {

        if (LinebetsReturned.length === bet.bet_lines.length) {

            await prisma.$transaction(async (transaction) => {

                await transaction.bet.update({
                    where: { id: Number(id) },
                    data: { result: 'Devolvida', profit: 0 }
                });

                await transaction.wallet.update({
                    where: { user_id: Number(bet.user_id) },
                    data: {
                        balance: wallet.balance + (bet.stake * wallet.stake)
                    }
                })

                await transaction.walletTransaction.create({
                    data: {
                        user: {
                            connect: {
                                id: Number(bet.user_id),
                            }
                        },
                        transaction_type: {
                            connect: {
                                id: 3,
                            }
                        },
                        amount: bet.stake * wallet.stake,
                        balance: wallet.balance + (bet.stake * wallet.stake),
                    }
                })

            });

        } else {
            var newOdd = bet.odds;

            LinebetsReturned.forEach(line => {
                newOdd /= line.odd;
            });

            await prisma.bet.update({
                where: { id: Number(id) },
                data: { odds: parseFloat(newOdd.toFixed(2)) }
            })
        }

    }

    return new Response(JSON.stringify({ success: true, message: 'Resultado alterado com sucesso!' }), { status: 200 });
}