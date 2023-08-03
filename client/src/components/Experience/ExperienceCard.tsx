import styles from './ExperienceCard.module.scss';
import githubIcon from '../../../public/icons/github.svg';
import Image from 'next/image';

export default function ExperienceCard({ data }: ExperiencesProps) {
    return (
        <div className={styles.experienceCard}>
            <h3>{data.title}</h3>
            <h4>{data.company}</h4>
            <ul>
                {data.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className={styles.experienceCardSkeleton}>
                <div className={`${styles.experienceCardImage} svg-container`}>
                    <Image src={githubIcon} alt='Github logo' />
                </div>
            </div>
        </div>
    )
}