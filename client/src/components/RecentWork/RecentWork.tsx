import styles from './RecentWork.module.scss';

export default function RecentWork() {
    return (
        <section className={styles.recentwork}>
            <div className='title-container'>
                <h5>Recent work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className={styles.recentworkContainer}>
                Container
            </div>
        </section>
    )
}