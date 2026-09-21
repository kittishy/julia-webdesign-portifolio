import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  LayoutTemplate,
  Mail,
  Menu,
  Search,
  Smartphone,
  X,
} from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Basic Coffee",
    eyebrow: "Cafeteria • site institucional",
    url: "https://basic-coffee-shop.vercel.app/br/",
    description:
      "Uma presença digital editorial para uma cafeteria: menu, história, localização e experiência de marca organizados em uma navegação simples e visual.",
    scope: ["Redesign", "PT + DE", "SEO local", "Mobile"],
    tone: "coffee",
  },
  {
    index: "02",
    title: "S2 Seguros Saúde",
    eyebrow: "Saúde • site institucional",
    url: "https://s2-seguros-saude.vercel.app/",
    description:
      "Redesign pensado para transformar um serviço complexo em uma jornada clara: produtos, explicações, dúvidas e caminhos de contato sem deixar o visitante perdido.",
    scope: ["UX", "Conversão", "Conteúdo", "SEO"],
    tone: "health",
  },
  {
    index: "03",
    title: "Raquel Santiago",
    eyebrow: "Fisioterapia • cartão digital",
    url: "https://raquel-carrd.vercel.app/",
    description:
      "Um cartão digital mobile-first para concentrar apresentação profissional, serviços e atalhos de contato em uma página compacta e fácil de compartilhar.",
    scope: ["Mobile-first", "WhatsApp", "vCard", "Marca pessoal"],
    tone: "care",
  },
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Sites institucionais",
    text: "Uma apresentação própria para sua empresa explicar o que faz, passar confiança e facilitar o próximo contato.",
  },
  {
    icon: Code2,
    title: "Landing pages",
    text: "Páginas enxutas, com uma oferta clara e um caminho de ação pensado para campanhas, serviços ou prospecção.",
  },
  {
    icon: Smartphone,
    title: "Redesign responsivo",
    text: "Reorganizo sites que ficaram datados ou confusos, cuidando da experiência tanto no celular quanto no desktop.",
  },
  {
    icon: Search,
    title: "SEO on-page",
    text: "Estrutura, títulos, conteúdo e detalhes técnicos preparados para o Google entender melhor cada página.",
  },
];

