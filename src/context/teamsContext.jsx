'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { getTeams } from "@/services/teamsApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const TeamsContext = createContext(null);

export const TeamsProvider = ({ children }) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const fetchTeams = async () => {
        setLoading(true);
        try {
            const response = await getTeams();
            if (response.status === 200 && response.data.success === true) {
                setTeams(response.data.teams);
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao ir buscar as equipas!');
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchTeams();
    }, []);

    return(
        <TeamsContext.Provider value={{teams, fetchTeams, loading, setTeams}}>{children}</TeamsContext.Provider>
    );
}

export const useTeams = () => useContext(TeamsContext);