'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { getLeagues } from "@/services/leaguesApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LeaguesContext = createContext(null);

export const LeaguesProvider = ({ children }) => {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const fetchLeagues = async () => {
        setLoading(true);
        try {
            const response = await getLeagues();
            if (response.status === 200 && response.data.success === true) {
                setLeagues(response.data.leagues);
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao ir buscar as ligas!');
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchLeagues();
    }, []);

    return(
        <LeaguesContext.Provider value={{leagues, fetchLeagues, loading, setLeagues}}>{children}</LeaguesContext.Provider>
    );
}

export const useLeagues = () =>useContext(LeaguesContext);