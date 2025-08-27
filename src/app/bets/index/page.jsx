'use client';
import React, { useState } from "react";
import { useEffect } from 'react';
import '@/styles/bets/index.css'
import { useLeagues } from "@/context/leaguesContext";
import { useTeams } from "@/context/teamsContext";
import toast from "react-hot-toast";
import { useBets } from "@/context/betsContext";
import Pagination from "@/components/pagination";
import { useUser } from "@/context/userContext";
import FloatBtn from "@/components/floatBtn";
import { useRouter } from "next/navigation";
import { FaTimes, FaClock, FaTrophy, FaWallet, FaEye, FaPencilAlt } from "react-icons/fa";
import { betStatus } from "@/services/betsApi";

const Bets = () => {

    const { bets, loading } = useBets();
    const [paginatedBets, setPaginatedBets] = useState([]);
    const [filteredBets, setFilteredBets] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setFilteredBets(bets);
    }, [bets]);

    useEffect(() => {
        document.title = 'Bets';
    }, [])

    const updateBets = (updatedBet) => {
        setFilteredBets(prev => prev.map(b => (b.id === updatedBet.id ? updatedBet : b)));
    }


    return (
        <div className="bets-container">
            <div className="page-top">
                <h2 className="page-title">Apostas</h2>
            </div>
            <BetFilters bets={bets} setFilteredBets={setFilteredBets} />
            <BetsList paginatedBets={paginatedBets} loading={loading} updateBets={updateBets} />
            <Pagination list={filteredBets} itemsPerPage={6} setPagination={setPaginatedBets} />
            <FloatBtn route={() => router.push('/bets/create')} />
        </div>
    );
}

