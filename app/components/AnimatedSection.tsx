import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const AnimatedSection = ({ children, id }: { children: React.ReactNode; id: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 75 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }}
            className="py-24 px-4 sm:px-6 lg:px-8"
        >
            {children}
        </motion.section>
    );
};
