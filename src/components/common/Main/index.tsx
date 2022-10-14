import type { FC, ReactNode } from 'react';

import Container from '../Container';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="flex-1">
      <Container>{children}</Container>
    </main>
  );
};
export default Main;
