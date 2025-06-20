'use client'
import '@/styles/components/navbar.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { firaSans } from '@/utils/fonts';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getProfilePic } from '@/services/user';

const Navbar = () => {

    const pathname = usePathname();

    return (
        <nav className={firaSans.className}>
            <ul>
                <NavLink active={pathname === '/HomePage' ? 'active' : ''} route={'/Dashboard'} name={'Dashboard'} />
                <NavLink active={pathname === '/Apostas' ? 'active' : ''} route={'/Apostas'} name={'Apostas'} />
                <NavLink active={pathname === '/Leagues' ? 'active' : ''} route={'/Leagues'} name={'Ligas'} />
                <NavLink active={pathname === '/Teams' ? 'active' : ''} route={'/Teams'} name={'Equipas'} />
            </ul>
            <Profile />
        </nav>
    );
}

const NavLink = ({ route, name, active }) => {
    return (
        <Link className={`nav-link ${active}`} href={route}>{name}</Link>
    );
}

const Profile = () => {

    const { data: session, status } = useSession();
    const router = useRouter();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (status === "loading") return;
        if (!session) {
            router.push("/auth");
        }
    }, [session, status, router]);

    useEffect(() => {
        const fetchProfilePic = async () => {
            try {
                let id = session.user.id;
                const result = await getProfilePic(id);
                setUrl(process.env.NEXT_PUBLIC_APP_URL + result);
            } catch (error) {
                console.log(error)
                setUrl(process.env.NEXT_PUBLIC_APP_URL + 'images/user.png');
            }
        }

        if (session) {
            fetchProfilePic();
        }else {
            setUrl(process.env.NEXT_PUBLIC_APP_URL + 'images/user.png'); 
        }

    }, [session]);

    if (!url) return null;

    return (
        <Link href={'/wallet'} className='btn-profile'><img src={url} alt="profile image" /></Link>
    );
}

export default Navbar;