'use client'
import { useState, useEffect, Suspense } from 'react'
import { useUser } from "@/context/userContext";
import '@/styles/bets/update.css'
import { makeBet } from "@/services/betsApi";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useLeagues } from "@/context/leaguesContext";
import { useTeams } from "@/context/teamsContext";
import { FaTimes } from "react-icons/fa";
import { useBets } from '@/context/betsContext';
import BackButton from '@/components/goBackButton';

const UpdateBet = () => {

    const { bets } = useBets()

    return (
        <Suspense>
            <div className="update-bet-container">
                {
                    bets.length > 0 ? (<Form bets={bets} />) : null
                }
            </div>
        </Suspense>
    )
}

const Form = ({ bets }) => {

    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [bet, setBet] = useState({
        betType: 1,
        stake: 0,
        betOdd: 0,
        betLines: [{ leagueId: '', home: '', away: '', prediction: '', odd: '' }]
    });
    const { leagues } = useLeagues();
    const { teams } = useTeams();
    const { fetchUser } = useUser();
    const searchParams = useSearchParams();

    useEffect(() => {
        document.title = 'Editar Aposta'
    }, [])

    useEffect(() => {
        if (bets.length > 0) {
            const id = Number(searchParams.get('id'));
            if (id) {
                const betFound = bets.find(b => b.id === id);

                if (betFound) {
                    const processedBetLines = betFound.bet_lines.map(l => {
                        const [home, away] = l.match.trim().split('x').map(t => t.trim());
                        return { ...l, home, away };
                    });

                    setBet({
                        betType: betFound.bet_type,
                        stake: betFound.stake,
                        betOdd: betFound.odds,
                        betLines: processedBetLines
                    });
                } else {
                    toast.error('Aposta não encontrada!');
                }
            }
        }

    }, [bets])

    const handleSubmitBet = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await makeBet(bet);

            if (response.status === 200 && response.data.success === true) {
                router.push('/bets/index');
                toast.success(response.data.message);
                fetchUser();
            } else if (response.data.success === false) {
                toast.error(response.data.message)
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid')
            }

        } catch (error) {
            console.error(error);
            toast.error('Erro ao registar aposta!');
        }
        setLoading(false);
    }

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setBet(prev => ({
            ...prev,
            [name]: value,
        }))

    }

    const addBetLine = () => {
        setBet(prev => ({
            ...prev,
            betLines: [...prev.betLines, { leagueId: '', home: '', away: '', prediction: '', odd: '' }]
        }))
    }

    const handleBetLine = (index, e) => {
        const { name, value } = e.target;

        const updatedBetLines = [...bet.betLines];
        updatedBetLines[index][name] = value;

        setBet(prev => ({
            ...prev,
            betLines: updatedBetLines,
        }))
    }

    const removeBetLine = (index) => {
        setBet(prev => ({
            ...prev,
            betLines: prev.betLines.filter((_, i) => i !== index)
        }))
    }

    return (
        <form onSubmit={handleSubmitBet}>
            <h3>Editar Aposta</h3>
            <div className="row">
                <div className="form-group">
                    <label>Tipo</label>
                    <select name="betType" value={bet.betType} onChange={handleInputChange} required>
                        <option value={1}>Simples</option>
                        <option value={2}>Múltipla</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Stake</label>
                    <input name="stake" type="number" step='0.01' value={bet.stake} onChange={handleInputChange} required />
                </div>
            </div>
            <div className="row">
                <div className="form-group">
                    <label>Odd Total</label>
                    <input name="betOdd" type="number" step='0.01' value={bet.betOdd} onChange={handleInputChange} required />
                </div>
                <div className="bet-info">
                    <div className="info-group">
                        <label>Montante</label>
                        <input readOnly value={bet.stake * (user?.wallet?.stake || 0) + '€'}></input>
                    </div>
                    <div className="info-group">
                        <label>Retorno Total</label>
                        <input readOnly value={(bet.stake * (user?.wallet?.stake || 0)) * bet.betOdd + '€'}></input>
                    </div>
                </div>
            </div>
            <h3>Apostas</h3>
            {
                bet.betLines.map((line, index) => (
                    <div key={index} className="betLine">
                        <button className="closeBetLine" onClick={() => removeBetLine(index)}><FaTimes /></button>
                        <div className="row">
                            <div className="form-group">
                                <label>Liga</label>
                                <select name="league_id" value={line.league_id} onChange={(e) => handleBetLine(index, e)} required>
                                    <option value={0}>Selecione a Liga</option>
                                    {
                                        leagues.map((l) => (
                                            <option key={l.id} value={l.id}>{l.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Jogo</label>
                                <div className="match-group">
                                    <select name="home" value={line.home} onChange={(e) => handleBetLine(index, e)} required>
                                        <option value={0}>Casa</option>
                                        {
                                            teams
                                                ?.filter((team) =>
                                                    team.teams_leagues.some(tl => tl.league_id === Number(line.leagueId))
                                                    && team.name.toLowerCase() !== line.away.toLowerCase()
                                                )
                                                .map((team) => (
                                                    <option key={team.id} value={team.name}>
                                                        {team.name}
                                                    </option>
                                                ))
                                        }
                                    </select>
                                    <span>X</span>
                                    <select name="away" value={line.away} onChange={(e) => handleBetLine(index, e)} required>
                                        <option value={0}>Fora</option>
                                        {
                                            teams
                                                ?.filter((team) =>
                                                    team.teams_leagues.some(tl => tl.league_id === Number(line.leagueId))
                                                    && team.name.toLowerCase() !== line.home.toLowerCase()
                                                )
                                                .map((team) => (
                                                    <option key={team.id} value={team.name}>
                                                        {team.name}
                                                    </option>
                                                ))
                                        }
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Aposta</label>
                                <input type="text" name="prediction" value={line.prediction} onChange={(e) => handleBetLine(index, e)} required></input>
                            </div>
                            <div className="form-group">
                                <label>Odd</label>
                                <input name="odd" type="number" step='0.01' value={line.odd} onChange={(e) => handleBetLine(index, e)} required />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select name="status" value={line.status} onChange={(e) => handleBetLine(index, e)}>
                                    <option value="1">Pendente</option>
                                    <option value="2">Ganha</option>
                                    <option value="3">Perdida</option>
                                    <option value="4">Devolvida</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                bet.betType == 2 ? (<button className="addBetLine" onClick={addBetLine}>Nova Aposta</button>) : null
            }
            <div className="row">
                <button type="submit">{loading ? 'A editar...' : 'Editar'}</button>
            </div>

        </form>
    );

}

export default UpdateBet;