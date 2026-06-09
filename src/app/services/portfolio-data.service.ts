import { Injectable } from '@angular/core';

export interface Skill {
    name: string;
    icon: string;
    imgUrl?: string | null;
    category: string;
}

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    highlights: string[];
    github?: string;
    live?: string;
    type: 'professional' | 'freelance' | 'personal';
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    project?: string;
    projectDesc?: string;
    points: string[];
    type: 'job' | 'intern';
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
    icon: string;
    color: string;
    link?: string;
}

export interface Achievement {
    icon: string;
    title: string;
    description: string;
    color: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
    personal = {
        name: 'Gourav Sharma',
        title: 'Full Stack .NET Developer',
        tagline: 'ASP.NET Core · Angular · Blazor · MS SQL Server',
        summary:
            'Full Stack .NET Developer with 2.5+ years of experience delivering enterprise web applications using ASP.NET Core, C#, Angular, and Microsoft SQL Server. Skilled in designing scalable RESTful APIs, implementing multi-level approval workflows, and optimizing database performance. Experienced in modernizing legacy .NET systems, applying Clean Architecture and CQRS, and automating business processes for ERP-style solutions. Certified in AWS and Azure with strong problem-solving and algorithmic skills.',
        email: 'gouravsharmapro01@gmail.com',
        phone: '+91 9875392740',
        linkedin: 'https://www.linkedin.com/in/gourav-sharma-dev/',
        github: 'https://github.com/Gourav-Sharma-dev',
        location: 'Kolkata, India',
        // Direct download link for Google Drive (uc?export=download)
        resumeUrl: 'https://drive.google.com/uc?export=download&id=1TLjLNk8ZxvB7utcOTmR3TIRmsfiurt4P',
        // Preview link (opens in browser)
        resumePreviewUrl: 'https://drive.google.com/file/d/1TLjLNk8ZxvB7utcOTmR3TIRmsfiurt4P/preview',
    };

    stats = [
        { value: '2.5+', label: 'Years Experience', icon: 'bi-briefcase-fill' },
        { value: '500+', label: 'DSA Problems Solved', icon: 'bi-code-slash' },
        { value: '60%', label: 'API Performance Boost', icon: 'bi-lightning-charge-fill' },
        { value: '9.14', label: 'B.Tech CGPA', icon: 'bi-mortarboard-fill' },
    ];

