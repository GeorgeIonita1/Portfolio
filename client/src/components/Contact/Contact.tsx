'use client'

import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useRef } from 'react';

import styles from './Contact.module.scss';
import planetEarthImage from '../../../public/pictures/planetEarth.jpg';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formRef.current) {
            emailjs.sendForm('service_5x0rhsc', 'template_uavky2k', formRef.current, 'H3piPg6aWKoBug0cN')
                .then((result) => {
                    console.log(result.text);
                    alert('Thank you for your message')
                }, (error) => {
                    console.log(error.text);
                    alert('THere has been an error')
                });
        }
    }
    return (
        <section id='contact' className={styles.contact}>
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
                <form ref={formRef} onSubmit={sendEmail}>
                    <label>
                        Your Name
                        <input name='name' type="text" />
                    </label>
                    <label>
                        Your emai
                        <input name='email' type="email" />
                    </label>
                    <label>
                        Your message
                        <textarea name='message' rows={10} />
                    </label>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}