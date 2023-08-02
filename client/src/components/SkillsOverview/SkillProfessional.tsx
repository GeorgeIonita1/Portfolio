import styles from './SkillProfessional.module.scss';

export default function SkillsProfessional({ data }: SkillsProfessionalProps) {
    return (
        <div className={styles.skill}>
            <div style={{ background: `radial-gradient(closest-side, white 80%, transparent 80% 100%), conic-gradient(#6CD4FF ${data.progress}%, #333341 0)` }}>
                <small>{data.progress}</small>
            </div>
            <small>{data.name}</small>
        </div>
    );
}
