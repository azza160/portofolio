'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Background } from '../background'

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
        <section className="hero-gradient  min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden" id="beranda">
            {/* Minimalist background overlay if needed, otherwise rely on global background */}
            <Background />
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


            </motion.div>
        </section>
    )
}
