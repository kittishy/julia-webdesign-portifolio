import React from 'react';
import Lantern from './Lantern';

const DecorativeElements: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-cream"></div>
      <div className="absolute top-[30%] left-[30%] w-3 h-3 rounded-full bg-cream"></div>
      <div className="absolute top-[50%] right-[25%] w-4 h-4 rounded-full bg-cream"></div>
      <div className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-cream"></div>
      <div className="absolute top-[40%] right-[10%] w-3 h-3 rounded-full bg-cream"></div>
      <div className="absolute top-[30%] left-[10%] w-20 h-10 bg-secondary rounded-2xl"></div>
      <div className="absolute top-[55%] right-[15%] w-24 h-12 bg-secondary rounded-2xl"></div>
      <div className="absolute top-[65%] right-[35%] w-32 h-16 bg-secondary rounded-2xl"></div>
      <Lantern className='absolute top-[15%] left-1/2 -translate-x-1/2 w-16 h-24 rounded-3xl' />
      <Lantern className='absolute top-[10%] right-[15%] w-10 h-16 rounded-3xl' />
    </div>
  );
};

export default DecorativeElements;