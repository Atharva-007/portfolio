import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { CodeIcon, ExternalLinkIcon } from './icons';

interface Project {
    name: string;
    description: string;
    stack: string[];
    codeLink: string;
    liveLink?: string;
}

export const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGithubProjects = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://api.github.com/users/Atharva-007/repos?sort=updated&direction=desc');
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();

                const formattedProjects = data
                    .filter((repo: any) => !repo.fork)
                    .slice(0, 4)
                    .map((repo: any) => ({
                        name: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
                        description: repo.description || 'No description provided.',
                        stack: repo.language ? [repo.language] : [],
                        codeLink: repo.html_url.replace('https://', ''),
                        liveLink: repo.homepage || ''
                    }));

                setProjects(formattedProjects);
            } catch (error) {
                console.error("Error fetching GitHub projects:", error);
                setProjects([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGithubProjects();
    }, []);

    return (
        <AnimatedSection id="projects">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
                Featured Projects
            </h2>
            {isLoading ? (
                <div className="text-center text-gray-400">Fetching latest projects from GitHub...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <motion.div
                            key={project.name}
                            className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden flex flex-col"
                            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)' }}
                            data-interactive
                        >
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="bg-fuchsia-500/10 text-fuchsia-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-900/50 p-4 flex justify-end gap-4 border-t border-white/10">
                                <a href={`https://${project.codeLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" data-interactive>
                                    <CodeIcon className="w-5 h-5" /> Code
                                </a>
                                {project.liveLink && (
                                    <a href={`https://${project.liveLink}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors" data-interactive>
                                        <ExternalLinkIcon className="w-5 h-5" /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </AnimatedSection>
    );
};
