'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail } from "lucide-react";

interface HeaderProps {
    isScrolled: boolean
}

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'work' },
    { label: 'Skills', id: 'skills' },
]

export default function Header({ isScrolled }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    // IntersectionObserver for active section tracking
    useEffect(() => {
        const observers: IntersectionObserver[] = []

        const options = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of current viewport
            threshold: 0
        }

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, options)

        navItems.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
            }
        })

        // Also observe 'contact' if needed
        const contactSection = document.getElementById('contact')
        if (contactSection) observer.observe(contactSection)

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-gray-50/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-border/30 dark:border-border/70 shadow-sm dark:shadow-lg'
                    : 'bg-transparent dark:bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-1 text-2xl font-extrabold tracking-tight group"
                        aria-label="Azza - Home"
                    >
                        <span
                            className="text-black dark:text-primary group-hover:text-accent transition-colors duration-300 dark:group-hover:text-accent
"
                            aria-hidden="true"
                        >
                            &lt;
                        </span>
                        <span className="relative">
                            <span className="text-accent font-extrabold">Azza</span>
                            <span
                                className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                aria-hidden="true"
                            ></span>
                        </span>
                        <span
                            className="text-black dark:text-primary group-hover:text-accent transition-colors duration-300 dark:group-hover:text-accent
"
                            aria-hidden="true"
                        >
                            /&gt;
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm 2xl:text-base font-medium transition-colors cursor-pointer ${activeSection === item.id
                                    ? 'text-accent'
                                    : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>
                </div>

            </motion.header>

            {/* Fixed Mobile Hamburger Container */}
            <div className="fixed top-0 right-0 z-[70] md:hidden h-16 flex items-center px-4 sm:px-6">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-10 h-10 focus:outline-none cursor-pointer"
                >
                    {/* Top line */}
                    <motion.span
                        animate={isOpen ? { rotate: 45 } : { rotate: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-foreground -translate-x-1/2"
                    />

                    {/* Middle line */}
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-foreground -translate-x-1/2"
                    />

                    {/* Bottom line */}
                    <motion.span
                        animate={isOpen ? { rotate: -45 } : { rotate: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-foreground -translate-x-1/2"
                    />
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm z-[55] dark:bg-gray-900/60 md:hidden"
                        />

                        {/* Side Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[70%] max-w-xs bg-background border-l border-border/50 z-[56] p-8 pt-24 md:hidden shadow-2xl"
                        >
                            <nav className="flex flex-col gap-6">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-lg font-medium text-left transition-colors cursor-pointer ${activeSection === item.id
                                            ? 'text-accent'
                                            : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
