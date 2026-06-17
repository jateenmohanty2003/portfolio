import Image from 'next/image';
import React from 'react';

export const AboutMe = () => {
  return (
    <section
      aria-label='Introduction'
      className='relative flex min-h-[100dvh] flex-col items-center justify-center border-t border-border bg-bg pb-12 pt-12 md:pb-16 md:pt-16'
    >
      <div className='relative z-10 mx-auto mb-10 w-full max-w-container px-6 text-center md:mb-12 md:px-2'>
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
            src='./Star 2.svg'
          />
        </div>
        <p className='font-display text-display-md font-extrabold uppercase tracking-[0.02em]'>
          <span
            className='intro-word inline-block text-fg'
          >
            For the past 2+ years &nbsp;
          </span>
          <span
            className='intro-word inline-flex h-[1em] w-[1em] items-center align-middle'
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
              src='./DualShape.svg'
            />
          </span>
          <span
            className='intro-word inline-block text-fg'
          >
            I have been completely, embarrassingly obsessed with UX. I love taking founder visions and turning them into products that people <span className='text-accent animate-pulse'>actually use</span>
          </span>
        </p>
      </div>
      <div className='relative z-30 w-full' aria-label='I make cool stuff'>
        <div className='flex w-full items-center overflow-x-clip bg-bg-inverse py-5 md:py-6'>
          <div className='flex w-max animate-marquee'>
            <div className='flex shrink-0'>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I design things that convert
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
                  src='./Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                 I design things that convert
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
                  src='./Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I design things that convert
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
                  src='./Star.svg'
                />
              </div>
            </div>
            <div className='flex shrink-0'>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I design things that convert
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
                  src='./Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                 I design things that convert
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
                  src='./Star.svg'
                />
              </div>
              <div className='flex shrink-0 items-center gap-8 pr-8 font-display text-marquee md:gap-10 md:pr-10'>
                <span className='whitespace-nowrap font-extrabold uppercase tracking-[0.02em] text-fg-inverse'>
                  I design things that convert
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
                  src='./Star.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
