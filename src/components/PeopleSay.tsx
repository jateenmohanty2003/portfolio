import React from 'react';
import HoverButton from './ui/HoverButton';

const PeopleSay = () => {
  return (
    <section id='testimonials' className='overflow-hidden bg-accent py-20 md:py-24 '>
      <div className='mx-auto max-w-container px-6 md:px-10'>
        <h2 className='text-center font-display text-display-lg font-extrabold tracking-tight text-paper-100 md:text-display-xl'>
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
            What
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
            people
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
            say
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
            about
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
            my
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
      </div>
      <div
        className='w-full'
        style={{
          translate: 'none',
          rotate: 'none',
          scale: 'none',
          transform: 'translate(0px, 0px)',
          filter: 'blur(0px)',
          opacity: 1,
        }}
      >
        <div className='mt-12 overflow-x-clip md:mt-16' aria-label='Testimonials'>
          <div className='flex w-max animate-testimonials-scroll gap-6 md:gap-8'>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal is one of the most efficient people I have worked with. He is great
                at context switching. On any given day he could go from a deep product strategy
                discussion to reviewing a design to debugging a user flow and not miss a beat on any
                of them. He never let things fall through the cracks. If you need someone who can
                hold multiple things in their head and still deliver on all of them, Nischal is that
                person.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>RJ</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Rishang Jain</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    CEO, Dental Stack
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Jateen came in and just got it. I didn't have to explain the brand twice or sit through rounds of completely wrong directions. He understood what Riquenza needed to feel like and designed something that actually looked like a premium skincare brand. The screens were clean, the flow made sense and our customers noticed the difference. Honestly one of the most stress free design experiences I have had”
                {/* */}
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>G</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Chetna Chouhan</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    CEO, Riquenza
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                {/* */}“What impressed me most about Jateen was how he handled complexity without losing clarity. HRMS products are notoriously hard to design because there are so many roles, rules and edge cases. He took all of that and made it feel almost simple. The AI recruitment scoring system he designed is something our team is genuinely proud to show investors. He thinks like a product person, not just a designer.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SM</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Naushad Ahmad</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Founder, Bue Suite
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Jateen was our first and only designer and he carried the entire product on his shoulders. When we brought him in we had a vision and not much else. He turned that into a real AI powered travel platform with flows that actually converted. 100 paid bookings in 30 days during private beta is not a small thing and a big part of that came from how well he designed the booking experience. I would work with him again without a second thought.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SM</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Santhosh Ku Vijayarangan</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Co-Founder, Ziarh.ai
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}I have worked with a lot of designers who make beautiful things that do not work. Jateen is the opposite. Every decision he makes has a reason behind it and he will tell you exactly what that reason is. He pushed back on a few of our ideas early on and he was right every single time. The AI onboarding flow he designed reduced our drop off rate significantly in the first month alone.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>PG</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Arjun Mehta</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Product Lead, SaaS Startup
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}We were a tiny team with a tight deadline and Jateen treated our product like it was his own. He stayed on calls late, flagged things we had not even thought about and delivered screens that were ready for development without any back and forth. What stood out was how well he communicated every step. We always knew what he was doing and why. That kind of clarity is rare and it made the whole process feel safe.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>PG</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Priya Nair</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Founder, Early Stage B2C App
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-12 flex max-w-container justify-center md:mt-16'>
        <HoverButton href="https://in.linkedin.com/in/jateenmohanty" varient='bg-orange'>Connect with me on LinkedIn</HoverButton>
      </div>
    </section>
  );
};

export default PeopleSay;
