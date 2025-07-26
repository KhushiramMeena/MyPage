import { ExperienceSectionType } from '@/lib/types/sections'

export const experienceSection: ExperienceSectionType = {
    title: "where i've worked",
    experiences: [
        {
        company: 'Ati Motors',
        companyUrl: 'https://atimotors.com/',
        role: 'Software Engineer',
        started: 'March 2024',
        upto: 'Present',
        tasks: [
            'Engineered a real-time Teleoperation (TeleOps) system using WebRTC, reducing video streaming latency by over 40%, enabling seamless remote AMR control.',
            'Developed a secure Remote Terminal for AMR diagnostics using WebSockets and Google Authenticator, enhancing system access control and operational safety.',
            'Integrated 2D rendering of 3D LiDAR point clouds into the frontend, boosting remote situational awareness and improving operator response time.',
            'Revamped the Map Editor with Zustand state management and precision tools like a Grid View and Ruler, increasing editing speed and usability by 50%.',
            'Built an automated health monitoring pipeline using Prometheus and Coroot, enabling real-time Slack alerts and improving incident response time by 30%.',
            'Reduced debugging effort by 45% by profiling backend APIs with Amazon CodeGuru and Jaeger, identifying memory leaks and performance bottlenecks.',
            'Collaborated on deploying scalable containerized services with Docker and Kubernetes, improving release cycles and system reliability across clusters.',
            'Worked with a cross-functional team to ship new features using React, FastAPI, TypeScript, MongoDB, and Redis, ensuring smooth frontend-backend integration.',
        ]
        }
        ,

    {
        company: 'Chegg India',
        companyUrl: 'https://www.cheggindia.com/',
        role: 'CS Subject Expert',
        started: 'March 2023',
        upto: 'Oct 2023',
        tasks: [
        'Resolved complex programming and Database queries for global students on the Chegg platform using Computer Science expertise',
        'Enhanced learning outcomes for over 250+ individuals by resolving doubts on an online forum',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
        
        ],
    },
    {
        company: 'Primathink Technologies',
        companyUrl: 'https://primathink.com/',
        role: 'Full Stack Developer Intern',
        started: 'Nov 2022',
        upto: 'Feb 2023',
        tasks: [
            "Developed different types of user interfaces.",
            "Implemented new features into existing projects.",
            "Worked with HTML, CSS, JavaScript, Bootstrap, React, PHP, and MySQL."
        ],
    },
    {
        company: 'PhotoStudy',
        companyUrl: 'https://www.photostudy.co/',
        role: 'Problem Solver',
        started: 'june 2022',
        upto: 'Aug 2022',
        tasks: [
            "Resolve challenging problems (Moslty Maths)!",
            "Deliver high-quality Mathematics solutions.",
            "Earn rewards through PhotoStudy."
       
        ],
    },
    ],
};