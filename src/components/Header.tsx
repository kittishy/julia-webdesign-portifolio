
import React from 'react';
const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/20 p-4 text-cream">
      <nav className="flex gap-4">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Event</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};
export default Header;

