import { deposit } from '@/services/wallet';
import '@/styles/components/depositModal.css';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { IoLogoEuro } from "react-icons/io5";
import { useUser } from '@/context/userContext';

const DepositModal = ({ setShowModal }) => {

    const [depositValue, setDepositValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    const {fetchUser, fetchUserTransactions} = useUser();

    const handleDeposit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (status === "loading") {
                return null;
            }

            let id = session.user.id;
            const result = await deposit(id, depositValue);

            if (result.status === 401) {
                return router.push('/auth?error=token_invalid');
            } else if (result.data.success === false) {
                toast.error(result.data.message);
            } else {
                toast.success(result.data.message);
                fetchUser();
                fetchUserTransactions()
                setDepositValue(0);
            }

        } catch (error) {
            console.error(error);
        }

        setLoading(false);

    }

    return (
        <>
            <div className="overlay">
                <div className='modal-deposit'>
                    <button disabled={loading} onClick={() => setShowModal(false)}><FaTimes /></button>
                    <Form depositValue={depositValue} setDepositValue={setDepositValue} handleDeposit={handleDeposit} loading={loading} />
                </div>
            </div>
        </>
    );
}

const Form = ({ depositValue, setDepositValue, handleDeposit, loading }) => {
    return (
        <form onSubmit={handleDeposit}>
            <Input depositValue={depositValue} setDepositValue={setDepositValue} />
            <Button handleDeposit={handleDeposit} loading={loading} />
        </form>
    );
}


const Input = ({ depositValue, setDepositValue }) => {
    return (
        <div className="input-group">
            <label>Insere o montante a depositar</label>
            <div className='input-container'>
                <input type='number' step='0.01' value={depositValue} onChange={(e) => setDepositValue(e.target.value)}></input>
                <label className='euro-icon'><IoLogoEuro  /></label>
            </div>
        </div>
    );
}

const Button = ({ loading }) => {

    return (
        <button type='submit'>{loading ? ('A depositar...') : 'Depositar'}</button>
    );
}

export default DepositModal;