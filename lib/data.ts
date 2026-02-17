
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
        title: "E-Commerce Dashboard",
        description: "project ini adalah platform pembelajaran kosakata bahasa jepang untuk pemula,yang menerapkan sistem gamifikasi agar membuat proses belajar lebih menarik.",
        images: ["/img/portofolio.jpg", "/img/project.2.jpg", "/img/project.3.jpg", "/img/portofolio.jpg", "/img/project.2.jpg"],
        liveUrl: "https://example.com",
        status: "live",
        features: [
            "Real-time analytics dashboard with chart visualization",
            "Product management with image upload and inventory tracking",
            "Order processing workflow with status updates",
            "User role management (Admin, Editor, Viewer)"
        ],
        tech: [
            { name: "Next.js", image: "/img/icons/nextjs.svg" },
            { name: "TypeScript", image: "/img/icons/typescript.svg" },
            { name: "Tailwind", image: "/img/icons/tailwindcss.svg" },
            { name: "Laravel", image: "/img/icons/laravel.svg" },
            { name: "PostgreSQL", image: "/img/icons/postgresql.svg" } // Added example DB
        ],
    },
    {
        id: "2",
        title: "Social Media App",
        description: "A modern social platform featuring real-time messaging, post sharing, and user interactions.",
        images: ["/img/project.2.jpg", "/img/portofolio.jpg"],
        liveUrl: "https://example.com",
        status: "live",
        features: [
            "Real-time chat messaging using Socket.io",
            "Feed with infinite scroll and post interactions (like, comment)",
            "User profiles with customizable avatars and bios",
            "Notification system for interactions"
        ],
        tech: [
            { name: "React", image: "/img/icons/react.svg" },
            { name: "Node.js", image: "/img/icons/nodejs.svg" },
            { name: "Socket.io", image: "/img/icons/socketio.svg" },
            { name: "MongoDB", image: "/img/icons/mongodb.svg" }
        ],
    },
    {
        id: "3",
        title: "Portfolio v1",
        description: "My previous portfolio website showcasing my early work and development journey.",
        images: ["/img/project.3.jpg"],
        status: "private",
        features: [
            "Simple and clean layout",
            "Contact form with email integration",
            "Project gallery with hover effects"
        ],
        tech: [
            { name: "HTML", image: "/img/icons/html.svg" },
            { name: "CSS", image: "/img/icons/css.svg" },
            { name: "JavaScript", image: "/img/icons/javascript.svg" }
        ],
    },
    {
        id: "4",
        title: "Task Management Tool",
        description: "A productivity tool for teams to organize tasks, set deadlines, and track progress efficiently.",
        images: ["/img/portofolio.jpg"],
        status: "coming_soon",
        features: [
            "Drag and drop task organization (Kanban)",
            "Team collaboration with comments",
            "Deadline reminders and calendar view"
        ],
        tech: [
            { name: "Vue.js", image: "/img/icons/vue.svg" },
            { name: "Firebase", image: "/img/icons/firebase.svg" }
        ],
    },
    {
        id: "5",
        title: "Weather Forecast App",
        description: "Minimalist weather application providing accurate forecasts and location-based weather data.",
        images: ["/img/portofolio.jpg"],
        liveUrl: "https://example.com",
        status: "live",
        features: [
            "Location-based weather detection",
            "7-day forecast visualization",
            "Dark/Light mode support"
        ],
        tech: [
            { name: "React Native", image: "/img/icons/react.svg" },
            { name: "WeatherAPI", image: "/img/icons/api.svg" }
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
