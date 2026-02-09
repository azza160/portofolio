'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const Background = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

            {/* Cyan Blob */}
            <motion.div
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full 
        bg-cyan-400/20 blur-[120px] 
        dark:bg-cyan-500/40 dark:blur-[100px]"
            />

            {/* Purple Blob */}
            <motion.div
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 40, -30, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] -left-[15%] w-[70%] h-[70%] rounded-full 
        bg-purple-500/15 blur-[120px] 
        dark:bg-purple-600/35 dark:blur-[105px]"
            />

            {/* Pink Blob */}
            <motion.div
                animate={{
                    x: [0, 30, -40, 0],
                    y: [0, 60, -20, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full 
        bg-pink-400/10 blur-[140px] 
        dark:bg-pink-500/20 dark:blur-[120px]"
            />


            {/* Bottom Gradient - More smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-48 
    bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent 
    dark:from-gray-900 dark:via-gray-900/90" />

            {/* Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-24 
    bg-gradient-to-b from-gray-50 to-transparent 
    dark:from-gray-900" />

        </div>

    )
}
