'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { projects } from '@/lib/data/projects'

export default function ProjectsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    }

    return (
        <section
            id="work"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border/20"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl font-bold tracking-tight"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-muted-foreground text-lg max-w-md"
                        >
                            A selection of recent work focused on performance, accessibility, and user experience.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/30 hover:border-accent/40 hover:bg-card/80 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/5"
                                >
                                    {/* Visual Preview */}
                                    <div className="lg:col-span-5 aspect-video md:aspect-[4/3] lg:aspect-square relative overflow-hidden rounded-2xl bg-muted"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                                        <div>
                                            <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.techStack.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="px-3 py-1 text-xs font-medium bg-secondary/50 border border-border/50 rounded-full"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
