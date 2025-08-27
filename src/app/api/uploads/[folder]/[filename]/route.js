import prisma from "@/lib/prisma";
import fs from 'fs';
import path from "path";

export async function GET(req, context) {

    const params = await context.params;
    const {folder, filename} = params;

    if(!folder | !filename){
        return new Response(JSON.stringify({success: false, message: 'Erro ao carregar as imagens 1!'}), {status: 200});
    }

    const filePath = path.join(process.cwd(), 'uploads', folder, filename);
    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {status: 200});
    
}