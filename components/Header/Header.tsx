'use client';
import { SafeUser } from '@/types';
import Container from '../UI/Container';
import Categories from './components/Categories';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Search from './components/Search';

export interface IHeaderProps {
  currentUser?: SafeUser | null;
}

const Header: React.FC<IHeaderProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Search />
            <Navigation currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default Header;
