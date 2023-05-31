import './globals.css';
import { Nunito } from 'next/font/google';
import Header from '@/components/Header';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
