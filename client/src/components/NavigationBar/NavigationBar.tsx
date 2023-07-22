import styles from './NavigationBar.module.scss';
import logoIcon from '../../../public/icons/logo.svg';
import Image from 'next/image';

export default function NavigationBar() {
    return (
        <header className={styles.navigation}>
            <div className={styles.navigationLogo}>
                <div className={styles.navigationImage}>
                    <Image src={logoIcon} alt='Logo' />
                </div>
            </div>
            <nav>
                <ul>
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
