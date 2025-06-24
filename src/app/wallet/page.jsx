'use client';
import React from "react";
import { useEffect } from 'react';
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Wallet = () => {

    const router = useRouter();

    const handleLogout = () => {
        signOut({ callbackUrl: '/auth' });
        localStorage.removeItem('HasLoggedIn');
    }

    return (
        <div>
            <p>Aqui vai ser gerada a carteira e dados do utilizador</p>
            <button style={{position: 'absolute', left: '50%', top: '50%'}} onClick={handleLogout}>LogOut</button>
            <button style={{position: 'absolute', left: '50%', top: '70%'}} onClick={() => router.back()}>Voltar</button>
        </div>
    );
}

export default Wallet;