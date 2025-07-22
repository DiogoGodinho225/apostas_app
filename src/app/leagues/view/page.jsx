'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getLeague } from '@/services/leaguesApi';
import toast from 'react-hot-toast';
import BackButton from '@/components/goBackButton';
import '@/styles/leagues/view.css'
import { FaFolder } from 'react-icons/fa';

const LeagueDetail = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'League Details';

        const oldBg = document.body.style.backgroundColor;
        document.body.style.backgroundColor = 'white';

        return () => {
            document.body.style.backgroundColor = oldBg;
        };
    }, []);

    useEffect(() => {

        const fetchLeague = async () => {

            setLoading(true);

            let id = searchParams.get('id');

            try {
                const response = await getLeague(id);

                if (response.status === 200 && response.data.success === true) {
                    setLeague(response.data.league);
                } else if (response.data.success === false) {
                    toast.error(response.data.message);
                } else if (response.status === 401) {
                    router.push('/auth?error=token_invalid');
                }

            } catch (error) {
                console.error(error);
                toast.error('Erro ao encontrar a equipa!');
            }

            setLoading(false);

        }

        fetchLeague();

    }, []);

    return (

        <div className="league-details-container">
            <BackButton />
            {!league ? (
                <p className='alert'>A carregar...</p>
            ) :
                <>
                    <Details league={league} />
                    <LeagueTeams teams={league.teams_leagues.map(tl => tl.teams)} leagueType={league.type} />
                </>

            }

        </div>
    );
}

const Details = ({ league }) => {
    return (
        <div className='league-details'>
            <h3>{league.name}</h3>
            <div className="details-container">
                <div className="logo-zone">
                    <img src={league.image.url} alt={`${league.name}-logo`} />
                </div>
                <div className="details-zone">
                    <p><span>País: </span>{league.country}</p>
                    <p><span>Tipo: </span>{league.type === 1 ? 'Nacional' : 'Internacional'}</p>
                    <p><span>Divisão: </span>{league.tier === 1 ? '1ª Divisão' : league.tier === 2 ? '2ª Divisão' : league.tier === 3 ? '3ª Divisão' : 'Desconhecida'}</p>
                    <p><span>Temporada: </span>{league.season}</p>
                    <p><span>Data de criação: </span>{new Date(league.created_at).toLocaleString('pt-PT')}</p>
                    <p><span>Última atualização: </span>{new Date(league.updated_at).toLocaleString('pt-PT')}</p>
                </div>
            </div>
        </div>
    );
}

const LeagueTeams = ({ teams, leagueType }) => {
    const router = useRouter();
    
    return (
        <div className="league-teams">
            <h3>Equipas</h3>
            <table>
                <thead>
                    <tr>
                        {leagueType === 2 ? (
                            <th><BtnAddTeam /></th>
                        ) : null}
                    </tr>
                </thead>
                <tbody>

                    {
                        teams.map((t) => (
                            <tr key={t.id}>
                                <td>
                                    <div className="league-team-details">
                                        <img src={t.images.url} />
                                        <p>{t.name}</p>
                                        <button onClick={() => router.push(`/teams/view?id=${t.id}`)}><FaFolder /></button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {

            }
        </div>
    );
}

const BtnAddTeam = () => {

    return (
        <button className='btnAddTeam'>Adicionar Equipa</button>
    )
}

export default LeagueDetail