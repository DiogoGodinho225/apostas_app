import { checkAuth } from "@/lib/checkAuth";
import prisma from "@/lib/prisma";

export async function GET(request) {

    const isLogged = await checkAuth(request);

    if (!isLogged) {
        return new Response(JSON.stringify({ success: false, message: 'Não autorizado!' }), {
            status: 200,
        });
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não recebidos!' }), {
            status: 200,
        });
    } else {
        const user = await prisma.user.findFirst({ where: { id: parseInt(id) } });

        if (user) {
            const img = await prisma.image.findFirst({ where: { id: user.profile_pic_id } });

            return new Response(JSON.stringify({ success: true, message: 'Imagem encontrada!', url: img.url}), {
                status: 200,
            });
        } else {
            return new Response(JSON.stringify({ success: false, message: 'Utilizador não encontrado!' }), {
                status: 200,
            });
        }

    }
}