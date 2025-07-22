import prisma from "@/lib/prisma";

export async function GET(request){

    const id = Number(new URL(request.url).searchParams.get('id'));

    if(!id){
        return new Response(JSON.stringify({success: false, message: 'Dados não fornecidos'}), {status: 200});
    }

    const team = await prisma.team.findFirst({where: {id: id}, include: {images: true, teams_leagues: {include: {leagues: true}}}});

    if(!team){
        return new Response(JSON.stringify({success: false, message: 'Equipa não encontrada!'}), {status: 200});
    }

    return new Response(JSON.stringify({success: true, message: 'Equipa encontrada!', team}), {status: 200});
}