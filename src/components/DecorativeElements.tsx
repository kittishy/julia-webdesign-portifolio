import React from 'react';

const DecorativeElements: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="w-2 h-2 bg-cream rounded-full absolute top-[30%] left-[20%]" />
      <div className="w-3 h-3 bg-cream rounded-full absolute top-[60%] left-[40%]" />
      <div className="w-2 h-2 bg-cream rounded-full absolute top-[45%] right-[30%]" />
      <div className="w-3 h-3 bg-cream rounded-full absolute bottom-[25%] left-[35%]" />
      <div className="w-4 h-2 bg-secondary rounded-lg absolute top-[15%] left-[35%]" />
      <div className="w-5 h-2 bg-secondary rounded-lg absolute bottom-[40%] right-[20%]" />
      <div className="w-2 h-2 bg-secondary rounded-lg absolute bottom-[15%] left-[25%]" />
      <div className="w-2 h-2 bg-secondary rounded-lg absolute bottom-[30%] right-[40%]" />
      <div className="w-3 h-6 bg-cream rounded-b-full absolute top-[10%] left-[10%] z-0"/>
      <div className="w-3 h-6 bg-cream rounded-b-full absolute top-[5%] right-[20%] z-0"/>
    </div>
  );
};

export default DecorativeElements;