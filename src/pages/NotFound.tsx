
import { Link } from "react-router-dom";
import MainLayout from '@/layouts/MainLayout';
import InteractiveElement from '@/components/InteractiveElement';

const NotFound = () => {
  return (
    <MainLayout>
      <section className="section-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl font-display font-bold mb-4 neon-text">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! Parece que você se perdeu na jornada.</p>
          <InteractiveElement>
            <Link 
              to="/"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Voltar ao Início
            </Link>
          </InteractiveElement>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
