"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Silk from "./Silk";

export default function DarkHero() {
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    const previousScrollRestoration = "scrollRestoration" in window.history
      ? window.history.scrollRestoration
      : null;

    if (previousScrollRestoration !== null) {
      window.history.scrollRestoration = "manual";
    }

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    forceTop();
    const rafId = window.requestAnimationFrame(forceTop);
    const timeoutId = window.setTimeout(forceTop, 120);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      if (previousScrollRestoration !== null) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  useEffect(() => {
    const { body, documentElement } = document;
    let unlockTimer: number | undefined;

    if (!isHeroReady) {
      documentElement.classList.add("is-page-loading");
      body.classList.add("is-page-loading");
      return () => {
        documentElement.classList.remove("is-page-loading");
        body.classList.remove("is-page-loading");
      };
    }

    unlockTimer = window.setTimeout(() => {
      documentElement.classList.remove("is-page-loading");
      body.classList.remove("is-page-loading");
    }, 900);

    return () => {
      if (unlockTimer) {
        window.clearTimeout(unlockTimer);
      }
    };
  }, [isHeroReady]);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => setIsHeroReady(true), 900);
    return () => window.clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      <header className="dark-hero__nav">
        <a href="#" className="dark-hero__brand" aria-label="Vistoo">
          <img src="/assets/logo.png" alt="Vistoo" className="dark-hero__brand-logo" />
          <span className="dark-hero__brand-name">Vistoo</span>
        </a>

        <nav className="dark-hero__nav-center" aria-label="Navegação principal">
          <a href="#funcionalidades" className="dark-hero__nav-link dark-hero__nav-link--with-icon">
            Serviços
            <ChevronDown size={16} />
          </a>
          <a href="#trabalhos" className="dark-hero__nav-link">Casos de sucesso</a>
          <a href="#faq" className="dark-hero__nav-link">Recursos</a>
          <a href="#precos" className="dark-hero__nav-link">Preços</a>
        </nav>

        <div className="dark-hero__nav-right">
          <a href="#contacto" className="dark-hero__get-started">Começar</a>
        </div>
      </header>

      <section className="dark-hero">
      <div className={`dark-hero__loader ${isHeroReady ? "is-hidden" : ""}`} aria-hidden={isHeroReady}>
        <div className="dark-hero__loader-mark">
          <span className="dark-hero__loader-ring" aria-hidden="true" />
          <img src="/assets/logo.png" alt="Vistoo" className="dark-hero__loader-logo" />
        </div>
        <p className="dark-hero__loader-text">A carregar...</p>
      </div>

      <div className="dark-hero__bg">
        <div className="dark-hero__silk" aria-hidden="true">
          <Silk speed={6.9} scale={1.3} color="#307af7" noiseIntensity={0} rotation={4.78} />
        </div>
        <div className="dark-hero__overlay" aria-hidden="true" />
        <div className="dark-hero__gradient dark-hero__gradient--top-left" aria-hidden="true" />
        <div className="dark-hero__gradient dark-hero__gradient--bottom-right" aria-hidden="true" />
      </div>

      <div className="dark-hero__content-wrap">
        <div className="dark-hero__content">
          <motion.p
            className="dark-hero__preheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Para clínicas de estética que querem crescer
          </motion.p>

          <motion.h1
            className="dark-hero__headline"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Websites que
            <br />
            <span className="dark-hero__headline-serif">vendem</span>.
          </motion.h1>

          <motion.p
            className="dark-hero__subheadline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Desenhamos e construímos websites rápidos, elegantes e otimizados para SEO local, pensados para transformar visitas em marcações.
          </motion.p>

          <motion.div
            className="dark-hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#contacto" className="dark-hero__primary-btn">
              <span>Começar agora</span>
              <span className="dark-hero__primary-btn-icon">
                <ArrowRight size={20} />
              </span>
            </a>

            <a href="#trabalhos" className="dark-hero__secondary-btn">
              Ver trabalhos
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
