'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

    useEffect(() => {
        // Cek localStorage atau default ke 'dark'
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const initialTheme = storedTheme || 'dark'

        setTheme(initialTheme)
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(nextTheme)
        localStorage.setItem('theme', nextTheme)

        if (nextTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    if (!theme) return null

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-accent backdrop-blur-md border border-white/20 shadow-2xl dark:bg-accent dark:border-white/10 group overflow-hidden cursor-pointer"
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6">
                <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                        <motion.div
                            key="sun"
                            initial={{ y: 20, opacity: 0, rotate: -45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: 45 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center text-white"
                        >
                            <Sun className="w-6 h-6 fill-current" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ y: 20, opacity: 0, rotate: -45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: 45 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center text-white"
                        >
                            <Moon className="w-6 h-6 fill-current" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
    )
}
