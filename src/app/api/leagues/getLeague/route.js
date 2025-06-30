import prisma from "@/lib/prisma";

export async function GET(request){
    const id = new URL(request.url).searchParams.get('id');

    if(!id){
        return new Response(JSON.stringify({success: false, message: 'Dados não recebidos!'}), {status: 200});
    }

    const league = await prisma.league.findFirst({where: {id: parseInt(id)}, include: {image: true, teams_leagues: {include: {teams: true}}}});

    if(!league){
        return new Response(JSON.stringify({success: false, message: 'Liga não encontrada!'}), {status: 200});
    }

    return new Response(JSON.stringify({sucess: true, message: 'Liga encontrada!', league}, {status: 200}));
}