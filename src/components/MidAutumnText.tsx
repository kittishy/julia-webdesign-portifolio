import React from 'react';
const MidAutumnText: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
      <h1 className="text-cream text-6xl font-serif">Happy Mid Autumn Festival</h1>
      <p className="text-cream">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="bg-accent-red text-cream px-4 py-2 rounded-md">Read More</button>
    </div>
  );
};
export default MidAutumnText;