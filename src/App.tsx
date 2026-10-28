import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  GitMerge,
  ExternalLink,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Menu,
  PanelsTopLeft,
  Search,
  Smartphone,
  X,
} from "lucide-react";

const whatsappUrl = `https://wa.me/5521967225291?text=${encodeURIComponent("Oi, Julia! Vi seu portfólio e quero conversar sobre um projeto para o meu negócio.")}`;
const emailUrl = "mailto:solara.julia.a@gmail.com?subject=Quero%20conversar%20sobre%20um%20projeto";

const projects = [
  {
    index: "01",
    title: "XandeTEC Soluções",
    eyebrow: "Soluções técnicas • site institucional",
    url: "https://xandetec-solucoes.vercel.app/",
    description:
      "Site institucional para a XandeTEC em Jaraguá do Sul e região, reunindo serviços de climatização, segurança eletrônica, elétrica, documentação técnica e contato direto pelo WhatsApp.",
    scope: ["Serviços técnicos", "Trabalho em campo", "WhatsApp"],
    context:
      "Apresentar a atuação integrada da empresa — climatização, segurança eletrônica, elétrica dedicada e PMOC — com clareza para clientes residenciais e corporativos.",
    decision:
      "Organizar os serviços com atalhos de orçamento para cada frente técnica, valorizar fotos reais da frota e da equipe em campo e manter a navegação direta.",
    delivery:
      "Página responsiva com catálogo de serviços, registros de atendimentos em campo, marcas atendidas, dúvidas frequentes e ações direcionadas para o WhatsApp.",
    tone: "xandetec",
    image: "/projects/screenshots/xandetec.png",
  },
  {
    index: "02",
    title: "C&N Mármores e Granitos",
    eyebrow: "Marmoraria • site institucional",
    url: "https://cn-marmores.vercel.app/",
    description:
      "Site institucional para uma marmoraria em Americana, com projetos reais em mármores e granitos e acesso direto a orçamento pelo WhatsApp.",
    scope: ["Galeria de projetos", "Ambientes", "WhatsApp"],
    context: "Apresentar trabalhos residenciais e comerciais para cozinhas, banheiros e áreas gourmet, além de facilitar o início de um novo orçamento.",
    decision: "Dar protagonismo às fotografias e organizar a navegação entre projetos, ambientes e informações da empresa.",
    delivery: "Galeria de projetos com fotos ampliáveis, informações por ambiente e atalhos para iniciar uma conversa pelo WhatsApp.",
    tone: "stone",
    image: "/projects/screenshots/cn-marmores.png",
  },
  {
    index: "03",
    title: "Academia Gustavo Pià",
    eyebrow: "Centro de lutas • site institucional",
    url: "https://academia-gustavo-pia.vercel.app/",
    description:
      "Site institucional que apresenta o Centro de Lutas em Piracicaba, suas modalidades e caminhos para conversar com a equipe.",
    scope: ["Modalidades", "Galeria", "WhatsApp"],
    context: "Ajudar quem quer conhecer a academia, consultar as modalidades e entender como dar o primeiro passo para treinar.",
    decision: "Apresentar modalidades e espaço com fotografias da própria academia, deixando horários, planos e turmas para confirmação direta com a equipe.",
    delivery: "Página responsiva com modalidades, galeria de fotos, apresentação do professor, dúvidas frequentes e atalhos para o WhatsApp.",
    tone: "fight",
    image: "/projects/screenshots/gustavo-pia.png",
  },
  {
    index: "04",
    title: "CLIMABLU Climatização",
    eyebrow: "Climatização • demonstração institucional",
    url: "https://climablu-climatizacao.vercel.app/",
    description:
      "Demonstração de site institucional que reúne serviços, equipamentos e canais de contato para uma empresa de climatização em Blumenau e região.",
    scope: ["Serviços", "Equipamentos", "Contato"],
    context: "Apresentar instalação, manutenção, higienização e soluções de climatização com informações verificadas da empresa.",
    decision: "Separar serviços, equipamentos, empresa e contato em rotas próprias, sem tratar fotos de ambiente como obras nem marcas como credenciais.",
    delivery: "Demonstração com cinco rotas principais, catálogo consultivo, imagens autorizadas e configuração não indexável.",
    tone: "climablu",
    image: "/projects/screenshots/climablu.png",
  },
  {
    index: "05",
    title: "Luscar Climatização",
    eyebrow: "Climatização • redesign em demonstração",
    url: "https://luscar-climatizacao.vercel.app/",
    description:
      "Demonstração de redesign para a Luscar, com conteúdo organizado para os serviços de climatização em Joinville e região.",
    scope: ["13 rotas", "Conteúdo", "SEO técnico"],
    context: "Reorganizar o site institucional e preservar rotas e referências de busca importantes da estrutura existente.",
    decision: "Reaproveitar conteúdos e URLs confirmados, removendo dados de template e separando serviços, trabalhos, guias e contato.",
    delivery: "Demonstração publicada com 13 rotas e configuração não indexável; a migração para o domínio da Luscar depende de autorização.",
    tone: "luscar",
    image: "/projects/screenshots/luscar.png",
  },
  {
    index: "06",
    title: "Basic Coffee",
    eyebrow: "Cafeteria • site institucional",
    url: "https://basic-coffee-shop.vercel.app/br/",
    description:
      "Site para uma cafeteria em Marburg, com cardápio, história e informações de visita reunidos em uma apresentação que valoriza a marca.",
    scope: ["Cardápio", "Conteúdo", "Localização"],
    context: "Apresentar a cafeteria e ajudar quem quer escolher o que consumir ou planejar uma visita.",
    decision: "Cardápio, história e informações de visita têm caminhos próprios, com fotografia e tipografia em destaque.",
    delivery: "Categorias de produtos, horários, endereço e atalhos para rota e pedido online.",
    tone: "coffee",
    image: "/projects/screenshots/basic-coffee.png",
    fallbackImage: "/projects/basic-coffee.webp",
  },
  {
    index: "07",
    title: "S2 Seguros Saúde",
    eyebrow: "Saúde • site institucional",
    url: "https://s2-seguros-saude.vercel.app/",
    description:
      "Uma apresentação clara dos planos, com um caminho guiado até a solicitação de cotação pelo WhatsApp.",
    scope: ["Design responsivo", "Formulário", "WhatsApp"],
    context: "Organizar diferentes categorias de planos e facilitar uma conversa com as informações iniciais do interessado.",
    decision: "A seleção de um plano já indica essa opção no formulário. Antes de abrir o WhatsApp, o visitante pode revisar e editar a mensagem.",
    delivery: "Formulário com validação, prévia da mensagem, perguntas frequentes e página de privacidade.",
    tone: "health",
    image: "/projects/screenshots/s2-saude.png",
    fallbackImage: "/projects/s2-saude.webp",
  },
  {
    index: "08",
    title: "Raquel Santiago",
    eyebrow: "Fisioterapia • cartão digital",
    url: "https://cartao-raquel.vercel.app/",
    description:
      "A identidade de um cartão profissional transformada em uma experiência digital prática para apresentar serviços e facilitar o contato.",
    scope: ["Design para celular", "WhatsApp", "Contato na agenda"],
    context: "Levar a identidade visual de um cartão do Canva para a web, mantendo a personalidade da profissional.",
    decision: "Preservar fotografia, florais e paleta, adaptando a composição ao celular e ao computador, com ações de contato em destaque.",
    delivery: "Cartão adaptado a diferentes telas, página de serviços, contato para salvar na agenda e opções de compartilhamento do link.",
    tone: "care",
    image: "/projects/screenshots/raquel.png",
    fallbackImage: "/projects/raquel.jpg",
  },
  {
    index: "09",
    title: "Deskflow CRM",
    eyebrow: "CRM • em desenvolvimento",
    url: "https://deskflow-crm.vercel.app/",
    description:
      "CRM em desenvolvimento para organizar prospecção, conversas e tarefas do processo comercial em um só fluxo.",
    scope: ["Contatos e funis", "Atendimento", "Em desenvolvimento"],
    context: "Concentrar contatos, etapas do funil e próximos passos usados na prospecção e no atendimento.",
    decision: "Priorizar um fluxo claro para acompanhar contatos, conversas e próximos passos, evoluindo os recursos em etapas.",
    delivery: "Ambiente com acesso por login; WhatsApp e outras integrações dependem de configuração, e uma nova fila de envio segue em desenvolvimento.",
    tone: "deskflow",
    image: "/projects/screenshots/deskflow-crm-ver-tudo.png",
  },
  {
    index: "10",
    title: "Folha & Poesia",
    eyebrow: "Livraria e botânica • projeto conceitual",
    url: "https://julia-conceitos.vercel.app/folha-e-poesia/",
    description: "Uma vitrine conceitual para uma marca fictícia de livros, escrita, café e botânica, com navegação por coleções e atmosfera editorial.",
    scope: ["Identidade visual", "Coleções", "Design responsivo"],
    context: "Explorar uma presença digital acolhedora para uma livraria e loja de objetos, valorizando os pequenos rituais do dia a dia.",
    decision: "Combinar tipografia editorial, tons naturais e fotografia ilustrativa com uma navegação simples entre categorias.",
    delivery: "Página responsiva com coleções interativas, apresentação editorial e contato para conversar sobre o desenvolvimento de um projeto semelhante.",
    tone: "care",
    image: "/projects/screenshots/folha-e-poesia.jpg",
  },
  {
    index: "11",
    title: "Prisma Vidros",
    eyebrow: "Vidros e esquadrias • projeto conceitual",
    url: "https://julia-conceitos.vercel.app/prisma-vidros/",
    description: "Site conceitual para uma marca fictícia de vidros e esquadrias, com serviços organizados e inspirações para ambientes residenciais e comerciais.",
    scope: ["Identidade visual", "Serviços", "Galeria"],
    context: "Explorar uma apresentação clara para um negócio de vidros, aproximando as soluções dos ambientes em que podem ser aplicadas.",
    decision: "Combinar uma identidade escura com detalhes dourados e fotografias ilustrativas, organizando serviços e referências de aplicação.",
    delivery: "Página responsiva com serviços, galeria navegável e contato para conversar sobre um projeto semelhante.",
    tone: "stone",
    image: "/projects/screenshots/prisma-vidros.jpg",
  },
  {
    index: "12",
    title: "Fluxo Desentupidora",
    eyebrow: "Serviços residenciais • projeto conceitual",
    url: "https://julia-conceitos.vercel.app/fluxo-desentupidora/",
    description: "Página conceitual para uma marca fictícia de desentupimento, com serviços organizados e uma comunicação direta para situações de urgência.",
    scope: ["Identidade visual", "Serviços", "Design responsivo"],
    context: "Explorar uma apresentação ágil para um serviço que precisa ser encontrado e compreendido rapidamente.",
    decision: "Usar contraste forte, títulos objetivos e navegação simples para destacar os serviços e orientar o visitante.",
    delivery: "Página responsiva com apresentação de serviços, perguntas frequentes e contato sobre a criação de projetos semelhantes.",
    tone: "fight",
    image: "/projects/screenshots/fluxo-desentupidora.jpg",
  },
  {
    "index": "13",
    "title": "Áuria Superfícies",
    "eyebrow": "Marmoraria • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/auria-superficies/",
    "description": "Uma apresentação de superfícies em pedra com composição editorial, imagens de ambientes e navegação entre aplicações. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Valorizar materiais e possibilidades de uso em espaços residenciais.",
    "decision": "Combinar contrastes escuros, tipografia ampla e fotografias ilustrativas de arquitetura.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "stone",
    "image": "/projects/screenshots/auria-superficies.jpg"
},
  {
    "index": "14",
    "title": "Orbe Pedras",
    "eyebrow": "Marmoraria • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/orbe-pedras/",
    "description": "Um site para uma marca fictícia de mármores e granitos, com foco nas relações entre materiais, acabamentos e ambientes. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Organizar a apresentação de materiais e aplicações em uma experiência visual clara.",
    "decision": "Usar tons naturais, tipografia com serifa e uma hierarquia que aproxima a pedra da arquitetura.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "stone",
    "image": "/projects/screenshots/orbe-pedras.jpg"
},
  {
    "index": "15",
    "title": "Lúmina Vidros",
    "eyebrow": "Vidros e alumínio • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/lumina-vidros/",
    "description": "Uma apresentação de soluções em vidro e alumínio, com navegação entre serviços e referências de aplicação. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Reunir diferentes possibilidades de uso do vidro em uma página objetiva.",
    "decision": "Equilibrar uma identidade escura com detalhes em laranja e fotografias ilustrativas de ambientes.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "stone",
    "image": "/projects/screenshots/lumina-vidros.jpg"
},
  {
    "index": "16",
    "title": "Aurum Auto",
    "eyebrow": "Estética automotiva • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/aurum-auto/",
    "description": "Site conceitual de estética automotiva com apresentação de serviços, navegação por seções e galeria de referências visuais. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Dar clareza aos cuidados automotivos em uma presença digital com acabamento visual.",
    "decision": "Combinar azul escuro, amarelo e fotografias ilustrativas de veículos com uma navegação direta.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "fight",
    "image": "/projects/screenshots/aurum-auto.jpg"
},
  {
    "index": "17",
    "title": "Nexo Detail",
    "eyebrow": "Detalhamento automotivo • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/nexo-detail/",
    "description": "Uma apresentação de detalhamento automotivo com identidade escura, referências de veículos e organização dos serviços. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Apresentar possibilidades de cuidado com pintura e interior de veículos.",
    "decision": "Destacar fotografia e títulos amplos, com uma paleta sóbria e detalhes dourados.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "fight",
    "image": "/projects/screenshots/nexo-detail.jpg"
},
  {
    "index": "18",
    "title": "Chaveiro Elo",
    "eyebrow": "Chaveiro • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/chaveiro-elo/",
    "description": "Site conceitual com páginas dedicadas a serviços automotivos, residenciais e cópias de chaves. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Organizar serviços técnicos em rotas próprias para facilitar a consulta.",
    "decision": "Manter navegação direta, identidade amarela e preta e conteúdo distribuído por necessidade.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "stone",
    "image": "/projects/screenshots/chaveiro-elo.jpg"
},
  {
    "index": "19",
    "title": "Desentupidora Livre",
    "eyebrow": "Serviços residenciais • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/livre-desentupidora/",
    "description": "Página conceitual de serviços hidráulicos com identidade azul e dourada e uma apresentação visual direta. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Facilitar a compreensão de diferentes tipos de serviço em uma página.",
    "decision": "Usar contraste, títulos objetivos e ilustrações para conduzir a leitura até os serviços.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "fight",
    "image": "/projects/screenshots/livre-desentupidora.jpg"
},
  {
    "index": "20",
    "title": "Desentupidora Canal",
    "eyebrow": "Serviços residenciais • projeto conceitual",
    "url": "https://julia-conceitos.vercel.app/canal-desentupidora/",
    "description": "Um site conceitual de desentupimento com serviços organizados e ilustrações hidráulicas próprias. Marca fictícia criada para o portfólio.",
    "scope": [
        "Identidade visual",
        "Conteúdo",
        "Design responsivo"
    ],
    "context": "Explorar uma apresentação simples para serviços residenciais e comerciais.",
    "decision": "Combinar azul profundo e verde-lima com ilustrações e navegação por seções.",
    "delivery": "Projeto navegável e responsivo, com imagens ilustrativas e contato para conversar sobre a criação de um site semelhante.",
    "tone": "fight",
    "image": "/projects/screenshots/canal-desentupidora.jpg"
},
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Sites institucionais",
    text: "Apresente sua empresa, organize seus serviços e reúna as informações que o cliente precisa para entrar em contato.",
  },
  {
    icon: Code2,
    title: "Landing pages",
    text: "Dê destaque a um serviço ou uma campanha em uma página com mensagem objetiva e convite claro para solicitar um orçamento.",
  },
  {
    icon: Smartphone,
    title: "Reformulação de sites",
    text: "Atualize o visual e reorganize o conteúdo de um site existente, com navegação adaptada ao celular e ao computador.",
  },
  {
    icon: Search,
    title: "SEO na estrutura do site",
    text: "Títulos, descrições e conteúdo organizados para ajudar os mecanismos de busca a compreender suas páginas e seus serviços.",
  },
  {
    icon: PanelsTopLeft,
    title: "CRM e sistemas",
    text: "Ferramentas e fluxos digitais para organizar informações, acompanhar etapas e facilitar o trabalho da sua equipe.",
  },
  {
    icon: GitMerge,
    title: "Automações e integrações",
    text: "Conexões entre ferramentas e rotinas automatizadas para reduzir tarefas repetitivas e manter as informações organizadas.",
  },
];

