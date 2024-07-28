'use client';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/app/context'

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({children, href, ...props}) => {
    const router = useRouter();
    const { dispatch } = useAppContext() || {};

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const body = document.querySelector('body');
        body?.classList.add('page-transition');
        await sleep(500);
        router.push(href);
        await sleep(500);
        dispatch && dispatch({ type: 'ROUTE_CHANGE', payload: href  });
        body?.classList.remove('page-transition');
    };

    return (
        <Link {...props} href={href} onClick={handleTransition}>
            {children}
        </Link>
    );
};
