import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false,
    }
};

export async function PUT(request) {
    const formData = await request.formData();
    const id = formData.get('id');
    const name = formData.get('name');
    const country = formData.get('country');
    const image = formData.get('image');
    const type = parseInt(formData.get('type'));
    const tier = parseInt(formData.get('tier'));
    const season = formData.get('season');

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não recebidos!' }), { status: 200 });
    }

    const league = await prisma.league.findFirst({ where: { id: parseInt(id) }, include: { image: true } });

    if (!league) {
        return new Response(JSON.stringify({ success: false, message: 'Liga não encontrada!' }), { status: 200 });
    }

    const data = {};

    if (image) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const safeName = (name || league.name).replace(/\s+/g, '-');
        const fileName = `${safeName}-${Date.now()}.png`;
        const filePath = path.join(process.cwd(), 'public', 'images', 'leagues', fileName);

        const imagePath = path.join(process.cwd(), 'public', league.image.url.replace(/^\/+/, ''));


        const newImage = await prisma.image.update({
            where: { id: league.image.id },
            data: { url: `/images/leagues/${fileName}` }
        });

        if (newImage) {
            fs.unlinkSync(imagePath);
            fs.writeFileSync(filePath, buffer);
        }

    }

    if (name) {
        data.name = name;

        if (league.image && league.image.url) {
            const oldImagePath = path.join(process.cwd(), 'public', league.image.url.replace(/^\/+/, ''));
            const ext = path.extname(oldImagePath);
            const safeName = name.replace(/\s+/g, '-');
            const newFileName = `${safeName}-${Date.now()}${ext}`;
            const newImagePath = path.join(process.cwd(), 'public', 'images', 'leagues', newFileName);

            if (fs.existsSync(oldImagePath)) {
                fs.renameSync(oldImagePath, newImagePath);
            }

            await prisma.image.update({
                where: { id: league.image.id },
                data: { url: `/images/leagues/${newFileName}` }
            });
        }
    }

    if (country) {
        data.country = country;
    }

    if (type) {
        data.type = type;
    }

    if (tier) {
        data.tier = tier;
    }

    if (season) {
        data.season = season;
    }

    await prisma.league.update({
        where: { id: parseInt(id) },
        data
    });

    return new Response(JSON.stringify({ success: true, message: 'Liga atualizada com sucesso!' }), { status: 200 });
}