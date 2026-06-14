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
                    <span className='text-fg-muted'> · {/* */}Nischal's manager</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}He is great at understanding quickly. I would explain something once and he
                already had follow-up questions that showed he understood it better than most people
                would after three conversations. He does not just understand fast though. He
                structures everything cleanly before touching anything. The way he broke down the
                architecture and planned the build before writing a single line of code made the
                whole process smooth. Genuinely one of the sharpest people I have worked with.
                {/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>G</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Gaurav</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    CEO, Aspaas
                    <span className='text-fg-muted'> · {/* */}Nischal's client</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal brings a big-picture vision to every project. I learned a lot from
                his approach to planning and execution in both design and product. He puts in
                sincere effort and works collaboratively, which is rare. I would highly recommend
                him for any design revamp, product consultation, or any UX problem that you need
                help solving.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SM</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Swarnava Mitra</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Product Designer
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal has such an amazing visual design skill. He is a creative genius
                with fabulous skills ranging from Photography to Graphic Design. He can easily break
                a complex problem into possible chunks and solve them iteratively to design a pixel
                perfect product. If you need a reliable person who can help you design your product
                UI or come up with great visuals for your brand, I can confidently recommend Nischal
                for all of it.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SM</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Sangramjit Maity</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Researcher, University of Groningen
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal is a kind and talented individual who will show you what excellent
                team management looks like. I worked with him for more than two years and watched
                him improve consistently, showing a 30 to 40% increase in effectiveness compared to
                others. His unique ability to organise the working process lets his team show their
                full potential. A combination of humor and empathy helps lift the spirit in
                stressful situations. I highly recommend working with him.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>PG</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Prasad G Kadam</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Senior Data Engineer, Sailpoint
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}I have worked with Nischal on a few projects and he is amazing at what he
                does. He is not just a designer but a designer with a storyteller inside. Looking
                forward to working on more projects with him.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>AJ</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Abhishek Jain</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Designer and Webflow Developer
                    <span className='text-fg-muted'> · {/* */}Worked on different teams</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}A designer can bring an idea to life and the same goes for Nischal. He is
                well aware of his craft and can make you stop and stare with his design and
                videography skills. I got a chance to collaborate with him on a few projects and he
                did complete justice to every single one. Highly motivated and always ready to learn
                something new.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>HK</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Hem Kant</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Content Strategist and Writer
                    <span className='text-fg-muted'> · {/* */}Collaborated on projects</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Excellent mentorship and real insight on how to manage information and work
                effectively. Nischal made a genuine difference in how I approach things.
                {/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SA</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Shushrut Alur</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Financial Trader, Durham University
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
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
                    <span className='text-fg-muted'> · {/* */}Nischal's manager</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}He is great at understanding quickly. I would explain something once and he
                already had follow-up questions that showed he understood it better than most people
                would after three conversations. He does not just understand fast though. He
                structures everything cleanly before touching anything. The way he broke down the
                architecture and planned the build before writing a single line of code made the
                whole process smooth. Genuinely one of the sharpest people I have worked with.
                {/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>G</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Gaurav</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    CEO, Aspaas
                    <span className='text-fg-muted'> · {/* */}Nischal's client</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal brings a big-picture vision to every project. I learned a lot from
                his approach to planning and execution in both design and product. He puts in
                sincere effort and works collaboratively, which is rare. I would highly recommend
                him for any design revamp, product consultation, or any UX problem that you need
                help solving.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SM</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Swarnava Mitra</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Product Designer
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal has such an amazing visual design skill. He is a creative genius
                with fabulous skills ranging from Photography to Graphic Design. He can easily break
                a complex problem into possible chunks and solve them iteratively to design a pixel
                perfect product. If you need a reliable person who can help you design your product
                UI or come up with great visuals for your brand, I can confidently recommend Nischal
                for all of it.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SM</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Sangramjit Maity</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Researcher, University of Groningen
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Nischal is a kind and talented individual who will show you what excellent
                team management looks like. I worked with him for more than two years and watched
                him improve consistently, showing a 30 to 40% increase in effectiveness compared to
                others. His unique ability to organise the working process lets his team show their
                full potential. A combination of humor and empathy helps lift the spirit in
                stressful situations. I highly recommend working with him.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>PG</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Prasad G Kadam</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Senior Data Engineer, Sailpoint
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}I have worked with Nischal on a few projects and he is amazing at what he
                does. He is not just a designer but a designer with a storyteller inside. Looking
                forward to working on more projects with him.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>AJ</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Abhishek Jain</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Designer and Webflow Developer
                    <span className='text-fg-muted'> · {/* */}Worked on different teams</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}A designer can bring an idea to life and the same goes for Nischal. He is
                well aware of his craft and can make you stop and stare with his design and
                videography skills. I got a chance to collaborate with him on a few projects and he
                did complete justice to every single one. Highly motivated and always ready to learn
                something new.{/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>HK</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Hem Kant</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Content Strategist and Writer
                    <span className='text-fg-muted'> · {/* */}Collaborated on projects</span>
                  </p>
                </div>
              </div>
            </article>
            <article className='flex w-[min(90vw,440px)] shrink-0 flex-col justify-between rounded-lg border border-border/10 bg-paper-50 p-8 shadow-sm md:w-[520px] md:p-10'>
              <p className='font-sans text-base leading-relaxed text-fg md:text-lg'>
                “{/* */}Excellent mentorship and real insight on how to manage information and work
                effectively. Nischal made a genuine difference in how I approach things.
                {/* */}”
              </p>
              <div className='mt-8 flex items-center gap-4'>
                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary'>
                  <span className='font-display text-sm font-bold text-fg'>SA</span>
                </div>
                <div>
                  <p className='font-display text-base font-bold text-fg'>Shushrut Alur</p>
                  <p className='mt-0.5 font-sans text-sm text-fg-secondary'>
                    Financial Trader, Durham University
                    <span className='text-fg-muted'> · {/* */}Worked on the same team</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-12 flex max-w-container justify-center md:mt-16'>
        <HoverButton varient='bg-orange'>Connect with me on LinkedIn</HoverButton>
      </div>
    </section>
  );
};

export default PeopleSay;
