import prisma from "@/lib/prisma";

export async function PUT(request, context){
    const params = await context.params;
    const userId = Number(params.id);
    const {withdrawValue} = await request.json();

    if(!userId || !withdrawValue){
        return new Response(JSON.stringify({success: false, message: 'Dados não fornecidos!'}), {
            status: 200,
        });
    }

    const wallet = await prisma.wallet.findFirst({where: {user_id: userId}});

    if(wallet){
        await prisma.$transaction(async(transaction)=>{
            
            const balance = wallet.balance - parseFloat(withdrawValue);

            if(balance < 0){
                return new Response(JSON.stringify({success: false, message: 'Saldo insuficiente!'}), {
                    status: 200,
                });
            }

            await transaction.wallet.update({where: {id: wallet.id}, data: {balance: balance}});
            await transaction.walletTransaction.create({
                data:{
                    user: {
                        connect: {
                            id: userId
                        }
                    },
                    transaction_type: {
                        connect: {
                            id: 2,
                        }
                    },
                    amount: parseFloat(withdrawValue),
                    balance: balance,
                }
            })
        })
    }

    return new Response(JSON.stringify({success: true, message: 'Levantamento realizado!'}), {
        status: 200,
    });
}