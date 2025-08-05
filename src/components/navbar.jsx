'use client'
import '@/styles/components/navbar.css';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { firaSans } from '@/utils/fonts';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getUser } from '@/services/userApi';
import { toast } from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import DepositModal from './depositModal';
import { useUser } from '@/context/userContext';


const Navbar = () => {

    const pathname = usePathname();
    const router = useRouter();

    const [url, setUrl] = useState(process.env.NEXT_PUBLIC_APP_URL + 'images/users/user.png');
    const [balance, setBalance] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const { user, fetchUser } = useUser()

    useEffect(() => {
        if (user) {
            setUrl(process.env.NEXT_PUBLIC_APP_URL + user.image.url);
            setBalance(user.wallet.balance);
        } else {
            setUrl(process.env.NEXT_PUBLIC_APP_URL + 'images/users/user.png');
        }
    }, [user])

    return (
        <>
            <nav className={firaSans.className}>
                <ul>
                    <NavLink active={pathname.startsWith('/dashboard') ? 'active' : ''} route={'/dashboard'} name={'Dashboard'} />
                    <NavLink active={pathname.startsWith('/bets') ? 'active' : ''} route={'/bets/index'} name={'Apostas'} />
                    <NavLink active={pathname.startsWith('/leagues') ? 'active' : ''} route={'/leagues/index'} name={'Ligas'} />
                    <NavLink active={pathname.startsWith('/teams') ? 'active' : ''} route={'/teams/index'} name={'Equipas'} />
                </ul>
                <Balance balance={balance} setShowModal={setShowModal} />
                <Profile url={url} />
            </nav>
            {showModal ? (<DepositModal setShowModal={setShowModal} fetchUser={fetchUser} />) : null}
        </>

    );
}

const NavLink = ({ route, name, active }) => {
    return (
        <Link className={`nav-link ${active}`} href={route}>{name}</Link>
    );
}

const Profile = ({ url }) => {

    return (
        <Link href={'/wallet'} className='btn-profile'><img src={url} alt="profile image" /></Link>
    );
}

const Balance = ({ balance, setShowModal }) => {
    return (
        <div className='balanceZone'>
            <button onClick={() => setShowModal(true)}><FaPlus className="plus-icon" /></button>
            <p>{balance}€</p>
        </div>
    );
}

export default Navbar;