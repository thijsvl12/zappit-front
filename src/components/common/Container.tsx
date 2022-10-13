import type { FC, ReactNode } from 'react';

import classNames from 'classnames';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={classNames('mx-auto h-full max-w-7xl px-4 sm:px-8', className)}>{children}</div>;
};
export default Container;
