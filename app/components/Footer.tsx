import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => (
    <footer className="text-center py-8 border-t border-white/10 mt-20">
        <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {portfolioData.name}. Built with React & Framer Motion.
        </p>
    </footer>
);
