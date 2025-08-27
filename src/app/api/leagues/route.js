import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs";

export async function GET() {

    const leagues = await prisma.league.findMany({ include: { image: true, teams_leagues: { include: { teams: true } } } });

    if (leagues.length <= 0) {
        return new Response(JSON.stringify({ success: false, message: 'Nenhuma liga encontrada!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Ligas encontradas!', leagues }), { status: 200 });

}

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(request) {

    const formData = await request.formData();
    const name = formData.get('name');
    const country = formData.get('country');
    const image = formData.get('image');
    const type = parseInt(formData.get('type'));
    const tier = parseInt(formData.get('tier'));
    const season = formData.get('season');

    if (!name || !country || !image || !type || !season) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const safeName = name.replace(/\s+/g, '-');
    const fileName = `${safeName}-${Date.now()}.png`;

    await prisma.$transaction(async (transaction) => {

        const image = await transaction.image.create({
            data: {
                url: `/api/uploads/leagues/${fileName}`,
            }
        })

        await transaction.league.create({
            data: {
                name: name,
                country: country,
                image: {
                    connect: {
                        id: image.id
                    }
                },
                type: type,
                tier: tier,
                season: season
            }
        })

    });

    const league = await prisma.league.findFirst({
        where: { name: name, country: country },
    });

    if (league) {
        const filePath = path.join(process.cwd(), 'uploads', 'leagues', fileName);
        fs.writeFileSync(filePath, buffer);
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Erro ao criar liga!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Nova liga adicionada!', league }), { status: 200 });
}

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

    const url = league.image.url;
    const nameFile = url.replace('/api/uploads/leagues/', '');

    const oldImagePath = path.join(process.cwd(), 'uploads', 'leagues', nameFile);

    if (image) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const safeName = (name || league.name).replace(/\s+/g, '-');
        const fileName = `${safeName}-${Date.now()}.png`;
        const filePath = path.join(process.cwd(), 'uploads', 'leagues', fileName);

        fs.unlinkSync(oldImagePath);
        fs.writeFileSync(filePath, buffer);

        await prisma.image.update({
            where: { id: league.image.id },
            data: { url: `/api/uploads/leagues/${fileName}` }
        });
    }

    if (name && name !== league.name) {
        const ext = path.extname(oldImagePath);
        const safeName = name.replace(/\s+/g, '-');
        const newFileName = `${safeName}-${Date.now()}${ext}`;
        const newImagePath = path.join(process.cwd(), 'uploads', 'leagues', newFileName);

        if (fs.existsSync(oldImagePath)) {
            fs.renameSync(oldImagePath, newImagePath);

            await prisma.image.update({
                where: { id: league.image.id },
                data: { url: `/api/uploads/leagues/${newFileName}` }
            });
        }

        data.name = name;
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
