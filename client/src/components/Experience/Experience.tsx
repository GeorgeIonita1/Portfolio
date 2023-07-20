import styles from './Experience.module.scss';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className='title-container'>
                <h5>What I have done so far</h5>
                <h2>Work Experience</h2>
            </div>
            <div className={styles.experienceContainer}>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </section>
    )
}