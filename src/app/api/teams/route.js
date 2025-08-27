import prisma from "@/lib/prisma"
import path from "path";
import fs from "fs";

export async function GET(request) {

    const teams = await prisma.team.findMany({ include: { images: true, teams_leagues: { include: { leagues: true } } } });

    if (teams.length <= 0) {
        return new Response(JSON.stringify({ success: false, message: 'Nenhuma equipa encontrada!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Equipas encontradas!', teams }), { status: 200 });
}

export const config = {
    api: {
        bodyparser: false,
    },
}

export async function POST(request) {

    const formData = await request.formData();
    const name = formData.get('name');
    const image = formData.get('image');
    const shortName = String(formData.get('short_name')).toUpperCase()
    const country = formData.get('country');
    const foundedYear = Number(formData.get('founded_year'));
    const stadium = formData.get('stadium');
    const leagueId = Number(formData.get('leagueId'));

    if (!name || !image || !shortName || !country || !foundedYear || !stadium || !leagueId) {
        return new Response(JSON.stringify({ success: false, message: "Dados não fornecidos" }), { status: 200 });
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileName = shortName + '_logo.png';

    await prisma.$transaction(async (transaction) => {

        const image = await transaction.image.create({
            data: {
                url: `/api/uploads/teams/${fileName}`,
            }
        })

        const team = await transaction.team.create({
            data: {
                name: name,
                images: {
                    connect: {
                        id: image.id,
                    }
                },
                short_name: shortName,
                country: country,
                founded_year: foundedYear,
                stadium: stadium,
            }
        })

        await transaction.teamLeague.create({
            data: {
                teams: {
                    connect: {
                        id: team.id,
                    }
                },
                leagues: {
                    connect: {
                        id: leagueId,
                    }
                }
            }
        })

    });

    const team = await prisma.team.findFirst({ where: { name: name, country: country } });

    if (team) {
        const filePath = path.join(process.cwd(), 'uploads', 'teams', fileName);
        fs.writeFileSync(filePath, buffer);
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Erro ao criar equipa!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Nova equipa adicionada!', team }), { status: 200 });
}

export async function PUT(request) {

    const formData = await request.formData();
    const id = Number(formData.get('id'));
    const name = formData.get('name');
    const country = formData.get('country');
    const image = formData.get('image');
    const shortName = String(formData.get('short_name')).toUpperCase();
    const foundedYear = Number(formData.get('founded_year'));
    const stadium = formData.get('stadium');


    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const team = await prisma.team.findFirst({ where: { id: id }, include: { images: true } });

    if (!team) {
        return new Response(JSON.stringify({ success: false, message: 'Equipa não encontrada!' }), { status: 200 });
    }

    const data = {};

    const url = team.images.url;
    const nameFile = url.replace("/api/uploads/teams/", "");

    const oldImagePath = path.join(process.cwd(), 'uploads', 'teams', nameFile);

    if (image) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const fileName = shortName + '_logo.png';
        const filePath = path.join(process.cwd(), 'uploads', 'teams', fileName);

        fs.unlinkSync(oldImagePath);
        fs.writeFileSync(filePath, buffer);

        await prisma.image.update({ where: { id: team.images.id }, data: { url: `/api/uploads/teams/${fileName}` } })
    }

    if (shortName && shortName !== team.short_name) {
        const newFileName = shortName + '_logo.png';
        const newImagePath = path.join(process.cwd(), 'uploads', 'teams', newFileName);

        if (fs.existsSync(oldImagePath)) {
            fs.renameSync(oldImagePath, newImagePath);
        }

        await prisma.image.update({ where: { id: team.images.id }, data: { url: `/api/uploads/teams/${newFileName}` } });

        data.short_name = shortName;
    }

    if (name) {
        data.name = name;
    }

    if (country) {
        data.country = country;
    }

    if (foundedYear) {
        data.founded_year = foundedYear;
    }

    if (stadium) {
        data.stadium = stadium;
    }

    await prisma.team.update({ where: { id: id }, data });

    return new Response(JSON.stringify({ success: true, message: 'Equipa atualizada!' }), { status: 200 });
}
