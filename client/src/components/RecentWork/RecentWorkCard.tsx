import Image from 'next/image';

import styles from './RecentWorkCard.module.scss';
import { RecentWorksProps } from '@/types/interfaces';
import githubIcon from '../../../public/icons/github.svg';
import visitIcon from '../../../public/icons/eyeIcon.svg';

export default function RecentWorkCard({ data }: RecentWorksProps) {
    return (
        <div className={styles.recentWorkCard}>
            <div className={styles.recentWorkCardImage}>
                <Image src={data.thumbnail} alt='project' />
            </div>
            <div className={styles.recentWorkCardOverlay}>
                <div className={styles.recentWorkCardLinks}>
                    <a href={data.githubRedirrect} target='_blank'>
                        <div className={`svg-container ${styles.recentWorkCardButton}`}>
                            <Image src={githubIcon} alt='udmmy' />
                        </div>
                    </a>
                    <a href={data.redirrect} target='_blank'>
                        <div className={`svg-container ${styles.recentWorkCardButton}`}>
                            <Image src={visitIcon} alt='visit' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
