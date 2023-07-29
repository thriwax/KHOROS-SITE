'use client'

import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import logo from '../../public/khoros-logo.svg'
import Link from "next/link";
import { useState, useEffect } from 'react';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Header = () => {


    // const [open, setOpen] = useState<boolean>(false)
    // const [width, setWidth] = useState<number>(0)

    // const stylePhone = {
    //     position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     background: 'white',
    //     zIndex: '1',
    //     top: '0',
    //     right: open?`0`:`-100%`,
    //     transition: '1s'
    // }
    // useEffect(() => {
    //     setWidth(window.innerWidth)
    //   }, [window.innerWidth]);
    //   console.log(width <= 600?{display: 'block'}:{display: 'none'})
    return (
        <div className='header'>
            <Link legacyBehavior href='/'><a><Image src={logo} width={157} height={53} alt='test'/></a></Link>
            {/* <div className='burger-menu' onClick={() => setOpen(!open)} style={width <= 600?{display: 'block'}:{display: 'none'}}>X</div> */}
            <Navbar />
            <BurgerMenu />
        </div>
    )
}

export default Header;

// style={window.innerWidth <= 300?{...stylePhone}:{}}