'use client'

// todo:
// create a hook for IntersectionObserver
// search to find more components that uses the Observer

import Image from 'next/image';

import styles from './SkillTechnical.module.scss';
import { SkillTechnicalProps } from '@/types/interfaces';
import { useEffect, useRef } from 'react';


export default function SkillTechnical({ data }: SkillTechnicalProps) {
    const skillRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target as HTMLDivElement
                    targetElement.style.width = '100%';

                    if (targetElement.children[0]) {
                        const childElement = targetElement.children[0] as HTMLDivElement;
                        childElement.style.width = `${data.progress}%`;
                    }
                    
                }
            })
        },
        { root: null, threshold: 0.5 }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }
    })
    return (
        <div className={styles.skill}>
            <div className={`${styles.skillIcon} svg-container`}><Image src={data.icon} alt={data.name} /></div>
            <small>{data.name}</small>
            <div ref={skillRef} className={styles.skillProgress}>
                <div style={{ width: `${20}%`}}><div className={styles.skillPercentage}>{data.progress}%</div></div>
            </div>
        </div>
    );
}
