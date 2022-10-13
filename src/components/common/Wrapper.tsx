import type { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="flex h-full flex-col gap-y-2">{children}</div>;
};
export default Wrapper;
