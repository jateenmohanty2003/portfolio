import Link from 'next/link';
import { ReactNode } from 'react';

type AnimatedButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  varient?: 'bg-orange' | 'bg-white';
};

const HoverButton = ({
  children,
  href,
  className = '',
  varient = 'bg-white',
}: AnimatedButtonProps) => {
  if (varient === 'bg-orange')
    return (
      <Link
        href={href || '#'}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center justify-center rounded-pill border border-paper-100 px-8 py-4 font-sans text-sm font-semibold text-paper-100 transition-colors duration-100 ease-out hover:bg-paper-100 hover:text-accent md:text-base'
      >
        Connect with me on LinkedIn
      </Link>
    );
  if (varient === 'bg-white')
    return (
      <Link
        href={href || '#'}
        target='_blank'
        rel='noopener noreferrer'
        className={`
        inline-flex items-center justify-center rounded-pill px-8 py-4 font-sans text-sm font-semibold md:px-10 md:py-4 md:text-base border border-border-strong bg-transparent text-fg transition-colors duration-100 ease-out hover:border-accent hover:bg-accent hover:text-paper-100 
        ${className}
      `}
      >
        <span>{children}</span>
      </Link>
    );
};

export default HoverButton;
