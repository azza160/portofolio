'use client'

import { motion } from 'framer-motion'
import { FolderKanban, Mail } from "lucide-react"
import { Background } from '../background'

export default function HeroSection() {


    return (
        <section
            id="home"
            aria-label="home"
            className="w-full mx-auto min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24"
        >
            {/* Minimalist background overlay if needed, otherwise rely on global background */}
            <Background />

            {/* Decorative accent - hidden on mobile */}
            <div
                className="hidden md:block absolute top-20 right-10 lg:right-20 w-4 h-4 bg-accent rounded-full opacity-60 pointer-events-none"
                aria-hidden="true"
            ></div>
            <div
                className="hidden md:block absolute bottom-40 left-8 lg:left-16 w-2 h-2 bg-accent rounded-full opacity-40 pointer-events-none"
                aria-hidden="true"
            ></div>

            <div className="max-w-6xl mx-auto text-center">
                {/* Small tag */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 md:px-4 py-1.5 md:py-2 border border-border rounded-full"
                >
                    <span
                        className="w-2 h-2 bg-accent rounded-full animate-pulse"
                        aria-hidden="true"
                    ></span>
                    <span className="text-xs md:text-sm font-medium tracking-wide text-black dark:text-primary">
                        OPEN TO OPPORTUNITIES

                    </span>
                </motion.div>

                {/* Main heading - Only h1 on page */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none mb-4 md:mb-6 uppercase text-black dark:text-primary"
                >
                    CRAFTING MODERN SYSTEMS



                    <br />
                    <span className="relative">
                        WITH <span className="text-accent">CODE</span>
                    </span>
                </motion.h1>

                {/* Role badge */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6 md:mb-8"
                >
                    <span className="text-primary text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 tracking-wide">
                        Fresh Graduate{" "}
                        <span className="text-accent" aria-hidden="true">
                            |
                        </span>{" "}
                        Full Stack Website Developer
                    </span>
                </motion.p>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8 font-light leading-relaxed px-2 sm:px-0"
                >
                    I create full stack web applications with clean code,
                    scalable architecture, and great user experience.
                </motion.p>

                {/* CTA Buttons */}
                <motion.nav
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-4"
                    aria-label="Primary actions"
                >
                    {/* Button 1: View Projects */}
                    <a
                        href="#projects"
                        className="
            relative w-full sm:w-auto
            px-8 md:px-9 py-4 md:py-4
            flex items-center justify-center gap-3
            text-sm md:text-base font-semibold
            bg-accent text-white rounded
            shadow-md shadow-accent/40
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-lg hover:shadow-accent/60
        "
                    >
                        <FolderKanban className="w-7 h-7 md:w-8 md:h-8" />
                        View Projects
                    </a>

                    {/* Button 2: Get in Touch */}
                    <a
                        href="#contact"
                        className="
            relative w-full sm:w-auto
            px-8 md:px-9 py-4 md:py-4
            flex items-center justify-center gap-3
            text-sm md:text-base font-semibold
            border-2 border-accent text-accent rounded
            transition-all duration-300 ease-out
            hover:scale-105 hover:bg-accent/10
            hover:shadow-[0_0_15px_rgba(var(--accent-rgb),0.45)]
        "
                    >
                        <Mail className="w-7 h-7 md:w-8 md:h-8" />
                        Get in Touch
                    </a>
                </motion.nav>

            </div>

            {/* Scroll indicator - hidden on very small screens */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden sm:flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce"
                aria-hidden="true"
            >
                <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-400"
                    aria-hidden="true"
                >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </motion.div>
        </section >
    )
}
