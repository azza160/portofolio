
export type TechStack = {
    id: string;
    name: string;
    icon: string;
};

export type ProjectTech = {
    name: string;
    image: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    images: string[]; // Changed from single image string to array
    liveUrl?: string;
    repoUrl?: string; // Standard practice to include repo url if public
    status?: "live" | "private" | "coming_soon";
    features: string[]; // New field
    tech: ProjectTech[]; // Changed from string[] to object array
};

export type Certificate = {
    id: string;
    images: string[];
};

export const TECH_STACKS: TechStack[] = [
    { id: "1", name: "React", icon: "/img/icons/react.svg" },
    { id: "2", name: "Next.js", icon: "/img/icons/nextjs.svg" },
    { id: "3", name: "Laravel", icon: "/img/icons/laravel.svg" },
    { id: "4", name: "Inertia.js", icon: "/img/icons/inertia.svg" },
    { id: "5", name: "TypeScript", icon: "/img/icons/typescript.svg" },
    { id: "6", name: "JavaScript", icon: "/img/icons/javascript.svg" },
    { id: "7", name: "PHP", icon: "/img/icons/php.svg" },
    { id: "8", name: "Tailwind CSS", icon: "/img/icons/tailwindcss.svg" },
    { id: "9", name: "Bootstrap", icon: "/img/icons/bootstrap.svg" },
    { id: "10", name: "MySQL", icon: "/img/icons/mysql.svg" },
    { id: "11", name: "Git", icon: "/img/icons/git.svg" },
    { id: "12", name: "Vercel", icon: "/img/icons/vercel.svg" },
];

