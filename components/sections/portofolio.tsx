"use client";

import { useState } from "react";
import Heading from "./heading";
import { Background } from "../background";
import { motion, AnimatePresence } from "framer-motion";
import {
    FolderKanban,
    Layers,
    Award,
    ExternalLink,
    Lock,
    Clock,
    Maximize2,
    X,
    ChevronDown,
    ChevronUp,
    Cpu,
    Database,
    Globe,
    Layout,
    Smartphone,
    Code,
    Eye,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Types ---
type Project = {
    id: string;
    title: string;
    description: string; // Short description
    image: string;
    liveUrl?: string;
    status?: "live" | "private" | "coming_soon";
    tech: string[];
};

type Certificate = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    image: string;
};

type TechStack = {
    id: string;
    name: string;
    icon: React.ElementType;
    category: "frontend" | "backend" | "tools";
};

// --- Dummy Data ---
const PROJECTS: Project[] = [
    {
        id: "1",
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.",
        image: "/img/portofolio.jpg",
        liveUrl: "https://example.com",
        status: "live",
        tech: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
        id: "2",
        title: "Social Media App",
        description: "A modern social platform featuring real-time messaging, post sharing, and user interactions.",
        image: "/img/project.2.jpg",
        liveUrl: "https://example.com",
        status: "live",
        tech: ["React", "Node.js", "Socket.io"],
    },
    {
        id: "3",
        title: "Portfolio v1",
        description: "My previous portfolio website showcasing my early work and development journey.",
        image: "/img/project.3.jpg",
        status: "private",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "4",
        title: "Task Management Tool",
        description: "A productivity tool for teams to organize tasks, set deadlines, and track progress efficiently.",
        image: "/img/portofolio.jpg",
        status: "coming_soon",
        tech: ["Vue.js", "Firebase"],
    },
    {
        id: "5",
        title: "Weather Forecast App",
        description: "Minimalist weather application providing accurate forecasts and location-based weather data.",
        image: "/img/portofolio.jpg",
        liveUrl: "https://example.com",
        status: "live",
        tech: ["React Native", "WeatherAPI"],
    },
];

const CERTIFICATES: Certificate[] = [
    {
        id: "1",
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2025",
        image: "/img/sertificate.jpg",
    },
    {
        id: "2",
        title: "React - The Complete Guide",
        issuer: "Academind",
        date: "2024",
        image: "/img/sertificate.jpg",
    },
    {
        id: "3",
        title: "Advanced CSS and Sass",
        issuer: "Coursera",
        date: "2024",
        image: "/img/sertificate.jpg",
    },
    {
        id: "4",
        title: "JavaScript Algorithms",
        issuer: "FreeCodeCamp",
        date: "2023",
        image: "/img/sertificate.jpg",
    },
];

const TECH_STACKS: TechStack[] = [
    { id: "1", name: "React", icon: Code, category: "frontend" },
    { id: "2", name: "Next.js", icon: Globe, category: "frontend" },
    { id: "3", name: "TypeScript", icon: Code, category: "frontend" },
    { id: "4", name: "Tailwind CSS", icon: Layout, category: "frontend" },
    { id: "5", name: "Node.js", icon: Cpu, category: "backend" },
    { id: "6", name: "PostgreSQL", icon: Database, category: "backend" },
    { id: "7", name: "React Native", icon: Smartphone, category: "frontend" },
    { id: "8", name: "Prisma", icon: Database, category: "backend" },
];

// --- Components ---

const TabButton = ({
    active,
    onClick,
    children
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode
}) => (
    <button
        onClick={onClick}
        className={cn(
            "relative flex-1 px-4 py-4 cursor-pointer text-sm sm:text-base font-medium transition-all duration-300 rounded-md flex flex-col items-center justify-center gap-2",
            active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
        )}
    >
        {active && (
            <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-accent rounded-lg shadow-md shadow-accent/25"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
        )}

        <span className="relative z-10 flex flex-col items-center gap-1 dark:text-white">
            {children}
        </span>
    </button>
);

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="group relative bg-card border border-border/50 rounded-md p-2 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col h-full"
    >
        {/* Image Container */}
        <div className="relative rounded-md border  aspect-video overflow-hidden bg-muted">
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Tech Badges Overlay */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20">
                        {t}
                    </span>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-xl font-bold font-display mb-2 group-hover:text-accent transition-colors">
                {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.description}
            </p>

            {/* Action Button */}
            <div className="mt-auto">
                <div className="flex justify-between items-center">
                    {project.status === "live" ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                        >
                            Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                    ) : project.status === "private" ? (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground/60 cursor-not-allowed">
                            <Lock className="w-4 h-4" /> Private Repository
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground/60 cursor-not-allowed">
                            <Clock className="w-4 h-4" /> Coming Soon
                        </span>
                    )}

                    <Button

                        className="
        inline-flex items-center gap-1
        bg-accent text-accent-foreground
        dark:text-white
        hover:opacity-90 px-5
        transition-all duration-300
        rounded
    "
                    >
                        Details
                        <ArrowRight className="w-4 h-4" />
                    </Button>

                </div>
            </div>
        </div>
    </motion.div>
);

