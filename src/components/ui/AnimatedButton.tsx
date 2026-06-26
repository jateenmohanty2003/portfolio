'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type AnimatedButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const AnimatedButton = ({ children, href, className = '' }: AnimatedButtonProps) => {
  const router = useRouter();
  const isAnchor = href?.startsWith('#') || href?.includes('#') || href?.startsWith('http');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.includes('#')) {
      e.preventDefault();
      const targetHash = href.split('#')[1];
      const isHomePage =
        window.location.pathname === '/' ||
        window.location.pathname === '/portfolio' ||
        window.location.pathname === '/portfolio/';

      if (isHomePage) {
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${targetHash}`);
        }
      } else {
        router.push(`/#${targetHash}`);
      }
    }
  };

  const commonClasses = `
    group
    relative
    inline-flex
    overflow-hidden
    rounded-full
    bg-ink-900
    px-[2.7em]
    py-[1em]
    font-sans
    text-sm
    font-semibold
    text-white
    cursor-pointer
    active:scale-[0.97]
    transition-transform
    ${className}
  `;

  const content = (
    <>
      <span
        className='
          absolute
          left-1/2
          top-1/2
          h-0
          w-0
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent
          transition-all
          duration-500
          ease-in-out[cubic-bezier(0,0,0.2,1)]
          group-hover:h-96
          group-hover:w-96
        '
      />

      <span className='relative z-10'>{children}</span>
    </>
  );

  if (isAnchor) {
    return (
      <a href={href || '#'} className={commonClasses} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href || '#'} className={commonClasses}>
      {content}
    </Link>
  );
};

export default AnimatedButton;
