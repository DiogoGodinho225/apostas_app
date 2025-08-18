'use client';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AddTeam, DeleteTeam, getLeague } from '@/services/leaguesApi';
import toast, { ToastBar } from 'react-hot-toast';
import BackButton from '@/components/goBackButton';
import '@/styles/leagues/view.css'
import { FaFolder, FaTimes, FaPlus, FaCheck } from 'react-icons/fa';
import { useTeams } from '@/context/teamsContext';

const LeagueDetail = () => {

    useEffect(() => {

        document.title = 'League Details';

        const oldBg = document.body.style.backgroundColor;
        document.body.style.backgroundColor = 'white';

        return () => {
            document.body.style.backgroundColor = oldBg;
        };
    }, []);



    return (
        <Suspense>
            <View />
        </Suspense>
    );

}

const View = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [league, setLeague] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchLeague = async () => {

        setLoading(true);

        let id = searchParams.get('id');

        try {
            const response = await getLeague(id);

            if (response.status === 200 && response.data.success === true) {
                setLeague(response.data.league);
                document.title = response.data.league.name
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


    useEffect(() => {

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
                    <LeagueTeams teams={league.teams_leagues.map(tl => tl.teams)} leagueType={league.type} leagueId={league.id} fetchLeague={fetchLeague} />
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

const LeagueTeams = ({ teams, leagueType, leagueId, fetchLeague }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRemoveTeam = async (teamId) => {
        setLoading(true);

        try {
            const response = await DeleteTeam(teamId, leagueId);

            if (response.status === 200 && response.data.success === true) {
                toast.success(response.data.message);
                fetchLeague();
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }

        } catch (error) {
            console.log(error);
        }

        setLoading(false)
    }

    return (
        <div className="league-teams">
            <h3>Equipas</h3>
            <table>
                <thead>
                    <tr>
                        {leagueType === 2 ? (
                            <th><BtnAddTeam setShowModal={setShowModal} showModal={showModal} /></th>
                        ) : null}
                    </tr>
                </thead>
                <tbody>
                    {
                        teams.length > 0 ? (
                            teams.map((t) => (
                                <tr key={t.id}>
                                    <td>
                                        <div className="league-team-details">
                                            <img src={t.images.url} />
                                            <p>{t.name}</p>
                                            <div className="btnGroup">
                                                <button onClick={() => router.push(`/teams/view?id=${t.id}`)}><FaFolder /></button>
                                                {leagueType === 2 ? (<button disabled={loading} onClick={() => handleRemoveTeam(t.id)}><FaTimes /></button>) : null}
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) :
                            <tr>
                                <td className="no-teams">Sem Equipas</td>
                            </tr>

                    }
                </tbody>
            </table>
            {
                showModal === true ? (<ModalTeam setShowModal={setShowModal} leagueId={leagueId} fetchLeague={fetchLeague} leagueTeams={teams} />) : null
            }
        </div>
    );
}

const BtnAddTeam = ({ setShowModal }) => {

    return (
        <button onClick={() => setShowModal(true)} className='btnAddTeam'>Adicionar Equipa</button>
    )
}

const ModalTeam = ({ setShowModal, leagueId, fetchLeague, leagueTeams }) => {

    const [searchTeam, setSearchTeam] = useState('');
    const [searchTeams, setSearchTeams] = useState([]);
    const { teams } = useTeams();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {

        if (searchTeam !== '') {
            const filtered = teams.filter(t => t.name.toLowerCase().includes(searchTeam.toLowerCase()));
            setSearchTeams(filtered);
        } else {
            setSearchTeams([]);
        }

    }, [searchTeam]);

    const handleAddTeam = async (teamId) => {
        setLoading(true);

        try {
            const response = await AddTeam(teamId, leagueId);

            if (response.status = 200 && response.data.success === true) {
                fetchLeague();
                toast.success(response.data.message);
                setSearchTeam('');
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao adicionar equipa!')
        }
        setLoading(false)
    }

    const handleButton = (teamId) => {
        const filtered = leagueTeams.filter(t => t.id === teamId);

        if (filtered.length > 0) {
            return <button className='btnCheck' disabled ><FaCheck /></button>
        }

        return <button className='btnAdd' disabled={loading} onClick={() => handleAddTeam(teamId)}><FaPlus /></button>
    }

    return (
        <div className="overlay">
            <div className="modal-team">
                <button className='close' onClick={() => setShowModal(false)}><FaTimes /></button>
                <div className="search-group">
                    <label>Pesquisar</label>
                    <input type='text' value={searchTeam} onChange={(e) => setSearchTeam(e.target.value)} placeholder='Pesquise por uma equipa...'></input>
                </div>
                <div className="teams-list">
                    {searchTeams.length > 0 ? (
                        searchTeams.map((st) => (
                            <div key={st.id} className="team-group">
                                <img src={st.images.url} />
                                <p>{st.name}</p>
                                {handleButton(st.id)}
                            </div>
                        ))
                    ) :
                        <p>Pesquise por uma equipa...</p>
                    }
                </div>
            </div>
        </div>
    );
}



export default LeagueDetail