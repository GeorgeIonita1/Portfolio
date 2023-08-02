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
