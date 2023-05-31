'use client';
import Container from '../UI/Container';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Search from './components/Search';

const Header = () => {
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
            <Navigation />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Header;
