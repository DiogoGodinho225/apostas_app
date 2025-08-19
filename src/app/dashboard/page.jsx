'use client';
import { useStatistics } from "@/context/statisticsContext";
import React from "react";
import { useEffect } from 'react';
import '@/styles/dashboard/page.css'
import { FaEuroSign } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useBets } from "@/context/betsContext";

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
                <p>{stake}</p>
            </div>
        </div>
    );
}

const ProfitZone = () => {
    const { profit } = useStatistics();

    return (
        <div className="profit-zone">
            <h4>Lucro</h4>
            <p>{profit} <FaEuroSign /></p>
        </div>
    );
}

const ROIZone = () => {
    const { ROI } = useStatistics();

    return (
        <div className="roi-zone">
            <h4>ROI</h4>
            <p>{ROI} %</p>
        </div>
    );
}

const WinTaxZone = () => {
    const { winTax } = useStatistics();

    return (
        <div className="winTaxZone">
            <h4>Taxa de acerto</h4>
            <p>{winTax} %</p>
        </div>
    );
}

const TotalBets = () => {
    const { totalBets } = useStatistics();

    return (
        <div className="totalBets-zone">
            <h4>Total de apostas</h4>
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
                <h4>Lucro do mês</h4>
                <p>
                    {GraphData.length ? GraphData[GraphData.length - 1].Lucro.toFixed(2) : 0} €
                </p>
            </div>
        </div>

    );

}

const TransactionHistory = () => {

    return (
        <div className="transaction-history">
            <p>Vai ser gerada as trabnsacoes</p>
        </div>
    );

}

export default Dashboard;