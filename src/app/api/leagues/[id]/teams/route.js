import prisma from "@/lib/prisma";

export async function POST(request, context) {

    const params = await context.params;
    const leagueId = params.id;
    const { teamId } = await request.json();

    if (!teamId || !leagueId) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    await prisma.teamLeague.create({
        data: {
            teams: {
                connect: {
                    id: Number(teamId),
                }
            },
            leagues: {
                connect: {
                    id: Number(leagueId),
                }
            }
        }
    });

    return new Response(JSON.stringify({ success: true, message: "Equipa Adicionada!" }), { status: 200 })
}

export async function DELETE(request, context) {

    const params = await context.params;
    const leagueId = params.id;
    const { teamId } = await request.json();

    if (!leagueId || !teamId) {
        return new Response(JSON.stringify({ success: false, message: 'Dados não fornecidos!' }), { status: 200 });
    }

    await prisma.teamLeague.delete({
        where: {
            team_id_league_id:
            {
                team_id: Number(teamId),
                league_id: Number(leagueId)
            }
        }
    })

    return new Response(JSON.stringify({ success: true, message: 'Equipa eliminada!' }), { status: 200 });

}