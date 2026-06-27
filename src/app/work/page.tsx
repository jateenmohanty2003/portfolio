import Loading from "@/components/Loading";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { WORK_ITEMS } from "@/constant/work";
import Link from "next/link";

const Work = () => {
  return (
    <>
      <Loading />
      <main>
        {/* <Reveal> */}
        <section className="bg-bg px-6 pb-20  pt-24 md:px-12 md:pt-[140px]">
          <div className="mx-auto w-full max-w-container">
            <Reveal>
              <div className="flex w-full flex-col items-center text-center">
                <div className="mb-10 flex justify-center md:mb-12">
                  <Image
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={48}
                    height={48}
                    decoding="async"
                    data-nimg={1}
                    className="h-10 w-10 md:h-12 md:w-12"
                    style={{ color: "transparent" }}
                    src="./Star.svg"
                  />
                </div>
                <h1 className="w-full font-display text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-fg">
                  <span className="block">
                    <span className="blur-word inline-block text-balance">
                      Things I&apos;ve shipped&nbsp;
                      <span className="text-accent bouncing-dot inline-block">
                        .
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-prose font-sans text-base leading-relaxed text-fg-secondary md:mt-8 md:text-lg">
                  <span className="blur-word inline-block text-balance">
                    A small collection of work I&apos;m proud of — each one taught me
                    something new.
                  </span>
                </p>
              </div>
            </Reveal>
            <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {WORK_ITEMS.map((project, idx) => (
                <Reveal className="h-full" key={idx}>
                  <div
                    key={project.id}
                    data-work-card="true"
                    className="will-change-transform scroll-straighten h-full"
                    style={project.style}
                  >
                    <article className="group flex h-full flex-col overflow-hidden border border-border bg-bg-secondary transition-all duration-250 ease-in-out hover:border-accent hover:bg-bg ">
                      <div className="relative w-full overflow-hidden aspect-[4/3]">
                        <Image
                          alt={`${project.title} project preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          src={project.image}
                          loading="eager"
                          className="object-cover object-center transition-transform duration-100 ease-in-out group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6 md:p-10">
                        <p className="font-sans text-sm text-fg-muted">
                          {project.title}
                        </p>
                        <h2 className="mt-2 font-display font-bold leading-[1.1] text-fg text-[clamp(1.375rem,2.5vw,2rem)]">
                          {project.subtitle}
                        </h2>
                        <p className="mt-4 flex-1 font-sans leading-[1.7] text-fg-secondary text-sm md:text-base">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-8 md:mt-10">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex whitespace-nowrap rounded-pill border font-sans font-medium border-border bg-surface-card text-fg-secondary px-3 py-1 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                          {project.caseStudyUrl && (
                            <Link
                              className="inline-flex items-center justify-center rounded-pill font-sans text-sm font-semibold whitespace-nowrap transition-all duration-2 ease-out hover:-translate-y-px min-h-11 bg-ink-900 px-5 py-3 text-paper-100 hover:bg-ink-700 w-full sm:w-auto "
                              href={project.caseStudyUrl}
                            >
                              Read case study →
                            </Link>
                          )}
                          {project.liveUrl && (
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center rounded-pill font-sans text-sm font-semibold whitespace-nowrap transition-all duration-2 ease-out hover:-translate-y-px min-h-11 border border-border-strong bg-transparent px-5 py-3 text-fg hover:border-accent hover:bg-accent hover:text-paper-100 w-full sm:w-auto "
                            >
                              Visit Live website →
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        {/* </Reveal> */}
      </main>
    </>
  );
};

export default Work;
