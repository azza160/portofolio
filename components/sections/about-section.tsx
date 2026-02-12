'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Heading from './heading'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Instagram, ArrowRight, Quote, Download } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
    const [isImageHovered, setIsImageHovered] = useState(false)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    // Social Media Data
    const socialLinks = [
        { icon: Github, href: "https://github.com/azza160", label: "Github" },
        { icon: Linkedin, href: "#", label: "LinkedIn" }, // Update with real link
        { icon: Instagram, href: "#", label: "Instagram" }, // Update with real link
    ]

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border/20 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading Block - Unchanged as requested */}
                <Heading title="ABOUT ME" />

                <motion.div
                    className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Left Column (Desktop) / Bottom (Mobile) - Text Content */}
                    <div className="order-2 lg:order-1 space-y-8">

                        {/* Greeting & Intro */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h3 className="text-4xl lg:text-5xl font-display font-bold tracking-tight">
                                Hello, I'm <span className="text-accent relative inline-block">
                                    Azza
                                    <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 -rotate-2 rounded-full"></span>
                                </span>
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed  text-justify">
                                A <span className="font-semibold text-accent">22-year-old junior web developer</span> with a strong attention to detail and a focus on quality. I build web applications that not only work reliably, but also deliver clean interfaces and enjoyable user experiences. I’m a hardworking learner who enjoys tackling new challenges, and I pay close attention to every detail—ensuring each website is responsive across devices and optimized for performance.
                            </p>

                        </motion.div>

                        {/* Quote Card */}
                        <motion.div
                            variants={itemVariants}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative p-6 rounded bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                                <Quote className="w-8 h-8 text-primary/40 mb-3" />
                                <blockquote className="text-lg font-medium italic text-foreground/90">
                                    "I believe good websites are built through attention to detail, continuous learning, and thoughtful problem-solving."
                                </blockquote>
                            </div>
                        </motion.div>

                        {/* Button & Socials */}
                        <motion.div variants={itemVariants} className="flex flex-col  sm:flex-row gap-6 items-center  pt-2">
                            <Button
                                className="
        group relative w-fit
        rounded px-8 py-7 sm:py-6
        text-base font-semibold
        bg-accent text-white
        w-full sm:w-auto
        shadow-lg shadow-accent/25
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-accent/40
    "
                            >
                                Download CV
                                <Download
                                    className="
            ml-2 w-5 h-5
            transition-transform duration-300
            group-hover:translate-y-0.5
        "
                                />
                            </Button>

                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
        p-3 bg-card
        border border-border/50
        rounded-full
        shadow-sm hover:shadow
        transition-all duration-300
        hover:scale-110 hover:-rotate-3
        hover:bg-accent
        group
    "
                                        aria-label={social.label}
                                    >
                                        <social.icon
                                            className="
            w-5 h-5
            text-muted-foreground
            transition-colors
            group-hover:text-white
        "
                                        />
                                    </a>


                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (Desktop) / Top (Mobile) - Photo & Accessories */}
                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end py-10 lg:py-0">
                        <motion.div
                            variants={itemVariants}
                            className="relative w-full max-w-md aspect-square group"
                            onHoverStart={() => setIsImageHovered(true)}
                            onHoverEnd={() => setIsImageHovered(false)}
                        >
                            {/* Decorative Background Glows */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10 pointer-events-none" />

                            {/* Orbital Decoration - Modern Element */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-10 scale-90 group-hover:scale-100 transition-transform duration-1000 pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-accent/10 rounded-full -z-10 scale-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                            {/* Stacked Cards Background Layers */}
                            {/* Bottom Layer */}
                            <motion.div
                                className="hidden sm:block absolute inset-0 bg-muted/80 dark:bg-muted/20 rounded-[2rem] -rotate-6 translate-x-4 translate-y-4 -z-20 border-4 border-card shadow-sm"
                                initial={false}
                                animate={
                                    isImageHovered
                                        ? { rotate: 0, x: 0, y: 0, opacity: 0, scale: 1.02 }
                                        : { rotate: -6, x: 24, y: 24, opacity: 1, scale: 0.95 }
                                }
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 28,
                                    mass: 0.9,
                                }}
                            />
                            {/* Middle Layer */}
                            <motion.div
                                className="hidden sm:block absolute inset-0 bg-muted/80 dark:bg-muted/20 rounded-[2rem] -rotate-3 translate-x-2 translate-y-2 -z-10 border-4 border-card shadow-sm"
                                initial={false}
                                animate={
                                    isImageHovered
                                        ? { rotate: 0, x: 0, y: 0, opacity: 0, scale: 1.01 }
                                        : { rotate: -3, x: 12, y: 12, opacity: 1, scale: 0.98 }
                                }
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.85,
                                }}
                            />

                            {/* Main Image Container */}
                            <motion.div
                                className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl z-10"
                                initial={false}
                                animate={{ rotate: 3 }}
                                whileHover={{ rotate: 0 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                            >
                                {/* Dynamic Gradient Overlay - Disappears on Hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"
                                    initial={false}
                                    whileHover={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <Image
                                    src="/img/profile.png"
                                    alt="Azza"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Content on Image - Location Text */}
                                <div className="absolute bottom-8 left-8 z-20 text-white group-hover:opacity-0 transition-opacity duration-300">
                                    <p className="text-xs font-medium tracking-[0.2em] opacity-70 mb-1">BASED IN</p>
                                    <p className="text-2xl font-bold tracking-tight">Indonesia</p>
                                </div>
                            </motion.div>

                            {/* Floating Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-primary/10 rounded-full animate-[spin_12s_linear_infinite] pointer-events-none" />
                            <div className="absolute bottom-1/4 -left-12 w-8 h-8 flex flex-wrap gap-1 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                                ))}
                            </div>

                            {/* Highlight Marker */}
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
