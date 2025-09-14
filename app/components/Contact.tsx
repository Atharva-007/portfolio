import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';
import { GithubIcon, LinkedinIcon } from './icons';

export const Contact = () => (
    <AnimatedSection id="contact">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
            Get In Touch
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
            I'm open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="flex justify-center items-center gap-8">
            <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-xl text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                data-interactive
            >
                {portfolioData.contact.email}
            </motion.a>
        </div>
        <div className="flex justify-center items-center gap-8 mt-8">
            <motion.a
                href={`https://${portfolioData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                data-interactive
            >
                <GithubIcon className="w-8 h-8" />
            </motion.a>
            <motion.a
                href={`https://${portfolioData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                data-interactive
            >
                <LinkedinIcon className="w-8 h-8" />
            </motion.a>
        </div>
    </AnimatedSection>
);
