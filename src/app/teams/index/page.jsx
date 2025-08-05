'use client';
import Search from "@/components/search";
import FloatBtn from "@/components/floatBtn";
import Pagination from "@/components/pagination";
import CardButtons from "@/components/card-buttons";
import { deleteTeam, getTeams } from "@/services/teamsApi";
import toast from "react-hot-toast";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import '@/styles/teams/index.css'
import { useLeagues } from "@/context/leaguesContext";
import { useTeams } from "@/context/teamsContext";

const TeamsIndex = () => {

    const {teams, setTeams, loading} = useTeams();
    const [paginatedTeams, setPaginatedTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [selectedLeague, setSelectedLeague] = useState('');

    useEffect(() => {
        document.title = 'Teams';
    }, [])

    useEffect(() => {
        if (search === '') {
            setFilteredTeams(teams);
        } else {
            const filteredTeams = teams.filter(t =>
                t.name.toLowerCase().includes(search.toLowerCase()) ||
                t.country.toLowerCase().includes(search.toLowerCase()) ||
                t.short_name.toLowerCase().includes(search.toLowerCase()) ||
                String(t.founded_year).toLowerCase().includes(search.toLowerCase()) ||
                t.stadium.toLowerCase().includes(search.toLowerCase()) ||
                t.teams_leagues.some(tl => tl.leagues?.name?.toLowerCase().includes(search.toLowerCase()))
            )
            setFilteredTeams(filteredTeams);
        }
    }, [search, teams]);

    const handleDelete = async (teamId) => {
        if (confirm('Tem a certeza que deseja eliminar esta equipa?')) {

            try {
                const response = await deleteTeam(teamId);

                if (response.status === 200 && response.data.success === true) {
                    toast.success(response.data.message);
                    setTeams(teams.filter(team => team.id !== teamId));
                } else if (response.data.success === false) {
                    toast.error(response.data.message);
                } else if (response.status === 401) {
                    router.push('/auth?error=token_invalid');
                }
            } catch (error) {
                console.error(error);
                toast.error('Erro ao eliminar a equipa!');
            }

        }
    }

    useEffect(()=>{
        if(selectedLeague === ''){
            setFilteredTeams(teams)
        }else{
            const filtered = teams.filter(team => team.teams_leagues.some(tl => Number(tl.league_id) === Number(selectedLeague)))
            setFilteredTeams(filtered);
        }   
    }, [selectedLeague])


    return (
        <div className="teams-container">
            <div className="page-top">
                <h2 className="page-title">Equipas</h2>
                <Search setSearch={setSearch} />
            </div>
            <TeamFilter selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague}/>
            <div className="teams-list">
                {loading
                    ?
                    (
                        <p className="alert">A carregar Equipas...</p>
                    )
                    : paginatedTeams.length === 0 ? (
                        <p className="alert">Nenhuma equipa encontrada...</p>
                    ) :
                        paginatedTeams.map((team) => (
                            <CardTeam key={team.id} team={team} handleDelete={handleDelete} />
                        )
                        )
                }
            </div>
            <Pagination list={filteredTeams} itemsPerPage={10} setPagination={setPaginatedTeams} />
            <FloatBtn route={() => router.push('/teams/create')} />
        </div>
    );
}

const CardTeam = ({ team, handleDelete }) => {

    const router = useRouter();

    return (
        <div className="card-team">
            <div className="card-top">
                <img src={team.images.url} alt="Team Logo" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{team.name}</h3>
                <div className="team-details">
                    <p><span>País: </span>{team.country}</p>
                    <p><span>Siglas: </span>{team.short_name}</p>
                    <p><span>Estádio: </span>{team.stadium}</p>
                    <p><span>Fundado em: </span>{team.founded_year}</p>
                </div>
                <CardButtons onBtnViewClick={() => router.push(`/teams/view?id=${team.id}`)} onBtnEditClick={() => router.push(`/teams/update?id=${team.id}`)} onBtnDeleteClick={() => handleDelete(team.id)} />
            </div>
        </div>
    );
}

const TeamFilter = ({selectedLeague, setSelectedLeague}) => {
    const router = useRouter();
    const {leagues, loading} = useLeagues();

    return (
        <div className="team-filter">
            <label>Liga: </label>
            <select value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
                <option value={''}>Todas</option>
                {leagues.map((l) => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                ))}
            </select>
        </div>
    );
}

export default TeamsIndex;