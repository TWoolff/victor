import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { AppProvider } from '@/app/context';
import '@/styles/index.css';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
    title: 'Victor Pilely',
    description: 'Portfolio',
};

const RootLayout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='en'>
            <body>
				<AppProvider>
					<Header />
					<main className='grid'>
						{children}
					</main>
					<Footer />
				</AppProvider>
			</body>
        </html>
    );
}

export default RootLayout;
