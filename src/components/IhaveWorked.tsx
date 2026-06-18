import Image from 'next/image';
import Link from 'next/link';
import HoverButton from './ui/HoverButton';
import Reveal from './Reveal';

const IhaveWorked = () => {
  return (
    <section id='experience' className='bg-bg px-6 py-20 md:px-10 md:py-24'>
      <div className='mx-auto w-full max-w-container'>
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
            src='./Star.svg'
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
            Where I built things
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
            love
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
            building
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
            things,
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
            worked
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
            as
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
            founding
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
            member
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
            for
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
            most
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
            of
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
            companies
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
            had
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
            fun
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
            going
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
            0
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
            to
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
            1
          </span>
        </p>
        <div className='mt-8 flex justify-center md:mt-10'>
          <HoverButton href="https://drive.google.com/file/d/1wfY-2RaaNHseWgb7RFTlfJirr_Vn0jzW/view?usp=drive_link">Download my resume</HoverButton>
        </div>
        <div className='mt-12 flex flex-col items-center gap-8 md:mt-16 md:gap-10'>
          <Reveal>
            <article
              data-reveal-item='true'
              className='border border-border rounded-lg max-w-7xl bg-bg-secondary p-8 md:p-12'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex max-md:flex-col max-md:gap-3 md:items-start md:justify-between md:gap-6'>
                <div className='flex min-w-0 flex-1 items-center gap-4'>
                  <div className='relative h-12 w-22 shrink-0 overflow-hidden rounded-xl border border-border bg-surface-card md:h-14 md:w-24'>
                    <Image
                      alt='Bue Suite'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='object-cover'
                      width={160}
                      height={160}
                      src='./BueSuite_Logo.svg'
                    />
                  </div>
                  <div className='min-w-0 pt-0.5'>
                    <p className='font-display text-lg font-bold text-fg md:text-xl'>Bue Suite</p>
                    <p className='mt-1 font-sans text-base font-medium text-fg-secondary'>
                      Product Designer
                    </p>
                  </div>
                </div>
                <p className='shrink-0 pt-1 font-sans text-xs text-fg-muted max-md:pl-[4.5rem] md:text-right'>
                  Oct 2025 – Present
                </p>
              </div>
              <h4 className='mt-8 font-display text-display-sm font-bold text-fg'>
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
                  Designed the hiring stack that investors validated
                </span>

              </h4>
              <p className='mt-4 font-sans text-sm leading-[1.7] text-fg-secondary'>
                Worked closely with the Co-Founder of Tapplent to design core HRMS talent acquisition workflows. Led the full AI-driven recruitment experience including Bue AI candidate scoring, ATS, candidate lifecycle, interview evaluation, offer management and pre-boarding journeys.
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  ENTERPRISE UX
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  HRMS
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  AI
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  B2B SAAS
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  DESIGN SYSTEM
                </span>
              </div>
              <Link
                href='https://coupl.money'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-ink-900 px-5 py-2.5 font-sans text-sm font-semibold text-paper-100 mt-6'
              >
                <span
                  className='pointer-events-none absolute inset-0'
                  aria-hidden='true'
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transformOrigin: '0% 50%',
                    transform: 'scale(0, 1)',
                  }}
                />
                <span className='relative z-10'>Visit website →</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
              </Link>
            </article>
          </Reveal>
          <Reveal>
            <article
              data-reveal-item='true'
              className='border border-border rounded-lg max-w-7xl bg-bg-secondary p-8 md:p-12'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex max-md:flex-col max-md:gap-3 md:items-start md:justify-between md:gap-6'>
                <div className='flex min-w-0 flex-1 items-center gap-4'>
                  <div className='relative h-12 w-22 shrink-0 overflow-hidden rounded-xl border border-border bg-surface-card md:h-14 md:w-24'>
                    <Image
                      alt='Safra'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='object-cover'
                      width={160}
                      height={160}
                      src='./SafraLogo.svg'
                    />
                  </div>
                  <div className='min-w-0 pt-0.5'>
                    <p className='font-display text-lg font-bold text-fg md:text-xl'>Safra.io</p>
                    <p className='mt-1 font-sans text-base font-medium text-fg-secondary'>
                      Contract Product Designer
                    </p>
                  </div>
                </div>
                <p className='shrink-0 pt-1 font-sans text-xs text-fg-muted max-md:pl-[4.5rem] md:text-right'>
                  May 2025 – Sep 2025
                </p>
              </div>
              <h4 className='mt-8 font-display text-display-sm font-bold text-fg'>
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
                  Took a messy app and made it actually work
                </span>
              </h4>
              <p className='mt-4 font-sans text-sm leading-[1.7] text-fg-secondary'>
                Rethought the entire user flow for smoother travel discovery. Designed and shipped an AI-powered chatbot, attraction ticket booking and integrated travel guide. Also shaped upcoming features like packing checklist, e-SIM integration and currency converter.
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  TRAVEL UX
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  AI CHATBOAT
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  FEATURE DESIGN
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  RESPONSIVE
                </span>
              </div>
              <Link
                href='https://www.safra.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-ink-900 px-5 py-2.5 font-sans text-sm font-semibold text-paper-100 mt-6'
              >
                <span
                  className='pointer-events-none absolute inset-0'
                  aria-hidden='true'
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transformOrigin: '0% 50%',
                    transform: 'scale(0, 1)',
                  }}
                />
                <span className='relative z-10'>Visit website →</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
              </Link>
            </article>
          </Reveal>
          <Reveal>
            <article
              data-reveal-item='true'
              className='border border-border rounded-lg max-w-7xl bg-bg-secondary p-8 md:p-12'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex max-md:flex-col max-md:gap-3 md:items-start md:justify-between md:gap-6'>
                <div className='flex min-w-0 flex-1 items-center gap-4'>
                  <div className='relative h-12 w-22 shrink-0 overflow-hidden rounded-xl border border-border bg-surface-card md:h-14 md:w-24'>
                    <Image
                      alt='Ziarah'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='object-cover'
                      width={160}
                      height={160}
                      src='./ZiarahLogo.svg'
                    />
                  </div>
                  <div className='min-w-0 pt-0.5'>
                    <p className='font-display text-lg font-bold text-fg md:text-xl'>
                      Ziarah.ai
                    </p>
                    <p className='mt-1 font-sans text-base font-medium text-fg-secondary'>
                      Founding → UX Designer
                    </p>
                  </div>
                </div>
                <p className='shrink-0 pt-1 font-sans text-xs text-fg-muted max-md:pl-[4.5rem] md:text-right'>
                  Sep 2024 – May 2025
                </p>
              </div>
              <h4 className='mt-8 font-display text-display-sm font-bold text-fg'>
                <span className='blur-word inline-block'>
                  Solo. Travel tech. 100 bookings at launch.
                </span>
              </h4>
              <p className='mt-4 font-sans text-sm leading-[1.7] text-fg-secondary'>
                Translated the founder's vision into a fully functional travel tech product — leading all design from the first wireframe to launch. Designed AI-assisted trip customization and flight booking flows that generated 100+ paid bookings during private beta within 30 days.
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  0→1
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  AI FLOWS
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  DESIGN
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  UX RESEARCH
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  TRAVEL-TECH
                </span>
              </div>
              <Link
                href='https://ziarah.ai/'
                target='_blank'
                rel='noopener noreferrer'
                className='group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-ink-900 px-5 py-2.5 font-sans text-sm font-semibold text-paper-100 mt-6'
              >
                <span
                  className='pointer-events-none absolute inset-0'
                  aria-hidden='true'
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transformOrigin: '0% 50%',
                    transform: 'scale(0, 1)',
                  }}
                />
                <span className='relative z-10'>Visit website →</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
              </Link>
            </article>
          </Reveal>
          <Reveal>
            <article
              data-reveal-item='true'
              className='border border-border rounded-lg max-w-7xl bg-bg-secondary p-8 md:p-12'
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate(0px, 0px)',
                filter: 'blur(0px)',
                opacity: 1,
              }}
            >
              <div className='flex max-md:flex-col max-md:gap-3 md:items-start md:justify-between md:gap-6'>
                <div className='flex min-w-0 flex-1 items-start gap-4'>
                  <div className='relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-surface-card md:h-16 md:w-16'>
                    <Image
                      alt='Coupl (YC S22) logo'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='object-cover'
                      width={100}
                      height={100}
                      src='./Twin_Design_Studio.svg'
                    />
                  </div>
                  <div className='min-w-0 pt-0.5'>
                    <p className='font-display text-lg font-bold text-fg md:text-xl'>
                      Twin Design Studio
                    </p>
                    <p className='mt-1 font-sans text-base font-medium text-fg-secondary'>
                      Founder & UX Designer
                    </p>
                  </div>
                </div>
                <p className='shrink-0 pt-1 font-sans text-xs text-fg-muted max-md:pl-[4.5rem] md:text-right'>
                  Mar 2024 – Present
                </p>
              </div>
              <h4 className='group mt-8 font-display text-display-sm font-bold text-fg'>
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
                  Built products people kept coming back to
                </span>
              </h4>
              <p className='mt-4 font-sans text-sm leading-[1.7] text-fg-secondary'>
                Delivered UX across Riquenza (skincare), TourMate (hotel booking), Gatherly (events), BidNow (bidding commerce) and BatteryDriver — a rental flow built for low-literacy E-Rickshaw drivers. Improved usability for 10K+ smart device users.
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  FREELANCE
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  E-COMMERCE
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  BOOKING UX
                </span>
                <span className='inline-flex whitespace-nowrap rounded-full border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs'>
                  ACCESSIBILITY

                </span>
              </div>
              <Link
                href="#"
                rel='noopener noreferrer'
                className='group cursor-not-allowed relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-ink-900/60 px-5 py-2.5 font-sans text-sm font-semibold text-paper-100 mt-6'
              >
                <span
                  className='pointer-events-none absolute inset-0'
                  aria-hidden='true'
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transformOrigin: '0% 50%',
                    transform: 'scale(0, 1)',
                  }}
                />
                <span className='relative z-10'>Under Development</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default IhaveWorked;
