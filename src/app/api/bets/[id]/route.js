import prisma from "@/lib/prisma";

export async function GET(request, context){

    const params = await context.params;
    const userId = params.id;

    if(!userId){
        return new Response(JSON.stringify({success: true, message: 'Dados não fornecidos!'}), {status: 200});
    }

    const bets = await prisma.bet.findMany({where: {user_id: Number(userId)}, include: {bet_lines: {include: {leagues: true}}}});

    return new Response(JSON.stringify({success: true, message: bets.length + ' apostas encontradas!', bets}), {status: 200});
}