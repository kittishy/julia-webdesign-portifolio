
import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import TimelineEvent from '@/components/TimelineEvent';
import ProgressTracker from '@/components/ProgressTracker';
import InteractiveElement from '@/components/InteractiveElement';

const Journey = () => {
  // Mark journey page as read for achievement
  useEffect(() => {
    // Wait a bit to ensure user has actually read content
    const timer = setTimeout(() => {
      const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
      visitedSections.journeyRead = true;
      localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
    }, 30000); // 30 seconds to be considered read
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <MainLayout>
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 neon-text">
              MINHA JORNADA
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore os marcos importantes na minha trajetória de crescimento e aprendizado.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center relative">
              {/* Timeline line */}
              <div className="absolute top-5 bottom-5 w-0.5 bg-muted/50 -z-10" />
              
              {/* Timeline events */}
              <TimelineEvent
                date="2018"
                title="Primeiros Passos"
                description="O início da jornada de aprendizado em tecnologia e design. Foi quando descobri a paixão por criar experiências digitais interativas."
                icon="🚀"
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                side="left"
              />
              
              <TimelineEvent
                date="2019"
                title="Fundamentos"
                description="Desenvolvimento dos fundamentos em programação e design. Aprendi os conceitos básicos que formam a base do meu conhecimento atual."
                icon="📚"
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                side="right"
              />
              
              <TimelineEvent
                date="2020"
                title="Primeiros Projetos"
                description="Criação dos primeiros projetos pessoais e experimentações. Foi um período de tentativas, erros e muitas lições valiosas."
                icon="💼"
                image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
                side="left"
              />
              
              <TimelineEvent
                date="2021"
                title="Expansão do Conhecimento"
                description="Aprofundamento em novas tecnologias e metodologias. Busquei expandir horizontes e aprender ferramentas mais avançadas."
                icon="🔍"
                image="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=800&auto=format&fit=crop"
                side="right"
              />
              
              <TimelineEvent
                date="2022"
                title="Foco e Especialização"
                description="Concentração nas áreas de maior interesse e potencial. Decidi me especializar em design de experiência e interfaces interativas."
                icon="🎯"
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                side="left"
              />
              
              <TimelineEvent
                date="2023"
                title="Projetos Colaborativos"
                description="Trabalho em equipe e colaboração com outros profissionais. Aprendi a importância da comunicação e troca de conhecimentos."
                icon="👥"
                image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                side="right"
              />
              
              <TimelineEvent
                date="2024"
                title="Consolidação e Inovação"
                description="Consolidação de conhecimentos e busca por inovação. É o momento de utilizar tudo o que aprendi para criar soluções originais."
                icon="💡"
                image="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=800&auto=format&fit=crop"
                side="left"
              />
              
              <TimelineEvent
                date="Futuro"
                title="Próximos Capítulos"
                description="O que vem pela frente? Novas tecnologias, desafios e oportunidades aguardam. A jornada continua com muitas possibilidades."
                icon="🔮"
                side="right"
              />
            </div>
          </div>
          
          {/* Skills section */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-center neon-text">
              HABILIDADES ADQUIRIDAS
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <InteractiveElement className="h-full">
                <div className="h-full bg-card border border-border/50 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold mb-3">Design</h3>
                  <div className="space-y-4">
                    <SkillBar skill="UI/UX Design" progress={90} />
                    <SkillBar skill="Design de Interação" progress={85} />
                    <SkillBar skill="Prototipação" progress={80} />
                    <SkillBar skill="Design Visual" progress={75} />
                  </div>
                </div>
              </InteractiveElement>
              
              <InteractiveElement className="h-full">
                <div className="h-full bg-card border border-border/50 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold mb-3">Desenvolvimento</h3>
                  <div className="space-y-4">
                    <SkillBar skill="HTML/CSS" progress={95} />
                    <SkillBar skill="JavaScript/React" progress={85} />
                    <SkillBar skill="Animações Web" progress={80} />
                    <SkillBar skill="Responsividade" progress={90} />
                  </div>
                </div>
              </InteractiveElement>
              
              <InteractiveElement className="h-full">
                <div className="h-full bg-card border border-border/50 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold mb-3">Criatividade</h3>
                  <div className="space-y-4">
                    <SkillBar skill="Brainstorming" progress={95} />
                    <SkillBar skill="Solução de Problemas" progress={85} />
                    <SkillBar skill="Inovação" progress={80} />
                    <SkillBar skill="Narrativa Visual" progress={90} />
                  </div>
                </div>
              </InteractiveElement>
            </div>
          </div>
          
          {/* Progress tracker */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-center neon-text">
              SEU PROGRESSO NESSA JORNADA
            </h2>
            <ProgressTracker className="mt-8" />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

interface SkillBarProps {
  skill: string;
  progress: number;
}

const SkillBar = ({ skill, progress }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <div className="w-full h-2 bg-muted/30 rounded-full">
        <div 
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Journey;
