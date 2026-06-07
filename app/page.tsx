import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="container nav__inner">
          <a href="#" className="brand" aria-label="Vistoo">
            <img src="/assets/logo.png" alt="Vistoo — Agência de sites para clínicas de estética" className="brand__logo" />
            <span className="brand__name">Vistoo</span>
          </a>
          <nav className="nav__links" aria-label="Principal">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#processo">Processo</a>
            <a href="#precos">Preços</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav__cta">
            <a href="#contacto" className="btn btn--primary btn--sm">Pedir orçamento</a>
          </div>
        </div>
      </header>
      
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="hero__proof">
              <div className="vh-proof">
                <div className="vh-avatars"><span>DF</span><span>SE</span><span>IR</span><span>EC</span></div>
                <span><span className="vh-stars">★★★★★</span>  <b>+100 clínicas</b> em todo o país</span>
              </div>
            </div>
            <h1 className="display">
              O seu Website<br /> merece ser <span style={{fontWeight: 800, color: '#3B6FD4'}}>Vistoo.</span>
            </h1>
            <p className="lede">
              Desenhamos e construímos websites para clínicas de estética em Portugal —
              rápidos, elegantes e pensados para transformar visitas em marcações.
            </p>
            <div className="hero__ctas">
              <a href="#contacto" className="btn btn--primary">Marcar reunião</a>
              <a href="#trabalhos" className="btn btn--ghost">Ver trabalhos →</a>
            </div>
            <ul className="hero__bullets">
              <li><svg viewBox="0 0 16 16" className="check"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Entrega em 14 dias úteis</li>
              <li><svg viewBox="0 0 16 16" className="check"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> SEO local incluído</li>
              <li><svg viewBox="0 0 16 16" className="check"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Marcações online</li>
            </ul>
          </div>
      
          <div className="hero__mock" aria-hidden="true">
            <div className="browser">
              <div className="browser__bar">
                <span className="dots"><i></i><i></i><i></i></span>
                <div className="browser__url">
                  <svg viewBox="0 0 16 16" width="12" height="12"><path d="M5 7V5a3 3 0 016 0v2" fill="none" stroke="currentColor" strokeWidth="1.5"/><rect x="3.5" y="7" width="9" height="6.5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                  danielafernandesbeauty.pt
                </div>
                <span className="browser__spacer"></span>
              </div>
              <div className="browser__body">
                <div className="mock-nav">
                  <div className="mock-nav__brand">
                    <span className="mock-logo"></span>
                    <span>Daniela Fernandes</span>
                  </div>
                  <div className="mock-nav__links">
                    <span>Tratamentos</span><span>Equipa</span><span>Preços</span>
                    <span className="mock-pill">Marcar</span>
                  </div>
                </div>
                <div className="mock-hero">
                  <div className="mock-tag">★ 4.9 · 312 avaliações</div>
                  <div className="mock-title">
                    <span className="line-a"></span>
                    <span className="line-b"></span>
                  </div>
                  <div className="mock-sub">
                    <span></span><span></span>
                  </div>
                  <div className="mock-ctas">
                    <span className="mock-btn mock-btn--solid">Marcar consulta</span>
                    <span className="mock-btn mock-btn--ghost">Tratamentos</span>
                  </div>
                </div>
                <div className="mock-grid">
                  <div className="mock-card"><span className="mock-thumb"></span><span className="mock-lbl"></span></div>
                  <div className="mock-card"><span className="mock-thumb"></span><span className="mock-lbl"></span></div>
                  <div className="mock-card"><span className="mock-thumb"></span><span className="mock-lbl"></span></div>
                </div>
              </div>
            </div>
      
            <div className="float float--booking">
              <div className="float__avatar" aria-hidden="true">SM</div>
              <div className="float__body">
                <div className="float__title">Nova Marcação</div>
                <div className="float__sub">Sofia M. · Limpeza de pele · 14:30</div>
              </div>
              <span className="float__pulse"></span>
            </div>
      
            <div className="float float--google">
              <div className="float__google">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.5 12.27c0-.74-.07-1.45-.19-2.13H12v4.04h5.89a5.04 5.04 0 01-2.18 3.31v2.75h3.53c2.07-1.9 3.26-4.71 3.26-7.97z"/><path fill="#34A853" d="M12 23c2.95 0 5.42-.98 7.23-2.66l-3.53-2.75c-.98.66-2.23 1.06-3.7 1.06-2.84 0-5.25-1.92-6.11-4.5H2.24v2.82A11 11 0 0012 23z"/><path fill="#FBBC05" d="M5.89 14.15a6.6 6.6 0 010-4.3V7.03H2.24a11 11 0 000 9.94l3.65-2.82z"/><path fill="#EA4335" d="M12 5.38c1.6 0 3.04.55 4.18 1.63l3.13-3.13C17.42 2.1 14.95 1 12 1A11 11 0 002.24 7.03l3.65 2.82C6.75 7.3 9.16 5.38 12 5.38z"/></svg>
              </div>
              <div className="float__body">
                <div className="float__title">Google #1</div>
                <div className="float__sub">"clínica estética porto"</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="logos">
        <div className="container">
          <p className="logos__title">Clínicas que confiam na Vistoo em todo o país</p>
          <div className="logos__marquee" aria-hidden="false">
            <div className="logos__inner">
              <div className="logos__track">
                <span className="logo-mark"><em>Daniela</em> Fernandes</span>
                <span className="logo-mark"><em>Synthesis</em> Estética</span>
                <span className="logo-mark"><em>Essence</em> Clinic</span>
                <span className="logo-mark"><em>Laserin</em></span>
                <span className="logo-mark"><em>Eduardo</em> de Fátima</span>
                <span className="logo-mark"><em>Salão</em> Eufrasia</span>
                <span className="logo-mark"><em>Isabel Rosa</em> Estética</span>
              </div>
              <div className="logos__track" aria-hidden="true">
                <span className="logo-mark"><em>Daniela</em> Fernandes</span>
                <span className="logo-mark"><em>Synthesis</em> Estética</span>
                <span className="logo-mark"><em>Essence</em> Clinic</span>
                <span className="logo-mark"><em>Laserin</em></span>
                <span className="logo-mark"><em>Eduardo</em> de Fátima</span>
                <span className="logo-mark"><em>Salão</em> Eufrasia</span>
                <span className="logo-mark"><em>Isabel Rosa</em> Estética</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features" id="funcionalidades">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Funcionalidades</span>
            <h2 className="h2">Tudo o que uma clínica precisa,<br/>num só site.</h2>
            <p className="section-sub">Componentes pensados para o sector da estética — desde o primeiro clique até à marcação confirmada.</p>
          </div>
          <div className="feat-grid">
            <article className="feat-card">
              <div className="feat-card__icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/><circle cx="12" cy="14" r="2" fill="currentColor" stroke="none"/></svg>
              </div>
              <h3>Marcações online 24/7</h3>
              <p>Integração com Google Calendar e Doctoralia. As pacientes marcam sem ligar — a recepção foca-se no atendimento.</p>
            </article>
      
            <article className="feat-card">
              <div className="feat-card__icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              </div>
              <h3>SEO local optimizado</h3>
              <p>Estrutura, conteúdo e Google Business Profile preparados para aparecer no topo das pesquisas da sua cidade.</p>
            </article>
      
            <article className="feat-card">
              <div className="feat-card__icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 19V5l8 6 8-6v14"/><path d="M4 19h16"/></svg>
              </div>
              <h3>Mobile-first, sempre</h3>
              <p>83% das pacientes pesquisam pelo telemóvel. Cada página é desenhada primeiro para o ecrã pequeno.</p>
            </article>
      
            <article className="feat-card">
              <div className="feat-card__icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9"/><path d="M3 12h6m3-6v6l4 2"/></svg>
              </div>
              <h3>Velocidade premium</h3>
              <p>Carregamento abaixo de 1,2 segundos. Score 95+ no PageSpeed Insights, garantido por escrito.</p>
            </article>
          </div>
        </div>
      </section>
      
      <section className="process" id="processo">
        <div className="container">
          <div className="section-head section-head--left">
            <span className="kicker">Processo</span>
            <h2 className="h2">Do briefing ao lançamento<br/>em 14 dias.</h2>
            <p className="section-sub" style={{marginLeft: 0}}>Quatro etapas, totalmente remotas. Sabe sempre em que dia está e o que vem a seguir.</p>
          </div>
      
          <article className="schedule" aria-label="Cronograma do processo">
            <header className="schedule__head">
              <span className="schedule__title">
                <span className="schedule__pip"></span>
                Cronograma
              </span>
              <span className="schedule__facts">
                <span>14 dias úteis</span>
                <span className="sep" aria-hidden="true"></span>
                <span>100% remoto</span>
                <span className="sep" aria-hidden="true"></span>
                <span>1 ronda de revisões</span>
              </span>
              <span className="schedule__end">
                Online
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12L12 4M12 4H6M12 4v6"/></svg>
              </span>
            </header>
      
            <ol className="schedule__cols">
              <li className="sc">
                <div className="sc__day">Dia <span>1</span></div>
                <span className="sc__step">Etapa 01</span>
                <h3>Descoberta</h3>
                <p>Reunião de 45 minutos para entender a clínica, os tratamentos e o tipo de paciente.</p>
                <span className="sc__deliv">Briefing aprovado</span>
              </li>
              <li className="sc">
                <div className="sc__day">Dias <span>2–4</span></div>
                <span className="sc__step">Etapa 02</span>
                <h3>Estratégia & copy</h3>
                <p>Definimos arquitectura, palavras-chave e escrevemos os textos. Aprovação antes do design.</p>
                <span className="sc__deliv">Wireframe + copy</span>
              </li>
              <li className="sc">
                <div className="sc__day">Dias <span>5–12</span></div>
                <span className="sc__step">Etapa 03</span>
                <h3>Design & desenvolvimento</h3>
                <p>Protótipo navegável no Figma e depois construção em código limpo, com uma ronda de revisões.</p>
                <span className="sc__deliv">Site em staging</span>
              </li>
              <li className="sc sc--final">
                <div className="sc__day">Dia <span>14</span></div>
                <span className="sc__step">Etapa 04</span>
                <h3>Lançamento</h3>
                <p>Migração, SEO, analytics e formação de 30 minutos para a sua equipa. O site fica online.</p>
                <span className="sc__deliv">Site público</span>
              </li>
            </ol>
          </article>
        </div>
      </section>
      
      <section className="pricing" id="precos">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Preços</span>
            <h2 className="h2">Setup único.<br/>€55/mês de suporte incluído.</h2>
            <p className="section-sub">Dois planos, a mesma manutenção mensal. Tudo transparente desde o primeiro dia — sem surpresas no segundo ano.</p>
          </div>
          <div className="price-grid">
      
            <article className="price-card">
              <div className="price-card__head">
                <h3>Essencial</h3>
                <p>Para clínicas que precisam de presença online sólida e profissional.</p>
              </div>
              <div className="price-card__price">
                <span className="amount">€397</span>
                <span className="once">setup único</span>
              </div>
              <div className="price-monthly">+ <strong>€55/mês</strong> · obrigatório · mín. 6 meses</div>
              <p className="price-note">Alojamento, segurança e suporte incluídos</p>
              <a href="#contacto" className="btn btn--ghost btn--full">Começar com Essencial</a>
              <ul className="price-list">
                <li>Site de 5 páginas personalizado</li>
                <li>Design premium focado em conversão</li>
                <li>Formulário de contacto + WhatsApp</li>
                <li>Optimização mobile-first</li>
                <li>SEO técnico local</li>
                <li>Domínio + alojamento gerido</li>
                <li>Entrega em 14 dias úteis</li>
              </ul>
            </article>
      
            <article className="price-card price-card--featured">
              <span className="badge">Mais escolhido</span>
              <div className="price-card__head">
                <h3>Crescimento</h3>
                <p>Tudo o Essencial — mais tudo o que precisa para atrair e converter pacientes.</p>
              </div>
              <div className="price-card__price">
                <span className="amount">€597</span>
                <span className="once">setup único</span>
              </div>
              <div className="price-monthly">+ <strong>€55/mês</strong> · obrigatório · mín. 6 meses</div>
              <p className="price-note">Alojamento, segurança e suporte incluídos</p>
              <a href="#contacto" className="btn btn--primary btn--full btn--invert">Começar com Crescimento</a>
              <ul className="price-list">
                <li>Tudo o que está no Essencial</li>
                <li>Marcações online integradas</li>
                <li>Página por cada tratamento</li>
                <li>Blog optimizado para SEO</li>
                <li>Google Business Profile</li>
                <li>Pixel Meta + Google Analytics</li>
                <li>3 meses de suporte prioritário</li>
              </ul>
            </article>
      
          </div>
          <p style={{textAlign: 'center', marginTop: '20px', fontSize: '13.5px', color: 'var(--muted)'}}>
            Optimização SEO + IA disponível como add-on opcional por <span style={{color: 'var(--navy)', fontWeight: 600}}>+€25/mês</span>
          </p>
        </div>
      </section>
      
      <section className="portfolio" id="trabalhos">
        <div className="container">
          <div className="port-head">
            <div>
              <span className="kicker">Trabalhos</span>
              <h2 className="h2">Algumas das clínicas que confiam<br/>no nosso trabalho.</h2>
            </div>
            <div className="port-stats">
              <div className="port-stat">
                <span className="port-stat__num">100<i>+</i></span>
                <span className="port-stat__lbl">Clientes satisfeitos</span>
              </div>
              <div className="port-stat">
                <span className="port-stat__num">+200%</span>
                <span className="port-stat__lbl">Marcações médias</span>
              </div>
              <div className="port-stat">
                <span className="port-stat__num">5.0<i>★</i></span>
                <span className="port-stat__lbl">Avaliação clientes</span>
              </div>
            </div>
          </div>
      
         
          <Showcase />
        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="testi">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Testemunhos</span>
            <h2 className="h2">O que as clínicas dizem.</h2>
          </div>
          <div className="testi-grid">
            <figure className="testi-card">
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <blockquote>"Em menos de uma semana depois do lançamento já tínhamos novas marcações através do site. O design ficou exatamente como eu queria — profissional, elegante e muito rápido."</blockquote>
              <figcaption>
                <span className="ava ava--a">DF</span>
                <span>
                  <strong>Daniela Fernandes</strong>
                  <em>Daniela Fernandes Estética, Sesimbra</em>
                </span>
              </figcaption>
            </figure>
      
            <figure className="testi-card">
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <blockquote>"Temos 26 anos de experiência e o site anterior já não nos representava. A Vistoo entregou algo de que nos orgulhamos — e o retorno foi imediato, 4:1 nos primeiros 30 dias."</blockquote>
              <figcaption>
                <span className="ava ava--b">LA</span>
                <span>
                  <strong>Laserin Clinic</strong>
                  <em>Clínica de estética laser, Portugal</em>
                </span>
              </figcaption>
            </figure>
      
            <figure className="testi-card">
              <div className="stars" aria-label="5 estrelas">★★★★★</div>
              <blockquote>"O acompanhamento foi excecional do início ao fim. Em menos de 10 dias tínhamos mais 200% de interações. Profissionalismo e resultado que superou todas as expectativas."</blockquote>
              <figcaption>
                <span className="ava ava--c">SB</span>
                <span>
                  <strong>Synthesis Estética</strong>
                  <em>Estética & Bem-estar, Portugal</em>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      
      <Faq />
      <section className="contact" id="contacto">
        <div className="container contact__grid">
          <div className="contact__copy">
            <span className="kicker">Contacto</span>
            <h2 className="h2">Pronto para criar o site<br/>da sua clínica de estética?</h2>
            <p className="section-sub">Respondemos em menos de 24 horas. Sem compromisso, sem comerciais a ligar.</p>
            <ul className="contact__list">
              <li>
                <span className="ci"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span>
                geral@vistoo.pt
              </li>
              <li>
                <span className="ci"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"/></svg></span>
                +351 934 882 249
              </li>
              <li>
                <span className="ci"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
                Portugal · Atendimento remoto
              </li>
            </ul>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* ====================== FOOTER ====================== */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a href="#" className="brand brand--dark">
              <img src="/assets/logo.png" alt="Vistoo" className="brand__logo" />
              <span className="brand__name">Vistoo</span>
            </a>
            <p className="footer__tag">Criamos websites profissionais para clínicas de estética em Portugal — com SEO local, marcações online e entrega em 14 dias.</p>
            <p className="footer__small">Feito em Portugal, com atenção a cada detalhe.</p>
          </div>
          <div className="footer__cols">
            <div>
              <p className="footer__col-head">Empresa</p>
              <a href="#trabalhos">Portefólio</a>
              <a href="#processo">Como trabalhamos</a>
              <a href="#precos">Planos e preços</a>
              <a href="#contacto">Falar connosco</a>
            </div>
            <div>
              <p className="footer__col-head">Recursos</p>
              <a href="#">Blog</a>
              <a href="#">Guia SEO clínicas</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <p className="footer__col-head">Legal</p>
              <a href="#">Política de privacidade</a>
              <a href="#">Termos & condições</a>
              <a href="#">RGPD</a>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© 2026 Vistoo. Todos os direitos reservados.</span>
          <span>geral@vistoo.pt · +351 934 882 249</span>
        </div>
      </footer>
      <ScrollReveal />
    </>
  );
}
