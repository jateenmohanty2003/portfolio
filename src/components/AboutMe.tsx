import Image from 'next/image';
import React from 'react';

export const AboutMe = () => {
  return (
    <section
      aria-label='Introduction'
      className='relative flex min-h-[100dvh] flex-col items-center justify-center border-t border-border bg-bg pb-12 pt-36 md:pb-16 md:pt-44'
    >
      <div className='relative z-10 mx-auto mb-20 w-full max-w-container px-6 text-center md:mb-28 md:px-10'>
        <div className='mb-8 flex justify-center font-display text-display-md md:mb-10'>
          <Image
            alt=''
            aria-hidden='true'
            loading='lazy'
            width={32}
            height={32}
            decoding='async'
            data-nimg={1}
            className='h-[1em] w-[1em] shrink-0'
            style={{ color: 'transparent' }}
            src='/Star 2.svg'
          />
        </div>
        <p className='font-display text-display-md font-extrabold uppercase tracking-[0.02em]'>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            FOR
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            THE
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            PAST
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            4
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            YEARS,
          </span>
          <span
            className='intro-word inline-flex h-[1em] w-[1em] items-center align-middle'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            <Image
              alt=''
              aria-hidden='true'
              loading='lazy'
              width={32}
              height={32}
              decoding='async'
              data-nimg={1}
              className='h-full w-full shrink-0'
              style={{ color: 'transparent' }}
              src='/DualShape.svg'
            />
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            I&apos;VE
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            BEEN
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            COMPLETELY,
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            EMBARRASSINGLY
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            OBSESSED
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            WITH
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            PRODUCT.
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            I
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            LOVE
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            TAKING
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            CHAOTIC
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            IDEAS
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            AND
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            TURNING
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            THEM
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            INTO
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            PRODUCTS
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            THAT
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            PEOPLE
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            ACTUALLY
          </span>
          <span
            className='intro-word inline-block text-fg'
            // style={{ marginRight: '0.28em', opacity: '0.12' }}
          >
            USE.
          </span>
        </p>
      </div>
      <div className='relative z-30 w-full' aria-label='I make cool stuff'>
        <div className='flex w-full items-center overflow-x-clip bg-bg-inverse py-5 md:py-6'>
          <div className='flex w-max animate-marquee'>
            <div className='flex shrink-0'>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I MAKE COOL STUFF
                </span>
                <Image
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                  width={48}
                  height={48}
                  decoding='async'
                  data-nimg={1}
                  className='h-[1em] w-[1em] shrink-0 brightness-0 invert'
                  style={{ color: 'transparent' }}
                  src='/Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I MAKE COOL STUFF
                </span>
                <Image
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                  width={48}
                  height={48}
                  decoding='async'
                  data-nimg={1}
                  className='h-[1em] w-[1em] shrink-0 brightness-0 invert'
                  style={{ color: 'transparent' }}
                  src='/Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I MAKE COOL STUFF
                </span>
                <Image
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                  width={48}
                  height={48}
                  decoding='async'
                  data-nimg={1}
                  className='h-[1em] w-[1em] shrink-0 brightness-0 invert'
                  style={{ color: 'transparent' }}
                  src='/Star.svg'
                />
              </div>
            </div>
            <div className='flex shrink-0'>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I MAKE COOL STUFF
                </span>
                <Image
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                  width={48}
                  height={48}
                  decoding='async'
                  data-nimg={1}
                  className='h-[1em] w-[1em] shrink-0 brightness-0 invert'
                  style={{ color: 'transparent' }}
                  src='/Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I MAKE COOL STUFF
                </span>
                <Image
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                  width={48}
                  height={48}
                  decoding='async'
                  data-nimg={1}
                  className='h-[1em] w-[1em] shrink-0 brightness-0 invert'
                  style={{ color: 'transparent' }}
                  src='/Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I MAKE COOL STUFF
                </span>
                <Image
                  alt=''
                  aria-hidden='true'
                  loading='lazy'
                  width={48}
                  height={48}
                  decoding='async'
                  data-nimg={1}
                  className='h-[1em] w-[1em] shrink-0 brightness-0 invert'
                  style={{ color: 'transparent' }}
                  src='/Star.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
