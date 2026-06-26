import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import MobileMenu from '@/components/MobileMenu';

export const metadata: Metadata = {
  title: 'Jateen Mohanty - Product Designer',
  description:
    'Portfolio for Jateen Mohanty, a product designer and AI builder based in Bangalore.',
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://jateenmohanty2003.github.io/portfolio')
      : new URL('http://localhost:3000/'), // Required for absolute image paths
  openGraph: {
    images: [
      {
        url: '/Graph_URL _ Cover.png', // Path relative to public/ folder, or absolute URL
        width: 1200,
        height: 630,
        alt: 'My Website Preview',
      },
    ],
  },
};
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`h-full antialiased`}>
      <body className='min-h-full'>
        <SmoothScroll />
        <header className='sticky top-0 z-10 h-16 w-full shrink-0 border-b border-border bg-bg'>
          <div className='mx-auto flex h-full max-w-none flex-nowrap items-center justify-between gap-2 px-2 md:gap-8 md:px-6'>
            <a
              id='nav-logo-slot'
              href={`${basePath}/#home`}
              className='relative block h-8 shrink-0'
              aria-label='Jateen Moahanty — home'
            >
              <Image
                src='./jateen_logo.svg'
                alt='Jateen Mohanty'
                className='h-8 w-auto transition-opacity duration-3 ease-out opacity-100 '
                width={157}
                height={32}
                loading='eager'
              />
            </a>
            <div className='hidden flex-nowrap items-center gap-8 transition-opacity duration-3 ease-out md:flex opacity-100'>
              <nav className='flex flex-nowrap items-center gap-8' aria-label='Primary'>
                <Link
                  className=' whitespace-nowrap font-sans text-sm font-medium underline-offset-4 transition-colors duration-2 ease-out hover:underline text-fg-secondary hover:text-fg'
                  href='/work'
                >
                  Work
                </Link>
                <Link
                  className=' whitespace-nowrap font-sans text-sm font-medium underline-offset-4 transition-colors duration-2 ease-out hover:underline text-fg-secondary hover:text-fg'
                  href='https://medium.com/@jateenmohanty2003'
                  target='_blank'
                >
                  Articles
                </Link>
              </nav>
              <a
                href={`${basePath}/#work_with_me`}
                className='inline-flex items-center justify-center rounded-full bg-ink-900 font-sans font-semibold text-paper-100 whitespace-nowrap transition-all duration-2 ease-out hover:-translate-y-px hover:bg-ink-700 px-5 py-3 text-sm '
              >
                Work with me
              </a>
            </div>
            <div className='flex shrink-0 items-center gap-2 transition-opacity duration-3 ease-out md:hidden opacity-100'>
              <a
                href={`${basePath}/#work_with_me`}
                className='inline-flex items-center justify-center rounded-full bg-ink-900 font-sans font-semibold text-paper-100 whitespace-nowrap transition-all duration-2 ease-out hover:-translate-y-px hover:bg-ink-700 px-3 py-2 text-xs '
              >
                Work with me
              </a>
              <MobileMenu />
            </div>
          </div>
        </header>
        {children}
        <Reveal>
          <Footer />
        </Reveal>
      </body>
    </html>
  );
}
