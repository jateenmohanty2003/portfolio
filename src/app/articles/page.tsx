import Loading from '@/components/Loading';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { ARTICLES_ITEMS } from '@/constant/articles';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function Articles() {
  return (
    <>
      <Loading />
      <main className="bg-bg">
        {/* Header Section */}
        <section className="px-6 pb-12 pt-24 md:px-12 md:pt-[140px]">
          <div className="mx-auto w-full max-w-container">
            <Reveal>
              <div className="flex w-full flex-col items-center text-center">
                <div className="mb-10 flex justify-center md:mb-12 text-accent">
                  {/* Decorative Book/Writing SVG Icon */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 md:h-12 md:w-12 animate-pulse"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 6h10" />
                    <path d="M6 10h10" />
                    <path d="M13 14h3" />
                  </svg>
                </div>
                <h1 className="w-full font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-fg">
                  <span className="block">
                    <span className="blur-word inline-block text-balance">
                      Thoughts & Writing&nbsp;<span className="text-accent bouncing-dot inline-block">.</span>
                    </span>
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-prose font-sans text-base leading-relaxed text-fg-secondary md:mt-8 md:text-lg">
                  <span className="blur-word inline-block text-balance">
                    A curation of my design theories, career growth guides, and lessons learned from building digital products from zero to one.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="px-6 pb-24 md:px-12">
          <div className="mx-auto w-full max-w-container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ARTICLES_ITEMS.map((article, index) => (
                <Reveal key={article.id} className="h-full" threshold={0.05}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/[0.02]">
                    
                    {/* Interactive Custom SVG Cover Art */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-secondary border-b border-border flex items-center justify-center p-6 group-hover:bg-bg transition-colors duration-300">
                      
                      {/* Grid Background overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                      {/* Cover Illustrations */}
                      {article.id === 'internship-guide' && (
                        <svg className="w-full h-full text-fg-muted max-w-[200px]" viewBox="0 0 100 60" fill="none">
                          <rect x="10" y="10" width="30" height="20" rx="3" className="stroke-fg-muted/40" strokeWidth="1" />
                          <circle cx="25" cy="20" r="4" className="fill-accent/20 stroke-accent" strokeWidth="1" />
                          
                          <rect x="60" y="30" width="30" height="20" rx="3" className="stroke-fg-muted/40" strokeWidth="1" />
                          <path d="M68 40h14M68 44h8" className="stroke-fg-muted/40" strokeWidth="1" />
                          
                          <path d="M40 20 C 55 20, 45 40, 60 40" className="stroke-accent group-hover:stroke-dash-offset" strokeWidth="1.5" strokeDasharray="3 3" />
                          <polygon points="60,40 56,37 57,43" className="fill-accent" />
                          
                          <circle cx="50" cy="30" r="2.5" className="fill-paper-100 stroke-fg" strokeWidth="1" />
                        </svg>
                      )}

                      {article.id === 'freelance-client' && (
                        <svg className="w-full h-full text-fg-muted max-w-[200px]" viewBox="0 0 100 60" fill="none">
                          <circle cx="50" cy="30" r="16" className="stroke-fg-muted/20" strokeWidth="1" />
                          <circle cx="50" cy="30" r="10" className="stroke-accent/20" strokeWidth="1" />
                          
                          {/* Financial / Growth line */}
                          <path d="M25 45 L 40 38 L 55 42 L 75 22" className="stroke-accent transition-all duration-500 group-hover:translate-x-1" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="75" cy="22" r="3" className="fill-accent" />

                          {/* Figma Cursor pointing to deal */}
                          <path d="M54 34 L 59 47 L 62 44 L 66 49 L 68 48 L 64 43 L 68 41 Z" className="fill-fg stroke-paper-100 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" strokeWidth="1" />
                        </svg>
                      )}

                      {article.id === 'digital-delight' && (
                        <svg className="w-full h-full text-fg-muted max-w-[200px]" viewBox="0 0 100 60" fill="none">
                          {/* Interactive 3D Cube Outline */}
                          <g className="transition-transform duration-500 group-hover:rotate-12 origin-center">
                            <path d="M50 12 L 72 23 L 50 34 L 28 23 Z" className="stroke-accent fill-accent/5" strokeWidth="1.5" />
                            <path d="M28 23 L 28 45 L 50 56 L 50 34 Z" className="stroke-fg-muted/50 fill-fg-muted/5" strokeWidth="1" />
                            <path d="M72 23 L 72 45 L 50 56 L 50 34 Z" className="stroke-fg-muted/80 fill-fg-muted/10" strokeWidth="1" />
                          </g>
                          {/* Sparkles */}
                          <path d="M22 15 L 24 19 L 28 20 L 24 21 L 22 25 L 20 21 L 16 20 L 20 19 Z" className="fill-accent/40 animate-pulse" />
                          <path d="M78 45 L 79 47 L 81 48 L 79 49 L 78 51 L 77 49 L 75 48 L 77 47 Z" className="fill-accent animate-pulse delay-75" />
                        </svg>
                      )}

                      {article.id === 'emotional-impact' && (
                        <svg className="w-full h-full text-fg-muted max-w-[200px]" viewBox="0 0 100 60" fill="none">
                          {/* Emotional Sine wave overlay */}
                          <path d="M15 30 Q 32.5 10, 50 30 T 85 30" className="stroke-fg-muted/20" strokeWidth="1.5" />
                          <path d="M15 30 Q 32.5 18, 50 30 T 85 30" className="stroke-accent/40" strokeWidth="1.5" />
                          <path d="M15 30 Q 32.5 5, 50 30 T 85 30" className="stroke-accent transition-all duration-500 group-hover:stroke-dashoffset" strokeWidth="2.5" strokeLinecap="round" />
                          
                          {/* Floating heart/emotion shape */}
                          <path d="M50 25 C 48 20, 43 20, 43 25 C 43 31, 50 35, 50 35 C 50 35, 57 31, 57 25 C 57 20, 52 20, 50 25 Z" 
                                className="fill-accent/15 stroke-accent transition-all duration-300 group-hover:scale-110 origin-center" 
                                strokeWidth="1" />
                        </svg>
                      )}

                      {article.id === 'figma-ai-assignments' && (
                        <svg className="w-full h-full text-fg-muted max-w-[200px]" viewBox="0 0 100 60" fill="none">
                          {/* Figma Logo Outline */}
                          <g className="transition-all duration-300 group-hover:opacity-90">
                            <path d="M38 18 a 6 6 0 0 1 6 6 a 6 6 0 0 1 -6 6 h -6 v -12 z" className="stroke-fg-muted/40" strokeWidth="1" />
                            <path d="M38 30 a 6 6 0 0 1 6 6 a 6 6 0 0 1 -6 6 h -6 v -12 z" className="stroke-accent" strokeWidth="1.5" />
                            <path d="M50 18 a 6 6 0 0 1 6 6 a 6 6 0 0 1 -6 6 h -6 v -12 z" className="stroke-fg-muted/40" strokeWidth="1" />
                            <path d="M50 30 a 6 6 0 0 1 6 6 a 6 6 0 0 1 -6 6 h -6 v -12 z" className="stroke-fg-muted/60" strokeWidth="1" />
                            <path d="M44 42 a 6 6 0 0 1 6-6 a 6 6 0 0 1 -6-6" className="stroke-fg-muted/40" strokeWidth="1" />
                          </g>
                          {/* Sparkling Magic Wand (AI tool representation) */}
                          <g className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <line x1="58" y1="42" x2="72" y2="28" className="stroke-accent" strokeWidth="2" strokeLinecap="round" />
                            <path d="M72 24 L 73 26 L 75 27 L 73 28 L 72 30 L 71 28 L 69 27 L 71 26 Z" className="fill-accent" />
                          </g>
                        </svg>
                      )}

                      {article.id === 'winning-portfolio' && (
                        <svg className="w-full h-full text-fg-muted max-w-[200px]" viewBox="0 0 100 60" fill="none">
                          {/* Portfolio Grid wireframe cards */}
                          <rect x="18" y="16" width="30" height="28" rx="2" className="stroke-fg-muted/40" strokeWidth="1" />
                          <rect x="52" y="16" width="30" height="28" rx="2" className="stroke-accent" strokeWidth="1.5" />
                          
                          {/* Web layout lines */}
                          <path d="M24 24h18M24 30h10M58 24h18M58 30h12" className="stroke-fg-muted/30" strokeWidth="1" />
                          
                          <circle cx="67" cy="36" r="3" className="fill-accent/20 stroke-accent" strokeWidth="1" />
                        </svg>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      {/* Metadata Header */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`inline-flex items-center justify-center rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wider bg-bg-secondary ${article.gradient.split(' ').slice(2).join(' ')}`}>
                          {article.category}
                        </span>
                        <span className="font-sans text-xs text-fg-muted">
                          {article.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="mt-4 font-display text-lg font-bold leading-snug text-fg group-hover:text-accent transition-colors duration-200 md:text-xl line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-fg-secondary line-clamp-3">
                        {article.description}
                      </p>

                      {/* Card Footer Details */}
                      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                        <span className="font-sans text-xs text-fg-muted flex items-center gap-1.5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {article.readTime}
                        </span>

                        <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-fg transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5">
                          Read on Medium
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>

                    {/* Direct clickable link overlay */}
                    <Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 opacity-0"
                      aria-label={`Read "${article.title}" on Medium`}
                    />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Profile Section */}
        <section className="px-6 pb-24 md:px-12">
          <div className="mx-auto w-full max-w-container">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-bg-secondary p-8 md:p-12 lg:p-16">
                
                {/* Background decorative graphic */}
                <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none hidden md:block">
                  <svg className="w-full h-full text-fg" viewBox="0 0 100 100" fill="none">
                    <circle cx="80" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="80" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
                    <path d="M40 50h80M80 10v80" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col md:max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-card px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-fg-secondary w-fit">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    Medium Profile
                  </div>

                  {/* Heading */}
                  <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight text-fg md:text-3xl lg:text-4xl">
                    Craving more design insights? <br />
                    Follow my journey.
                  </h2>

                  {/* Description */}
                  <p className="mt-4 font-sans text-sm leading-relaxed text-fg-secondary md:text-base">
                    I publish detailed analyses of product interfaces, freelancing tactics, UX design psychology, and design methodologies. Explore my entire writing history and get notified when I publish new design writeups by following me on my official Medium channel.
                  </p>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <AnimatedButton
                      href="https://medium.com/@jateenmohanty2003"
                      className="px-8! py-3.5! text-balance text-center md:text-left"
                    >
                      Follow @jateenmohanty2003 on Medium →
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
