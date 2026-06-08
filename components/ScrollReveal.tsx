"use client";

import { useEffect } from "react";

const STAGGER_PARENTS = [
  ".feat-bento",
  ".proc-grid",
  ".price-grid",
  ".testi-grid",
];

const REVEAL_TARGETS = [
  "section:not(.hero)",
  ".section-head",
  ".port-head",
  ".logos__title",
  ".logos__marquee",
  ".proc-grid",
  ".feat-card",
  ".proc-card",
  ".price-card",
  ".showcase",
  ".showcase__list",
  ".showcase__stage",
  ".testi-card",
  ".faq__intro",
  ".acc__item",
  ".contact__copy",
  ".contact__form",
];

const FOOTER_TARGETS = [".footer__brand", ".footer__cols", ".footer__bottom"];

export default function ScrollReveal() {
  useEffect(() => {
    STAGGER_PARENTS.forEach((sel) => {
      const parent = document.querySelector(sel);
      if (!parent) return;
      [...parent.children].forEach((child, i) => {
        child.classList.add("reveal");
        (child as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${i * 110}ms`
        );
      });
    });

    const seen = new Set<Element>();
    const els: Element[] = [];

    REVEAL_TARGETS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          els.push(el);
        }
      });
    });

    els.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in-view");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Footer: observe the container so all parts reveal together
    const footer = document.querySelector(".footer");
    const footerEls = FOOTER_TARGETS.map((sel) =>
      document.querySelector(sel)
    ).filter(Boolean) as Element[];

    footerEls.forEach((el, i) => {
      el.classList.add("reveal");
      (el as HTMLElement).style.setProperty("--reveal-delay", `${i * 80}ms`);
    });

    const footerIO = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          footerEls.forEach((el) => el.classList.add("in-view"));
          footerIO.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    if (footer) footerIO.observe(footer);

    return () => {
      io.disconnect();
      footerIO.disconnect();
    };
  }, []);

  return null;
}
