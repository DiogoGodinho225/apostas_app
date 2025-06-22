import prisma from "@/lib/prisma"
import bcrypt from "bcrypt";


export async function POST(request) {
    const { username, email, password } = await request.json();

    if (!email || !username || !password) {
        return new Response(JSON.stringify({ success: false, message: 'Deve preencher todos os campos!' }), {
            status: 200,

        });
    }

    const usernameExists = await prisma.user.findUnique({ where: { username } });

    if (usernameExists) {
        return new Response(JSON.stringify({ success: false, message: 'Nome de Utilizador já existente!' }), {
            status: 200,
        });
    }

    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
        return new Response(JSON.stringify({ success: false, message: 'Email já existente!' }), {
            status: 200,

        });
    }

    const password_hash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password_hash,
            image: {
                connect: {
                    id: 1,
                }
            },
        },
    });

    await prisma.wallet.create({
        data: {
            user_id: user.id,
            balance: 0,
            stake: 0,
        }

    })

    return new Response(JSON.stringify({ success: true, message: 'Utilizador criado com successo!', username: user.username }), {
        status: 200,
    });
}