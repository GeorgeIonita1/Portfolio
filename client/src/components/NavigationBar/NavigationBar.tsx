'use client'

import Image from 'next/image';
import { useState } from 'react';

import styles from './NavigationBar.module.scss';
import logoIcon from '../../../public/icons/logo.svg';
import menuIcon from '../../../public/icons/menuIcon.svg';
import closeIcon from '../../../public/icons/closeIcon.svg';

export default function NavigationBar() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    }

    return (
        <header className={styles.navigation}>
            <div className={styles.navigationLogo}>
                <div className={styles.navigationImage}>
                    <Image src={logoIcon} alt='Logo' />
                </div>
            </div>
            <div className={styles.navigationHamburger} onClick={handleSidebarToggle}>
                <Image src={menuIcon} alt='menu' />
            </div>
            <nav className={sidebarIsOpen ? styles.navigationOpen : styles.navigationHidden}>
                <ul>
                    <div className={styles.navigationClose} onClick={handleSidebarToggle}>
                        <Image src={closeIcon} alt='close' />
                    </div>
                    <li onClick={handleSidebarToggle}>
                        <a href="#about-me">ABOUT</a>
                    </li>
                    <li onClick={handleSidebarToggle}>
                        <a href="#recent-work">WORK</a>
                    </li>
                    <li onClick={handleSidebarToggle}>
                        <a href='/documents/GeorgeIonita.pdf' target='_blank'>RESUME</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
