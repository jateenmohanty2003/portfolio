import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './Hero';
import Reveal from './Reveal';
import { AboutMe } from './AboutMe';
import SuperPower from './SuperPower';
import SelectedWork from './SelectedWork';
import IhaveWorked from './IhaveWorked';
import PeopleSay from './PeopleSay';
import Footer from './Footer';

const PortfolioSection = () => {
  return (
    <div className='' style={{ opacity: 1, visibility: 'inherit' }}>
      <header className='sticky top-0 z-50 h-16 w-full shrink-0 border-b border-border bg-bg'>
        <div className='mx-auto flex h-full max-w-none flex-nowrap items-center justify-between gap-8 px-6 md:px-10'>
          <Link
            id='nav-logo-slot'
            href='/'
            className='relative block h-8 shrink-0'
            aria-label='Jateen Moahanty — home'
          >
            <Image
              src='/jateen_logo.svg'
              alt='Jateen Mohanty'
              className='h-8 w-auto transition-opacity duration-3 ease-out opacity-100 '
              width={157}
              height={32}
            />
          </Link>
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
                href='/#experience'
              >
                Experience
              </Link>
            </nav>
            <Link
              href='/#contact'
              className='inline-flex items-center justify-center rounded-full bg-ink-900 font-sans font-semibold text-paper-100 whitespace-nowrap transition-all duration-2 ease-out hover:-translate-y-px hover:bg-ink-700 px-5 py-3 text-sm '
            >
              Work with me
            </Link>
          </div>
          <div className='flex shrink-0 items-center gap-3 transition-opacity duration-3 ease-out md:hidden opacity-100'>
            <Link
              href='/#contact'
              className='inline-flex items-center justify-center rounded-full bg-ink-900 font-sans font-semibold text-paper-100 whitespace-nowrap transition-all duration-2 ease-out hover:-translate-y-px hover:bg-ink-700 px-4 py-2 text-xs '
            >
              Work with me
            </Link>
            {/* <button
              type='button'
              className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-2 ease-out border-border-strong text-fg hover:bg-bg-secondary'
              aria-expanded='false'
              aria-controls='_R_15fdb_'
              aria-label='Open menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-menu h-5 w-5'
                aria-hidden='true'
              >
                <path d='M4 5h16' />
                <path d='M4 12h16' />
                <path d='M4 19h16' />
              </svg>
            </button> */}
          </div>
        </div>
      </header>
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <AboutMe />
        </Reveal>
        <Reveal>
          <SuperPower />
        </Reveal>
        <Reveal>
          <SelectedWork />
        </Reveal>
        <Reveal>
          <IhaveWorked />
        </Reveal>
        <Reveal>
          <PeopleSay />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
};

export default PortfolioSection;
