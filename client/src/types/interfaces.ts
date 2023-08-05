import { StaticImageData } from 'next/image';

interface SkillTechnical {
    name: string;
    progress: number;
    icon: string;
}

interface SkillsProfessional {
    name: string;
    progress: number;
}

export interface SkillTechnicalProps {
    data: SkillTechnical;
}

export interface SkillsProfessionalProps {
    data: SkillsProfessional;
}

interface Experiences {
    title: string;
    company: string;
    description: Array<string>;
}

export interface ExperiencesProps {
    data: Experiences;
}

interface RecentWorks {
    name: string;
    thumbnail: StaticImageData;
    redirrect: string;
    githubRedirrect: string;
}

export interface RecentWorksProps {
    data: RecentWorks;
}
