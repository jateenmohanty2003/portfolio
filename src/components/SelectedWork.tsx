import React from 'react';
import AnimatedButton from './ui/AnimatedButton';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from './Reveal';

const SelectedWork = () => {
  return (
    <section id='work' className='border-t border-border bg-bg px-6 py-6 md:px-10 md:py-10'>
      <div className='mx-auto w-full max-w-container'>
        <div className='mb-10 flex justify-center md:mb-12'>
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
            src='./Star 2.svg'
          />
        </div>
        <h2 className='w-full text-center font-display text-display-lg font-extrabold tracking-tight text-fg md:text-display-xl'>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            Selected
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            work
          </span>
        </h2>
        <p className='mt-4 w-full text-center font-sans text-base leading-relaxed text-fg-secondary md:mt-5 md:text-lg'>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            Product
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            builds,
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            0→1
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            launches,
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            and
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            the
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            metrics
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            that
          </span>
          <span
            className='blur-word inline-block'
            style={{
              marginRight: '0.28em',
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            mattered
          </span>
        </p>
        <div className='mt-12 flex flex-col items-center gap-6 md:mt-16 md:gap-8'>
          <Reveal>
            <article
              data-reveal-item='true'
              className='grid max-w-7xl min-h-[420px] grid-cols-1 overflow-hidden rounded-lg bg-surface-elevated shadow-sm lg:min-h-[480px] lg:grid-cols-2'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex flex-col justify-between p-8 md:p-10 lg:p-12'>
                <div>
                  <p className='font-sans text-sm tabular-nums text-fg-muted'>01</p>
                  <p className='mt-6 font-sans text-sm text-fg-muted'>
                    Ziarah.ai<span className='mx-2 text-border-strong'>/</span>
                    2024 - 2025
                  </p>
                  <h3 className='mt-6 max-w-[20ch] font-display text-xl font-bold leading-[1.15] text-fg md:text-display-sm'>
                    <span
                      className='blur-word inline-block'
                      style={{
                        marginRight: '0.28em',
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform: 'translate(0px, 0px)',
                        filter: 'blur(0px)',
                        opacity: 1,
                      }}
                    >
                      I built a travel tech product solo and it paid for itself in 30 days
                    </span>
                    <span

                    >

                    </span>
                  </h3>
                  <div className='mt-8 flex flex-wrap gap-2'>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      0 → 1 Design
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      AI Trip Planning
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Flight Booking
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      UX Research
                    </span>
                  </div>
                </div>
                <div className='mt-10 flex flex-wrap items-end justify-between gap-6 md:mt-12'>
                  <div className='flex flex-wrap gap-x-10 gap-y-6'>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>100+</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Paid booking in first 30 days
                      </p>
                    </div>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>300+</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Itineraries built daily
                      </p>
                    </div>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>+30%</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        User retention
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  className='font-sans text-sm font-medium text-accent transition-colors duration-2 ease-out mt-6 hover:underline'
                  href='#'
                >
                  View case study →
                </Link>
              </div>
              <div className='relative min-h-[280px] h-full w-full overflow-hidden lg:min-h-[480px]'>
                <Image
                  alt='Ziarah project preview'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  className='object-center'
                  width={100}
                  height={100}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  src='./Ziarah_Cover1.png'
                />
                <Link
                  href='https://ziarah.ai/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit One Moment website'
                  className='absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-paper-100/15 backdrop-blur-sm transition-colors duration-2 ease-out hover:bg-paper-100/25'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 18 18'
                    fill='none'
                    aria-hidden='true'
                    className='text-black/70'
                  >
                    <path
                      d='M5.25 12.75L12.75 5.25M12.75 5.25H6.75M12.75 5.25V11.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article
              data-reveal-item='true'
              className='grid max-w-7xl min-h-[420px] grid-cols-1 overflow-hidden rounded-lg bg-surface-elevated shadow-sm lg:min-h-[480px] lg:grid-cols-2'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex flex-col justify-between p-8 md:p-10 lg:p-12'>
                <div>
                  <p className='font-sans text-sm tabular-nums text-fg-muted'>02</p>
                  <p className='mt-6 font-sans text-sm text-fg-muted'>
                    Teamora<span className='mx-2 text-border-strong'>/</span>2025 - Present
                  </p>
                  <h3 className='mt-6 max-w-[20ch] font-display text-xl font-bold leading-[1.15] text-fg md:text-display-sm'>
                    <span
                      className='blur-word inline-block'
                      style={{
                        marginRight: '0.28em',
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform: 'translate(0px, 0px)',
                        filter: 'blur(0px)',
                        opacity: 1,
                      }}
                    >
                      Designed the hiring stack that got validated by investors
                    </span>
                    <span
                    >
                    </span>
                  </h3>
                  <div className='mt-8 flex flex-wrap gap-2'>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Enterprise UX
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      AI Recruitment
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      HRMS
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      ATS
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Design System
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      RBAC
                    </span>
                  </div>
                </div>
                <div className='mt-10 flex flex-wrap items-end justify-between gap-6 md:mt-12'>
                  <div className='flex flex-wrap gap-x-10 gap-y-6'>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>100%</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        HR Workflow Coverage
                      </p>
                    </div>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>Investor</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Backed And Validated
                      </p>
                    </div>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>AI</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Powered Candidate Scoring
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  className='font-sans text-sm font-medium mt-6 text-accent transition-colors duration-2 ease-out hover:underline'
                  href='#'
                >
                  View case study →
                </Link>
              </div>
              <div className='relative min-h-[280px] h-full w-full overflow-hidden lg:min-h-[480px]'>
                <Image
                  alt='Bue Suite project preview'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  className='object-center'
                  width={100}
                  height={100}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  src='./Teamora_Cover.png'
                />
                <Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit Teamora website'
                  className='absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-paper-100/15 backdrop-blur-sm transition-colors duration-2 ease-out hover:bg-paper-100/25'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 18 18'
                    fill='none'
                    aria-hidden='true'
                    className='text-black/70'
                  >
                    <path
                      d='M5.25 12.75L12.75 5.25M12.75 5.25H6.75M12.75 5.25V11.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article
              data-reveal-item='true'
              className='grid max-w-7xl min-h-[420px] grid-cols-1 overflow-hidden rounded-lg bg-surface-elevated shadow-sm lg:min-h-[480px] lg:grid-cols-2'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex flex-col justify-between p-8 md:p-10 lg:p-12'>
                <div>
                  <p className='font-sans text-sm tabular-nums text-fg-muted'>03</p>
                  <p className='mt-6 font-sans text-sm text-fg-muted'>
                    Battery Driver · Freelance<span className='mx-2 text-border-strong'>/</span>2025
                  </p>
                  <h3 className='mt-6 max-w-[20ch] font-display text-xl font-bold leading-[1.15] text-fg md:text-display-sm'>
                    <span
                      className='blur-word inline-block'
                      style={{
                        marginRight: '0.28em',
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform: 'translate(0px, 0px)',
                        filter: 'blur(0px)',
                        opacity: 1,
                      }}
                    >
                      Designed for people who had never used an app before
                    </span>
                    <span
                    >
                    </span>
                  </h3>
                  <div className='mt-8 flex flex-wrap gap-2'>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Inclusive Design
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Mobile UX
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Low Literacy Users
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Rental Flow
                    </span>
                  </div>
                </div>
                <div className='mt-10 flex flex-wrap items-end justify-between gap-6 md:mt-12'>
                  <div className='flex flex-wrap gap-x-10 gap-y-6'>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>Users Designed For</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Low Literacy
                      </p>
                    </div>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>
                        1st Try
                      </p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Average task Completion
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  className='font-sans text-sm font-medium text-accent mt-6 transition-colors duration-2 ease-out hover:underline'
                  href='#'
                >
                  View case study →
                </Link>
              </div>
              <div className='relative min-h-[280px] h-full w-full overflow-hidden lg:min-h-[480px]'>
                <Image
                  alt='Battery Driver project preview'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  className='object-center'
                  width={100}
                  height={100}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  src='./BatteryDriver_Cover.png'
                />
                <Link
                  href='https://www.figma.com/design/BFiLiyI9nYiSOo2q9Yy6Cw/Jateen-BatteryDriver?node-id=0-1&t=59VKwhueSeeKM86H-1'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit Meezo website'
                  className='absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-paper-100/15 backdrop-blur-sm transition-colors duration-2 ease-out hover:bg-paper-100/25'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 18 18'
                    fill='none'
                    aria-hidden='true'
                    className='text-black/70'
                  >
                    <path
                      d='M5.25 12.75L12.75 5.25M12.75 5.25H6.75M12.75 5.25V11.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </Reveal>
          <Reveal>
            <article
              data-reveal-item='true'
              className='grid max-w-7xl min-h-105 grid-cols-1 overflow-hidden rounded-lg bg-surface-elevated shadow-sm lg:min-h-[480px] lg:grid-cols-2'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex flex-col justify-between p-8 md:p-10 lg:p-12'>
                <div>
                  <p className='font-sans text-sm tabular-nums text-fg-muted'>04</p>
                  <p className='mt-6 font-sans text-sm text-fg-muted'>
                    Gatherly · Freelance<span className='mx-2 text-border-strong'>/</span>2025
                  </p>
                  <h3 className='mt-6 max-w-[20ch] font-display text-xl font-bold leading-[1.15] text-fg md:text-display-sm'>
                    <span
                      className='blur-word inline-block'
                      style={{
                        marginRight: '0.28em',
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform: 'translate(0px, 0px)',
                        filter: 'blur(0px)',
                        opacity: 1,
                      }}
                    >
                      See what&apos;s happening, Host what&apos;s next
                    </span>
                    <span
                    >
                    </span>
                  </h3>
                  <div className='mt-8 flex flex-wrap gap-2'>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Social Platform
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Event Management
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      UX Design
                    </span>
                    <span className='inline-flex rounded-full bg-bg-secondary px-3 py-1.5 font-sans text-2xs font-medium uppercase tracking-[0.12em] text-fg-secondary'>
                      Mobile App
                    </span>
                  </div>
                </div>
                <div className='mt-10 flex flex-wrap items-end justify-between gap-6 md:mt-12'>
                  <div className='flex flex-wrap gap-x-10 gap-y-6'>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>2</p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        User Type, One App
                      </p>
                    </div>
                    <div>
                      <p className='font-display text-lg font-bold text-accent md:text-xl'>
                        0 to 1
                      </p>
                      <p className='mt-1 max-w-[14ch] font-sans text-xs leading-snug text-fg-muted'>
                        Built From Scratch
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  className='font-sans text-sm font-medium text-accent mt-6 transition-colors duration-2 ease-out hover:underline'
                  href='#'
                >
                  View case study →
                </Link>
              </div>
              <div className='relative min-h-70 h-full w-full overflow-hidden lg:min-h-120'>
                <Image
                  alt='Gatherly project preview'
                  loading='lazy'
                  decoding='async'
                  data-nimg='fill'
                  className='object-center'
                  width={100}
                  height={100}
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    color: 'transparent',
                  }}
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  src='./Gatherly_Cover.png'
                />
                <Link
                  href='https://www.figma.com/design/uCGtZqE8FFAR27u3JL7zBm/Freelance_Gatherly?node-id=0-1&t=C0LiRd09gxSUhFeS-1'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit Meezo website'
                  className='absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-paper-100/15 backdrop-blur-sm transition-colors duration-2 ease-out hover:bg-paper-100/25'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 18 18'
                    fill='none'
                    aria-hidden='true'
                    className='text-black/70'
                  >
                    <path
                      d='M5.25 12.75L12.75 5.25M12.75 5.25H6.75M12.75 5.25V11.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
        <div className='mt-12 flex justify-center md:mt-16'>
          <AnimatedButton>View all my Crazy works</AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
