'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail } from "lucide-react";

interface HeaderProps {
    isScrolled: boolean
}

const navItems = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Tentang', id: 'about' },
    { label: 'Proyek', id: 'work' },
    { label: 'Keahlian', id: 'skills' },
    { label: 'Sertifikat', id: 'sertifikat' },
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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-md border-b border-border/30 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2"
                >
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="
                w-[60px] h-10
                rounded
                bg-accent
                flex items-center justify-center
                text-accent-foreground
                font-mono font-bold text-xl
                cursor-pointer
                shadow-sm
                transition-colors duration-300
                hover:bg-accent/90
                hover:shadow-md
                text-white
                "
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        &lt;/A&gt;
                    </motion.div>

                    <span className="font-semibold text-lg hidden sm:block">
                        Azza.dev
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-sm font-medium transition-colors cursor-pointer ${activeSection === item.id
                                ? 'text-accent'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </nav>

                {/* Status & CTA */}
                <div className="flex items-center gap-3">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center"
                    >
                        <Button
                            onClick={() => scrollToSection('contact')}
                            className={`
                                relative
                                hidden md:inline-flex
                                items-center gap-2
                                px-12 py-5
                                cursor-pointer
                                bg-accent
                                text-base
                                font-semibold
                                rounded
                                border-2 border-accent
                                text-white
                                transition-all duration-300 ease-out
                                hover:scale-105
                                hover:bg-accent/90
                            `}
                        >
                            <Mail className="w-4 h-4" />
                            Kontak
                        </Button>
                    </motion.div>

                    {/* Animated Hamburger Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 z-[60] focus:outline-none cursor-pointer"
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
                            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[55] md:hidden"
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
                                        className={`text-lg font-medium text-left transition-colors ${activeSection === item.id
                                            ? 'text-accent'
                                            : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * navItems.length }}
                                    className="pt-4 border-t border-border/50"
                                >
                                    <Button
                                        onClick={() => scrollToSection('contact')}
                                        className="w-full bg-accent text-white flex rounded py-5 items-center justify-center gap-2"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Kontak
                                    </Button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
