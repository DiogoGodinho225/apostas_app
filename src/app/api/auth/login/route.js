export async function POST(request) {

    const { username, password } = await request.json();

    if (username === 'teste' && password === 'testes123') {
        return new Response(JSON.stringify({ success: true, token: 'fake-token' }), {
            status: 200,
            headers: {
                'Content-Type': 'aplication/json',
            },
        });
    }

    return new Response(JSON.stringify({ success: false, message: 'credénciais inválidas' }), {
        status: 401,
        headers: {
            'Content-Type': 'aplication/json',
        },
    })
}