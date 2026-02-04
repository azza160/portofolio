'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function ContactSection() {
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

    const socialLinks = [
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:hello@example.com',
            color: 'hover:text-accent',
        },
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com',
            color: 'hover:text-foreground',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            color: 'hover:text-accent',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            href: 'https://twitter.com',
            color: 'hover:text-accent',
        },
    ]

    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/20"
        >
            <div className="max-w-3xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl font-bold mb-4"
                    >
                        Let&apos;s build something great
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground mb-12 leading-relaxed"
                    >
                        I&apos;m always interested in discussing new projects, creative
                        ideas, or opportunities to make a meaningful impact. Feel free to
                        reach out—I&apos;d love to chat.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mb-12">
                        <Button
                            asChild
                            className="group bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-12 text-base font-medium inline-flex items-center gap-2"
                        >
                            <a href="mailto:hello@example.com">
                                <Mail className="w-4 h-4" />
                                Get in Touch
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center items-center gap-6"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`text-muted-foreground transition-colors ${social.color}`}
                                    aria-label={social.label}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            )
                        })}
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 pt-12 border-t border-border/20 text-center text-sm text-muted-foreground"
                    >
                        <p>© 2024 Alex. Crafted with thoughtfulness and care.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
