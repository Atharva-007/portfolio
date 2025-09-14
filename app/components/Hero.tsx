import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
    const handleNavClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                    {portfolioData.hero.headline.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
                >
                    {portfolioData.hero.subheadline}
                </motion.p>
                <motion.button
                    onClick={() => handleNavClick('contact')}
                    className="mt-10 px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:bg-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5, boxShadow: '0 0 30px rgba(56,189,248,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    data-interactive
                >
                    Get In Touch
                </motion.button>
            </motion.div>
        </section>
    );
};
