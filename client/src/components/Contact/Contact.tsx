import styles from './Contact.module.scss';
import planetEarthImage from '../../../public/pictures/planetEarth.jpg';
import Image from 'next/image';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className='title-container'>
                <h5>Get in touch</h5>
                <h2>Contact</h2>
            </div>
            <div className={styles.contactImage}>
                <div className={styles.contactImageWrapper}>
                    <Image src={planetEarthImage} alt='Planet Earth' />
                </div>
            </div>
            <div className={styles.contactForm}>
                <form>
                    <label>
                        Your Name
                        <input type="text" />
                    </label>
                    

                    <label>
                        Your emai
                        <input type="text" />
                    </label>
                    

                    <label>
                        Your message
                        <textarea rows={10} />
                    </label>
                    

                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}