function ProjectPreview({
  title,
  url,
  tone,
  image,
  fallbackImage,
}: {
  title: string;
  url: string;
  tone: string;
  image: string;
  fallbackImage?: string;
}) {
  return (
    <div className={`project-preview project-preview--${tone}`}>
      <div className="preview-canvas">
        <img
          className="project-shot"
          src={image}
          alt={title === "Deskflow CRM" ? "Visão geral de CRM do Deskflow CRM" : `Captura real do site ${title}`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            const img = event.currentTarget;
            if (!fallbackImage || img.dataset.fallbackApplied === "true") return;
            img.dataset.fallbackApplied = "true";
            img.src = fallbackImage;
          }}
        />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="preview-hit"
          aria-label={`Abrir ${title} em uma nova aba`}
        />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Julia Freitas — início">
          <span className="brand-mark">J.</span>
          <span className="brand-copy">
            <strong>Julia Freitas</strong>
            <small>Design e desenvolvimento</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar orçamento <MessageCircle size={18} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação mobile">
            {[
              ["Projetos", "#projetos"],
              ["Serviços", "#servicos"],
              ["Processo", "#processo"],
              ["Sobre", "#sobre"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Criação de sites profissionais. <em>Com a sua identidade.</em>
              </h1>
              <p className="hero-lead">
                Seu negócio tem uma história, um jeito e algo a oferecer. Eu organizo tudo isso em um site com design próprio, leitura clara e caminhos simples para entrar em contato.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Solicitar orçamento <MessageCircle size={18} aria-hidden="true" />
                </a>
                <a className="button button--ghost" href="#projetos">Conhecer os projetos <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
              <div className="hero-note">
                Rio de Janeiro · Atendimento remoto para todo o Brasil
              </div>
            </div>

            <figure className="hero-visual">
              <div className="portrait-frame">
                <img src="/julia-original.png" alt="Julia Freitas, web designer e desenvolvedora de sites" width="941" height="1672" loading="eager" decoding="async" />
              </div>
              <figcaption><strong>Julia Freitas</strong><span>Web designer e desenvolvedora</span></figcaption>
            </figure>
          </div>

          <div className="work-intro">
            <p>Da identidade visual ao site no ar.<br /><span>Conheça o trabalho nos próprios projetos.</span></p>
            <a href="#projetos">Explorar os {projects.length} projetos <ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading">
            <div>
              <h2>Projetos com <em>identidade própria.</em></h2>
            </div>
            <p>Conheça o contexto, as decisões de design e os recursos de cada projeto. Acesse os sites para explorar a navegação e os detalhes.</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <ProjectPreview title={project.title} url={project.url} tone={project.tone} image={project.image} fallbackImage={project.fallbackImage} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <span className="project-kind">{project.eyebrow}</span>
                  <p>{project.description}</p>
                  <div className="tag-list" aria-label={`Escopo de ${project.title}`}>
                    {project.scope.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <details className="case-details">
                    <summary>Contexto, escolhas e entrega <span className="sr-only">de {project.title}</span></summary>
                    <dl className="project-case">
                    <div><dt>O contexto</dt><dd>{project.context}</dd></div>
                    <div><dt>A escolha</dt><dd>{project.decision}</dd></div>
                    <div><dt>A entrega</dt><dd>{project.delivery}</dd></div>
                    </dl>
                  </details>
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                    Visitar {project.title} <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="section-heading">
            <div>
              <h2>O que seu próximo <em>site precisa fazer?</em></h2>
            </div>
            <p>Apresentar sua empresa, dar destaque a um serviço ou reorganizar o que já existe. O objetivo orienta o conteúdo, o design e os recursos.</p>
          </div>

          <div className="services-grid">
            {services.slice(0, 4).map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="systems-service">
            <div><h3>Além do site: CRM e automações.</h3><p>Também desenvolvo sistemas para organizar contatos e tarefas, além de integrações para conectar ferramentas e reduzir rotinas repetitivas. O escopo é definido a partir do seu processo de trabalho.</p></div>
            <a className="text-link" href="#contato">Conversar sobre uma solução <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="process-panel">
            <div className="process-intro">
              <h2>Do primeiro contato <em>à entrega.</em></h2>
              <p>Você apresenta seu negócio e seus objetivos. A partir dessa conversa, definimos a solução, o escopo e as etapas do projeto.</p>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><strong>Entendimento do negócio</strong><p>Conversamos sobre seus serviços, seu público ou sua rotina de trabalho para identificar o que a solução precisa facilitar.</p></div></li>
              <li><span>02</span><div><strong>Estrutura e direção</strong><p>Definimos o conteúdo, as etapas e os recursos necessários. Para sites, alinhamos também as referências visuais.</p></div></li>
              <li><span>03</span><div><strong>Design e desenvolvimento</strong><p>Construo a solução com atenção à clareza, ao funcionamento e ao uso em diferentes telas quando aplicável.</p></div></li>
              <li><span>04</span><div><strong>Revisão e entrega</strong><p>Confiro o conteúdo e o funcionamento antes de entregar ou publicar a solução, conforme o escopo combinado.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="about-grid">
            <div className="about-note">
              <p>Clareza para apresentar.<br /><em>Cuidado para desenvolver.</em></p>
              <span className="about-signature">Julia Freitas<span>Web design · Rio de Janeiro</span></span>
            </div>
            <div className="about-copy">
              <h2>Sou <em>Julia Freitas.</em></h2>
              <p>
                Sou web designer e desenvolvedora no Rio de Janeiro, com atendimento remoto em todo o Brasil. Meu trabalho reúne organização de conteúdo, design de interfaces e desenvolvimento de sites, sistemas e automações para cada negócio.
              </p>
              <p>
                Uma cafeteria precisa facilitar a consulta ao cardápio. Uma profissional de saúde precisa apresentar seus serviços e tornar o contato acessível. Uma equipe pode precisar organizar clientes e tarefas em um só fluxo. É a partir dessas necessidades que defino cada projeto.
              </p>
              <div className="about-points">
                <span><Check size={15} aria-hidden="true" /> Design e desenvolvimento</span>
                <span><Check size={15} aria-hidden="true" /> Conteúdo organizado</span>
                <span><Check size={15} aria-hidden="true" /> Atenção ao celular</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-grid">
            <div className="faq-intro">
              <h2>Dúvidas <em>frequentes.</em></h2>
              <p>Informações para planejar a criação ou a reformulação do seu site.</p>
            </div>
            <div className="faq-list">
              <details>
                <summary>Minha empresa já tem Instagram. Por que criar um site?</summary>
                <p>O site reúne seus serviços, informações e canais de contato em um endereço próprio. Ele complementa as redes sociais e oferece uma apresentação organizada para quem quer conhecer sua empresa antes de conversar.</p>
              </details>
              <details>
                <summary>Preciso ter os textos e as fotos antes de começar?</summary>
                <p>Você pode começar com o material que já possui. Na conversa inicial, avaliamos o que pode ser aproveitado e o que precisa ser produzido. O trabalho com textos e imagens é definido no escopo da proposta.</p>
              </details>
              <details>
                <summary>O site funciona bem no celular?</summary>
                <p>Sim. O layout é adaptado ao celular e ao computador, com revisão da leitura, dos menus, dos botões e dos caminhos de contato em diferentes tamanhos de tela.</p>
              </details>
              <details>
                <summary>Quanto custa criar um site e qual é o prazo?</summary>
                <p>O valor e o prazo dependem do número de páginas, dos recursos e do conteúdo necessário. Após entender o projeto, apresento uma proposta com escopo, investimento e etapas definidos antes do início do trabalho.</p>
              </details>
              <details>
                <summary>Qual é a diferença entre site institucional e landing page?</summary>
                <p>O site institucional apresenta a empresa e seus serviços de forma mais ampla. A landing page concentra a mensagem em uma oferta ou ação, como solicitar um orçamento. A escolha depende do objetivo e do conteúdo do projeto.</p>
              </details>
              <details>
                <summary>Como funcionam domínio e hospedagem?</summary>
                <p>Domínio é o endereço do site; hospedagem é o serviço que o mantém disponível. A escolha, a contratação e os custos são definidos na proposta de acordo com o projeto.</p>
              </details>
              <details>
                <summary>Posso atualizar o site depois da publicação?</summary>
                <p>Sim. Podemos definir no escopo se você precisa editar o conteúdo por conta própria ou solicitar alterações depois da entrega. A solução depende de como o site será usado.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-card">
            <h2>Vamos conversar <em>sobre seu projeto?</em></h2>
            <p>
              Conte o que sua empresa faz e se você precisa de um site, CRM, sistema ou automação. Com essas informações, podemos definir o escopo e preparar uma proposta para o seu projeto.
            </p>
            <div className="contact-actions">
              <a className="button button--primary button--large" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> Solicitar orçamento
              </a>
              <a className="button button--ghost button--large" href={emailUrl}><Mail size={18} aria-hidden="true" /> Prefiro enviar um e-mail</a>
            </div>
            <small>Atendimento direto com Julia Freitas pelo WhatsApp: (21) 96722-5291. A primeira conversa serve para entender sua necessidade e definir os próximos passos.</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">J.</span>
          <div><strong>Julia Freitas</strong><small>Sites e soluções digitais no Rio de Janeiro · Atendimento em todo o Brasil</small></div>
        </div>
        <div className="footer-links">
          <a href="#inicio">Topo</a>
          <a href="https://github.com/kittishy" target="_blank" rel="noreferrer">GitHub</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:solara.julia.a@gmail.com">E-mail</a>
        </div>
        <small>© 2026 Julia Freitas. Design e desenvolvimento.</small>
      </footer>
    </div>
  );
}

export default App;
