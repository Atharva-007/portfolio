import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const Skills = () => (
    <AnimatedSection id="skills">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
            Technical Skills
        </h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {portfolioData.skills.map((skill) => (
                <motion.div
                    key={skill}
                    className="bg-slate-800/50 text-gray-300 text-lg font-medium px-5 py-3 rounded-lg border border-white/10"
                    whileHover={{ scale: 1.1, y: -5, color: '#22d3ee' }}
                    data-interactive
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    </AnimatedSection>
);
