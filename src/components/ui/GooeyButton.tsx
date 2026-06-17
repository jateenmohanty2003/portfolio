import Link from 'next/link';
import { ReactNode } from 'react';

type GooeyButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: 'black' | 'orange';
  download?: boolean;
};

const GooeyButton = ({
  children,
  href = '#',
  className = '',
  variant = 'black',
  download,
}: GooeyButtonProps) => {
  const isBlack = variant === 'black';

  return (
    <Link
      href={href}
      target='_blank'
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        px-5
        py-2.5
        rounded-sm
        font-sans
        text-sm
        font-semibold
        transition-colors
        duration-500
        cursor-pointer
        ${isBlack ? 'bg-ink-900 text-paper-100' : 'bg-accent text-paper-100'}
        ${className}
      `}
    >
      <span
        className='absolute inset-0 overflow-hidden'
        style={{ filter: 'url(#goo)' }}
        aria-hidden='true'
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`
              absolute
              h-full
              w-[34%]
              rounded-full
              scale-[1.4]
              translate-y-[125%]
              transition-all
              duration-700
              ease-in-out
              group-hover:translate-y-0
              ${isBlack ? 'bg-accent' : 'bg-ink-900'}
            `}
            style={{
              left: i === 0 ? '-5%' : i === 1 ? '30%' : '66%',
              transitionDelay: i === 0 ? '0ms' : i === 1 ? '75ms' : '150ms',
            }}
          />
        ))}
      </span>

      <span
        className={`
          relative z-10 transition-colors duration-500 text-paper-100
        `}
      >
        {children}
      </span>
    </Link>
  );
};

export default GooeyButton;
