import type { FC, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
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
