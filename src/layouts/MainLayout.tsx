
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicBackground from '@/components/DynamicBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  
  // Track visited pages for achievements
  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    
    if (path === 'home') visitedSections.home = true;
    if (path === 'journey') visitedSections.journey = true;
    if (path === 'portfolio') visitedSections.portfolio = true;
    if (path === 'challenges') visitedSections.challenges = true;
    if (path === 'contact') visitedSections.contact = true;
    
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  }, [location]);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <DynamicBackground>
      <Header />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </DynamicBackground>
  );
};

export default MainLayout;
