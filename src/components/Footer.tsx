
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/20 p-4 text-cream">
      <div className="flex justify-between items-center">
        <div>© 2023 CelestialNexus. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
