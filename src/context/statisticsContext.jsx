'use client';
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useUser } from "./userContext";
import { useBets } from "./betsContext";

const StatisticsContext = createContext(null);

export const StatisticsProvider = ({ children }) => {

    const { user } = useUser();
    const { bets } = useBets();
    const balance = user?.wallet?.balance || 0;
    const stake = user?.wallet?.stake || 0;
    const totalBets = bets ? bets.length : 0;

    const profit = useMemo(() => {

        var profitValue = 0;
        if (bets) {
            bets.forEach(b => {
                profitValue += b.profit;
            });
        } else {
            return 0;
        }

        return profitValue;
    }, [user, bets]);


    const ROI = useMemo(() => {
        var ROI = 0;
        var TotalBeted = 0;

        if (bets && user) {
            bets.forEach(b => {
                let stakeValue = b.stake * user.wallet.stake;
                TotalBeted += stakeValue;
            })


            ROI = (profit / TotalBeted) * 100;
            ROI = parseFloat(ROI.toFixed(1));

        } else {
            return 0;
        }

        return ROI;
    }, [profit, bets, user]);

    const winTax = useMemo(()=>{
        if(bets){
            const totalBetsWin = bets.filter(b => b.result === 'Ganha');
            let tax = (totalBetsWin.length / totalBets) * 100;

            tax = parseFloat(tax.toFixed(1))

            return tax;
            
        }else{
            return 0;
        }
    }, [bets, user])

    return (
        <StatisticsContext.Provider value={{ balance, profit, ROI, winTax, totalBets, stake }}>{children}</StatisticsContext.Provider>
    );

}

export const useStatistics = () => useContext(StatisticsContext)