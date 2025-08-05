import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function GET(request, context) {

    const params = await context.params;
    const id = Number(params.id);

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não recebidos!' }), { status: 200 });
    }

    const league = await prisma.league.findFirst({ where: { id: parseInt(id) }, include: { image: true, teams_leagues: { include: { teams: { include: { images: true } } } } } });

    if (!league) {
        return new Response(JSON.stringify({ success: false, message: 'Liga não encontrada!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Liga encontrada!', league }, { status: 200 }));
}

export async function DELETE(request, context) {

    const params = await context.params;
    const id = Number(params.id);

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não recebidos!' }), { status: 200 });
    }

    const league = await prisma.league.findFirst({ where: { id: parseInt(id) }, include: { image: true, teams_leagues: true } });

    if (!league) {
        return new Response(JSON.stringify({ success: false, message: 'Liga não encontrada!' }), { status: 200 });
    } else if (league.teams_leagues.length > 0) {
        return new Response(JSON.stringify({ success: false, message: 'Esta liga contém esquipas associadas!' }))
    }

    let imagePath = null;
    if (league.image && league.image.url) {
        imagePath = path.join("public", league.image.url.replace(/^\/+/, ""));
    }

    await prisma.$transaction(async (transaction) => {
        await transaction.league.delete({
            where: { id: parseInt(id) }
        });

        await transaction.image.delete({
            where: { id: league.image.id }

        });

        if (imagePath && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    });

    return new Response(JSON.stringify({ success: true, message: 'Liga excluída com sucesso!' }), { status: 200 });
}


