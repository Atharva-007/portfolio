import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';
import { BriefcaseIcon } from './icons';

export const Experience = () => (
    <AnimatedSection id="experience">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
            Professional Experience
        </h2>
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 w-0.5 h-full bg-white/10 -translate-x-1/2"></div>
            {portfolioData.experience.map((job, index) => (
                <motion.div
                    key={index}
                    className="relative mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                            <div className="p-5 bg-slate-800/50 border border-white/10 rounded-xl shadow-lg">
                                <p className="font-bold text-lg text-cyan-400">{job.role}</p>
                                <p className="font-semibold text-white mb-2">{job.company}</p>
                                <p className="text-sm text-gray-400">{job.description}</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <div className="absolute top-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-white/10">
                                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.7)]">
                                    <BriefcaseIcon className="w-5 h-5 text-slate-900" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={`absolute top-1/2 -translate-y-1/2 font-mono text-sm text-gray-500 ${index % 2 === 0 ? 'right-1/2 translate-x-[calc(100%+2rem)]' : 'left-1/2 -translate-x-[calc(100%+2rem)]'}`}>
                        {job.period}
                    </p>
                </motion.div>
            ))}
        </div>
    </AnimatedSection>
);
