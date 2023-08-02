import styles from './SkillsOverview.module.scss';
import SkillTechnical from './SkillTechnical';
import { skillsTechnical, skillsProfessional } from '@/services/helpers';
import SkillsProfessional from './SkillProfessional';

export default function SkillsOverview() {
    return (
        <section className={styles.skills}>
            <div className='title-container'>
                <h5>What skills i have</h5>
                <h2>My experience</h2>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsTechnical}>
                    <h3>Technical Skills</h3>
                    <div>
                        {skillsTechnical.map(skill => <SkillTechnical key={skill.name} data={skill} />)}
                    </div>
                </div>
                <div className={styles.skillsProfessional}>
                    <h3>Professional Skills</h3>
                    <div className={styles.skillsProfessionalContainer}>
                        {skillsProfessional.map(skill => <SkillsProfessional key={skill.name} data={skill} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}
