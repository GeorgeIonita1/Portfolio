'use client'

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

import styles from './Presentation.module.scss';
import linkedinIcon from '../../../public/icons/linkedin.svg';
import githubIcon from '../../../public/icons/github.svg';
import { useEffect, useRef } from 'react';

export default function Presentation() {
    const contactButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setTimeout(() => {
            console.log(contactButtonRef)
            if (contactButtonRef.current) {
                contactButtonRef.current.style.display = 'block';

            }
        }, 7000)
    }, [])

    return (
        <section className={styles.presentation}>
            <div className={styles.presentationTitle}>
                <TypeAnimation
                    sequence={[
                        100,
                        'Hello, I am George'
                    ]}
                    wrapper="h1"
                    speed={30}
                    cursor={false}
                />
                <TypeAnimation
                    sequence={[
                        3000,
                        'I am a web developer'
                    ]}
                    wrapper="h2"
                    speed={30}
                    cursor={false}
                />
                <TypeAnimation
                    sequence={[
                        5000,
                        "Let's talk"
                    ]}
                    wrapper="h2"
                    speed={30}
                    cursor={false}
                />
                <button ref={contactButtonRef}>
                    <a href="#contact">Contact</a>
                </button>
            </div>
            <div className={styles.presentationLinks}>
                <div className='svg-container'><Image src={linkedinIcon} alt='LinkedIn' /></div>
                <div className='svg-container'><Image src={githubIcon} alt='Github' /></div>
            </div>
            <div className={styles.presentationScroll}>
                <small>Scroll Down</small>
            </div>
        </section>
    );
}
