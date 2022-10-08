import Container from '../Container';
import type { FC } from 'react';
import Logo from './Logo';
import Navbar from './navbar/Navbar';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="py-2">
      <Container className="flex justify-between">
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
};
export default Header;
