import styles from './Experience.module.scss';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/services/helpers';

export default function Experience() {
    return (
        <section>
            <div className='title-container'>
                <h5>What I have done so far</h5>
                <h2>Work Experience</h2>
            </div>
            <div className={styles.experience}>
                {experiences.map(experience => <ExperienceCard key={experience.title} data={experience} />)}
            </div>
        </section>
    )
}