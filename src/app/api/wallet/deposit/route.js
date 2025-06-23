import prisma from "@/lib/prisma"

export async function PUT(request) {

    const { id, depositValue } = await request.json();

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), {
            status: 200,
        });
    }

    if (depositValue <= 0) {
        return new Response(JSON.stringify({ success: false, message: 'O depósito deve ser superior a 0!' }), {
            status: 200,
        })
    }

    const wallet = await prisma.wallet.findFirst({ where: { user_id: id } });

    if (wallet) {

        const balance = wallet.balance += depositValue;

        await prisma.$transaction(async (transaction) => {
            await transaction.wallet.update({ where: { id: wallet.id }, data: { balance: balance } });

            await transaction.walletTransaction.create({
                data: {
                    user: {
                        connect: {
                            id: id
                        }
                    },
                    transaction_type: {
                        connect: {
                            id: 1,
                        }
                    },
                    amount: depositValue,
                    balance: balance,
                }
            })
        });

        return new Response(JSON.stringify({ success: true, message: 'Depósito realizado!' }),
            { status: 200 })
    }

    return new Response(JSON.stringify({ success: false, message: 'Utilizador não encontrado!' }),
        { status: 200 })

}