'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
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

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 border-t border-border/20"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.div variants={categoryVariants} className="mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                            Tentang Saya
                        </h2>
                        <div className="w-12 h-1 bg-accent rounded-full" />
                    </motion.div>

                    <div className="space-y-8">
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Saya adalah seorang{' '}
                            <span className="font-semibold text-foreground">
                                junior web developer
                            </span>{' '}
                            berusia 22 tahun yang baru menyelesaikan pendidikan dan memiliki ketertarikan
                            besar dalam membangun aplikasi web dengan antarmuka yang rapi, konsisten,
                            dan mudah digunakan.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Saya terbiasa bekerja menggunakan{' '}
                            <span className="font-semibold text-foreground">
                                Laravel dan React dengan Inertia.js
                            </span>{' '}
                            untuk membangun aplikasi web yang terstruktur, dengan fokus pada pemisahan
                            logika yang jelas antara backend dan frontend tanpa memisahkan project
                            secara penuh.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Saya menikmati proses belajar hal baru, terutama ketika dihadapkan pada{' '}
                            <span className="font-semibold text-foreground">
                                tantangan nyata atau permasalahan teknis
                            </span>{' '}
                            yang memaksa saya untuk berpikir, mencoba, dan memahami sesuatu lebih dalam.
                            Bagi saya, tantangan adalah pemicu utama untuk berkembang sebagai developer.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Selain pengembangan web, saya juga memiliki minat di bidang{' '}
                            <span className="font-semibold text-foreground">
                                bahasa Jepang
                            </span>
                            . Ketertarikan ini membantu saya melatih konsistensi belajar dan memperluas
                            cara pandang, yang secara tidak langsung juga memengaruhi cara saya
                            mendekati proses pemecahan masalah dalam dunia pemrograman.
                        </motion.p>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
