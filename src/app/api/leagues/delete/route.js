import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function DELETE(request) {
    const id = new URL(request.url).searchParams.get('id');

    if(!id){
        return new Response(JSON.stringify({success: false, message: 'Dados não recebidos!'}), {status: 200});
    }

    const league = await prisma.league.findFirst({where: {id: parseInt(id)}, include: {image: true}});

    if(!league){
        return new Response(JSON.stringify({success: false, message: 'Liga não encontrada!'}), {status: 200});
    }

    let imagePath = null;
    if(league.image && league.image.url){
        imagePath = path.join("public", league.image.url.replace(/^\/+/, ""));
    }

    await prisma.$transaction(async (transaction) =>{
        await transaction.league.delete({
            where: { id: parseInt(id) }});

        await transaction.image.delete({
            where: { id: league.image.id }
        
        });

        if(imagePath && fs.existsSync(imagePath)){
            fs.unlinkSync(imagePath);
        } 
    });

    return new Response(JSON.stringify({success: true, message: 'Liga excluída com sucesso!'}), {status: 200});
}