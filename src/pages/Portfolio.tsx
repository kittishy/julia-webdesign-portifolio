
import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import ConceptCard from '@/components/ConceptCard';

const Portfolio = () => {
  // Register portfolio page visit for achievements
  useEffect(() => {
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.portfolio = true;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  }, []);
  
  return (
    <MainLayout>
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 neon-text">
              CONCEITOS & IDEIAS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma coleção de conceitos, protótipos e ideias que exploram possibilidades criativas.
            </p>
          </div>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
              Todos
            </button>
            <button className="px-4 py-2 bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors rounded-md">
              Web Design
            </button>
            <button className="px-4 py-2 bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors rounded-md">
              UI/UX
            </button>
            <button className="px-4 py-2 bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors rounded-md">
              Interação
            </button>
            <button className="px-4 py-2 bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors rounded-md">
              Experimentos
            </button>
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConceptCard
              id="concept1"
              title="Interface Imersiva"
              description="Conceito de interface de usuário com elementos 3D e efeitos de profundidade. A ideia explora como criar uma experiência digital mais imersiva e envolvente através de camadas visuais e animações sutis que respondem às interações do usuário."
              tags={["UI/UX", "3D", "Interação"]}
              preview="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop"
              fullImage="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1600&auto=format&fit=crop"
            />
            
            <ConceptCard
              id="concept2"
              title="Visualizador de Dados"
              description="Protótipo de visualização de dados que transforma informações complexas em representações visuais intuitivas. Este conceito utiliza elementos interativos que permitem aos usuários explorar e compreender melhor conjuntos de dados através de animações e transformações visuais."
              tags={["Dados", "Visualização", "Interativo"]}
              preview="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop"
              fullImage="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1600&auto=format&fit=crop"
            />
            
            <ConceptCard
              id="concept3"
              title="Narrativa Digital"
              description="Exploração de narrativas não-lineares usando elementos visuais e interativos. Este projeto conceitua uma nova forma de contar histórias digitais, onde o usuário pode escolher diferentes caminhos e descobrir conteúdos ocultos através da exploração e interação."
              tags={["Narrativa", "Interativo", "Criativo"]}
              preview="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=800&auto=format&fit=crop"
              fullImage="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1600&auto=format&fit=crop"
            />
            
            <ConceptCard
              id="concept4"
              title="Sistema de Design Adaptativo"
              description="Conceito de sistema de design que se adapta ao comportamento e preferências do usuário. A proposta inclui elementos de interface que evoluem com o tempo, aprendendo com as interações e oferecendo uma experiência cada vez mais personalizada."
              tags={["Design System", "Adaptativo", "UI"]}
              preview="https://images.unsplash.com/photo-1585435421671-0c16737a238a?q=80&w=800&auto=format&fit=crop"
              fullImage="https://images.unsplash.com/photo-1585435421671-0c16737a238a?q=80&w=1600&auto=format&fit=crop"
            />
            
            <ConceptCard
              id="concept5"
              title="Experiência Sonora"
              description="Exploração de como o som pode melhorar a experiência do usuário em interfaces digitais. Este protótipo implementa feedback sonoro sutil e soundscapes ambientes que complementam as interações visuais, criando uma experiência multissensorial."
              tags={["Som", "UX", "Multissensorial"]}
              preview="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop"
              fullImage="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop"
            />
            
            <ConceptCard
              id="concept6"
              title="Dashboard Futurista"
              description="Conceito de dashboard com elementos de design futurista e visualizações de dados avançadas. O projeto explora novas formas de organizar e apresentar informações complexas, utilizando layouts dinâmicos e componentes interativos."
              tags={["Dashboard", "UI", "Futurista"]}
              preview="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              fullImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
          
          {/* Process section */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-center neon-text">
              PROCESSO CRIATIVO
            </h2>
            <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-lg overflow-hidden">
              <div className="p-6">
                <ol className="relative border-l border-border/70">
                  <ProcessStep 
                    title="Ideação" 
                    description="O primeiro estágio do processo criativo, onde as ideias são geradas, exploradas e refinadas. Nesta fase, utilizo técnicas como brainstorming, mind mapping e pesquisa de referências para expandir possibilidades." 
                    number={1}
                  />
                  <ProcessStep 
                    title="Conceituação" 
                    description="Nesta fase, as ideias são desenvolvidas em conceitos concretos. Crio wireframes, esboços e mapas conceituais para visualizar a estrutura e fluxo da experiência proposta." 
                    number={2}
                  />
                  <ProcessStep 
                    title="Prototipação" 
                    description="Transformação dos conceitos em protótipos interativos. Estes protótipos permitem testar funcionalidades, interações e verificar se a experiência está alinhada com a visão inicial." 
                    number={3}
                  />
                  <ProcessStep 
                    title="Iteração" 
                    description="Processo de refinamento baseado em feedback e testes. Cada iteração melhora aspectos específicos do conceito, aproximando-o de uma implementação final de alta qualidade." 
                    number={4}
                  />
                  <ProcessStep 
                    title="Apresentação" 
                    description="Documentação e apresentação do conceito final, incluindo detalhes da solução, justificativas de design e possíveis caminhos para implementação." 
                    number={5}
                    isLast
                  />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

interface ProcessStepProps {
  title: string;
  description: string;
  number: number;
  isLast?: boolean;
}

const ProcessStep = ({ title, description, number, isLast }: ProcessStepProps) => {
  return (
    <li className={`ml-6 ${!isLast ? "mb-10" : ""}`}>
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-xs font-medium text-primary-foreground">
        {number}
      </span>
      <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </li>
  );
};

export default Portfolio;
