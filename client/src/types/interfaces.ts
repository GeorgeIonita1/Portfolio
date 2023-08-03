interface SkillTechnical {
    name: string;
    progress: number;
    icon: string;
}

interface SkillsProfessional {
    name: string;
    progress: number;
}

interface SkillTechnicalProps {
    data: SkillTechnical;
}

interface SkillsProfessionalProps {
    data: SkillsProfessional;
}

interface Experiences {
    title: string;
    company: string;
    description: Array<string>;
}

interface ExperiencesProps {
    data: Experiences;
}
