import styles from './Presentation.module.scss';
import Image from 'next/image';
import myPicture from '../../../public/pictures/myPicture.jpg';
import linkedinIcon from '../../../public/icons/linkedin.svg';
import githubIcon from '../../../public/icons/github.svg';

export default function Presentation() {
    return (
        <section className={styles.presentation}>
            <div className='title-container'>
                <h1>
                    <span>Hello Im</span>
                    George
                    <span>Fullstack Developer</span>
                </h1>
            </div>
            <div className={styles.presentationImage}>
                <Image src={myPicture} alt='Picture of myself' />
            </div>
            <div className={styles.presentationLinks}>
                <div><Image src={linkedinIcon} alt='LinkedIn' /></div>
                <div><Image src={githubIcon} alt='Github' /></div>
            </div>
            <div className={styles.presentationScroll}>
                <small>Scroll Down</small>
            </div>
        </section>
    );
}
