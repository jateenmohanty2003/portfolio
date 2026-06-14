import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GooeyButton from './ui/GooeyButton';

const Footer = () => {
  return (
    <footer className='overflow-hidden bg-bg'>
      <section id='contact' className='border-t border-border bg-bg px-6 py-24 md:px-10 md:py-32'>
        <div className='mx-auto max-w-container'>
          <div
            className='mb-10 flex justify-center md:mb-12'
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            <Image
              alt=''
              aria-hidden='true'
              loading='lazy'
              width={40}
              height={40}
              decoding='async'
              data-nimg={1}
              className='h-10 w-10 md:h-12 md:w-12'
              style={{ color: 'transparent' }}
              src='/Star 2.svg'
            />
          </div>
          <h2 className='text-center font-display text-display-lg font-extrabold tracking-tight text-fg md:text-display-xl'>
            <span className='blur-word inline-block'>Have an idea? Let's build it</span>
          </h2>
          <p className='mx-auto mt-6  text-center font-sans text-base leading-relaxed text-fg-secondary md:mt-8 md:text-lg'>
            <span className='blur-word inline-block'>
              Open to product roles, freelance projects and consultations - I love talking in
              general
            </span>
          </p>
          <div className='mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16'>
            <div
              data-reveal-item='true'
              className='flex flex-col gap-8 md:gap-10 lg:max-w-md'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex flex-col gap-2'>
                <span className='font-sans text-xs uppercase tracking-[0.14em] text-fg-secondary'>
                  Email
                </span>
                <Link
                  href='mailto:nischalkanishk@gmail.com'
                  className='font-display text-xl font-extrabold tracking-tight transition-colors duration-2 ease-out hover:opacity-80 md:text-2xl text-accent'
                >
                  nischalkanishk@gmail.com
                </Link>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='font-sans text-xs uppercase tracking-[0.14em] text-fg-secondary'>
                  Phone
                </span>
                <Link
                  href='tel:+917411741855'
                  className='font-display text-xl font-extrabold tracking-tight transition-colors duration-2 ease-out hover:opacity-80 md:text-2xl text-fg'
                >
                  +91 74117 41855
                </Link>
              </div>
              <nav
                className='flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-8'
                aria-label='Social links'
              >
                <Link
                  href='https://www.linkedin.com/in/nischalkanishk/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-fg transition-colors duration-2 ease-out hover:text-accent md:text-sm'
                >
                  LinkedIn
                  <span
                    aria-hidden='true'
                    className='inline-block -rotate-45 text-sm leading-none transition-transform duration-2 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  >
                    →
                  </span>
                </Link>
                <Link
                  href='https://www.instagram.com/escobar_kanishk/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-fg transition-colors duration-2 ease-out hover:text-accent md:text-sm'
                >
                  Insta
                  <span
                    aria-hidden='true'
                    className='inline-block -rotate-45 text-sm leading-none transition-transform duration-2 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  >
                    →
                  </span>
                </Link>
                <Link
                  href='https://behance.net/nischalkanishk69'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-fg transition-colors duration-2 ease-out hover:text-accent md:text-sm'
                >
                  Behance
                  <span
                    aria-hidden='true'
                    className='inline-block -rotate-45 text-sm leading-none transition-transform duration-2 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  >
                    →
                  </span>
                </Link>
              </nav>
            </div>
            <div
              data-reveal-item='true'
              className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex min-h-[180px] flex-col justify-between rounded-lg border border-border bg-bg-secondary p-5 md:min-h-[190px] md:p-6'>
                <div>
                  <h3 className='font-display text-xl font-extrabold text-fg md:text-2xl'>
                    Hire me
                  </h3>
                  <p className='mt-2 max-w-[22ch] font-sans text-xs leading-relaxed text-fg-secondary md:text-sm'>
                    Open for full-time PM roles
                  </p>
                </div>
                <div className='mt-5 md:mt-6'>
                  <div className='mt-5 md:mt-6'>
                    <GooeyButton className='w-full'>Download Resume</GooeyButton>
                  </div>
                </div>
              </div>
              <div className='flex min-h-[180px] flex-col justify-between rounded-lg border border-border bg-bg-secondary p-5 md:min-h-[190px] md:p-6'>
                <div>
                  <h3 className='font-display text-xl font-extrabold text-fg md:text-2xl'>
                    Consultation
                  </h3>
                  <p className='mt-2 max-w-[22ch] font-sans text-xs leading-relaxed text-fg-secondary md:text-sm'>
                    30 minutes of your time, and I sort everything out
                  </p>
                </div>
                <div className='mt-5 md:mt-6'>
                  <GooeyButton className='w-full' variant='orange'>
                    Book 30 min call
                  </GooeyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='px-6 py-8 md:px-10'>
        <div
          className='mx-auto flex max-w-container flex-col gap-3 md:flex-row md:items-center md:justify-between'
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
            filter: 'blur(0px)',
            opacity: 1,
          }}
        >
          <p className='font-sans text-xs text-fg-secondary'>© 2026 Nischal Kanishk</p>
          <p className='font-sans text-xs text-fg-secondary md:text-right'>
            Built with ❤️ · Designed by Nischal Kanishk
          </p>
        </div>
      </div>
      <div
        className='w-full overflow-hidden pb-6 pt-2 md:pb-8 md:pt-3'
        style={{
          translate: 'none',
          rotate: 'none',
          scale: 'none',
          transform: 'translate(0px, 0px)',
          filter: 'blur(0px)',
          opacity: 1,
        }}
      >
        <Image
          alt=''
          aria-hidden='true'
          loading='lazy'
          width={2800}
          height={316}
          decoding='async'
          data-nimg={1}
          className='h-auto w-full select-none'
          style={{ color: 'transparent' }}
          sizes='100vw'
          src='/jateen_footer.svg'
        />
      </div>
    </footer>
  );
};

export default Footer;
