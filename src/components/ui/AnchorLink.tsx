'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type AnchorLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
  'aria-label'?: string;
};

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export default function AnchorLink({
  href,
  className = '',
  children,
  id,
  'aria-label': ariaLabel,
}: AnchorLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes('#')) {
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

  return (
    <a
      id={id}
      href={href}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