function ProjectPreview({ title, url, tone }: { title: string; url: string; tone: string }) {
  return (
    <div className={`project-preview project-preview--${tone}`}>
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <div className="browser-address">{new URL(url).hostname}</div>
      </div>
      <div className="preview-canvas">
        <div className="preview-fallback" aria-hidden="true">
          <span>LIVE PROJECT</span>
          <strong>{title}</strong>
        </div>
        <iframe
          src={url}
          title={`Prévia do projeto ${title}`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
        />
        <a href={url} target="_blank" rel="noreferrer" className="preview-hit" aria-label={`Abrir ${title} em uma nova aba`} />
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
        <a className="brand" href="#inicio" aria-label="Julia Web Design — início">
          <span className="brand-mark">J.</span>
          <span className="brand-copy">
            <strong>Julia</strong>
            <small>Web Design</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="header-cta" href="#contato">
          Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
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
              <div className="eyebrow"><span /> CRIAÇÃO DE SITES • RIO DE JANEIRO</div>
              <h1>
                Sites que fazem seu negócio parecer <em>tão bom quanto ele é.</em>
              </h1>
              <p className="hero-lead">
                Crio sites profissionais e landing pages para empresas que querem passar confiança, explicar melhor o que fazem e transformar visita em conversa.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#projetos">
                  Ver projetos reais <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="button button--ghost" href="#contato">Quero um site assim</a>
              </div>
              <div className="hero-note">
                <Check size={16} aria-hidden="true" /> Design, desenvolvimento, mobile e SEO pensados em conjunto.
              </div>
            </div>

            <div className="hero-visual reveal is-visible">
              <div className="portrait-frame">
                <img src="/julia-hero.webp" alt="Julia, web designer, em retrato profissional" width="1000" height="1000" fetchPriority="high" />
                <div className="portrait-overlay" />
                <div className="portrait-label">
                  <small>PORTFÓLIO</small>
                  <strong>2026</strong>
                </div>
              </div>
              <div className="floating-card floating-card--location">
                <span>BASE</span>
                <strong>Rio de Janeiro</strong>
                <small>atendimento remoto • Brasil</small>
              </div>
              <div className="floating-card floating-card--work">
                <span>AGORA</span>
                <strong>Projetos selecionados</strong>
                <small>3 trabalhos publicados ↓</small>
              </div>
            </div>
          </div>

          <div className="trust-strip" aria-label="Diferenciais">
            <span><strong>3</strong> projetos publicados</span>
            <span>Sites responsivos</span>
            <span>SEO on-page</span>
            <span>Experiência mobile</span>
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">01 / PROJETOS</span>
              <h2>Não é promessa. <em>É trabalho aberto para você clicar.</em></h2>
            </div>
            <p>Três projetos diferentes, pensados para negócios diferentes. Abra qualquer um deles e veja o site funcionando de verdade.</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project reveal" key={project.title}>
                <ProjectPreview title={project.title} url={project.url} tone={project.tone} />
                <div className="project-info">
                  <div className="project-index">{project.index}</div>
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list" aria-label={`Escopo de ${project.title}`}>
                    {project.scope.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                    Visitar site <ExternalLink size={16} aria-hidden="true" />
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
              <h2>Um site não precisa ser enorme. <em>Precisa fazer sentido.</em></h2>
            </div>
            <p>Eu ajusto estrutura, visual e conteúdo ao que seu negócio realmente precisa — sem empilhar páginas ou efeitos só para parecer mais complexo.</p>
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
              <h2>Você me conta o negócio. <em>Eu organizo o digital.</em></h2>
              <p>Não precisa chegar com briefing perfeito, textos prontos ou saber o nome de cada parte do site. A ideia é tirar esse peso de você.</p>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><strong>Entendo o contexto</strong><p>O que você vende, para quem, o que já existe e qual é a prioridade.</p></div></li>
              <li><span>02</span><div><strong>Defino a direção</strong><p>Estrutura, referências, conteúdo e identidade antes de sair construindo.</p></div></li>
              <li><span>03</span><div><strong>Construo e adapto</strong><p>Design e desenvolvimento responsivo, com revisão em desktop e celular.</p></div></li>
              <li><span>04</span><div><strong>Publico e refino</strong><p>Links, SEO básico, domínio e detalhes finais conferidos antes de entregar.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="about-grid reveal">
            <div className="about-photo">
              <img src="/julia-about.webp" alt="Julia em um retrato casual usado no portfólio" width="720" height="960" loading="lazy" />
              <span className="about-stamp">JULIA / WEB DESIGN</span>
            </div>
            <div className="about-copy">
              <span className="section-kicker">04 / SOBRE</span>
              <h2>Eu gosto de site bonito. <em>Mas gosto mais quando ele resolve alguma coisa.</em></h2>
              <p>
                Trabalho com design e desenvolvimento para transformar negócios que hoje dependem só de Instagram, WhatsApp ou um site antigo em uma presença digital própria, organizada e convincente.
              </p>
              <p>
                Meu processo mistura olhar visual, código e estratégia. Como web designer no Rio de Janeiro, atendo projetos locais e também trabalho de forma remota com empresas de outras regiões do Brasil.
              </p>
              <div className="about-points">
                <span><Check size={15} /> sem template genérico</span>
                <span><Check size={15} /> feito para seu conteúdo real</span>
                <span><Check size={15} /> mobile desde o começo</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-grid">
            <div className="faq-intro reveal">
              <span className="section-kicker">05 / DÚVIDAS</span>
              <h2>Antes de você perguntar.</h2>
              <p>As dúvidas que mais costumam aparecer quando uma empresa começa a pensar em ter — ou refazer — o próprio site.</p>
            </div>
            <div className="faq-list reveal">
              <details>
                <summary>Já tenho Instagram. Ainda faz sentido ter site?</summary>
                <p>Sim, se você quer um lugar próprio para reunir serviços, informações e contato. O Instagram continua ajudando na descoberta; o site organiza a apresentação quando alguém quer entender melhor a empresa.</p>
              </details>
              <details>
                <summary>Não tenho fotos ou textos prontos. E agora?</summary>
                <p>A gente começa pelo que já existe. Eu organizo o material, aproveito o que faz sentido e deixo claro o que realmente falta antes de travar o projeto por detalhes.</p>
              </details>
              <details>
                <summary>O site funciona bem no celular?</summary>
                <p>Sim. A adaptação mobile faz parte da construção desde o início, não é uma versão improvisada depois que o desktop fica pronto.</p>
              </details>
              <details>
                <summary>Quanto tempo leva para ficar pronto?</summary>
                <p>Depende do tamanho do site e dos materiais disponíveis. O prazo é definido junto com o escopo antes de começar, para você saber exatamente o que esperar.</p>
              </details>
              <details>
                <summary>Posso começar com uma estrutura menor?</summary>
                <p>Pode. Muitas empresas ficam melhor com uma landing page ou um site institucional enxuto do que com várias páginas sem função. A estrutura cresce quando o negócio realmente pede.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-card reveal">
            <span className="section-kicker">06 / SEU PROJETO</span>
            <h2>Seu negócio pode ser <em>o próximo daqui.</em></h2>
            <p>
              Me conta o nome da empresa, o que vocês fazem e o que você gostaria que o site ajudasse a melhorar. Eu consigo partir daí.
            </p>
            <div className="contact-actions">
              <a className="button button--primary button--large" href="mailto:solara.julia.a@gmail.com?subject=Quero%20conversar%20sobre%20um%20site">
                <Mail size={18} aria-hidden="true" /> Me contar sobre o projeto
              </a>
              <a className="button button--ghost button--large" href="#projetos">Rever os projetos</a>
            </div>
            <small>Se eu te enviei este portfólio pelo WhatsApp, pode simplesmente me responder por lá — eu continuo a conversa com o contexto do seu negócio.</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">J.</span>
          <div><strong>Julia Web Design</strong><small>Criação de sites profissionais • RJ + Brasil</small></div>
        </div>
        <div className="footer-links">
          <a href="#inicio">Topo</a>
          <a href="https://github.com/kittishy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:solara.julia.a@gmail.com">E-mail</a>
        </div>
        <small>© 2026 Julia. Design & desenvolvimento.</small>
      </footer>
    </div>
  );
}

export default App;
