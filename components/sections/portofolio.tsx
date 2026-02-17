"use client";

import { useEffect, useState } from "react";
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
    ArrowRight,
    ZoomIn
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROJECTS, CERTIFICATES, TECH_STACKS, Project, Certificate, TechStack } from "@/lib/data";

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
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80 dark:hover:bg-black/50"
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    },
    exit: { opacity: 0, scale: 0.95 }
};

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="group relative bg-card border border-border/50 rounded-md p-2 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-accent/10 transition-[box-shadow,border-color] duration-300 flex flex-col h-full"
    >
        {/* Image Container */}
        <div className="relative rounded-md border aspect-video overflow-hidden bg-muted">
            <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Tech Badges Overlay */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20">
                        {t.name}
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

                    <a href={`/projects/${project.id}`}>
                        <Button
                            className="
            inline-flex items-center gap-1
            bg-accent text-accent-foreground
            dark:text-white
            hover:bg-accent/80 cursor-pointer px-5
            transition-all duration-300
            rounded hover:scale-110 
        "
                        >
                            Details
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </a>

                </div>
            </div>
        </div>
    </motion.div>
);

const CertificateCard = ({
    cert,
    onView,
}: {
    cert: Certificate;
    onView: (cert: Certificate) => void;
}) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="group cursor-pointer rounded-md border border-border/50 bg-card shadow-sm hover:shadow-md transition-[box-shadow,border-color] duration-300 p-3"
        onClick={() => onView(cert)}
    >
        {/* Image Wrapper */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border">
            <Image
                src={cert.images[0]}
                alt={`Certificate ${cert.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay (ONLY covers image) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                <ZoomIn className="w-12 h-12 text-white mb-2" />
                <span className="text-white text-sm font-medium tracking-wide">
                    View Certificate
                </span>
            </div>
        </div>
    </motion.div>
);


const TechCard = ({ stack }: { stack: TechStack }) => (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        whileHover={{ y: -8 }}
        className="
            cursor-pointer
            flex flex-col items-center justify-center
            gap-3 p-5
            rounded-md
            bg-card
            border border-border/50
            shadow-sm
            hover:shadow-lg hover:border-accent/80
            transition-[box-shadow,border-color] duration-300
        "
    >
        <div className="w-14 h-14 flex items-center justify-center">
            <img
                src={stack.icon}
                alt={stack.name}
                className="max-w-full max-h-full object-contain"
            />
        </div>

        <span className="font-medium text-foreground text-sm">
            {stack.name}
        </span>
    </motion.div>
)


export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState<"projects" | "tech" | "certificates">("projects");
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [showAllCerts, setShowAllCerts] = useState(false);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleView = (cert: Certificate) => {
        setCurrentIndex(0);   // RESET DULU
        setSelectedCert(cert);
    };

    const handleClose = () => {
        setSelectedCert(null);
    };

    useEffect(() => {
        if (selectedCert) {
            setCurrentIndex(0);
        }
    }, [selectedCert]);


    // Pagination Logic
    const visibleProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 6);
    const visibleCerts = showAllCerts ? CERTIFICATES : CERTIFICATES.slice(0, 6);

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
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    <AnimatePresence>
                                        {visibleProjects.map((project) => (
                                            <ProjectCard key={project.id} project={project} />
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {PROJECTS.length > 6 && (
                                    <div className="mt-12 flex justify-center">
                                        <Button

                                            onClick={() => setShowAllProjects(!showAllProjects)}
                                            className="group gap-2 rounded bg-accent hover:bg-accent/80 cursor-pointer py-5"
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
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
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
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <AnimatePresence>
                                        {visibleCerts.map((cert) => (
                                            <CertificateCard
                                                key={cert.id}
                                                cert={cert}
                                                onView={handleView}
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {CERTIFICATES.length > 6 && (
                                    <div className="mt-12 flex justify-center">
                                        <Button
                                            variant="outline"
                                            onClick={() => setShowAllCerts(!showAllCerts)}
                                            className="group gap-2 rounded bg-accent hover:bg-accent/80 cursor-pointer py-5 text-white"
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

            <AnimatePresence mode="wait">
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
                        style={{ zIndex: 9999999 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={selectedCert.id}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 text-white text-2xl font-bold hover:opacity-70 cursor-pointer transition"
                        >
                            ✕
                        </button>

                        <div className="relative max-w-5xl w-full px-6 flex flex-col items-center">

                            {/* IMAGE ANIMATION */}
                            <motion.div
                                key={currentIndex}
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative w-full h-[80vh]"
                            >
                                <Image
                                    src={selectedCert.images[currentIndex]}
                                    alt={`Certificate ${selectedCert.id}`}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* NAVIGATION ANIMATION */}
                            {selectedCert.images.length > 1 && (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                    className="mt-6 flex items-center justify-center gap-6"
                                >
                                    {/* Prev */}
                                    <button
                                        onClick={() => setCurrentIndex((prev) => prev - 1)}
                                        disabled={currentIndex === 0}
                                        className="text-white text-xl disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {"<"}
                                    </button>

                                    {/* Indicator */}
                                    <div className="px-6 py-2 bg-white/10 text-white text-sm rounded-md backdrop-blur-md">
                                        {currentIndex + 1} / {selectedCert.images.length}
                                    </div>

                                    {/* Next */}
                                    <button
                                        onClick={() => setCurrentIndex((prev) => prev + 1)}
                                        disabled={
                                            currentIndex === selectedCert.images.length - 1
                                        }
                                        className="text-white text-xl disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {">"}
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </section>
    );
}
