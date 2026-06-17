import React from 'react';
import AnimatedButton from './ui/AnimatedButton';

const SuperPower = () => {
  return (
    <section
      id='expertise'
      className='relative z-0 w-full max-w-full overflow-x-clip bg-bg pb-20 pt-16 md:pb-24 md:pt-24'
    >
      <div className='w-full min-w-0 max-w-full overflow-x-clip px-4 sm:px-6 md:px-10'>
        <p className='mb-8 min-w-0 max-w-full break-words text-center font-sans text-[clamp(1.25rem,4.5vw,1.75rem)] font-medium uppercase tracking-[0.12em] text-fg-muted max-md:px-1 md:mb-12 md:text-display-sm'>
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
            MY
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
            SUPERPOWERS
          </span>
        </p>
        <div
          className='mx-auto flex w-full min-w-0 max-w-full flex-col items-center overflow-x-clip max-md:px-0 md:px-0'
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
            filter: 'blur(0px)',
            opacity: 1,
          }}
        >
          <h2 className='flex w-full min-w-0 max-w-full flex-col items-center gap-2.5 overflow-x-clip text-center font-display text-[clamp(2.125rem,9vw,3.125rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-fg sm:text-[clamp(2.375rem,9.5vw,3.375rem)] md:gap-4 md:text-display-lg lg:text-display-xl'>
            <span className='flex min-w-0 max-w-full flex-wrap items-center justify-center gap-y-1 max-md:px-1'>
              <span className='inline'>I think in</span>
            </span>
            <span className='flex min-w-0 max-w-full flex-wrap items-center justify-center gap-y-1 max-md:px-1'>
              <span className='inline'>systems</span>
            </span>
            <span className='flex min-w-0 max-w-full flex-wrap items-center justify-center gap-y-1 max-md:px-1 md:inline-flex md:w-auto md:flex-nowrap md:whitespace-nowrap'>
              not just screens
            </span>
          </h2>
        </div>
      </div>
      <div className='relative mt-16 w-full min-w-0 max-w-full overflow-x-clip px-4 sm:px-6 md:mt-24 md:px-10'>
        <article className='grid grid-cols-1 gap-10 py-12 md:gap-16 md:py-16 lg:grid-cols-2 '>
          <div
            data-reveal-item='true'
            className='min-w-0 lg:pr-8'
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            <div className='mb-6 text-fg md:mb-8' aria-hidden='true'>
              <svg
                className='h-12 w-12 md:h-14 md:w-14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.75'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M12 3 3 8l9 5 9-5-9-5Z' />
                <path d='m3 12 9 5 9-5' />
                <path d='m3 17 9 5 9-5' />
              </svg>
            </div>
            <h3 className='font-display text-display-md font-extrabold uppercase tracking-tight text-fg'>
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
                Product Designer
              </span>
            </h3>
            <div className='mt-6 flex flex-wrap justify-start gap-2 md:mt-8'>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Wireframes
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Prototyping
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Design System
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                High Fidelity UI
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Shipping &amp; metrics
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Figma
              </span>
            </div>
            <p className='mt-8 font-sans text-sm leading-relaxed text-fg-secondary'>
              Give me a messy brief, zero documentation and a deadline. I will have a working prototype before you finish explaining the problem. Led 0 to 1 builds across AI travel, enterprise HRMS and e-commerce , twice for UAE founders.
            </p>
          </div>
          <div
            data-reveal-item='true'
            className='min-w-0 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0'
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            <div className='mb-6 text-fg md:mb-8' aria-hidden='true'>
              <svg
                className='h-12 w-12 md:h-14 md:w-14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.75'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M12 3v3' />
                <path d='M18.364 5.636 16.243 7.757' />
                <path d='M21 12h-3' />
                <path d='M18.364 18.364 16.243 16.243' />
                <path d='M12 21v-3' />
                <path d='M5.636 18.364 7.757 16.243' />
                <path d='M3 12h3' />
                <path d='M5.636 5.636 7.757 7.757' />
                <circle cx={12} cy={12} r='3.25' />
              </svg>
            </div>
            <h3 className='font-display text-display-md font-extrabold uppercase tracking-tight text-fg'>
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
                AI
              </span>
            </h3>
            <div className='mt-6 flex flex-wrap justify-start gap-2 md:mt-8'>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                AI Chatbot UX
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Smart Onboarding
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Scoring Systems
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                AI Workflow design
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Automation UX
              </span>
            </div>
            <p className='mt-8 font-sans text-sm leading-relaxed text-fg-secondary'>
              Designed AI-assisted trip flows that drove 100+ paid bookings in the first 30 days of private beta. Built Bue AI candidate scoring and evaluation UX. I make AI feel natural, not clinical, something people actually want to use again.
            </p>
          </div>
        </article>
        <article className='grid grid-cols-1 gap-10 py-12 md:gap-16 md:py-16 lg:grid-cols-2 border-t border-border'>
          <div
            data-reveal-item='true'
            className='min-w-0 lg:pr-8'
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            <div className='mb-6 text-fg md:mb-8' aria-hidden='true'>
              <svg
                className='h-12 w-12 md:h-14 md:w-14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.75'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M12 20h9' />
                <path d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' />
              </svg>
            </div>
            <h3 className='font-display text-display-md font-extrabold uppercase tracking-tight text-fg'>
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
                USER RESEARCH
              </span>
            </h3>
            <div className='mt-6 flex flex-wrap justify-start gap-2 md:mt-8'>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                User Flows
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Journey Mapping
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Usability Testing
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Conversion Optimisation
              </span>
            </div>
            <p className='mt-8 font-sans text-sm leading-relaxed text-fg-secondary'>
              Led end-to-end research that pushed booking completion rates up by 30%. Research is not a phase for me, it's the foundation. I find the gap between what users say they want and what they actually do.
            </p>
          </div>
          <div
            data-reveal-item='true'
            className='min-w-0 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0'
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              transform: 'translate(0px, 0px)',
              filter: 'blur(0px)',
              opacity: 1,
            }}
          >
            <div className='mb-6 text-fg md:mb-8' aria-hidden='true'>
              <svg
                className='h-12 w-12 md:h-14 md:w-14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.75'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='m3 11 18-5v12L3 14v-3Z' />
                <path d='M11.6 16.8a3 3 0 1 1-5.8-1.6' />
              </svg>
            </div>
            <h3 className='font-display text-display-md font-extrabold uppercase tracking-tight text-fg'>
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
                Storytelling
              </span>
            </h3>
            <div className='mt-6 flex flex-wrap justify-start gap-2 md:mt-8'>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                UX Decks
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Stakeholder Pitches
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Case Studies
              </span>
              <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-4 py-1.5 text-sm'>
                Design Narrative

              </span>
            </div>
            <p className='mt-8 font-sans text-sm leading-relaxed text-fg-secondary'>
              Good design without a good story gets ignored. I build client-ready UX decks and prototypes that make stakeholders say yes before the meeting ends. Every design decision I make has a reason behind it and I know how to tell that story clearly.
            </p>
          </div>
        </article>
        <div data-reveal-item='true' className='flex justify-center pt-8 md:pt-12'>
          <AnimatedButton href='/#work_with_me'>Work with me →</AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default SuperPower;
