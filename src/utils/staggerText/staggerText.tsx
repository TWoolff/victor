'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useAppContext } from '@/app/context';
import css from './staggerText.module.css';

const DURATION = 0.25;
const STAGGER = 0.025;

type StaggerTextProps = {
    children: string;
};

export const StaggerText: React.FC<StaggerTextProps> = ({ children }) => {
    const { state } = useAppContext() || {};
    const controls = useAnimation();
    const letters = children.split('');

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: STAGGER,
            },
        },
    };

    const letterVariants = {
        initial: {
            y: '100%',
        },
        animate: {
            y: 0,
            transition: {
                duration: DURATION,
                ease: 'easeInOut',
            },
        },
    };

    useEffect(() => {
        if (state?.route) {
            controls.start('animate');
        }
    }, [state?.route, controls]);

    return (
        <motion.h2
            initial="initial"
            animate={controls}
            className={css.staggerText}
            variants={containerVariants}
        >
            <div className={css.letterWrapper}>
                {letters.map((l, i) => (
                    <motion.span
                        key={i}
                        className={css.letter}
                        variants={letterVariants}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className={css.letterWrapper}>
                {letters.map((l, i) => (
                    <motion.span
                        key={i}
                        className={css.letter}
                        variants={{
                            initial: {
                                y: '-100%',
                            },
                            animate: {
                                y: 0,
                                transition: {
                                    duration: DURATION,
                                    ease: 'easeInOut',
                                    delay: STAGGER * i,
                                },
                            },
                        }}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.h2>
    );
};
