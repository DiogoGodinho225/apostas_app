import prisma from "@/lib/prisma";

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