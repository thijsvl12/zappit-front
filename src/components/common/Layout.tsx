import type { Children, FC, ReactNode } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Wrapper from './Wrapper';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};
export default Layout;
