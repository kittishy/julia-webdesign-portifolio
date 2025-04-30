
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6',
        scrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="interactive-item">
          <h1 className="font-montserrat text-xl sm:text-2xl font-medium elegant-heading">
            {t('siteName')}
          </h1>
        </Link>
        
        {/* Navigation for desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" label={t('home')} />
          <NavLink to="/journey" label={t('journey')} />
          <NavLink to="/portfolio" label={t('concepts')} />
          <NavLink to="/challenges" label={t('challenges')} />
          <NavLink to="/contact" label={t('contact')} />
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile nav controls */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
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
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-sm transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col items-center gap-4 px-6">
          <MobileNavLink to="/" label={t('home')} onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/journey" label={t('journey')} onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/portfolio" label={t('concepts')} onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/challenges" label={t('challenges')} onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/contact" label={t('contact')} onClick={() => setMenuOpen(false)} />
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
      className="relative font-medium text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors group"
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
      className="w-full py-2 text-center font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
