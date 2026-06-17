import React from 'react';

const Hero = () => {
  return (
    <section className='relative h-[calc(100dvh-4rem)] min-h-0 w-full max-w-full overflow-x-clip bg-bg px-6 pb-4 pt-16 md:px-10 mb-3'>
      <div className='flex h-full w-full min-w-0 max-w-full flex-col justify-between'>
        <div className='min-w-0 max-w-full'>
          <p className='mb-2 min-w-0 max-w-full font-sans text-sm font-medium uppercase tracking-widest text-fg-muted md:text-base'>
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
              ·
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
              AI
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
              ·
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
              Design
            </span>
          </p>
          <h1 className='min-w-0 max-w-full overflow-x-clip font-display text-[clamp(2rem,10.5vw,3.5rem)] font-extrabold tracking-tight text-fg sm:text-[clamp(2.25rem,11vw,3.75rem)] md:text-display-hero'>
            <span className='block min-w-0 max-w-full'>
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
                I
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
                build
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
                products
              </span>
            </span>
            <span className='block min-w-0 max-w-full'>
              <span className='inline'>
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
                  from
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
                  scratch
                </span>
              </span>
              {/* <div className='h-4 w-4 bg-accent rounded-full animate-bounce '></div> */}
              <span className='text-accent'>.</span>
            </span>
          </h1>
        </div>
        <div className='flex min-w-0 max-w-full flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <p className='min-w-0 max-w-full font-sans text-base leading-relaxed text-fg-secondary md:max-w-subtext md:text-lg'>
            <span
              className='blur-word inline-block'
            >
              Designer + AI builder. I turn messy ideas into things people actually use — from zero to shipped.
            </span>
          </p>
          <div className='flex min-w-0 max-w-full shrink-0 flex-col items-start gap-2 md:items-end'>
            <span
              data-hero-pill='true'
              className='inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-leaf-500/30 bg-leaf-100 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-leaf-500 max-md:tracking-wide'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                filter: 'blur(0px)',
                transform: 'translate(0px, 0px)',
                opacity: 1,
              }}
            >
              <span
                className='h-2 w-2 shrink-0 rounded-full bg-leaf-500 animate-status-dot-pulse'
                aria-hidden='true'
              />
              Available for work
            </span>
            <span
              data-hero-pill='true'
              className='inline-flex max-w-full whitespace-nowrap rounded-full border border-border-strong px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-widest text-fg max-md:tracking-wide'

            >
              Bengaluru, India
            </span>
            <span
              data-hero-pill='true'
              className='inline-flex max-w-full whitespace-nowrap rounded-full border border-border-strong px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-widest text-fg max-md:tracking-wide'

            >
              Founder @ TWIN DESIGN STUDIO
            </span>
          </div>
        </div>
      </div>
      <div
        className='absolute right-6 top-24 hidden flex-col items-center gap-3 md:right-10 md:flex'
        aria-hidden='true'
      >
        <div className='relative h-20 w-px bg-fg-muted'>
          <span className='absolute left-0 top-0 h-4 w-full bg-accent animate-accent-line-travel' />
        </div>
        <p className='font-sans text-2xs font-medium uppercase tracking-widest text-fg-muted [writing-mode:vertical-rl]'>
          Scroll
        </p>
      </div>
    </section>
  );
};

export default Hero;
