'use client'
// todo: create components for cards;
// change icons with 3d models
// unobserve the Intersection Observer
// create a hook for the IntersectionObserver

import Image from 'next/image';

import styles from './AboutMe.module.scss';
import codingBrackets from '../../../public/pictures/codingBrackets.png';
import backendIcon from '../../../public/icons/backend.svg';
import webIcon from '../../../public/icons/web.svg';
import awardIcon from '../../../public/icons/award.svg';
import { useEffect, useRef } from 'react';

export default function AboutMe() {
    const aboutMeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const test = (element: HTMLElement) => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).dataset.hidden = 'false';
                        observer.disconnect();
                    }
                })
            },
            { root: null, threshold: 0.25 }
            );

            observer.observe(element);
        };

        if (aboutMeRef.current) {
            Array.from(aboutMeRef.current.children).forEach(el => test(el as HTMLElement));
        }
    }, [])

    return (
        <section id='about-me' className={styles.aboutMe}>
            <div className='title-container'>
                <h5>Get to know</h5>
                <h2>About me</h2>
            </div>
            <div className={styles.aboutMeMainContent}>
                <div className={styles.aboutMePoster}>
                    <Image src={codingBrackets} alt='Coding picture' />
                </div>
                <div className={styles.aboutMeDetails}>
                    <div ref={aboutMeRef} className={styles.aboutMeCards}>
                        <div className={styles.aboutMeCard} data-hidden={'true'}>
                            <div className={`${styles.aboutMeCardImage} svg-container`}><Image src={awardIcon} alt='Award icon' /></div>
                            <h3>Experience</h3>
                            <h4>2+ years working</h4>
                        </div>
                        <div className={styles.aboutMeCard} data-hidden={'true'}>
                            <div className={`${styles.aboutMeCardImage} svg-container`}><Image src={webIcon} alt='Web icon' /></div>
                            <h3>Web development</h3>
                            <h4>3 years</h4>
                        </div>
                        <div className={styles.aboutMeCard} data-hidden={'true'}>
                            <div className={`${styles.aboutMeCardImage} svg-container`}><Image src={backendIcon} alt='Backend icon' /></div>
                            <h3>Backend development</h3>
                            <h4>1+ years</h4>
                        </div>
                    </div>
                    <p>
                        I like designing and developing full-stack web applications where I can
                        experiment with the latest technologies.
                        I am very patient and resilient in my work, an analytical person with a keen
                        eye for details.
                    </p>
                    <a href="#contact">
                        <button>Lets talk</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
