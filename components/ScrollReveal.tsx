"use client";

import { useEffect } from "react";

const STAGGER_PARENTS = [
  ".feat-grid",
  ".schedule__cols",
  ".price-grid",
  ".testi-grid",
];

const REVEAL_TARGETS = [
  "section:not(.hero)",
  ".section-head",
  ".port-head",
  ".logos__title",
  ".logos__marquee",
  ".schedule",
  ".feat-card",
  ".sc",
  ".price-card",
  ".showcase",
  ".showcase__list",
  ".showcase__stage",
  ".testi-card",
  ".faq__intro",
  ".acc__item",
  ".contact__copy",
  ".contact__form",
  ".footer__brand",
  ".footer__cols",
  ".footer__bottom",
];

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

    return () => io.disconnect();
  }, []);

  return null;
}
