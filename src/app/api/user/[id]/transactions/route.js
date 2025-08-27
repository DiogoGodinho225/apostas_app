import prisma from "@/lib/prisma";

export async function GET(request, context) {

    const params  = await context.params;
    const userId = Number(params.id);

    if(!userId){
        return new Response(JSON.stringify({success: false, message: 'Dados não fornecidos!'}), {status: 200});
    }

    const userTransactions = await prisma.walletTransaction.findMany({where: {user_id: userId}, include: {transaction_type: true}, orderBy: {created_at: 'desc'}});
    
    return new Response(JSON.stringify({success: true, message: 'Transações do utilizador encontradas!', userTransactions}), {status: 200});
}