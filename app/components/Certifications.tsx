import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';
import { AwardIcon } from './icons';

export const Certifications = () => (
    <AnimatedSection id="certifications">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
            Certifications
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
            {portfolioData.certifications.map((cert, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-lg border border-white/10"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="text-cyan-400">
                        <AwardIcon className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">{cert.name}</h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </AnimatedSection>
);
