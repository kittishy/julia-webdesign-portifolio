
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 bg-white/20 backdrop-blur-md'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <nav className="hidden md:flex items-center">
          <NavLink to="/" label={t('home')} className="text-cream mx-6 text-lg" />
          <NavLink to="/about" label={t('about')} className="text-cream mx-6 text-lg" />
          <NavLink to="/event" label={t('event')} className="text-cream mx-6 text-lg" />
          <NavLink to="/contact" label={t('contact')} className="text-cream mx-6 text-lg" />
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  className?: string;
  label: string;
  to: string;
}

const NavLink = ({ to, label, className }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative font-medium text-sm tracking-wide hover:text-cream transition-colors group ${className}`}
 >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
  );
};


export default Header;
