
import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/20 p-4 text-cream">
      <div className="flex justify-between items-center">
        <div>© 2023 CelestialNexus. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white/10 backdrop-blur-md fixed bottom-0 w-full text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12 py-8">
          {/* Social links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://pin.it/3s4HmDTtZ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full  flex items-center justify-center text-cream hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="Pinterest"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/criecomflow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full  flex items-center justify-center text-cream hover:bg-primary/20 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center">
          <p className="text-xs ">
            © {new Date().getFullYear()} {t('siteName')}.
            {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