    skills: Skill[] = [
        // Backend
        { name: 'C#', icon: 'bi-filetype-cs', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'Backend' },
        { name: 'ASP.NET Core', icon: 'bi-server', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'Backend' },
        { name: '.NET Core', icon: 'bi-cpu', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', category: 'Backend' },
        { name: 'Entity Framework Core', icon: 'bi-database', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'Backend' },
        { name: 'LINQ', icon: 'bi-filter', imgUrl: null, category: 'Backend' },
        { name: 'ADO.NET', icon: 'bi-diagram-3', imgUrl: null, category: 'Backend' },
        { name: 'ASP.NET MVC', icon: 'bi-layers', imgUrl: null, category: 'Backend' },
        // Frontend
        { name: 'Angular', icon: 'bi-triangle', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
        { name: 'Blazor', icon: 'bi-window', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg', category: 'Frontend' },
        { name: 'TypeScript', icon: 'bi-filetype-tsx', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
        { name: 'React.js', icon: 'bi-arrow-repeat', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
        { name: 'Bootstrap 5', icon: 'bi-bootstrap', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'Frontend' },
        { name: 'Angular Material', icon: 'bi-grid-3x3-gap', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
        { name: 'HTML5 / CSS3', icon: 'bi-filetype-html', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
        // Architecture
        { name: 'Clean Architecture', icon: 'bi-diagram-2', imgUrl: null, category: 'Architecture' },
        { name: 'CQRS Pattern', icon: 'bi-arrow-left-right', imgUrl: null, category: 'Architecture' },
        { name: 'Repository Pattern', icon: 'bi-archive', imgUrl: null, category: 'Architecture' },
        { name: 'Microservices', icon: 'bi-boxes', imgUrl: null, category: 'Architecture' },
        { name: 'SOLID Principles', icon: 'bi-shield-check', imgUrl: null, category: 'Architecture' },
        { name: 'REST APIs', icon: 'bi-cloud-arrow-up', imgUrl: null, category: 'Architecture' },
        // Database
        { name: 'MS SQL Server', icon: 'bi-database-fill', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'Database' },
        { name: 'Stored Procedures', icon: 'bi-code-square', imgUrl: null, category: 'Database' },
        { name: 'Query Optimization', icon: 'bi-speedometer', imgUrl: null, category: 'Database' },
        { name: 'MySQL', icon: 'bi-database-fill-gear', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
        // Security & Cloud
        { name: 'JWT Auth', icon: 'bi-shield-lock', imgUrl: null, category: 'Security & Cloud' },
        { name: 'OAuth 2.0', icon: 'bi-person-check', imgUrl: null, category: 'Security & Cloud' },
        { name: 'RBAC', icon: 'bi-person-badge', imgUrl: null, category: 'Security & Cloud' },
        { name: 'Azure App Service', icon: 'bi-cloud', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'Security & Cloud' },
        { name: 'Azure SQL', icon: 'bi-cloud-fill', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'Security & Cloud' },
        { name: 'AWS (CCP)', icon: 'bi-cloud-haze2', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Security & Cloud' },
        // Tools
        { name: 'Git', icon: 'bi-git', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
        { name: 'JIRA / TFS', icon: 'bi-kanban', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', category: 'Tools' },
        { name: 'Postman', icon: 'bi-send', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'Tools' },
        { name: 'Swagger', icon: 'bi-file-earmark-code', imgUrl: null, category: 'Tools' },
        { name: 'Splunk', icon: 'bi-activity', imgUrl: null, category: 'Tools' },
        { name: 'Agile / Scrum', icon: 'bi-people', imgUrl: null, category: 'Tools' },
        { name: 'Visual Studio', icon: 'bi-tools', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', category: 'Tools' },
    ];

    skillCategories = ['Backend', 'Frontend', 'Architecture', 'Database', 'Security & Cloud', 'Tools'];

    experiences: Experience[] = [
        {
            role: 'Software Engineer',
            company: 'Cognizant Technology Solutions India Pvt. Ltd.',
            period: 'Sept 2023 - Present',
            location: 'Kolkata, India',
            project: 'FOCUS - Enterprise Hotel Booking & Resort Management System',
            projectDesc:
                'Large-scale B2B hotel booking and resort management platform for a leading US-based hospitality client, handling real-time reservations, revenue management, and operational analytics.',
            type: 'job',
            points: [
                'Modernized legacy .NET services to .NET Core using Clean Architecture, improving API response times by <strong>60%</strong>.',
                'Implemented <strong>CQRS pattern</strong> to separate read/write operations, improving query throughput by 40%.',
                'Optimized stored procedures and indexes, reducing critical report execution times by <strong>40-45%</strong>.',
                'Identified and resolved a critical <strong>memory outage issue</strong> in the report export module that recurred at the start of each month, by redesigning data loading and streaming logic.',
                'Built and integrated APIs for <strong>RDLC report generation</strong> (CSV/Excel/PDF) for daily business operations.',
                'Implemented <strong>JWT-based authentication</strong> and role-based authorization for secure API access.',
                'Integrated <strong>Splunk logging</strong> for centralized monitoring and real-time user activity tracking.',
                'Collaborated in <strong>Agile/Scrum</strong> teams using JIRA/TFS for sprint planning, code reviews, and production fixes.',
            ],
        },
        {
            role: 'Full Stack Developer Intern',
            company: 'Cognizant Technology Solutions India Pvt. Ltd.',
            period: 'Feb 2023 - Aug 2023',
            location: 'Kolkata, India',
            project: 'Online Examination System',
            projectDesc:
                'Digital assessment platform for educational institutions supporting concurrent exam sessions with automated result processing.',
            type: 'intern',
            points: [
                'Developed a full-stack examination platform using <strong>ASP.NET Core Web API</strong>, React.js, and MS SQL Server.',
                'Built RESTful APIs for exam creation, student enrolment, answer submission, and result processing.',
                'Implemented role-based access (Admin, Teacher, Student) with secure authentication.',
                'Designed and optimized MS SQL Server database schema for question bank and result management.',
            ],
        },
    ];

    projects: Project[] = [
        {
            title: 'Vendor Registration & Approval System',
            subtitle: 'Inner Eye Consultancy Solutions',
            description:
                'Enterprise-grade ERP-style vendor onboarding platform with multi-level approval workflow, document management, and real-time status tracking.',
            tech: ['ASP.NET Core Web API', 'Angular', 'MS SQL Server', 'JWT', 'Bootstrap'],
            highlights: [
                'End-to-end vendor onboarding with auto-generated vendor codes',
                'Two-level approval workflow: Procurement → Finance',
                'Status lifecycle: Submitted → Under Review → Finance Verification → Approved/Rejected → Active',
                'Secure document upload (GST, PAN) with validation',
                'Role-based access — vendors cannot edit after submission',
            ],
            type: 'freelance',
            github:'https://github.com/Gourav-Sharma-dev/VendorPortal'
        },
        {
            title: 'Loan Management & Tracking System',
            subtitle: 'Live Client Project',
            description:
                'Responsive loan tracking application with real-time data management, payment tracking, and interactive analytics dashboards.',
            tech: ['Angular', 'Google Sheets API', 'Bootstrap', 'TypeScript', 'Google OAuth'],
            highlights: [
                'Google Sheets as lightweight cost-effective backend datastore',
                'Google OAuth authentication for authorized access only',
                'Admin dashboard with loan, payment, and balance management',
                'Automated due date reminders for collection efficiency',
                'Interactive graphs for investment, collections, and pending payments',
                'Deployed on Netlify for live client access',
            ],
            live: 'https://ashaenterprise.netlify.app/',
            type: 'freelance',
        },
        {
            title: 'Student Details Portal',
            subtitle: 'Student Management System',
            description:
                'Full-featured student management system with academic data storage, search, pagination, and responsive design.',
            tech: ['Angular', 'ASP.NET Core Web API', 'SQL Server', 'Tailwind CSS', 'TypeScript'],
            highlights: [
                'Clean Architecture with Repository Pattern',
                'CRUD with search, filter, and pagination',
                'Responsive UI with Tailwind CSS',
            ],
            github: 'https://github.com/Gourav-Sharma-dev/Student_Details_Portal',
            type: 'personal',
        },
        {
            title: 'E-Commerce Bookstore Platform',
            subtitle: 'Full-Stack E-Commerce App',
            description:
                'Fully functional e-commerce platform for book purchases with secure payment handling, shopping cart, and inventory management.',
            tech: ['ASP.NET Core MVC', 'Entity Framework', 'Bootstrap', 'SQL Server'],
            highlights: [
                'Shopping cart, wishlist, and order management',
                'Secure payment transaction handling',
                'Admin panel for inventory and order fulfillment',
                'Sales analytics dashboard',
            ],
            github: 'https://github.com/Gourav-Sharma-dev/ECommerce_WebApplication',
            type: 'personal',
        },
    ];

    certifications: Certification[] = [
        {
            name: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            year: '2024',
            icon: 'bi-cloud-fill',
            color: '#FF9900',
            link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/fd1a594547034af294db4b1e10fe1170',
        },
        {
            name: 'Azure Data Engineer Associate',
            issuer: 'Microsoft (DP-203)',
            year: '2024',
            icon: 'bi-microsoft',
            color: '#0078D4',
            link: 'https://learn.microsoft.com/en-us/users/gouravsharma-9123/credentials/e5600e451ff4928d',
        },
        {
            name: 'GitHub Copilot Certification',
            issuer: 'GitHub',
            year: '2025',
            icon: 'bi-github',
            color: '#238636',
            link: 'https://www.credly.com/badges/742dd06f-5b92-4d14-842b-c171c6f439cf/public_url'
        },
    ];

    achievements: Achievement[] = [
        {
            icon: 'bi-trophy-fill',
            title: 'Star of the Month',
            description:
                'Recognized multiple times as "Star of the Month" at Cognizant for consistent delivery and ownership on critical modules.',
            color: '#FFD700',
        },
        {
            icon: 'bi-code-slash',
            title: '500+ DSA Problems',
            description: 'Solved 500+ coding problems on LeetCode & HackerRank with 5★ rating on HackerRank.',
            color: '#00B8A9',
        },
        {
            icon: 'bi-lightning-charge-fill',
            title: '60% API Performance Boost',
            description:
                'Delivered up to 60% faster API responses and 40% faster report generation in production systems.',
            color: '#F64747',
        },
        {
            icon: 'bi-bug-fill',
            title: 'Critical Bug Resolution',
            description:
                'Resolved a recurring memory outage in the report export module that crashed servers at the start of every month.',
            color: '#A855F7',
        },
    ];

    education = [
        {
            degree: 'B.Tech - Computer Science Engineering',
            institution: 'Future Institute of Engineering and Management',
            location: 'Kolkata, West Bengal',
            period: 'Aug 2019 - June 2023',
            cgpa: '9.14',
            icon: 'bi-mortarboard-fill',
        },
        {
            degree: 'High School',
            institution: 'Dum Dum Airport Hindi High School',
            location: 'Kolkata, West Bengal',
            period: '2017 - 2019',
            cgpa: '',
            icon: 'bi-book-fill',
        },
    ];
}
