import htmlIcon from '../../public/icons/html5.svg';
import sassIcon from '../../public/icons/sass.svg';
import javascriptIcon from '../../public/icons/javascript.svg';
import reactIcon from '../../public/icons/react.svg';
import nodeIcon from '../../public/icons/node.svg';
import nestIcon from '../../public/icons/nest.png';
import gitIcon from '../../public/icons/git.svg';
import projectShowcase from '../../public/pictures/ProjectShowcase.png';

// links
export const LinkedInLink = 'https://www.linkedin.com/in/george-ionita-850b46153/';
export const GithubLink = 'https://github.com/GeorgeIonita1';

// Profile skills and experiences
export const skillsTechnical = [
    {
        name: 'HTML',
        progress: 90,
        icon: htmlIcon
    },
    {
        name: 'SASS',
        progress: 80,
        icon: sassIcon
    },
    {
        name: 'JavaScript',
        progress: 75,
        icon: javascriptIcon
    },
    {
        name: 'React.Js',
        progress: 75,
        icon: reactIcon
    },
    {
        name: 'Node.Js',
        progress: 70,
        icon: nodeIcon
    },
    {
        name: 'Nest.js',
        progress: 70,
        icon: nestIcon
    },
    {
        name: 'Git',
        progress: 80,
        icon: gitIcon
    },
];

export const skillsProfessional = [
    {
        name: 'Code Quality',
        progress: 90
    },
    {
        name: 'Creativity',
        progress: 80
    },
    {
        name: 'Adaptability',
        progress: 85
    },
    {
        name: 'Communication',
        progress:90
    },
    {
        name: 'Satisfaction',
        progress: 100
    },
];

export const experiences = [
    {
        title: 'React.Js Web Developer',
        company: 'Tremend',
        description: [
            'Create functional reusable components following best practices',
            'Align with QA and backend team to implement efficient and scalable code',
            'Write and maintain documentation for new features and releases',
            'Debugging with DevTools and VSCode',
            'Plan and showcase new features demo to the client'
        ]
    },
    {
        title: 'Drupal Web Developer',
        company: 'Tremend',
        description: [
            'Write w3 compliant code to meet high European standards',
            'Join a multicultural team to develop great communication and adaptability skills',
            'Hands-on experience with the Drupal CMS',
            'Help connect development professionals around the world so they can collaborate and share knowledge'
        ]
    },
    {
        title: 'Magento Web Developer',
        company: 'Tremend',
        description: [
            'Participate in updating the website of one of the largest e-commerce shops in Romania',
            'Join a fast-paced environment and make sure releases are delivered on-time',
            'Hands-on experience with the Magento CMS',
            'Pass Salesforce Commerce Cloud Developer Certification',
            'Learn working in an agile environment',
        ]
    },
    {
        title: 'Email Marketing Specialist',
        company: 'EvoWise',
        description: [
            'Ensure on-time delivery of multiple Campaigns',
            'Create email templates and manage users database',
            'Provide customer support'
        ]
    }
];

// Recent work
export const recentWorks = [
    {
        name: 'Project Showcase',
        thumbnail: projectShowcase,
        redirrect: 'https://personal-website-cd86a.web.app/',
        githubRedirrect: 'https://github.com/GeorgeIonita1/ProjectShowcase_client'
    },
];
