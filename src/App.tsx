import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Menu,
  Search,
  Smartphone,
  X,
} from "lucide-react";

const whatsappUrl = `https://wa.me/5521967225291?text=${encodeURIComponent("Oi, Julia! Vi seu portfólio e quero conversar sobre um site para o meu negócio.")}`;
const emailUrl = "mailto:solara.julia.a@gmail.com?subject=Quero%20conversar%20sobre%20um%20site";

const projects = [
  {
    title: "C&N Mármores e Granitos",
    eyebrow: "Marmoraria • site institucional",
    url: "https://cn-marmores.vercel.app/",
    description: "Projetos reais de mármores e granitos, com uma apresentação direta da marmoraria e um caminho claro para pedir orçamento.",
    tone: "stone",
    image: "/projects/screenshots/cn-marmores.png",
  },
  {
    title: "Academia Gustavo Pià",
    eyebrow: "Centro de lutas • site institucional",
    url: "https://academia-gustavo-pia.vercel.app/",
    description: "Modalidades, horários, aula experimental e dúvidas reunidos para quem quer conhecer a academia em Piracicaba.",
    tone: "fight",
    image: "/projects/screenshots/gustavo-pia.png",
  },
  {
    title: "Basic Coffee",
    eyebrow: "Cafeteria • site institucional",
    url: "https://basic-coffee-shop.vercel.app/br/",
    description:
      "Site para uma cafeteria em Marburg, com cardápio, história e informações de visita reunidos em uma apresentação que valoriza a marca.",
    tone: "coffee",
    image: "/projects/screenshots/basic-coffee.png",
    fallbackImage: "/projects/basic-coffee.webp",
  },
  {
    title: "S2 Seguros Saúde",
    eyebrow: "Saúde • site institucional",
    url: "https://s2-seguros-saude.vercel.app/",
    description:
      "Uma apresentação clara dos planos, com um caminho guiado até a solicitação de cotação pelo WhatsApp.",
    tone: "health",
    image: "/projects/screenshots/s2-saude.png",
    fallbackImage: "/projects/s2-saude.webp",
  },
  {
    title: "Raquel Santiago",
    eyebrow: "Fisioterapia • cartão digital",
    url: "https://cartao-raquel.vercel.app/",
    description:
      "A identidade de um cartão profissional transformada em uma experiência digital prática para apresentar serviços e facilitar o contato.",
    tone: "care",
    image: "/projects/screenshots/raquel.png",
    fallbackImage: "/projects/raquel.jpg",
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
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <div className="browser-address">{new URL(url).hostname}</div>
      </div>
      <div className="preview-canvas">
        <img
          className="project-shot"
          src={image}
          alt={`Captura real do site ${title}`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            const img = event.currentTarget;
            if (!fallbackImage || img.dataset.fallbackApplied === "true") return;
            img.dataset.fallbackApplied = "true";
            img.src = fallbackImage;
          }}
        />
        <div className="preview-shade" aria-hidden="true" />
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
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site-shell">
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
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação mobile">
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

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-copy reveal is-visible">
              <div className="eyebrow"><span /> WEB DESIGN · RIO DE JANEIRO</div>
              <h1>
                Criação de sites profissionais <em>para o seu negócio.</em>
              </h1>
              <p className="hero-lead">
                Transformo seus serviços em uma apresentação clara, com identidade visual, navegação simples e contato acessível. Sites institucionais e landing pages feitos para funcionar no celular e no computador.
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

            <figure className="hero-visual reveal is-visible">
              <div className="portrait-frame">
                <img src="/julia-original.png" alt="Julia Freitas, web designer e desenvolvedora de sites" width="941" height="1672" loading="eager" decoding="async" />
              </div>
              <figcaption><strong>Julia Freitas</strong><span>Web designer e desenvolvedora</span></figcaption>
            </figure>
          </div>

          <div className="trust-strip" aria-label="Diferenciais">
            <span><strong>{projects.length}</strong> projetos selecionados</span>
            <span>Design + desenvolvimento</span>
            <span>Feito para cada negócio</span>
            <span>Computador e celular</span>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">01 / PROJETOS</span>
              <h2>Sites desenvolvidos para <em>diferentes negócios.</em></h2>
            </div>
            <p>Uma seleção de trabalhos reais para negócios de áreas diferentes. Abra os sites para ver os detalhes.</p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project reveal" key={project.title}>
                <ProjectPreview title={project.title} url={project.url} tone={project.tone} image={project.image} fallbackImage={project.fallbackImage} />
                <div className="project-info">
                  <div className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                    Explorar o projeto <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">02 / O QUE EU FAÇO</span>
              <h2>Design e desenvolvimento <em>para a sua presença digital.</em></h2>
            </div>
            <p>Um novo site, uma página para divulgar um serviço ou a reformulação do que já existe. O ponto de partida é o que sua empresa precisa comunicar.</p>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card reveal" key={title}>
                <span className="service-number">0{index + 1}</span>
                <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="process-panel reveal">
            <div className="process-intro">
              <span className="section-kicker">03 / PROCESSO</span>
              <h2>Do primeiro contato <em>à publicação.</em></h2>
              <p>Você apresenta seu negócio e seus objetivos. A partir dessa conversa, organizamos o conteúdo, definimos o escopo e combinamos as etapas do projeto.</p>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><strong>Entendimento do negócio</strong><p>Conversamos sobre seus serviços, seu público e o que o site precisa facilitar para o cliente.</p></div></li>
              <li><span>02</span><div><strong>Estrutura e direção visual</strong><p>Definimos as páginas, a organização do conteúdo e as referências visuais que vão orientar o trabalho.</p></div></li>
              <li><span>03</span><div><strong>Design e desenvolvimento</strong><p>Construo a interface e adapto a navegação às diferentes telas, com atenção à leitura e aos caminhos de contato.</p></div></li>
              <li><span>04</span><div><strong>Revisão e publicação</strong><p>Confiro conteúdo, links e funcionamento antes de publicar a versão final, conforme o escopo combinado.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="about-grid reveal">
            <div className="about-note">
              <span className="section-kicker">DESIGN + CÓDIGO</span>
              <p>Clareza para apresentar.<br /><em>Cuidado para desenvolver.</em></p>
              <span className="about-signature">Julia Freitas<span>Web design · Rio de Janeiro</span></span>
            </div>
            <div className="about-copy">
              <span className="section-kicker">04 / SOBRE</span>
              <h2>Sou <em>Julia Freitas.</em></h2>
              <p>
                Sou web designer e desenvolvedora de sites no Rio de Janeiro, com atendimento remoto em todo o Brasil. Meu trabalho reúne organização de conteúdo, design de interfaces e desenvolvimento para apresentar cada negócio com clareza.
              </p>
              <p>
                Uma cafeteria precisa facilitar a consulta ao cardápio. Uma profissional de saúde precisa apresentar seus serviços e tornar o contato acessível. É a partir dessas necessidades que defino a estrutura e a linguagem de cada projeto.
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
            <div className="faq-intro reveal">
              <span className="section-kicker">05 / DÚVIDAS</span>
              <h2>Dúvidas <em>frequentes.</em></h2>
              <p>Informações para planejar a criação ou a reformulação do seu site.</p>
            </div>
            <div className="faq-list reveal">
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
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-card reveal">
            <span className="section-kicker">06 / SEU PROJETO</span>
            <h2>Vamos conversar <em>sobre seu site?</em></h2>
            <p>
              Conte o que sua empresa faz e se você precisa criar um site ou reformular o atual. Com essas informações, podemos definir o escopo e preparar uma proposta para o seu projeto.
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
          <div><strong>Julia Freitas</strong><small>Criação de sites no Rio de Janeiro · Atendimento em todo o Brasil</small></div>
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
