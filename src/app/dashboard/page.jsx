'use client';
import { useStatistics } from "@/context/statisticsContext";
import React from "react";
import { useEffect } from 'react';
import '@/styles/dashboard/page.css'
import { FaEuroSign, FaPercentage } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useBets } from "@/context/betsContext";
import { useUser } from "@/context/userContext";

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <div className="page-top">
                <h2 className="page-title">Dashboard</h2>
            </div>
            <div className="dash-row">
                <WalletZone />
                <ProfitZone />
                <ROIZone />
                <WinTaxZone />
                <TotalBets />
            </div>
            <div className="dash-row">
                <GraphProfitOfTheMonth />
                <TransactionHistory />
            </div>
        </div>
    );
}

const WalletZone = () => {
    const { balance, stake } = useStatistics()

    return (
        <div className="wallet-zone">
            <h3>Carteira</h3>
            <div className="balance-zone">
                <h4>Banca Atual</h4>
                <p>{balance} <FaEuroSign /></p>
            </div>
            <div className="stake-zone">
                <h4>Stake</h4>
                <p>{stake} <FaEuroSign /></p>
            </div>
        </div>
    );
}

const ProfitZone = () => {
    const { profit } = useStatistics();

    return (
        <div className="profit-zone">
            <h3>Lucro</h3>
            <p style={{ color: profit > 0 ? 'green' : profit < 0 ? 'red' : '' }}>{profit} <FaEuroSign /></p>
        </div>
    );
}

const ROIZone = () => {
    const { ROI } = useStatistics();

    return (
        <div className="roi-zone">
            <h3>ROI</h3>
            <p style={{ color: ROI > 0 ? 'green' : ROI < 0 ? 'red' : '' }}>{ROI || 0}<FaPercentage /></p>
        </div>
    );
}

const WinTaxZone = () => {
    const { winTax } = useStatistics();

    return (
        <div className="winTaxZone">
            <h3>Taxa de acerto</h3>
            <p style={{ color: winTax > 0 ? 'green' : winTax < 0 ? 'red' : '' }}>{winTax || 0}<FaPercentage /></p>
        </div>
    );
}

const TotalBets = () => {
    const { totalBets } = useStatistics();

    return (
        <div className="totalBets-zone">
            <h3>Total de apostas</h3>
            <p>{totalBets}</p>
        </div>
    );
}

const GraphProfitOfTheMonth = () => {

    const { bets } = useBets();

    const calculateProfitOfTheMonth = () => {
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();

        const daysOfMonth = new Date(year, month + 1, 0).getDate();
        const profitPerDay = new Array(daysOfMonth).fill(0);

        bets.forEach((b) => {
            const data = new Date(b.created_at);

            if (data.getMonth() === month && data.getFullYear() === year) {
                const day = data.getDate();
                profitPerDay[day - 1] += b.profit;
            }
        });

        let acumulado = 0;
        return profitPerDay.map((p, i) => {
            acumulado += p;
            return { Dia: i + 1, Lucro: acumulado };
        });
    };


    const GraphData = calculateProfitOfTheMonth();
    const MonthProfit = GraphData.length ? GraphData[GraphData.length - 1].Lucro.toFixed(2) : 0;

    return (
        <div className="graph-group">
            <div className="graph">
                <h3>Gráfico do Mês</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={GraphData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="Dia" stroke="black">
                            <Label value={'Dias'} offset={-5} position="insideBottom" />
                        </XAxis>
                        <YAxis stroke="black">
                            <Label
                                value="Lucro (€)"
                                angle={-90}
                                position="insideLeft"
                                style={{ textAnchor: "middle" }}
                            />
                        </YAxis>
                        <Tooltip
                            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
                            labelFormatter={(label) => `Dia: ${label}`}
                            formatter={(value) => [`${value.toFixed(2)} €`, "Lucro"]}
                        />
                        <Line
                            type="monotone"
                            dataKey="Lucro"
                            stroke="blue"
                            strokeWidth={2}
                            dot={{ r: 4, fill: "blue", strokeWidth: 2, stroke: "#fff" }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="month-profit">
                <h3>Lucro do mês</h3>
                <p style={{ color: MonthProfit > 0 ? 'green' : MonthProfit < 0 ? 'red' : '' }}>
                    {MonthProfit} €
                </p>
            </div>
        </div>

    );

}

const TransactionHistory = () => {

    const { userTransactions } = useUser();

    const handleColorTransaction = (typeId) => {
        const colors = {
            1: 'green',
            2: 'green',
            3: 'rgb(36, 36, 36)',
            4: 'green',
            5: 'red',
            7: 'red',
        }

        const color = colors[typeId];

        return color;
    }

    return (
        <div className="transaction-history">
            <h3>Histórico de transações</h3>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Ação</th>
                        <th>Montante</th>
                        <th>Carteira</th>
                    </tr>
                </thead>
                <tbody>
                    {userTransactions && userTransactions.length > 0 ? (
                        userTransactions.map((t) => (
                            <tr key={t.id}>
                                <td>{new Date(t.created_at).toLocaleDateString() + ' - ' + new Date(t.created_at).toLocaleTimeString()}</td>
                                <td style={{ color: handleColorTransaction(t.transaction_type.id) }}>{t.transaction_type.name}</td>
                                <td style={{ color: handleColorTransaction(t.transaction_type.id) }}>{handleColorTransaction(t.transaction_type.id) === 'green' ? `+${t.amount}€` : handleColorTransaction(t.transaction_type.id) === 'red' ? `-${t.amount}€` : `+${t.amount}€`}</td>
                                <td>{t.balance}€</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>Sem Nenhuma Transação</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

}

export default Dashboard;