const BetsList = ({ paginatedBets, loading, updateBets }) => {

    const { user, setUser } = useUser();
    const [showBetView, setShowBetView] = useState(false);
    const [bet, setBet] = useState(null);
    const [selectedBet, setSelectedBet] = useState(null);
    const router = useRouter();

    const betTotalValue = (betStake, betOdd) => {

        var userStakeValue = user.wallet.stake;
        var betValue = betStake * userStakeValue
        var total_value = betValue * betOdd;

        return total_value;
    }

    const handleShowBet = () => {

        if (bet === null && showBetView === false && selectedBet !== null) {
            setBet(paginatedBets.find(b => b.id === selectedBet));
            setShowBetView(true);
        } else {
            setBet(null);
            setShowBetView(false);
            setSelectedBet(null);
        }
    }

    useEffect(() => {
        handleShowBet();
    }, [selectedBet]);

    useEffect(() => {
        if (selectedBet && showBetView === true) {
            setBet(paginatedBets.find(b => b.id === selectedBet));
        }
    }, [paginatedBets])

    const handleUpdateBet = (updatedBet) => {
        updateBets(updatedBet);
        setBet(updatedBet);
    };

    return (
        <>
            <div className="bets-list">
                {
                    loading && paginatedBets.length === 0 ? (
                        <p className="alert">A carregar...</p>
                    ) : paginatedBets.length === 0 ? (
                        <p className="alert">Nenhuma aposta encontrada...</p>
                    ) :
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Tipo</th>
                                    <th>Stake</th>
                                    <th>Valor Apostado</th>
                                    <th>Odd Total</th>
                                    <th>Valor Total</th>
                                    <th>Resultado</th>
                                    <th>Lucro</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paginatedBets.map((b) => (
                                        <tr key={b.id}>
                                            <td>{new Date(b.created_at).toLocaleDateString('PT-pt')}</td>
                                            <td>{b.bet_type === 1 ? 'Simples' : 'Múltipla'}</td>
                                            <td>{b.stake}</td>
                                            <td>{b.stake * user.wallet.stake}</td>
                                            <td>{b.odds}</td>
                                            <td>{betTotalValue(b.stake, b.odds)} €</td>
                                            <td>{b.result}</td>
                                            <td style={{ fontWeight: 'bold', color: b.profit > 0 ? 'green' : b.profit < 0 ? 'red' : '' }}>{b.profit} €</td>
                                            <td className="action-btns">
                                                <button onClick={() => setSelectedBet(b.id)}><FaEye /></button>
                                                <button onClick={() => router.push(`/bets/update?id=${b.id}`)}><FaPencilAlt /></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                }
            </div>
            {
                showBetView ? (<BetView bet={bet} handleShowBet={handleShowBet} handleUpdateBet={handleUpdateBet} stakeValue={user.wallet.stake} setUser={setUser} />) : null
            }


        </>
    );
}

const BetFilters = ({ bets, setFilteredBets }) => {

    const [filters, setFilters] = useState({ status: 'Todas', league: '', team: '', startDate: '', endDate: '' });

    const handleFilterChange = (name, value) => {

        setFilters(prev => ({ ...prev, [name]: value }));
    }

    useEffect(() => {

        if (bets.length === 0) {
            return;
        }

        const { status, league, team, startDate, endDate } = filters;
        var filtered = [...bets];

        if (status && status !== 'Todas') {
            filtered = filtered.filter(b => b?.result?.toLowerCase() === status.toLowerCase());
        }

        if (league) {
            filtered = filtered.filter(b =>
                b.bet_lines.some(line => line?.leagues?.name.toLowerCase().includes(league.toLowerCase()))
            );
        }

        if (team) {
            filtered = filtered.filter(b => b.bet_lines.some(line => line?.match?.toLowerCase().includes(team?.toLowerCase())));
        }

        if (startDate && endDate) {
            filtered = filtered.filter(b => new Date(b?.created_at).getTime() >= new Date(startDate).getTime() && new Date(b?.created_at).getTime() <= new Date(endDate).getTime());
        }

        setFilteredBets(filtered);


    }, [filters, bets])

    return (
        <div className="bet-filters">
            <FilterGroup label={'Estado: '} type={'select'} name={'status'} value={filters.status} handleFilterChange={handleFilterChange} />
            <FilterGroup label={'Liga: '} type={'text'} name={'league'} value={filters.league} placeholder={'Pesquise por uma liga...'} handleFilterChange={handleFilterChange} />
            <FilterGroup label={'Equipa: '} type={'text'} name={'team'} value={filters.team} placeholder={'Pesquise por uma equipa...'} handleFilterChange={handleFilterChange} />
            <FilterGroup label={'Data: '} type={'date'} name={{ startDate: 'startDate', endDate: 'endDate' }} value={{ startDate: filters.startDate, endDate: filters.endDate }} handleFilterChange={handleFilterChange} />
        </div>
    );
}

const FilterGroup = ({ label, type, name, value, placeholder, handleFilterChange }) => {

    const { leagues } = useLeagues();
    const { teams } = useTeams();
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [filteredLeagues, setFilteredLeagues] = useState([]);
    const [searchTeam, setSearchTeam] = useState('');
    const [searchLeague, setSearchLeague] = useState('');
    const [showList, setShowList] = useState(false);

    const handleFiltered = (txtvalue) => {

        var filtered = [];

        if (name === 'team') {
            if (txtvalue !== '') {
                filtered = teams.filter(t => t.name.toLowerCase().includes(txtvalue.toLowerCase()));
                setFilteredTeams(filtered);
                setShowList(true);
            } else {
                setFilteredTeams([]);
                setSearchTeam(txtvalue);
                handleFilterChange('team', txtvalue)
                setShowList(false);
            }
        }

        if (name === 'league') {
            if (txtvalue !== '') {
                filtered = leagues.filter(l => l.name.toLowerCase().includes(txtvalue.toLowerCase()));
                setFilteredLeagues(filtered);
                setShowList(true);
            } else {
                setFilteredLeagues([]);
                setShowList(false);
                setSearchLeague(txtvalue);
                handleFilterChange('league', txtvalue)
            }
        }

        if (filtered.length === 0) {
            setShowList(false);
        }
    }

    return (
        <div className="filter-group">
            {
                type === 'select' ? (
                    <>
                        <label>{label}</label>
                        <select name={name} value={value} onChange={(e) => handleFilterChange(name, e.target.value)}>
                            <option value="Todas">Todas</option>
                            <option value="Pendente">Pendente</option>
                            <option value="Ganha">Ganha</option>
                            <option value="Devolvida">Devolvida</option>
                            <option value="Perdida">Perdida</option>
                        </select>
                    </>

                ) : type === 'text' ? (
                    <>
                        <label>{label}</label>
                        <div className="input-list">
                            <input className={((name === 'team' && filteredTeams.length > 0) || (name === 'league' && filteredLeagues.length > 0)) && showList === true ? 'active' : ''} type={type} name={name} value={name === 'team' ? searchTeam : searchLeague} placeholder={placeholder} onChange={(e) => {
                                name === 'team' ? setSearchTeam(e.target.value) : setSearchLeague(e.target.value);
                                handleFiltered(e.target.value);
                            }} onFocus={(e) => { e.target.value !== '' ? setShowList(true) : setShowList(false) }} onBlur={() => setTimeout(() => setShowList(false), 150)}>

                            </input>
                            {
                                showList === true ? (
                                    <div className="list">
                                        {
                                            name === 'team' ? (
                                                filteredTeams.map((t) => (
                                                    <p key={t.id} onMouseDown={() => { setSearchTeam(t.name); setShowList(false); handleFilterChange('team', t.name); }}>{t.name}</p>
                                                ))
                                            ) : name === 'league' ? (
                                                filteredLeagues.map((l) => (
                                                    <p key={l.id} onMouseDown={() => { setSearchLeague(l.name); setShowList(false); handleFilterChange('league', l.name) }}>{l.name}</p>
                                                ))
                                            ) : null
                                        }
                                    </div>
                                ) : null
                            }

                        </div>

                    </>
                ) :
                    <>
                        <label>{label}</label>
                        <div className="date-group">
                            <input type={type} name={name.startDate} value={value.startDate} onChange={(e) => handleFilterChange(name.startDate, e.target.value)}></input>
                            <span>até</span>
                            <input type={type} name={name.endDate} value={value.endDate} onChange={(e) => handleFilterChange(name.endDate, e.target.value)}></input>
                        </div>
                    </>
            }
        </div>
    );

}

const BetView = ({ bet, handleShowBet, handleUpdateBet, stakeValue, setUser }) => {

    const handleLabelStatus = (result) => {

        const colors = {
            'Pendente': { backgroundColor: 'rgb(230, 213, 117)', color: 'rgb(189, 160, 0)' },
            'Ganha': { backgroundColor: 'rgb(128, 220, 128)', color: 'green' },
            'Perdida': { backgroundColor: 'rgb(248, 129, 129)', color: 'red' },
            'Devolvida': { backgroundColor: 'gray', color: 'rgb(36, 36, 36)' },
        }


        const color = colors[result];

        return <p className="bet-status" style={{ backgroundColor: color.backgroundColor, color: color.color }}>{result}</p>

    }

    return (
        <>
            <div className="overlay">
                <div className="betView">
                    <button className='close' onClick={handleShowBet}><FaTimes /></button>
                    <div className="bet">
                        <div className="bet-top">
                            <div className="count-group">
                                <p>{`${bet.bet_type === 1 ? 'Simples' : 'Múltipla'} (${bet.bet_lines.length})`}</p>
                                <p className="icons-list">
                                    {
                                        bet.bet_lines.map((bl) => (
                                            bl.status === 1 ? (
                                                <span style={{ fontSize: '0.8vw' }} key={bl.id}><FaClock /></span>
                                            ) : bl.status === 2 ? (
                                                <span style={{ backgroundColor: 'green', color: 'white' }} key={bl.id}><FaTrophy /></span>
                                            ) : bl.status === 3 ? (
                                                <span style={{ backgroundColor: 'red', color: 'white' }} key={bl.id}><FaTimes /></span>
                                            ) :
                                                <span style={{ backgroundColor: 'gray' }} key={bl.id}><FaWallet /></span>
                                        ))
                                    }
                                </p>
                            </div>
                            {handleLabelStatus(bet.result)}
                        </div>
                        <div className="bet-lines">
                            {
                                bet.bet_lines.map((bl) => (
                                    <BetLineDetails key={bl.id} betLine={bl} bet={bet} handleUpdateBet={handleUpdateBet} handleLabelStatus={handleLabelStatus} stakeValue={stakeValue} setUser={setUser} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

const BetLineDetails = ({ betLine, handleUpdateBet, bet, handleLabelStatus, stakeValue, setUser }) => {

    const router = useRouter();
    const [status, setStatus] = useState(betLine.status);
    const {fetchUserTransactions} = useUser();

    useEffect(() => {
        setStatus(betLine.status);
    }, [betLine.status]);


    const handleRowTop = (prediction, odd, result) => {

        const colors = {
            'Pendente': '',
            'Ganha': 'green',
            'Perdida': 'red',
            'Devolvida': 'rgb(36, 36, 36)'
        }

        const color = colors[result] || '';

        return (<div className="row-top">
            <p style={{ color: color }}>{prediction}</p>
            <p style={{ color: color }}>{odd}</p>
        </div>)

    }

    const calculatebetResult = (updatedBetLines) => {
        const betWin =
            updatedBetLines.every(bl => bl.status === 2 || bl.status === 4) &&
            updatedBetLines
                .some(bl => bl.status === 2);

        const betLose = updatedBetLines.some(bl => bl.status === 3);
        const returnedBets = updatedBetLines.filter(bl => bl.status === 4);

        if (betWin) {
            return 'Ganha';
        } else if (betLose) {
            return 'Perdida'
        } else if (returnedBets.length > 0) {
            if (returnedBets.length > 1) {

                var newOdd = bet.odds

                returnedBets.forEach(bl => {
                    newOdd /= bl.odd
                });

                const updatedBet = {
                    ...bet,
                    odds: newOdd
                };

                handleUpdateBet(updatedBet);
            }

            return 'Devolvida'
        }

        return 'Pendente';
    }

    const calculateBetProfit = (stake, odd, result) => {

        var profit = 0;

        if (result === 'Ganha') {
            profit = stake * odd - stake;
        } else if (result === 'Perdida') {
            profit = -stake
        }

        return profit;
    }

    const handleBetStatus = async (betId, betLineId, newStatus) => {
        try {
            const response = await betStatus(betId, betLineId, newStatus)

            if (response.status === 200 && response.data.success === true) {
                setStatus(newStatus);

                const newBetLines = bet.bet_lines.map(line =>
                    line.id === betLineId ? { ...line, status: newStatus } : line
                );

                const result = calculatebetResult(newBetLines);
                const stake = bet.stake * stakeValue;
                const odd = bet.odds;

                const profit = calculateBetProfit(stake, odd, result,)

                const updatedBet = {
                    ...bet,
                    bet_lines: newBetLines,
                    result: result,
                    profit: profit
                };

                handleUpdateBet(updatedBet);
                handleLabelStatus(updatedBet.result);

                setUser(prev => ({
                    ...prev,
                    wallet: {
                        ...prev.wallet,
                        balance:
                            updatedBet.result === 'Ganha'
                                ? prev.wallet.balance + ((updatedBet.stake * stakeValue) * updatedBet.odds)
                                : updatedBet.result === 'Devolvida'
                                    ? prev.wallet.balance + (updatedBet.stake * stakeValue)
                                    : prev.wallet.balance
                    }
                }))

                fetchUserTransactions();

            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }

        } catch (error) {
            console.error(error);

            toast.error('Não foi possível alterar o status da aposta!');
        }
    }

    return (
        <div className="bet-line">
            {handleRowTop(betLine.prediction, betLine.odd, status)}
            <div className="row-bottom">
                <p>{betLine.match}</p>
                {
                    status === 1 ? (
                        <select onChange={(e) => { handleBetStatus(betLine.bet_id, betLine.id, Number(e.target.value)) }} value={status}>
                            <option value={1}>Pendente</option>
                            <option value={2}>Ganha</option>
                            <option value={3}>Perdida</option>
                            <option value={4}>Devolvida</option>
                        </select>
                    ) : <p>{status}</p>
                }
            </div>
        </div>
    );

}

export default Bets;