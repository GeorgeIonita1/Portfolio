import Image from 'next/image';

import styles from './SkillTechnical.module.scss';


export default function SkillTechnical({ data }: SkillTechnicalProps) {
    return (
        <div className={styles.skill}>
            <div className={`${styles.skillIcon} svg-container`}><Image src={data.icon} alt={data.name} /></div>
            <small>{data.name}</small>
            <div className={styles.skillProgress}>
                <div style={{ width: `${data.progress}%`}}><div className={styles.skillPercentage}>{data.progress}%</div></div>
            </div>
        </div>
    );
}