'use client'

import styles from './NavigationBar.module.scss';
import logoIcon from '../../../public/icons/logo.svg';
import Image from 'next/image';
import { useState } from 'react';

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
                =
            </div>
            <nav className={sidebarIsOpen ? styles.navigationOpen : styles.navigationHidden}>
                <ul>
                    <div className={styles.navigationClose} onClick={handleSidebarToggle}>x</div>
                    <li>
                        <a href="">WORK</a>
                    </li>
                    <li>
                        <a href="">ABOUT</a>
                    </li>
                    <li>
                        <a href="">RESUME</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
