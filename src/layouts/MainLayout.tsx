
import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-primary">
      {children}
    </div>
  );
};
export default MainLayout;
