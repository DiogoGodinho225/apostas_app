'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { getUser, getUserTransactions } from "@/services/userApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [userTransactions, setUserTransactions] = useState(null);

    const fetchUser = async () => {
        if (!session || !session.user || !session.user.id) return;

        setLoading(true);
        try {
            const response = await getUser(session.user.id);
            if (response.status === 200 && response.data.success === true) {
                setUser(response.data.user);
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao ir buscar o utilizador!');
        }
        setLoading(false);
    }

    const fetchUserTransactions = async () => {
        if (!session || !session.user || !session.user.id) return;

        setLoading(true);
        try {
            const response = await getUserTransactions(session.user.id);
            if (response.status === 200 && response.data.success === true) {
                setUserTransactions(response.data.userTransactions);
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao ir buscar o utilizador!');
        }
        setLoading(false);
    }


    useEffect(() => {
        if (status === "authenticated" && session?.user?.id) {
            fetchUser();
            fetchUserTransactions();
        }

    }, [session, status, router]);

    return (
        <UserContext.Provider value={{ user, fetchUser, loading, setUser, userTransactions, fetchUserTransactions }}>{children}</UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);