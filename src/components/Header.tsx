
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6',
        scrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-border/50' : 'py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="interactive-item">
          <h1 className="font-display text-xl sm:text-2xl font-bold neon-text">
            CINEMATIC VOYAGE
          </h1>
        </Link>
        
        {/* Navigation for desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/journey" label="Journey" />
          <NavLink to="/portfolio" label="Concepts" />
          <NavLink to="/challenges" label="Challenges" />
          <NavLink to="/contact" label="Contact" />
        </nav>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span 
              className={cn(
                "block h-0.5 bg-current transition-transform duration-300",
                menuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span 
              className={cn(
                "block h-0.5 bg-current transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span 
              className={cn(
                "block h-0.5 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col items-center gap-4 px-6">
          <MobileNavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/journey" label="Journey" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/portfolio" label="Concepts" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/challenges" label="Challenges" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="relative font-medium text-sm tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="w-full py-2 text-center font-medium tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
