import { IoChevronDown, IoPersonOutline } from 'react-icons/io5';

import type { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav>
      <ul className="flex h-full items-center">
        <li className="flex cursor-pointer items-center text-neutral-400 transition-colors hover:text-inherit">
          <IoPersonOutline className="text-lg" />
          <IoChevronDown className="text-xs" />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