const CertificateCard = ({
    cert,
    onView
}: {
    cert: Certificate;
    onView: (cert: Certificate) => void;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative cursor-pointer rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300"
        onClick={() => onView(cert)}
    >
        <div className="aspect-[4/3] relative bg-muted">
            <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <Maximize2 className="w-8 h-8 mb-2 drop-shadow-md" />
                <span className="text-sm font-medium tracking-wide">View Certificate</span>
            </div>
        </div>
        <div className="p-4 border-t border-border/50">
            <h4 className="font-semibold text-foreground line-clamp-1">{cert.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.date}</p>
        </div>
    </motion.div>
);

const TechCard = ({ stack }: { stack: TechStack }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
    >
        <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
            <stack.icon className="w-6 h-6" />
        </div>
        <span className="font-medium text-foreground">{stack.name}</span>
    </motion.div>
);

export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState<"projects" | "tech" | "certificates">("projects");
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllCerts, setShowAllCerts] = useState(false);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    // Pagination Logic
    const visibleProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 3);
    const visibleCerts = showAllCerts ? CERTIFICATES : CERTIFICATES.slice(0, 3);

    return (
        <section id="portofolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border/20 overflow-hidden relative min-h-screen">
            <Background />

            <div className="max-w-6xl mx-auto relative z-10">
                <Heading title="PORTFOLIO" deskripsi="This section showcases my projects, certifications, and technical skills." />

                {/* --- Tabs --- */}
                <div className="flex justify-center mb-8 mt-12">
                    <div className="
    flex w-full gap-3 p-1.5
    bg-gray-50 dark:bg-gray-900
    lg:py-3 lg:px-3 py-2 px-2
    border border-border 
  
    rounded-md
">


                        <TabButton
                            active={activeTab === "projects"}
                            onClick={() => setActiveTab("projects")}
                        >
                            <FolderKanban className="w-4 h-4 sm:w-5 sm:h-5" />
                            Projects
                        </TabButton>
                        <TabButton
                            active={activeTab === "tech"}
                            onClick={() => setActiveTab("tech")}
                        >
                            <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                            Tech Stacks
                        </TabButton>
                        <TabButton
                            active={activeTab === "certificates"}
                            onClick={() => setActiveTab("certificates")}
                        >
                            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                            Certificates
                        </TabButton>
                    </div>
                </div>

                {/* --- Content Area --- */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">

                        {/* PROJECTS TAB */}
                        {activeTab === "projects" && (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {visibleProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </div>

                                {PROJECTS.length > 3 && (
                                    <div className="mt-12 flex justify-center">
                                        <Button
                                            variant="outline"
                                            onClick={() => setShowAllProjects(!showAllProjects)}
                                            className="group gap-2 border-accent/20 hover:border-accent hover:bg-accent/5"
                                        >
                                            {showAllProjects ? "See Less" : "See More"}
                                            {showAllProjects ? (
                                                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* TECH STACKS TAB */}
                        {activeTab === "tech" && (
                            <motion.div
                                key="tech"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                            >
                                {TECH_STACKS.map((stack) => (
                                    <TechCard key={stack.id} stack={stack} />
                                ))}
                            </motion.div>
                        )}

                        {/* CERTIFICATES TAB */}
                        {activeTab === "certificates" && (
                            <motion.div
                                key="certificates"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {visibleCerts.map((cert) => (
                                        <CertificateCard
                                            key={cert.id}
                                            cert={cert}
                                            onView={setSelectedCert}
                                        />
                                    ))}
                                </div>

                                {CERTIFICATES.length > 3 && (
                                    <div className="mt-12 flex justify-center">
                                        <Button
                                            variant="outline"
                                            onClick={() => setShowAllCerts(!showAllCerts)}
                                            className="group gap-2 border-accent/20 hover:border-accent hover:bg-accent/5"
                                        >
                                            {showAllCerts ? "See Less" : "See More"}
                                            {showAllCerts ? (
                                                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* --- Certificate Modal --- */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                                onClick={() => setSelectedCert(null)}
                            >
                                <X className="w-6 h-6" />
                            </Button>

                            <Image
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                fill
                                className="object-contain"
                            />

                            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                                <p className="text-sm opacity-80">{selectedCert.issuer} • {selectedCert.date}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
