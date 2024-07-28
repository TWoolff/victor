'use client'
import { useEffect, useRef } from 'react';
import css from './screenFitText.module.css';

type ScreenFitTextProps = {
    text: String
};

export const ScreenFitText: React.FC<ScreenFitTextProps> = ({text}) => {
    const containerRef = useRef(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        resizeText();
        window.addEventListener('resize', resizeText);
        return () => {
            window.removeEventListener('resize', resizeText);
        };
    }, []);

    const resizeText = () => {
        const container = containerRef.current as unknown as HTMLDivElement;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + 'px';

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + 'px';
    };

    return (
        <div className={css.fitText} ref={containerRef}>
            <h1 ref={textRef}>
                {text}
            </h1>
        </div>
    );
};
