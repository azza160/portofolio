'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section className="hero-gradient min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden" id="beranda">
            {/* Gradient background elements */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto w-full"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6"
                >
                    Membangun website yang{' '}
                    <span className="text-accent">rapi, responsif</span>, dan mudah digunakan
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                >
                    Saya menggabungkan desain yang fungsional dengan pengembangan yang terstruktur
                    untuk menghasilkan website yang tidak hanya terlihat baik, tetapi juga nyaman
                    dan efisien saat digunakan.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                    <Button
                        onClick={() => scrollToSection('work')}
                        className="group bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-8 h-12 text-base font-medium inline-flex items-center gap-2"
                    >
                        Lihat Proyek
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        onClick={() => scrollToSection('contact')}
                        variant="outline"
                        className="rounded-md px-8 h-12 text-base font-medium border-border/50 hover:bg-secondary/50"
                    >
                        Hubungi Saya
                    </Button>
                </motion.div>

                {/* Abstract visual element */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 relative w-full h-80"
                >
                    <div className="absolute inset-0 rounded-2xl border border-border/20 bg-gradient-to-br from-secondary/5 to-accent/5 overflow-hidden">
                        {/* Animated grid pattern */}
                        <svg
                            className="absolute inset-0 w-full h-full opacity-20"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <pattern
                                    id="grid"
                                    width="10"
                                    height="10"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 10 0 L 0 0 0 10"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>

                        {/* Floating elements */}
                        <motion.div
                            className="absolute top-8 left-8 w-12 h-12 border border-accent/30 rounded-lg"
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'easeInOut',
                            }}
                        />
                        <motion.div
                            className="absolute bottom-12 right-12 w-16 h-16 border-2 border-accent/20 rounded-full"
                            animate={{
                                y: [0, 20, 0],
                                x: [0, -15, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'easeInOut',
                            }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-8 h-8 bg-accent/20 rounded-lg transform -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
