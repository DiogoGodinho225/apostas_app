'use client'
import { getTeam } from "@/services/teamsApi";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import BackButton from "@/components/goBackButton";
import '@/styles/teams/view.css';
import { FaFolder } from "react-icons/fa";

const TeamDetail = () => {

    useEffect(() => {

        document.title = 'Team Details'

        const oldBg = document.body.style.backgroundColor;

        document.body.style.backgroundColor = 'white';

        return () => {
            document.body.style.backgroundColor = oldBg;
        }

    }, []);


    return (
        <Suspense>
            <View />
        </Suspense>
    );
}

const View = () => {

    const searchParams = useSearchParams();
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchTeam = async () => {

        setLoading(true)

        try {
            let id = searchParams.get('id');

            const response = await getTeam(id);

            if (response.status === 200 && response.data.success === true) {
                setTeam(response.data.team);
                document.title = response.data.team.name;
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }

        } catch (error) {
            console.log(error);
            toast.error('Erro ao procurar equipa!')
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchTeam();
    }, [])


    return (
        <div className="team-details-container">
            <BackButton />
            {!team ? (
                <p className='alert'>A carregar...</p>
            ) :
                <>
                    <Details team={team} />
                    <TeamLeagues leagues={team.teams_leagues.map(tl => tl.leagues)} />
                </>

            }
        </div>
    );
}

const Details = ({ team }) => {
    return (
        <div className='team-details'>
            <h3>{team.name}</h3>
            <div className="details-container">
                <div className="logo-zone">
                    <img src={team.images.url} alt={`${team.name}-logo`} />
                </div>
                <div className="details-zone">
                    <p><span>Siglas: </span>{team.short_name}</p>
                    <p><span>País: </span>{team.country}</p>
                    <p><span>Ano de Fundação: </span>{team.founded_year}</p>
                    <p><span>Estádio: </span>{team.stadium}</p>
                    <p><span>Data de criação: </span>{new Date(team.created_at).toLocaleString('pt-PT')}</p>
                    <p><span>Última atualização: </span>{new Date(team.updated_at).toLocaleString('pt-PT')}</p>
                </div>
            </div>
        </div>
    );
}

const TeamLeagues = ({ leagues }) => {

    const router = useRouter();

    return (
        <div className="team-leagues">
            <h3>Ligas</h3>
            <table>
                <tbody>
                    {
                        leagues.length > 0 ? (
                            leagues.map((l) => (
                                <tr key={l.id}>
                                    <td>
                                        <div className="team-league-details">
                                            <img src={l.image.url} />
                                            <p>{l.name}</p>
                                            <button onClick={() => router.push(`/leagues/view?id=${l.id}`)}><FaFolder /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) :
                            <tr>
                                <td className="no-leagues">Sem ligas a participar...</td>
                            </tr>

                    }
                </tbody>
            </table>
        </div>
    );
}

export default TeamDetail;