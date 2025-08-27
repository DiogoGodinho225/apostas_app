'use client';
import React, { useState } from "react";
import { useEffect } from 'react';
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/goBackButton";
import '@/styles/wallet/page.css';
import { useUser } from "@/context/userContext";
import { updateUserImage } from "@/services/userApi";
import { toast } from "react-hot-toast";
import { FaSignOutAlt, FaImage, FaEuroSign } from "react-icons/fa";
import { withdraw } from "@/services/wallet";

const Wallet = () => {

    const { user } = useUser();

    useEffect(() => {
        document.title = 'Carteira - ' + (user ? user.username : '');
    }, []);

    return (
        <div className="user-wallet-container">
            {
                !user ? (<p className="alert">A carregar...</p>) :
                    <>
                        <BackButton />
                        <h2>Carteira</h2>
                        <UserInfo />
                        <WalletInfo />
                    </>
            }
        </div>
    );
}


const UserInfo = () => {

    const router = useRouter();
    const { user, setUser } = useUser();
    const [showInput, setShowInput] = useState(false);

    const handleLogout = () => {
        signOut({ callbackUrl: '/auth' });
        localStorage.removeItem('HasLoggedIn');
    }

    const changeUserImage = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);

            const response = await updateUserImage(user.id, formData);

            if (response.status === 200 && response.data.success === true) {
                toast.success(response.data.message);
                setUser(
                    prev => ({
                        ...prev,
                        image: { ...prev.image, url: user.image.url + '?t=' + Date.now() },
                    })
                )
                e.target.value = null;
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }

            setShowInput(false);

        } catch (error) {
            console.error(error);
            toast.error('Erro ao alterar foto de perfil!');
        }
    }

    return (
        <div className="user-info">
            <div className="user-img">
                <img src={user?.image.url || '/api/uploads/users/user.png'} alt="" />
                <div className="user-btns">
                    {showInput ? (
                        <div className="input-group">
                            <input onChange={(e) => changeUserImage(e)} type="file" />
                            <button onClick={() => setShowInput(!showInput)}>Cancelar</button>
                        </div>
                    ) :
                        <>
                            <button onClick={handleLogout}><FaSignOutAlt /></button>
                            <button onClick={() => setShowInput(!showInput)}><FaImage /></button>
                        </>
                    }
                </div>
            </div>
            <div className="info">
                <InfoItem label={'Username'} value={user.username} />
                <InfoItem label={'Email'} value={user.email} />
                <InfoItem label={'Ultima Sessão'} value={new Date(user.last_login).toLocaleString()} />
                <InfoItem label={'Utilizador desde'} value={new Date(user.created_at).toLocaleDateString()} />
            </div>
        </div>

    );

}

const InfoItem = ({ label, value }) => {
    return (
        <div className="info-item">
            <span>{label}:</span>
            <p>{value}</p>
        </div>
    );
}

const WalletInfo = () => {
    const { user } = useUser();

    return (
        <div className="wallet-info">
            <div className="info">
                <h3>Banca Atual</h3>
                <p>{user.wallet.balance} <FaEuroSign /></p>
            </div>
            <div className="info">
                <h3>Stake Atual</h3>
                <p>{user.wallet.stake} <FaEuroSign /></p>
            </div>
            <WithdrawForm />
        </div>
    );
}

const WithdrawForm = () => {

    const { user, setUser } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleWithdraw = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const amount = parseFloat(e.target.amount.value);

            if (amount <= 0) {
                toast.error('O valor a levantar deve ser superior a 0!');
                return;
            }

            const response = await withdraw(user.id, amount);

            if (response.status === 200 && response.data.success === true) {
                toast.success(response.data.message);
                setUser(prev => ({
                    ...prev,
                    wallet: {
                        ...prev.wallet,
                        balance: prev.wallet.balance - amount,
                    }
                }));
                e.target.reset();
            } else if (response.data.success === false) {
                toast.error(response.data.message);
            } else if (response.status === 401) {
                router.push('/auth?error=token_invalid');
            }

        } catch (error) {
            console.error(error);
            toast.error('Erro ao processar levantamento!');
        }
        setLoading(false);
    }

    return (
        <div className="withdraw-form">
            <h3>Levantamentos</h3>
            <form onSubmit={(e) => handleWithdraw(e)}>
                <div className="input-group">
                    <label>Valor a levantar:</label>
                    <input
                        type="number"
                        name="amount"
                        step="0.01"
                        required
                    />
                    <span className="euro-icon">
                        <FaEuroSign />
                    </span>
                </div>
                <button disabled={loading} type="submit">
                    {!loading ? 'Levantar' : 'A levantar...'}
                </button>
            </form>
        </div>

    );
}


export default Wallet;