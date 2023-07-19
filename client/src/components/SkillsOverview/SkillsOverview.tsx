import Image from 'next/image';

import styles from './SkillsOverview.module.scss';
import htmlIcon from '../../../public/icons/html5.svg';
import sassIcon from '../../../public/icons/sass.svg';
import javascriptIcon from '../../../public/icons/javascript.svg';
import reactIcon from '../../../public/icons/react.svg';
import nodeIcon from '../../../public/icons/node.svg';
import nestIcon from '../../../public/icons/nest.png';
import gitIcon from '../../../public/icons/git.svg';

export default function SkillsOverview() {
    return (
        <section className={styles.skills}>
            <div className='title-container'>
                <h4>What skills i have</h4>
                <h2>My experience</h2>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsTechnical}>
                    <h3>Technical Skills</h3>
                    <div className={styles.skillsWrapper}>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={htmlIcon} alt='Html icon' /></div>
                            <small>HTML</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={sassIcon} alt='sass Icon' /></div>
                            <small>Sass</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={javascriptIcon} alt='javascript Icon' /></div>
                            <small>JavaScript</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={reactIcon} alt='react Icon' /></div>
                            <small>React</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={nodeIcon} alt='node Icon' /></div>
                            <small>Node</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={nestIcon} alt='nest Icon' /></div>
                            <small>Nest</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                        <div className={styles.skillsInstance}>
                            <div className={styles.skillsTechnicalIcon}><Image src={gitIcon} alt='git Icon' /></div>
                            <small>Git</small>
                            <div className={styles.skillsTechnicalProgress}><div /></div>
                        </div>
                    </div>
                </div>
                <div className={styles.skillsProfessional}>
                    <h3>Professional Skills</h3>
                    <div className={styles.skillsWrapper}></div>
                </div>
            </div>
        </section>
    )
}
