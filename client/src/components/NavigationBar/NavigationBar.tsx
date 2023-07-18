import Image from 'next/image';

import styles from './NavigationBar.module.scss';
import homeIcon from '../../../public/icons/home.svg';
import profileIcon from '../../../public/icons/profile.svg';
import cubesIcon from '../../../public/icons/cubes.svg';
import contactIcon from '../../../public/icons/contact.svg';

export default function NavigationBar() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <a href=""><Image src={homeIcon} alt='Home Icon' /></a>
                </li>
                <li>
                    <a href=""><Image src={profileIcon} alt='Profile Icon' /></a>
                </li>
                <li>
                    <a href=""><Image src={cubesIcon} alt='Projects Icon' /></a>
                </li>
                <li>
                    <a href=""><Image src={contactIcon} alt='Contact Icon' /></a>
                </li>
            </ul>
        </nav>
    );
}
