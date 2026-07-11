import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import RecentArticles from "@/components/RecentArticles";
import DarkHero from "@/components/DarkHero";
import TargetCursor from "@/components/TargetCursor";

export const revalidate = 300;

export default function Home() {
  return (
    <>
      <TargetCursor
        targetSelector='[class*="card"], [class*="Card"], .cursor-target'
        spinDuration={2.3}
        hideDefaultCursor={true}
        parallaxOn={false}
        hoverDuration={0.1}
        cursorColorOnTarget="#3B82F6"
      />
      <DarkHero />
      
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
          <div className="feat-bento">
            <article className="feat-card feat-card--large">
              <div className="feat-card__body">
                <div className="feat-card__icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/><circle cx="12" cy="14" r="2" fill="currentColor" stroke="none"/></svg>
                </div>
                <h3>Marcações online 24/7</h3>
                <p>Integração com Google Calendar e Doctoralia. As pacientes marcam sem ligar — a recepção foca-se no atendimento.</p>
              </div>
              <div className="feat-mock feat-mock--calendar" aria-hidden="true">
                <div className="feat-cal">
                  <div className="feat-cal__head">
                    <span className="feat-cal__month">Junho 2026</span>
                    <span className="feat-cal__dots"><i /><i /><i /></span>
                  </div>
                  <div className="feat-cal__slots">
                    <div className="feat-cal__slot feat-cal__slot--booked">
                      <span className="feat-cal__time">10:00</span>
                      <span className="feat-cal__label">Limpeza de pele</span>
                      <span className="feat-cal__dot" />
                    </div>
                    <div className="feat-cal__slot feat-cal__slot--booked">
                      <span className="feat-cal__time">14:30</span>
                      <span className="feat-cal__label">Botox consulta</span>
                      <span className="feat-cal__dot" />
                    </div>
                    <div className="feat-cal__slot feat-cal__slot--booked">
                      <span className="feat-cal__time">16:00</span>
                      <span className="feat-cal__label">Peeling químico</span>
                      <span className="feat-cal__dot" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="feat-card feat-card--small">
              <div className="feat-card__icon feat-card__icon--lg">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 19V5l8 6 8-6v14"/><path d="M4 19h16"/></svg>
              </div>
              <h3>Mobile-first, sempre</h3>
              <p>83% das pacientes pesquisam pelo telemóvel. Cada página é desenhada primeiro para o ecrã pequeno.</p>
            </article>

            <article className="feat-card feat-card--small">
              <div className="feat-card__icon feat-card__icon--lg">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9"/><path d="M3 12h6m3-6v6l4 2"/></svg>
              </div>
              <h3>Velocidade premium</h3>
              <p>Carregamento abaixo de 1,2 segundos. Score 95+ no PageSpeed Insights, garantido por escrito.</p>
            </article>

            <article className="feat-card feat-card--large">
              <div className="feat-card__body">
                <div className="feat-card__icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
                </div>
                <h3>SEO local optimizado</h3>
                <p>Estrutura, conteúdo e Google Business Profile preparados para aparecer no topo das pesquisas da sua cidade.</p>
              </div>
              <div className="feat-mock feat-mock--google" aria-hidden="true">
                <div className="feat-google">
                  <div className="feat-google__bar">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
                    <span>clínica estética Faro</span>
                  </div>
                  <div className="feat-google__results">
                    <div className="feat-google__result feat-google__result--top">
                      <span className="feat-google__rank">1</span>
                      <div>
                        <span className="feat-google__title">Clínica Essence — Estética Avançada</span>
                        <span className="feat-google__url">essenceclinic.pt</span>
                        <span className="feat-google__stars">★★★★★ 4.9 · Estética · Faro</span>
                      </div>
                    </div>
                    <div className="feat-google__result">
                      <span className="feat-google__rank">2</span>
                      <div>
                        <span className="feat-google__title feat-google__title--muted">Outro resultado...</span>
                        <span className="feat-google__url feat-google__url--muted">exemplo.pt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <section className="process" id="processo">
        <div className="container">
          <div className="proc-header">
            <div className="proc-header__left">
              <span className="kicker kicker--on-dark">Processo</span>
              <h2 className="h2 proc-header__h2">Do briefing ao lançamento<br/>em 14 dias.</h2>
              <p className="proc-header__sub">Quatro etapas, totalmente remotas. Sabe sempre em que dia está e o que vem a seguir.</p>
            </div>
            <div className="proc-meta">
              <span className="proc-meta__item">14 dias úteis</span>
              <span className="proc-meta__item">100% remoto</span>
              <span className="proc-meta__item">1 ronda de revisões</span>
            </div>
          </div>

          <ol className="proc-grid" aria-label="Cronograma do processo">
            <li className="proc-card">
              <span className="proc-card__watermark" aria-hidden="true">01</span>
              <div className="proc-card__content">
                <div className="proc-card__top">
                  <span className="proc-card__etapa">Etapa 01</span>
                  <span className="proc-card__day">Dia <strong>1</strong></span>
                </div>
                <h3 className="proc-card__title">Descoberta</h3>
                <p className="proc-card__desc">Reunião de 45 minutos para entender a clínica, os tratamentos e o tipo de paciente.</p>
                <span className="proc-card__deliv">
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8l2.5 2.5L13 5"/></svg>
                  Briefing aprovado
                </span>
              </div>
            </li>
            <li className="proc-card">
              <span className="proc-card__watermark" aria-hidden="true">02</span>
              <div className="proc-card__content">
                <div className="proc-card__top">
                  <span className="proc-card__etapa">Etapa 02</span>
                  <span className="proc-card__day">Dias <strong>2–4</strong></span>
                </div>
                <h3 className="proc-card__title">Estratégia & copy</h3>
                <p className="proc-card__desc">Definimos arquitectura, palavras-chave e escrevemos os textos. Aprovação antes do design.</p>
                <span className="proc-card__deliv">
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8l2.5 2.5L13 5"/></svg>
                  Wireframe + copy
                </span>
              </div>
            </li>
            <li className="proc-card">
              <span className="proc-card__watermark" aria-hidden="true">03</span>
              <div className="proc-card__content">
                <div className="proc-card__top">
                  <span className="proc-card__etapa">Etapa 03</span>
                  <span className="proc-card__day">Dias <strong>5–12</strong></span>
                </div>
                <h3 className="proc-card__title">Design & desenvolvimento</h3>
                <p className="proc-card__desc">Protótipo navegável no Figma e depois construção em código limpo, com uma ronda de revisões.</p>
                <span className="proc-card__deliv">
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8l2.5 2.5L13 5"/></svg>
                  Site em staging
                </span>
              </div>
            </li>
            <li className="proc-card proc-card--launch">
              <span className="proc-card__watermark" aria-hidden="true">04</span>
              <div className="proc-card__content">
                <div className="proc-card__top">
                  <span className="proc-card__etapa">Etapa 04</span>
                  <span className="proc-card__day">Dia <strong>14</strong></span>
                </div>
                <h3 className="proc-card__title">Lançamento</h3>
                <p className="proc-card__desc">Migração, SEO, analytics e formação de 30 minutos para a sua equipa. O site fica online.</p>
                <span className="proc-card__deliv proc-card__deliv--accent">
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8l2.5 2.5L13 5"/></svg>
                  Site público
                </span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <RecentArticles />
      
      <section className="pricing" id="precos">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Preços</span>
            <h2 className="h2">Setup único.<br/>Resultados mensais.</h2>
            <p className="section-sub" style={{color: 'rgba(255,255,255,.45)'}}>Dois planos, um add-on. Tudo transparente desde o primeiro dia — sem surpresas no segundo ano.</p>
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

          <div className="addon-block">
            <div className="addon-block__left">
              <span className="addon-block__badge">Add-on opcional</span>
              <h3 className="addon-block__title">Crescimento SEO com IA</h3>
              <div className="addon-block__price">
                <span className="addon-block__amount">+€89</span>
                <span className="addon-block__per">/mês</span>
              </div>
              <p className="addon-block__sub">Compatível com qualquer plano. Cancela quando quiseres.</p>
              <a href="#contacto" className="btn btn--primary">Adicionar ao meu plano</a>
            </div>
            <ul className="addon-block__list">
              <li>4 artigos de blog por mês optimizados para SEO com IA</li>
              <li>Optimizações técnicas semanais ao site</li>
              <li>Relatório mensal de performance com dados reais (GA4)</li>
              <li>Plano de acção para o mês seguinte</li>
              <li>Sugestões de conteúdo para redes sociais</li>
            </ul>
          </div>
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
            <h2 className="h2" style={{color: '#fff'}}>O que as clínicas dizem.</h2>
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
            <h2 className="h2" style={{color: '#fff'}}>Pronto para criar o site<br/>da sua clínica de estética?</h2>
            <p className="section-sub" style={{marginLeft: 0, color: 'rgba(255,255,255,.45)'}}>Respondemos em menos de 24 horas. Sem compromisso, sem comerciais a ligar.</p>
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
