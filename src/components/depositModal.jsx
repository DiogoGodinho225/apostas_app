import { deposit } from '@/services/wallet';
import '@/styles/components/depositModal.css';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Loading from '@/utils/loading';



const DepositModal = ({ setShowModal, fetchUser }) => {

    const [depositValue, setDepositValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const { data: status, session } = useSession;
    const router = useRouter();

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
                    <button onClick={() => setShowModal(false)}><FaTimes /></button>
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
            <input type='number' value={depositValue} onChange={(e) => setDepositValue(e.target.value)}></input>
        </div>
    );
}

const Button = ({ loading }) => {

    return (
        <button type='submit'>{loading ? (<Loading />) : 'Depositar'}</button>
    );
}

export default DepositModal;