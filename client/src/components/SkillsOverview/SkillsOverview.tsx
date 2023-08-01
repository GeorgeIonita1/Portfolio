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
                <h5>What skills i have</h5>
                <h2>My experience</h2>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsTechnical}>
                    <h3>Technical Skills</h3>
                    <div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={htmlIcon} alt='Html icon' /></div>
                            <small>HTML</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={sassIcon} alt='sass Icon' /></div>
                            <small>Sass</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={javascriptIcon} alt='javascript Icon' /></div>
                            <small>JavaScript</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={reactIcon} alt='react Icon' /></div>
                            <small>React</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={nodeIcon} alt='node Icon' /></div>
                            <small>Node</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={nestIcon} alt='nest Icon' /></div>
                            <small>Nest</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.skillsTechnicalIcon} svg-container`}><Image src={gitIcon} alt='git Icon' /></div>
                            <small>Git</small>
                            <div className={styles.skillsTechnicalProgress}>
                                <div><div className={styles.skillsTechnicalPercentage}>50%</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.skillsProfessional}>
                    <h3>Professional Skills</h3>
                    <div className={styles.skillsProfessionalContainer}>
                        <div className={styles.skillsProfessionalInstance}>
                            <div>
                                <small>70%</small>
                            </div>
                            <small>Pizza</small>
                        </div>
                        <div className={styles.skillsProfessionalInstance}>
                            <div>
                                <small>70%</small>
                            </div>
                            <small>Pizza</small>
                        </div>
                        <div className={styles.skillsProfessionalInstance}>
                            <div>
                                <small>70%</small>
                            </div>
                            <small>Pizza</small>
                        </div>
                        <div className={styles.skillsProfessionalInstance}>
                            <div>
                                <small>70%</small>
                            </div>
                            <small>Pizza</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
