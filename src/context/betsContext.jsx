'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { getUserBets } from "@/services/betsApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useUser } from "./userContext";

const BetsContext = createContext(null);

export const BetsProvider = ({ children }) => {
    const [bets, setBets] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user } = useUser();

    const fetchBets = async () => {

        if (!user || !user.id) return;
        
        setLoading(true);
        try {
            const response = await getUserBets(user.id);
            if (response.status === 200 && response.data.success === true) {
                setBets(response.data.bets);
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao ir buscar as apostas!');
        }
        setLoading(false);
    }

    useEffect(() => {
        if (user && user.id) {
            fetchBets();
        }

    }, [user]);

    return (
        <BetsContext.Provider value={{ bets, fetchBets, loading, setBets }}>{children}</BetsContext.Provider>
    );
}

export const useBets = () => useContext(BetsContext);