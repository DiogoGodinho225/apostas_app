import prisma from "@/lib/prisma";
import path from "path";
import fs from "fs";

export async function GET(request, context) {

     const params = await context.params;
    const id = params.id;

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não recebidos!' }), {
            status: 200,
        });
    } else {
        const user = await prisma.user.findFirst({ where: { id: parseInt(id) }, include: {wallet: true, image: true}});

        if (user) {

            return new Response(JSON.stringify({ success: true, message: 'Utilizador encontrado!', user}), {
                status: 200,
            });
        } else {
            return new Response(JSON.stringify({ success: false, message: 'Utilizador não encontrado!' }), {
                status: 200,
            });
        }

    }
}

export const config = {
    api: {
        bodyparser: false,
    },
}

export async function PUT(req, context){

    const params = await context.params;
    const id = Number(params.id);
    const formData = await req.formData();
    const image = formData.get('image');

    if(!id){
        return new Response(JSON.stringify({ success: false, message: 'Dados não recebidos!' }), {status: 200});
    }

    const user = await prisma.user.findFirst({where: {id: id}, include: {image: true}});

    if(!user){
        return new Response(JSON.stringify({success: false, message: 'Utilizador não encontrado!'}), {status: 200});
    }

    const oldImageUrl = user.image.url;
    const imageName = oldImageUrl.replace('api/uploads/users/', '');

    const oldImagePath = path.join(process.cwd(), 'uploads', 'users', imageName);

    if(image){
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const fileName = 'user_' + user.id + '.png';
        const filePath = path.join(process.cwd(), 'uploads', 'users', fileName);

        fs.unlinkSync(oldImagePath);
        fs.writeFileSync(filePath, buffer);

        await prisma.image.update({where: {id: user.image.id}, data: {url: `/api/uploads/users/${fileName}`}});
    }

    return new Response(JSON.stringify({success: true, message: 'Foto de perfil alterada!'}), {status: 200});
}