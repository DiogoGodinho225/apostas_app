import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";
import { cwd } from "process";

export const config = {
    api: {
        bodyParser: false,
    }
};

export async function PUT(request){

    const formData = await request.formData();
    const id = Number(formData.get('id'));
    const name = formData.get('name');
    const country = formData.get('country');
    const image = formData.get('image');
    const shortName = String(formData.get('short_name')).toUpperCase();
    const foundedYear = Number(formData.get('founded_year'));
    const stadium = formData.get('stadium');


    if(!id){
        return new Response(JSON.stringify({success: false, message: 'Dados não fornecidos!'}), {status: 200});
    }

    const team = await prisma.team.findFirst({where: {id: id}, include: {images: true}});

    if(!team){
        return new Response(JSON.stringify({success: false, message: 'Equipa não encontrada!'}), {status: 200});
    }

    const data = {};

    const oldImagePath = path.join(process.cwd(), 'public', team.images.url);

    if(image){
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const fileName = shortName + '_logo.png';
        const filePath = path.join(process.cwd(), 'public', 'images', 'teams', fileName);

        fs.unlinkSync(oldImagePath);
        fs.writeFileSync(filePath, buffer);

        await prisma.image.update({where: {id: team.images.id}, data: {url: `/images/teams/${fileName}`}})
    }

    if(shortName && shortName !== team.short_name){
        const newFileName = shortName + '_logo.png';
        const newImagePath = path.join(process.cwd(), 'public', 'images', 'teams', newFileName);

        if(fs.existsSync(oldImagePath)){
            fs.renameSync(oldImagePath, newImagePath);
        }

        await prisma.image.update({where: {id: team.images.id}, data: {url: `/images/teams/${newFileName}`}});

        data.short_name = shortName;
    }

    if(name){
        data.name = name;
    }

    if(country){
        data.country = country;
    }

    if(foundedYear){
        data.founded_year = foundedYear;
    }

    if(stadium){
        data.stadium = stadium;
    }

    await prisma.team.update({where: {id: id}, data});

    return new Response(JSON.stringify({success: true, message: 'Equipa atualizada!'}), {status: 200});
}