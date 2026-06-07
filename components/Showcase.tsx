"use client";

import { useEffect, useRef } from "react";

export default function Showcase() {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    const rows = [...showcase.querySelectorAll(".showcase__row")];
    const frames = [...showcase.querySelectorAll(".sf")];
    const pagers = [...showcase.querySelectorAll(".dot-pager")];
    let active = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    const PERIOD = 2000;
    const INITIAL_DELAY = 2000;
    let started = false;

    function setActive(i: number, userInitiated?: boolean) {
      active = i;
      rows.forEach((r) => {
        const on = +(r as HTMLElement).dataset.i! === i;
        r.classList.toggle("is-active", on);
        r.setAttribute("aria-selected", on ? "true" : "false");
      });
      frames.forEach((f) =>
        f.classList.toggle("is-active", +(f as HTMLElement).dataset.i! === i)
      );
      pagers.forEach((p) =>
        p.classList.toggle("is-active", +(p as HTMLElement).dataset.i! === i)
      );
      if (userInitiated) restart();
    }

    function next() {
      setActive((active + 1) % rows.length);
    }

    function start() {
      if (!timer) timer = setInterval(next, PERIOD);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    function restart() {
      stop();
      start();
    }

    const rowHandlers: Array<{
      el: Element;
      click: () => void;
      key: (e: Event) => void;
    }> = [];

    rows.forEach((r) => {
      const click = () => setActive(+(r as HTMLElement).dataset.i!, true);
      const key = (e: Event) => {
        const ke = e as KeyboardEvent;
        if (ke.key === "Enter" || ke.key === " ") {
          ke.preventDefault();
          setActive(+(r as HTMLElement).dataset.i!, true);
        }
      };
      r.addEventListener("click", click);
      r.addEventListener("keydown", key);
      rowHandlers.push({ el: r, click, key });
    });

    const pagerHandlers: Array<{ el: Element; click: () => void }> = [];
    pagers.forEach((p) => {
      const click = () => setActive(+(p as HTMLElement).dataset.i!, true);
      p.addEventListener("click", click);
      pagerHandlers.push({ el: p, click });
    });

    const onMouseEnter = () => stop();
    const onMouseLeave = () => {
      if (started) start();
    };
    showcase.addEventListener("mouseenter", onMouseEnter);
    showcase.addEventListener("mouseleave", onMouseLeave);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            if (!started) {
              started = true;
              setTimeout(start, INITIAL_DELAY);
            } else {
              start();
            }
          } else {
            stop();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(showcase);

    return () => {
      rowHandlers.forEach(({ el, click, key }) => {
        el.removeEventListener("click", click);
        el.removeEventListener("keydown", key);
      });
      pagerHandlers.forEach(({ el, click }) => {
        el.removeEventListener("click", click);
      });
      showcase.removeEventListener("mouseenter", onMouseEnter);
      showcase.removeEventListener("mouseleave", onMouseLeave);
      stop();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={showcaseRef} className="showcase" data-active="0">
      <ol className="showcase__list" role="tablist">
        <li
          className="showcase__row is-active"
          data-i="0"
          role="tab"
          tabIndex={0}
          aria-selected="true"
        >
          <span className="showcase__index">01</span>
          <div className="showcase__row-body">
            <div className="showcase__title">Daniela Fernandes</div>
            <span>Sesimbra · Estética facial · 2025</span>
          </div>
          <span className="showcase__arrow">→</span>
        </li>
        <li
          className="showcase__row"
          data-i="1"
          role="tab"
          tabIndex={0}
          aria-selected="false"
        >
          <span className="showcase__index">02</span>
          <div className="showcase__row-body">
            <div className="showcase__title">Essence Clinic</div>
            <span>Portugal · Medicina estética · 2025</span>
          </div>
          <span className="showcase__arrow">→</span>
        </li>
        <li
          className="showcase__row"
          data-i="2"
          role="tab"
          tabIndex={0}
          aria-selected="false"
        >
          <span className="showcase__index">03</span>
          <div className="showcase__row-body">
            <div className="showcase__title">Laserin</div>
            <span>Portugal · Estética laser · 2024</span>
          </div>
          <span className="showcase__arrow">→</span>
        </li>
        <li
          className="showcase__row"
          data-i="3"
          role="tab"
          tabIndex={0}
          aria-selected="false"
        >
          <span className="showcase__index">04</span>
          <div className="showcase__row-body">
            <div className="showcase__title">Eduardo Massage</div>
            <span>Portugal · Massagens · 2024</span>
          </div>
          <span className="showcase__arrow">→</span>
        </li>
        <li
          className="showcase__row"
          data-i="4"
          role="tab"
          tabIndex={0}
          aria-selected="false"
        >
          <span className="showcase__index">05</span>
          <div className="showcase__row-body">
            <div className="showcase__title">Isabel Rosa Estética</div>
            <span>Portugal · Estética premium · 2024</span>
          </div>
          <span className="showcase__arrow">→</span>
        </li>
      </ol>

      <div className="showcase__stage">
        <div className="showcase__frames">
          <article className="sf is-active" data-i="0">
            <a
              className="sf__browser"
              href="https://danielafernandesbeauty.pt"
              target="_blank"
              rel="noopener"
            >
              <div className="sf__bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="sf__url">danielafernandesbeauty.pt</span>
              </div>
              <img
                className="sf__shot"
                src="/assets/daniela.png"
                alt="Daniela Fernandes Beauty"
              />
            </a>
            <div className="sf__meta">
              <div className="sf__tags">
                <span className="chip">Site institucional</span>
                <span className="chip">SEO local</span>
                <span className="chip">Marcações online</span>
              </div>
              <div className="sf__kpis">
                <div>
                  <b>+200%</b>
                  <span>visitas em 7 dias</span>
                </div>
                <div>
                  <b>#1</b>
                  <span>&quot;estética sesimbra&quot;</span>
                </div>
                <div>
                  <b>0.9s</b>
                  <span>tempo de carga</span>
                </div>
              </div>
            </div>
          </article>

          <article className="sf" data-i="1">
            <a
              className="sf__browser"
              href="https://essenceclinic.pt"
              target="_blank"
              rel="noopener"
            >
              <div className="sf__bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="sf__url">essenceclinic.pt</span>
              </div>
              <img
                className="sf__shot"
                src="/assets/essence.png"
                alt="Essence Clinic"
              />
            </a>
            <div className="sf__meta">
              <div className="sf__tags">
                <span className="chip">Design premium</span>
                <span className="chip">Tratamentos em destaque</span>
                <span className="chip">Analytics</span>
              </div>
              <div className="sf__kpis">
                <div>
                  <b>+241%</b>
                  <span>contactos mensais</span>
                </div>
                <div>
                  <b>14d</b>
                  <span>do briefing ao live</span>
                </div>
                <div>
                  <b>5.0★</b>
                  <span>satisfação cliente</span>
                </div>
              </div>
            </div>
          </article>

          <article className="sf" data-i="2">
            <a
              className="sf__browser"
              href="https://laserin.pt"
              target="_blank"
              rel="noopener"
            >
              <div className="sf__bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="sf__url">laserin.pt</span>
              </div>
              <img
                className="sf__shot"
                src="/assets/laserin.png"
                alt="Laserin"
              />
            </a>
            <div className="sf__meta">
              <div className="sf__tags">
                <span className="chip">Clínica com 26 anos</span>
                <span className="chip">SEO local</span>
                <span className="chip">Marcações online</span>
              </div>
              <div className="sf__kpis">
                <div>
                  <b>4:1</b>
                  <span>ROI nos primeiros 30d</span>
                </div>
                <div>
                  <b>#1</b>
                  <span>Google na sua zona</span>
                </div>
                <div>
                  <b>1.1s</b>
                  <span>tempo de carga</span>
                </div>
              </div>
            </div>
          </article>

          <article className="sf" data-i="3">
            <a
              className="sf__browser"
              href="https://eduardomassage.pt"
              target="_blank"
              rel="noopener"
            >
              <div className="sf__bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="sf__url">eduardomassage.pt</span>
              </div>
              <img
                className="sf__shot"
                src="/assets/eduardo.png"
                alt="Eduardo Massage"
              />
            </a>
            <div className="sf__meta">
              <div className="sf__tags">
                <span className="chip">Site institucional</span>
                <span className="chip">SEO local</span>
                <span className="chip">Marcações online</span>
              </div>
              <div className="sf__kpis">
                <div>
                  <b>+180%</b>
                  <span>marcações online</span>
                </div>
                <div>
                  <b>#1</b>
                  <span>Google na sua zona</span>
                </div>
                <div>
                  <b>1.0s</b>
                  <span>tempo de carga</span>
                </div>
              </div>
            </div>
          </article>

          <article className="sf" data-i="4">
            <a
              className="sf__browser"
              href="https://isabelrosaestetica.pt"
              target="_blank"
              rel="noopener"
            >
              <div className="sf__bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="sf__url">isabelrosaestetica.pt</span>
              </div>
              <img
                className="sf__shot"
                src="/assets/isabel.png"
                alt="Isabel Rosa Estética"
              />
            </a>
            <div className="sf__meta">
              <div className="sf__tags">
                <span className="chip">Design elegante</span>
                <span className="chip">SEO técnico</span>
                <span className="chip">Consultas online</span>
              </div>
              <div className="sf__kpis">
                <div>
                  <b>+150%</b>
                  <span>consultas online</span>
                </div>
                <div>
                  <b>Top 3</b>
                  <span>Google local</span>
                </div>
                <div>
                  <b>96</b>
                  <span>PageSpeed Score</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="showcase__nav" aria-hidden="true">
          <span className="dot-pager is-active" data-i="0" />
          <span className="dot-pager" data-i="1" />
          <span className="dot-pager" data-i="2" />
          <span className="dot-pager" data-i="3" />
          <span className="dot-pager" data-i="4" />
        </div>
      </div>
    </div>
  );
}
