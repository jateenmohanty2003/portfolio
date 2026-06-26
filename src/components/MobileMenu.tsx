'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative' ref={menuRef}>
      <button
        type='button'
        className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-200 ease-out border-border-strong text-fg hover:bg-bg-secondary'
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-5 w-5 animate-in fade-in zoom-in-75 duration-200'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-5 w-5 animate-in fade-in zoom-in-75 duration-200'
          >
            <line x1='4' y1='12' x2='20' y2='12' />
            <line x1='4' y1='6' x2='20' y2='6' />
            <line x1='4' y1='18' x2='20' y2='18' />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop screen overlay */}
          <div
            className='fixed inset-0 top-16 z-40 bg-black/10 backdrop-blur-[2px] transition-opacity duration-200 ease-out'
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown Menu Card */}
          <div className='absolute right-0 top-[calc(100%+0.75rem)] z-50 w-56 origin-top-right rounded-xl border border-border-strong bg-bg-elevated p-3 shadow-xl transition-all duration-200 ease-out animate-in fade-in slide-in-from-top-2'>
            <nav className='flex flex-col gap-1' aria-label='Mobile Navigation'>
              <Link
                href='/work'
                onClick={() => setIsOpen(false)}
                className='flex w-full items-center rounded-lg px-3 py-2.5 font-sans text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-secondary hover:text-fg'
              >
                Work
              </Link>
              <Link
                href='https://medium.com/@jateenmohanty2003'
                target='_blank'
                onClick={() => setIsOpen(false)}
                className='flex w-full items-center rounded-lg px-3 py-2.5 font-sans text-sm font-medium text-fg-secondary transition-colors hover:bg-bg-secondary hover:text-fg'
              >
                Articles
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
