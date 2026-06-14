import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Jateen Mohanty - Product Designer',
  description:
    'Portfolio for Jateen Mohanty, a product designer and AI builder based in Bangalore.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={` h-full antialiased`}>
      <body className='min-h-full '>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
