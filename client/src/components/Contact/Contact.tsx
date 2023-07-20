import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className='title-container'>
                <h5>Get in touch</h5>
                <h2>Contact</h2>
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
                        <input type="textarea" />
                    </label>
                    

                    <button>Send</button>
                </form>
            </div>
            <div className={styles.contactImage}>
                Imaginess
            </div>
        </section>
    )
}