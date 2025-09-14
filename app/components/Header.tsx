import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'certifications', title: 'Certs' },
    { id: 'contact', title: 'Contact' },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const handleNavClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const sections = navLinks.map(l => l.id);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50" style={{ scaleX }} />
            <header className="fixed top-0 left-0 w-full z-40 bg-slate-900/50 backdrop-blur-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text cursor-pointer"
                            onClick={() => handleNavClick('home')}
                            data-interactive
                        >
                            AG
                        </motion.div>
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map(link => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.id) }}
                                    className={`text-lg font-medium transition-colors duration-300 relative ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                    data-interactive
                                >
                                    {link.title}
                                    {activeSection === link.id && <motion.div className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400" layoutId="underline" />}
                                </a>
                            ))}
                        </nav>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white transition-colors" data-interactive>
                                {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4 border-t border-white/10"
                    >
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.id) }}
                                className="block text-center py-3 text-lg text-gray-300 hover:bg-white/5 transition-colors"
                            >
                                {link.title}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </header>
        </>
    );
};
