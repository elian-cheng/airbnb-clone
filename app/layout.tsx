import './globals.css';
import { Nunito } from 'next/font/google';
import Header from '@/components/Header/Header';
import RegisterModal from '@/components/Modals/RegisterModal';
import ToasterProvider from '@/components/UI/ToasterProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <ToasterProvider />
        <RegisterModal />
        <Header />
        {children}
      </body>
    </html>
  );
}
