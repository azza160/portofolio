'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import Heading from './heading'
import { Button } from '@/components/ui/button'

export default function ContactSection() {

    // Social Media Data
    const socialLinks = [
        { icon: Github, href: "https://github.com/azza160", label: "Github" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/azza-irul-3700873b2/", label: "LinkedIn" }, // Update with real link
        { icon: Instagram, href: "https://www.instagram.com/azza0086/", label: "Instagram" }, // Update with real link
    ]

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

    return (
        <section
            id="contact"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border/20 relative overflow-hidden"
        >
            {/* Background Elements matching About Section */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Heading
                    title="LET'S WORK TOGETHER"
                    deskripsi=""
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-8 flex flex-col items-center text-center"
                >
                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
                    >
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>

                    {/* Main CTA Button */}
                    <motion.div variants={itemVariants} className="relative group">
                        {/* Glow effect for button */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-500"></div>

                        <Button
                            onClick={() => window.location.href = 'mailto:azzairul8@gmail.com'}
                            className="
                                relative
                                h-14 px-8 md:px-10
                                bg-accent text-gray-50
                                border border-border/50
                                hover:bg-accent/80 hover:text-gray-50
                                text-lg font-medium tracking-wide
                                shadow-lg rounded cursor-pointer shadow-accent/5
                                transition-all duration-300
                                hover:scale-105
                            "
                        >
                            <Mail className="w-5 h-5 mr-3 text-gray-50" />
                            Let's Connect
                            <ArrowRight className="w-5 h-5 ml-2 opacity-50 -rotate-45 group-hover:rotate-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
                        </Button>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"
                    />

                    {/* Follow Me Section */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-xl font-display font-semibold tracking-tight">
                            Follow Me
                        </h3>

                        <div className="flex gap-6 justify-center">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group relative
                                        p-4 bg-card/50 backdrop-blur-sm
                                        border border-border/50
                                        rounded-2xl
                                        shadow-sm hover:shadow
                                        transition-all duration-300
                                        hover:scale-110 hover:-rotate-3
                                        hover:bg-accent hover:border-accent
                                    "
                                    aria-label={social.label}
                                >
                                    <social.icon
                                        className="
                                            w-6 h-6 
                                            text-muted-foreground 
                                            transition-colors duration-300
                                            group-hover:text-white
                                        "
                                    />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}
