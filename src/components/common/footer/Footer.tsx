import Container from '../Container';
import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="py-2">
      <Container>
        <div className="text-center text-sm text-neutral-500">Zappit</div>
      </Container>
    </footer>
  );
};
export default Footer;
