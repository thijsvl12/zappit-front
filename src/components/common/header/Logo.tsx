import { BsLightningFill } from 'react-icons/bs';
import type { FC } from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <h1 className="flex items-center text-lg">
      <BsLightningFill className="text-yellow-600" /> Zappit
    </h1>
  );
};
export default Logo;
