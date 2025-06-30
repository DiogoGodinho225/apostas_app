'use client';
import React from "react";
import { useEffect } from 'react';
import Search from '@/components/search';
import '@/styles/leagues/page.css';
import CardButtons from '@/components/card-buttons';

const Leagues = () => {

    useEffect(() => {
        document.title = 'Leagues';
    }, [])

    return (
        <div className="leagues-container">
            <div className="page-top">
                <h2 className="page-title">Ligas</h2>
                <Search />
            </div>
            <div className="leagues-list">
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
                <CardLeague />
            </div>
        </div>
    );
}

const CardLeague = () => {
    return (
        <div className="card-league">
            <div className="card-top">
                <img src="/images/leagues/Liga-Portugal-Betclic-1751012995768.png" alt="League Logo" />
            </div>
            <div className="card-body">
                <h3 className="card-title">Liga Portugal Betclic</h3>
                <div className="league-details">
                    <p><span>País: </span>Portugal</p>
                    <p><span>Tipo: </span>Nacional</p>
                    <p><span>Divisao: </span>1ª Divisão</p>
                    <p><span>Temporada: </span>2024/25</p>
                </div>
                <CardButtons />
            </div>
        </div>
    );
}

export default Leagues;