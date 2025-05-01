
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Github, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-border/30 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-playfair text-xl font-medium text-accent">
              {t('siteName')}
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              {t('footerTagline')}
            </p>
          </div>
          
          {/* Navegação */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t('home')}
            </Link>
            <Link to="/journey" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t('journey')}
            </Link>
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t('concepts')}
            </Link>
            <Link to="/challenges" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t('challenges')}
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t('contact')}
            </Link>
          </div>
          
          {/* Links sociais */}
          <div className="flex items-center gap-4">
            <a 
              href="https://pin.it/3s4HmDTtZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
              aria-label="Pinterest"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/criecomflow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://open.spotify.com/user/315sh472qwzqkmzubi3df2xdmbou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
              aria-label="Spotify"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com/kittishysz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/kittishy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="mailto:solara.julia.a@gmail.com" 
              className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-muted-foreground hover:bg-secondary/20 hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t('siteName')}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
