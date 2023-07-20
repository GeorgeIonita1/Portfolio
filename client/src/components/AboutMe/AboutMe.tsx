// todo: create components for cards;
// change icons with 3d models

import Image from 'next/image';

import styles from './AboutMe.module.scss';
import profilePicture from '../../../public/pictures/profilePicture.png';
import backendIcon from '../../../public/icons/backend.svg';
import webIcon from '../../../public/icons/web.svg';
import awardIcon from '../../../public/icons/award.svg';

export default function AboutMe() {
    return (
        <section className={styles.aboutMe}>
            <div className='title-container'>
                <h5>Get to know</h5>
                <h2>About me</h2>
            </div>
            <div className={styles.aboutMeMainContent}>
                <div className={styles.aboutMePoster}>
                    <Image src={profilePicture} alt='Picture of myself' />
                </div>
                <div className={styles.aboutMeDetails}>
                    <div className={styles.aboutMeCards}>
                        <div className={styles.aboutMeCard}>
                            <div className={styles.aboutMeCardImage}><Image src={awardIcon} alt='Award icon' /></div>
                            <h3>Experience</h3>
                            <h4>3+ years working</h4>
                        </div>
                        <div className={styles.aboutMeCard}>
                            <div className={styles.aboutMeCardImage}><Image src={webIcon} alt='Web icon' /></div>
                            <h3>Web development</h3>
                            <h4>3+ years working</h4>
                        </div>
                        <div className={styles.aboutMeCard}>
                            <div className={styles.aboutMeCardImage}><Image src={backendIcon} alt='Backend icon' /></div>
                            <h3>Backend development</h3>
                            <h4>3+ years working</h4>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Perspiciatis, consectetur delectus. Quae optio, ad neque illo 
                        quia dolores culpa earum.
                    </p>
                    <button>Lets talk</button>
                </div>
            </div>
        </section>
    )
}
