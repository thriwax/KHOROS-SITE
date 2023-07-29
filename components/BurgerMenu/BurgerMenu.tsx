import React, { useState } from 'react';
import styles from '../../styles/BurgerMenu.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import LinksVertical from "../LinksVertical/LinksVertical"
import logo from '../../public/khoros-logo.svg'
import Image from 'next/image';

const navigation = [
    { id: 1, title: 'HOME', path: '/' },
    { id: 2, title: 'DISCOGRAPHY', path: '/albums' },
    { id: 3, title: 'PODCASTS', path: '/podcasts' },
    { id: 4, title: 'ABOUT US', path: '/about-us' },
    { id: 5, title: 'CONTACTS', path: '/contacts' }
  ];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const { pathname } = useRouter();

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerIcon} onClick={handleToggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.open : ''}`} />
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.openMenu : ''}`}>
      <Image src={logo} width={157} height={53} alt='test' style={{paddingBottom:'25px'}}/>
      {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            <a onClick={handleCloseMenu} className={styles.link}>{title}</a>
          </Link>
        ))}
        <LinksVertical />
      </div>
    </div>
  );
};

export default BurgerMenu;