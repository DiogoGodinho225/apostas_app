'use client';
import React from "react";
import { useEffect, useState } from 'react';
import Search from '@/components/search';
import '@/styles/leagues/page.css';
import CardButtons from '@/components/card-buttons';
import {deleteLeague } from "@/services/leaguesApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Pagination from "@/components/pagination";
import FloatBtn from "@/components/floatBtn";
import { useLeagues } from "@/context/leaguesContext";

const Leagues = () => {

    const [paginatedLeagues, setPaginatedLeagues] = useState([]);
    const router = useRouter();
    const [search, setSearch] = useState('');
    const {leagues, setLeagues, loading} = useLeagues();

    useEffect(() => {
        document.title = 'Leagues';
    }, [])

    useEffect(() => {
        if (search === '') {
            setPaginatedLeagues(leagues);
        } else {
            const filteredLeagues = leagues.filter(l =>
                l.name.toLowerCase().includes(search.toLowerCase()) ||
                l.country.toLowerCase().includes(search.toLowerCase()) ||
                l.type === 1 && search.toLowerCase() === 'nacional' ||
                l.type === 2 && search.toLowerCase() === 'internacional' ||
                l.season.toLowerCase().includes(search.toLowerCase())
            )
            setPaginatedLeagues(filteredLeagues);
        }
    }, [search]);

    const handleDelete = async (leagueId) => {
        if (confirm('Tem a certeza que deseja eliminar esta liga?')) {

            try {
                const response = await deleteLeague(leagueId);

                if (response.status === 200 && response.data.success === true) {
                    toast.success(response.data.message);
                    setLeagues(leagues.filter(league => league.id !== leagueId));
                    setPaginatedLeagues(paginatedLeagues.filter(league => league.id !== leagueId));
                } else if (response.data.success === false) {
                    toast.error(response.data.message);
                } else if (response.status === 401) {
                    router.push('/auth?error=token_invalid');
                }
            } catch (error) {
                console.error(error);
                toast.error('Erro ao eliminar a liga!');
            }

        }
    }

    return (
        <div className="leagues-container">
            <div className="page-top">
                <h2 className="page-title">Ligas</h2>
                <Search setSearch={setSearch} />
            </div>
            <div className="leagues-list">
                {loading
                    ?
                    (
                        <p className="alert">A carregar ligas...</p>
                    )
                    : paginatedLeagues.length === 0 ? (
                        <p className="alert">Nenhuma liga encontrada...</p>
                    ) :
                        paginatedLeagues.map((league) => (
                            <CardLeague key={league.id} league={league} handleDelete={handleDelete} />
                        )
                        )
                }
            </div>
            <Pagination list={leagues} itemsPerPage={10} setPagination={setPaginatedLeagues} />
            <FloatBtn  route={() => router.push('/leagues/create')}/>
        </div>
    );
}

const CardLeague = ({ league, handleDelete }) => {

    const router = useRouter();

    return (
        <div className="card-league">
            <div className="card-top">
                <img src={league.image.url} alt="League Logo" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{league.name}</h3>
                <div className="league-details">
                    <p><span>País: </span>{league.country}</p>
                    <p><span>Tipo: </span>{league.type === 1 ? 'Nacional' : 'Internacional'}</p>
                    <p><span>Divisão: </span>{league.tier === 1 ? '1ª Divisão' : league.tier === 2 ? '2ª Divisão' : league.tier === 3 ? '3ª Divisão' : 'Desconhecida'}</p>
                    <p><span>Temporada: </span>{league.season}</p>
                </div>
                <CardButtons onBtnViewClick={() => router.push(`/leagues/view?id=${league.id}`)} onBtnEditClick={() => router.push(`/leagues/update?id=${league.id}`)} onBtnDeleteClick={() => handleDelete(league.id)} />
            </div>
        </div>
    );
}

export default Leagues;