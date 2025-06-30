import prisma from "@/lib/prisma";

export async function GET(){

    const leagues = await prisma.league.findMany({include: {image: true, teams_leagues: {include: {teams: true}}}});

    if(leagues.length <= 0){
        return new Response(JSON.stringify({success: false, message: 'Nenhuma liga encontrada!'}, {status: 200}));
    }

    return new Response(JSON.stringify({success: true, message: 'Ligas encontradas!', leagues}, {status: 200}));

}