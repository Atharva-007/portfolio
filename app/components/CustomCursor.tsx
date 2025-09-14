import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', onMouseMove);
        document.querySelectorAll('a, button, [data-interactive]').forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.querySelectorAll('a, button, [data-interactive]').forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block"
            animate={{ x: position.x - 12, y: position.y - 12, scale: isHovering ? 2 : 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
            <div className={`w-6 h-6 rounded-full border-2 transition-colors duration-300 ${isHovering ? 'bg-white/30 border-white' : 'border-white'}`}></div>
        </motion.div>
    );
};
