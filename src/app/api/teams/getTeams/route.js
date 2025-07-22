import prisma from "@/lib/prisma";
import { Judson } from "next/font/google";

export async function GET(request){
    
    const teams = await prisma.team.findMany({include: {images: true, teams_leagues: {include: {leagues: true}}}});

    if(teams.length <= 0){
        return new Response(JSON.stringify({success: false, message: 'Nenhuma equipa encontrada!'}), {status: 200});
    }

    return new Response(JSON.stringify({success: true, message: 'Equipas encontradas!', teams}), {status: 200});
}