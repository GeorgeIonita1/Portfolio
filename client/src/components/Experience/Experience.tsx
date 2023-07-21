import styles from './Experience.module.scss';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <section>
            <div className='title-container'>
                <h5>What I have done so far</h5>
                <h2>Work Experience</h2>
            </div>
            <div className={styles.experience}>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </section>
    )
}