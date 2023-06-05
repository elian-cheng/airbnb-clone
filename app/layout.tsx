import './globals.css';
import { Nunito } from 'next/font/google';
import Header from '@/components/Header/Header';
import ToasterProvider from '@/components/UI/ToasterProvider';
import RegisterModal from '@/components/Modals/RegisterModal';
import LoginModal from '@/components/Modals/LoginModal';
import getCurrentUser from '@/helpers/getCurrentUser';
import RentModal from '@/components/Modals/RentModal';
import SearchModal from '@/components/Modals/SearchModal';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone with Next.js',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <SearchModal />
        <Header currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
