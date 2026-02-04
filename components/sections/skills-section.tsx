'use client'

import { motion } from 'framer-motion'
import { Code2, Terminal, Languages } from 'lucide-react'
import Image from 'next/image'

export default function SkillsSection() {
    const skillCategories = [
        {
            id: 'tech-stack',
            title: 'Tekhnologi',
            description: 'Tekhnologi yang saya gunakan',
            icon: Code2,
            skills: [
                {
                    name: 'HTML',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
                },
                {
                    name: 'CSS',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
                },
                {
                    name: 'JavaScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                },
                {
                    name: 'React',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                },
                {
                    name: 'Next.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
                },
                {
                    name: 'Tailwind CSS',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                },
                {
                    name: 'Bootstrap',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
                },

                {
                    name: 'SQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
                },
                {
                    name: 'PHP',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
                },
                {
                    name: 'Inertia.js',
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inertiajs/inertiajs-original.svg"
                },
                {
                    name: 'Laravel',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
                },
                {
                    name: 'jQuery',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
                }




            ],
        },
        {
            id: 'software',
            title: 'Tools & Platforms',
            description: 'Tools & Platforms yang saya gunakan',
            icon: Terminal,
            skills: [
                {
                    name: 'Git',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
                },
                {
                    name: 'GitHub',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
                },
                {
                    name: 'Vercel',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
                },
                {
                    name: 'VSCode',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
                },
                {
                    name: 'Canva',
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
                },
                {
                    name: 'Microsoft Word',
                    logo: "/word.png",
                },
                {
                    name: 'Microsoft Excel',
                    logo: "/excel.png",
                },



            ],
        },

    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
        hover: {
            y: -6,
            scale: 1.05,
            transition: { duration: 0.2 },
        },
    }

    return (
        <section
            id="skills"
            className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/10"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Section Header */}
                    <motion.div variants={categoryVariants} className="mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                            Keterampilan
                        </h2>
                        <div className="w-12 h-1 bg-accent rounded-full" />
                    </motion.div>

                    {/* Vertical Layout - Single Column */}
                    <div className="flex flex-col gap-16">
                        {skillCategories.map((category) => {
                            const IconComponent = category.icon
                            return (
                                <motion.div
                                    key={category.id}
                                    variants={categoryVariants}
                                    className="group"
                                >
                                    {/* Category Header */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-card border border-border/30 group-hover:border-accent/50 transition-colors duration-300">
                                                <IconComponent
                                                    size={24}
                                                    className="text-accent"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-semibold">
                                                    {category.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills Grid - 2-3 columns on desktop, flexible on mobile */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {category.skills.map((skill, idx) => (
                                            <motion.div
                                                key={skill.name}
                                                variants={skillVariants}
                                                whileHover="hover"
                                                transition={{ delay: idx * 0.03 }}
                                                className="group/skill"
                                            >
                                                <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-card/80 to-card border border-border/30 hover:border-accent/40 transition-all duration-300 flex flex-col items-center justify-center text-center hover:shadow-lg hover:shadow-accent/10">
                                                    {/* Glow effect on hover */}
                                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 bg-accent/5 transition-opacity duration-300" />

                                                    {/* Logo Container */}
                                                    <motion.div
                                                        className="relative mb-4 w-12 h-12 flex items-center justify-center"
                                                        whileHover={{
                                                            scale: 1.15,
                                                            rotate: 5,
                                                        }}
                                                    >
                                                        <Image
                                                            src={skill.logo || "/placeholder.svg"}
                                                            alt={skill.name}
                                                            width={48}
                                                            height={48}
                                                            className="w-full h-full object-contain"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none'
                                                            }}
                                                        />
                                                    </motion.div>

                                                    {/* Skill Name */}
                                                    <span className="relative text-sm font-semibold text-foreground">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
