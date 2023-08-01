import styles from './ExperienceCard.module.scss';
import githubIcon from '../../../public/icons/github.svg';
import Image from 'next/image';

export default function ExperienceCard() {
    return (
        <div className={styles.experienceCard}>
            <h3>React.js Developer</h3>
            <h4>Starbucks</h4>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure molestias molestiae repellendus id?</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo excepturi cumque.</li>
            </ul>
            <div className={styles.experienceCardSkeleton}>
                <div className={`${styles.experienceCardImage} svg-container`}>
                    <Image src={githubIcon} alt='Github logo' />
                </div>
            </div>
        </div>
    )
}