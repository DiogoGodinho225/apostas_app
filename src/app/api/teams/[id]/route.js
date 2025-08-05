import prisma from "@/lib/prisma";
import fs from 'fs';
import path from "path";

export async function DELETE(request, context) {

    const params  = await context.params;
    const id = Number(params.id);

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const team = await prisma.team.findFirst({ where: { id: id }, include: { images: true } });

    if (!team) {
        return new Response(JSON.stringify({ success: false, message: 'Equipa não encontada!' }), { status: 200 });
    }

    let imagePath = null;
    if (team.image && team.image.url) {
        imagePath = path.join("public", team.image.url);
    }

    await prisma.$transaction(async (transaction) => {

        await transaction.teamLeague.deleteMany({ where: { team_id: id } });

        await transaction.team.delete({ where: { id: id } });

        await transaction.image.delete({ where: { id: team.images.id } });

        if (imagePath && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

    });

    return new Response(JSON.stringify({ success: true, message: 'Equipa deletada!' }), { status: 200 });

}

export async function GET(request, context) {

    const params = await context.params;
    const id = Number(params.id);

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos' }), { status: 200 });
    }

    const team = await prisma.team.findFirst({ where: { id: id }, include: { images: true, teams_leagues: { include: { leagues: {include: {image: true}} } } } });

    if (!team) {
        return new Response(JSON.stringify({ success: false, message: 'Equipa não encontrada!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Equipa encontrada!', team }), { status: 200 });
}