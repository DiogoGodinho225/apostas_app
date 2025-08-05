import prisma from "@/lib/prisma";

export async function PUT(request, context){
    const params = await context.params;
    const {id, betLineId} = params;
    const { status } = await request.json();

    if(!id || !betLineId){
        return new Response(JSON.stringify({success: true, message: "Dados não fornecidos!"}), {status: 200});
    }

    await prisma.betLine.update({
        where: {bet_id: Number(id), id: Number(betLineId)},
        data: {status: Number(status)}
    });

    const betLines = await prisma.betLine.findMany({where: {bet_id: Number(id)}});

    const betWin = betLines.every(bl => bl.status === 2);
    const betLose = betLines.some(bl => bl.status === 3);
    const LinebetsReturned = betLines.filter(bl => bl.status === 4);

    if(betWin){
        await prisma.bet.update({
            where: {id: Number(id)},
            data: {result: 'Ganha'}
        })
    }else if(betLose){
        await prisma.bet.update({
            where: {id: Number(id)},
            data: {result: 'Perdida'}
        })
    }else if(LinebetsReturned.lenght > 0){
        const bet = await prisma.bet.findFirst({where: {id: Number(id)}});
        var newOdd = bet.odds;

        LinebetsReturned.forEach(line => {
            newOdd /= line.odd;
        });

        await prisma.bet.update({
            where: {id: Number(id)},
            data: {odds: newOdd.toFixed(2)}
        })
    }

    return new Response(JSON.stringify({success: true, message: 'Resultado alterado com sucesso!'}), {status: 200});
}