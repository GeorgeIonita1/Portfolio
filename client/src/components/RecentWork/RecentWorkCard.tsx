import Image from 'next/image';

import styles from './RecentWorkCard.module.scss';
import projectsImage from '../../../public/pictures/projectsImage.jpg';

export default function RecentWorkCard() {
    return (
        <div className={styles.recentWorkCard}>
            <div className={styles.recentWorkCardImage}>
                <Image src={projectsImage} alt='project' />
            </div>
        </div>
    )
}