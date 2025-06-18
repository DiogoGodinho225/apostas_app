'use client'
import '@/styles/components/navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();

    return (
        <nav>
            <ul>
                <NavLink active={pathname === '/HomePage' ? 'active' : ''} route={'/Dashboard'} name={'Dashboard'} />
                <NavLink active={pathname === '/Apostas' ? 'active' : ''} route={'/Apostas'} name={'Apostas'} />
                <NavLink active={pathname === '/Leagues' ? 'active' : ''} route={'/Leagues'} name={'Ligas'} />
                <NavLink active={pathname === '/Teams' ? 'active' : ''} route={'/Teams'} name={'Equipas'} />
            </ul>
        </nav>
    );
}

const NavLink = ({ route, name, active }) => {
    return (
        <Link className={`nav-link ${active}`} href={route}>{name}</Link>
    );
}

export default Navbar;