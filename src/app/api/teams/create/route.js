import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs";
import { url } from "inspector";
import { connect } from "http2";

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
                url: `/images/teams/${fileName}`,
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
        const filePath = path.join(process.cwd(), 'public', 'images', 'teams', fileName);
        fs.writeFileSync(filePath, buffer);
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Erro ao criar equipa!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Nova equipa adicionada!', team }), { status: 200 });


}
