
import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Challenge from '@/components/Challenge';
import ProgressTracker from '@/components/ProgressTracker';

const Challenges = () => {
  // Register challenges page visit for achievements
  useEffect(() => {
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.challenges = true;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  }, []);
  
  return (
    <MainLayout>
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 neon-text">
              DESAFIOS & CONQUISTAS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete desafios interativos para desbloquear informações exclusivas e conquistas.
            </p>
          </div>
          
          {/* Challenges grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Challenge
              id="challenge1"
              title="Olho para Detalhe"
              description="Teste sua atenção aos detalhes. Encontre todos os elementos ocultos na imagem."
              difficulty="easy"
              challenge={<EyeForDetailChallenge />}
              reward="Informação exclusiva: Estou trabalhando em um novo projeto relacionado a visualização de dados ambientais para conscientização sobre sustentabilidade."
            />
            
            <Challenge
              id="challenge2"
              title="Quebra-Cabeça Conceitual"
              description="Organize os elementos para formar um conceito coeso de design."
              difficulty="medium"
              challenge={<ConceptualPuzzleChallenge />}
              reward="Informação exclusiva: Meu processo criativo inclui uma fase de 'pensamento divergente' onde exploro ideias aparentemente desconexas antes de convergir para uma solução."
            />
            
            <Challenge
              id="challenge3"
              title="Quiz de UX"
              description="Teste seus conhecimentos sobre princípios de experiência do usuário."
              difficulty="medium"
              challenge={<UxQuizChallenge />}
              reward="Informação exclusiva: Estou desenvolvendo um framework próprio para design de interações contextuais baseadas no comportamento do usuário."
            />
            
            <Challenge
              id="challenge4"
              title="Caça aos Padrões"
              description="Identifique os padrões visuais e complete a sequência lógica."
              difficulty="hard"
              challenge={<PatternHuntChallenge />}
              reward="Informação exclusiva: Minha próxima área de estudo será a integração de inteligência artificial em interfaces adaptativas para melhorar a acessibilidade."
            />
          </div>
          
          {/* Your progress */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-center neon-text">
              SEU PROGRESSO DE EXPLORAÇÃO
            </h2>
            <ProgressTracker />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Simple challenge implementations
const EyeForDetailChallenge = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm">
        Observe a imagem abaixo e encontre todos os 5 símbolos ocultos. Clique em cada um deles
        para marcá-los como encontrados.
      </p>
      <div className="relative w-full h-60 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="bg-black/70 p-2 rounded text-white text-sm">
            Desafio simulado: Clique em "Complete Challenge" para avançar
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm">Encontrados: 0/5</span>
        <span className="text-sm">Tempo: 00:30</span>
      </div>
    </div>
  );
};

const ConceptualPuzzleChallenge = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm">
        Arraste e organize os elementos abaixo para formar um layout de interface coerente.
        Os elementos devem seguir princípios de design como hierarquia, alinhamento e contraste.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-muted/30 aspect-video rounded flex items-center justify-center">
          Header
        </div>
        <div className="bg-muted/30 aspect-video rounded flex items-center justify-center">
          Menu
        </div>
        <div className="bg-muted/30 aspect-video rounded flex items-center justify-center">
          Content
        </div>
        <div className="bg-muted/30 aspect-video rounded flex items-center justify-center">
          Sidebar
        </div>
      </div>
      <div className="w-full aspect-video bg-muted/10 rounded-lg border border-dashed border-muted flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Área de montagem</p>
      </div>
    </div>
  );
};

const UxQuizChallenge = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm">
        Responda às perguntas abaixo sobre princípios de UX design:
      </p>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium mb-2">1. Qual princípio de design se refere a manter consistência em elementos similares?</p>
          <div className="space-y-1">
            <div className="flex items-center">
              <input type="radio" id="q1a" name="q1" className="mr-2" />
              <label htmlFor="q1a" className="text-sm">Lei de Hick</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1b" name="q1" className="mr-2" />
              <label htmlFor="q1b" className="text-sm">Lei de Miller</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1c" name="q1" className="mr-2" />
              <label htmlFor="q1c" className="text-sm">Lei de Jakob</label>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">2. O que significa o acrônimo UI?</p>
          <div className="space-y-1">
            <div className="flex items-center">
              <input type="radio" id="q2a" name="q2" className="mr-2" />
              <label htmlFor="q2a" className="text-sm">User Interaction</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q2b" name="q2" className="mr-2" />
              <label htmlFor="q2b" className="text-sm">User Interface</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q2c" name="q2" className="mr-2" />
              <label htmlFor="q2c" className="text-sm">User Implementation</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PatternHuntChallenge = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm">
        Identifique o padrão na sequência de formas e cores abaixo e selecione o próximo elemento na sequência.
      </p>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0" />
        <div className="w-10 h-10 rounded bg-green-500 flex-shrink-0" />
        <div className="w-10 h-10 rounded-full bg-red-500 flex-shrink-0" />
        <div className="w-10 h-10 rounded bg-yellow-500 flex-shrink-0" />
        <div className="w-10 h-10 rounded-full bg-purple-500 flex-shrink-0" />
        <div className="w-10 h-10 flex items-center justify-center text-lg flex-shrink-0">?</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="w-full aspect-square rounded bg-green-500 flex items-center justify-center cursor-pointer hover:opacity-80" />
        <div className="w-full aspect-square rounded-full bg-blue-500 flex items-center justify-center cursor-pointer hover:opacity-80" />
        <div className="w-full aspect-square rounded bg-purple-500 flex items-center justify-center cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
};

export default Challenges;
