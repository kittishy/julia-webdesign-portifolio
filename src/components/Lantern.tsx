import React from 'react';

const Lantern: React.FC = () => {
  return (
    <div className="relative w-10 h-16">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-cream"></div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-12 rounded-t-full rounded-b-lg bg-cream"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-cream"></div>
    </div>
  );
};

export default Lantern;