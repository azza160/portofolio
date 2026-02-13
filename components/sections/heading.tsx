"use client";

import { motion } from "framer-motion";



export default function Heading({ title, deskripsi }: { title: string, deskripsi: string }) {
    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <motion.div variants={categoryVariants} className="lg:mb-20 mb-0">
            <h2 className="text-4xl sm:text-5xl text-center font-bold mb-1 text-balance">
                {title}
            </h2>
            <p className="text-center text-muted-foreground mb-2 max-w-[380px] lg:max-w-[400px] mx-auto">
                {deskripsi}
            </p>
            <div className="w-[100px] h-1 bg-accent rounded-full mx-auto mb-2" />
        </motion.div>
    );
}
