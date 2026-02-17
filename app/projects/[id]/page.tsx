"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* dots */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <Background />
            </div>

            <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">Project</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium truncate max-w-[200px]">{project.title}</span>
                </nav>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-foreground mb-4">
                        {project.title}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl text-justify">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="gap-2 bg-accent text-accent-foreground rounded py-5 cursor-pointer shadow-lg shadow-accent/25
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-accent/40 hover:bg-accent/80">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </Button>
                            </a>
                        )}
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="gap-2">
                                    <Github className="w-4 h-4" /> Source Code
                                </Button>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Gallery */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img, idx) => {
                            const isOdd = project.images.length % 2 !== 0;
                            const isFirstLarge = idx === 0 && isOdd;

                            return (
                                <div
                                    key={idx}
                                    className={isFirstLarge ? "md:col-span-2" : ""}
                                >
                                    <div className="p-2 bg-card rounded transition-all duration-300 ease-out hover:scale-[1.02]">
                                        <div
                                            className={`relative rounded border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${isFirstLarge
                                                ? "aspect-[21/9]"   // lebih wide, tidak terlalu tinggi
                                                : "aspect-video"
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </motion.section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Features */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.section
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-accent rounded-full"></span>
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-4 rounded bg-secondary/30 border border-border">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                        <span className="text-muted-foreground leading-relaxed text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    </div>

                    {/* Tech Stack - Redesigned */}
                    <div className="lg:col-span-1">
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="sticky top-24"
                        >
                            <h2 className="text-2xl font-bold font-display mb-6">Technologies Used</h2>

                            <div className="grid grid-cols-2 gap-3">
                                {project.tech.map((t, idx) => (
                                    <div
                                        key={idx}
                                        className="
                                            group flex flex-col items-center justify-center gap-3 p-4 
                                            rounded border border-border/50 bg-card/50 backdrop-blur-sm
                                            hover:border-accent/50 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10
                                            transition-all duration-300 cursor-default
                                        "
                                    >
                                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors text-center">
                                            {t.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </div>

            </main>
        </div>
    );
}
