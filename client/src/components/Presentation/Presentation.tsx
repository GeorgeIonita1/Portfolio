'use client'

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

import styles from './Presentation.module.scss';
import linkedinIcon from '../../../public/icons/linkedin.svg';
import githubIcon from '../../../public/icons/github.svg';
import { useEffect, useRef } from 'react';
import { GithubLink, LinkedInLink } from '@/services/helpers';

export default function Presentation() {
    const contactButtonRef = useRef<HTMLButtonElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (contactButtonRef.current) {
                contactButtonRef.current.style.display = 'block';
            }
        }, 7000)
        setTimeout(() => {
            if (linksRef.current) {
                linksRef.current.style.display = 'block';
            }
        }, 7500);
    }, [])

    return (
        <section className={styles.presentation}>
            <div className={styles.presentationTitle}>
                <TypeAnimation
                    sequence={[
                        600,
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
                <a href="#contact">
                    <button ref={contactButtonRef}>Contact</button>
                </a>
            </div>
            <div className={styles.presentationLinks} ref={linksRef}>
                <a href={LinkedInLink} target='_blank'>
                    <div className='svg-container'><Image src={linkedinIcon} alt='LinkedIn' /></div>
                </a>
                <a href={GithubLink} target='_blank'>
                    <div className='svg-container'><Image src={githubIcon} alt='Github' /></div>
                </a>
            </div>
            <div className={styles.presentationScroll} ref={linksRef}>
                <small>Scroll Down</small>
            </div>
        </section>
    );
}
