import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import logo from '../../public/khoros-logo.svg'
import Link from "next/link";

const Header = () => {
    return (
        <div className='header'>
            <Link legacyBehavior href='/'><a><Image src={logo} width={204} height={69}/></a></Link>
            <Navbar />
        </div>
    )
}

export default Header;