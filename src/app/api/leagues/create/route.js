import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs";

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

    if (!name || !country || !image || !type || !season ) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const safeName = name.replace(/\s+/g, '-');
    const fileName = `${safeName}-${Date.now()}.png`;

    await prisma.$transaction(async (transaction) => {

        const image = await transaction.image.create({
            data: {
                url: `/images/leagues/${fileName}`,
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

    if(league){
        const filePath = path.join(process.cwd(), 'public', 'images', 'leagues', fileName);
        fs.writeFileSync(filePath, buffer);
    }else{
        return new Response(JSON.stringify({ success: false, message: 'Erro ao criar liga!' }), { status: 200  });
    }

    return new Response(JSON.stringify({ success: true, message: 'Nova liga adicionada!', league }), { status: 200 });
}