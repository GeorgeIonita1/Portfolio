import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contactForm}>
                <h4>Get in touch</h4>
                <h2>Contact</h2>
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