export const PROJECTS: Project[] = [

    {
        id: "1",
        title: "Kotobee",
        description: "KotoBee is a gamified Japanese vocabulary learning platform designed to guide beginners from zero to structured mastery. The system integrates level progression, experience points (EXP), quizzes, streak tracking, and interactive audio-based learning to create an engaging and structured learning journey. Users unlock learning materials progressively through a level-based system, ensuring consistent improvement and long-term retention.",
        images: [
            "/img/projects/project1/image1.png",
            "/img/projects/project1/image2.png",
            "/img/projects/project1/image3.png",
            "/img/projects/project1/image4.png",
            "/img/projects/project1/image5.png",
            "/img/projects/project1/image6.png",
            "/img/projects/project1/image7.png",
        ],

        liveUrl: "https://example.com",
        status: "private",
        features: [
            "Multi-section landing page explaining platform features and structured Japanese learning roadmap",
            "Google authentication integration for secure and seamless login",
            "Personalized learning dashboard with real-time progress tracking",
            "Level-based gamification system (Level 1–5) with unlockable learning content",
            "Daily learning progress monitoring including level, completed materials, and activity summary",
            "Hiragana and Katakana learning modules (Gojuon, Dakuten, etc.) with writing guide, pronunciation, examples, and audio support",
            "Timed objective-based quiz system (Beginner, Intermediate, Expert) with Random and Manual modes",
            "Quiz review system with answer evaluation and EXP calculation",
            "Comprehensive vocabulary learning module with meanings, sentence examples, variations, and audio pronunciation",
            "Vocabulary quiz system with difficulty scaling and reward mechanics",
            "Global leaderboard ranking system displaying Top 10 users and individual rank position",
            "User profile management (name and avatar customization)",
            "Dark mode and light mode support for improved user experience",
            "Fully responsive design optimized for desktop, tablet, and mobile devices"
        ],

        tech: [
            { name: "React", image: "/img/icons/react.svg" },
            { name: "Laravel", image: "/img/icons/laravel.svg" },
            { name: "Inertia.js", image: "/img/icons/inertia.svg" },
            { name: "JavaScript", image: "/img/icons/javascript.svg" },
            { name: "PHP", image: "/img/icons/php.svg" },
            { name: "Tailwind CSS", image: "/img/icons/tailwindcss.svg" },
            { name: "MySQL", image: "/img/icons/mysql.svg" },
            { name: "Git", image: "/img/icons/git.svg" },
        ],
    },
    {
        id: "2",
        title: "HerbalCare",
        description: "HerbalCare is a digital consultation platform that connects certified herbal practitioners with users seeking personalized health guidance. The system enables both online and offline consultation bookings, real-time communication, and educational article management within a secure multi-role environment.",
        images: [
            "/img/projects/project2/image1.png",
            "/img/projects/project2/image2.png",
            "/img/projects/project2/image3.png",
            "/img/projects/project2/image4.png",
            "/img/projects/project2/image5.png",
        ],
        liveUrl: "#",
        status: "private",
        features: [
            "Multi-role authentication system (Admin, User, Herbal Practitioner)",
            "Real-time chat system between users and herbal practitioners",
            "In-app notification system for consultation updates and messages",
            "Online and offline consultation booking management",
            "Admin-controlled article management system for health education content",
            "User and practitioner profile settings customization",
            "Fully responsive design optimized for desktop and mobile devices"
        ],
        tech: [
            { name: "React", image: "/img/icons/react.svg" },
            { name: "Laravel", image: "/img/icons/laravel.svg" },
            { name: "Inertia.js", image: "/img/icons/inertia.svg" },
            { name: "JavaScript", image: "/img/icons/javascript.svg" },
            { name: "PHP", image: "/img/icons/php.svg" },
            { name: "Tailwind CSS", image: "/img/icons/tailwindcss.svg" },
            { name: "MySQL", image: "/img/icons/mysql.svg" },
            { name: "Git", image: "/img/icons/git.svg" },
        ],
    },
    {
        id: "3",
        title: "Tech Radar",
        description: "Tech Radar is a multi-tenant technology management platform designed to help companies document, categorize, and manage the technologies used across their organization. The system supports company-based access control, role management, and structured technology tracking to improve internal visibility and governance.",
        images: [
            "/img/projects/project3/image1.png",
            "/img/projects/project3/image2.png",
            "/img/projects/project3/image3.png",
            "/img/projects/project3/image4.png",
            "/img/projects/project3/image5.png",
        ],
        status: "private",
        features: [
            "Multi-company support with company creation and join via unique company code",
            "Role-based access control with customizable permissions (Owner, Employee)",
            "Technology radar visualization categorized by defined technology groups",
            "CRUD management for categories, technologies, roles, and employees",
            "Company profile management including name, status, description, and logo",
            "Activity log tracking for monitoring system actions",
            "Member approval system for pending company join requests",
            "Responsive dashboard with authentication, profile management, and notification system"
        ],
        tech: [
            { name: "Laravel", image: "/img/icons/laravel.svg" },
            { name: "PHP", image: "/img/icons/php.svg" },
            { name: "Bootstrap", image: "/img/icons/bootstrap.svg" },
            { name: "MySQL", image: "/img/icons/mysql.svg" },
            { name: "Git", image: "/img/icons/git.svg" },

            { name: "JavaScript", image: "/img/icons/javascript.svg" }
        ],
    },
    {
        id: "4",
        title: "To-Do List",
        description: "A task management web application designed to help users organize and track their daily activities efficiently. The system allows users to create, categorize, filter, and monitor task progress with real-time status updates and a clean, user-friendly interface.",
        images: ["/img/projects/project4/img1.png", "/img/projects/project4/img2.png", "/img/projects/project4/img3.png", "/img/projects/project4/img4.png", "/img/projects/project4/img5.png"],
        liveUrl: "https://zatodo-list.vercel.app/",
        status: "live",
        features: [
            "Create, update, and delete tasks with an intuitive interface",
            "Task status management (Completed / Incomplete) with real-time updates",
            "Task categorization system for better organization",
            "Dynamic filtering based on task completion status",
            "Dashboard summary displaying total, completed, and pending tasks",
            "Dark mode and light mode toggle for improved user experienc",
            "Responsive design optimized for both desktop and mobile devices"
        ],
        tech: [
            { name: "React", image: "/img/icons/react.svg" },
            { name: "Tailwind CSS", image: "/img/icons/tailwindcss.svg" },
            { name: "Git", image: "/img/icons/git.svg" },
            { name: "Vercel", image: "/img/icons/vercel.svg" },

        ],
    },
    {
        id: "5",
        title: "Coklat Harmoni",
        description: "A modern chocolate store landing page showcasing featured products, interactive sections, and smooth animations. The project focuses on visual presentation, product layout structuring, and responsive user experience.",
        images: ["/img/projects/project5/img1.png", "/img/projects/project5/img2.png", "/img/projects/project5/img3.png", "/img/projects/project5/img4.png", "/img/projects/project5/img5.png"],
        liveUrl: "https://website-chocolate.vercel.app/",
        status: "live",
        features: [
            "Modern multi-section landing page layout",
            "Product showcase section with structured item presentation",
            "Interactive UI elements for improved user engagement",
            "Smooth animations and transition effects",
            "Responsive design optimized for desktop, tablet, and mobile devices"
        ],
        tech: [
            { name: "React", image: "/img/icons/react.svg" },
            { name: "JavaScript", image: "/img/icons/javascript.svg" },
            { name: "Tailwind CSS", image: "/img/icons/tailwindcss.svg" },
            { name: "Git", image: "/img/icons/git.svg" },
            { name: "Vercel", image: "/img/icons/vercel.svg" },

        ],
    },
    {
        id: "6",
        title: "SerbaTrendi",
        description: "SerbaTrendi is a responsive product showcase website built to practice API integration and dynamic content rendering using external product data.",
        images: ["/img/projects/project6/img1.png", "/img/projects/project6/img2.png", "/img/projects/project6/img3.png", "/img/projects/project6/img4.png"],
        liveUrl: "https://serba-trendi.vercel.app/",
        status: "live",
        features: [
            "Multi-section landing page including About Us and Contact section",
            "Featured products section displaying selected highlighted items",
            "Dynamic product listing page rendered from external API data",
            "Product search functionality for quick item discovery",
            "Product filtering system for easier browsing",
            "Responsive design optimized for desktop and mobile devices"
        ],
        tech: [
            { name: "React", image: "/img/icons/react.svg" },
            { name: "JavaScript", image: "/img/icons/javascript.svg" },
            { name: "Tailwind CSS", image: "/img/icons/tailwindcss.svg" },
            { name: "Git", image: "/img/icons/git.svg" },
            { name: "Vercel", image: "/img/icons/vercel.svg" },

        ],
    },
];

export const CERTIFICATES: Certificate[] = [
    {
        id: "1",
        images: [
            "/img/certificates/sertificate1-page-1.jpg",
            "/img/certificates/sertificate1-page-2.jpg",
        ],
    },
    {
        id: "2",
        images: ["/img/certificates/sertificate2.jpg"],
    },
    {
        id: "3",
        images: [
            "/img/certificates/sertificate3-page-1.jpg",
            "/img/certificates/sertificate3-page-2.jpg",
        ],
    },
    {
        id: "4",
        images: ["/img/certificates/sertificate4.jpg"],
    },
    {
        id: "5",
        images: ["/img/certificates/sertificate5.jpg"],
    },
    {
        id: "6",
        images: ["/img/certificates/sertificate6.jpg"],
    },
];
