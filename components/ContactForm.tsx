"use client";

import { FormEvent, KeyboardEvent, useRef, useState } from "react";

const DISCORD_WEBHOOK =
  process.env.NEXT_PUBLIC_DISCORD_WEBHOOK ||
  "https://discord.com/api/webhooks/1424214618930282507/rET1lXh63KIoyUQ9Yz9-Wwrd7aLhwOYLKogpe-6ptHevu1eznnvB3tu7vAO4O5DxSb6b";

const PLANS = [
  { id: "essencial", label: "Essencial", price: "€397 setup + €55/mês" },
  {
    id: "crescimento",
    label: "Crescimento",
    price: "€597 setup + €55/mês",
    featured: true,
  },
] as const;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [selectedPlan, setSelectedPlan] = useState(
    "Crescimento — €597 setup + €55/mês"
  );
  const [addonActive, setAddonActive] = useState(false);

  const handleTelInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const digits = input.value.replace(/\D/g, "").slice(0, 9);
    let formatted = digits;
    if (digits.length > 6)
      formatted =
        digits.slice(0, 3) +
        " " +
        digits.slice(3, 6) +
        " " +
        digits.slice(6);
    else if (digits.length > 3)
      formatted = digits.slice(0, 3) + " " + digits.slice(3);
    input.value = formatted;
  };

  const handleTelKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const allowed = [
      "Backspace",
      "Delete",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];
    if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) e.preventDefault();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    const btn = btnRef.current;
    if (!form || !btn) return;

    const nome = (form.querySelector("#nome") as HTMLInputElement).value.trim();
    const clinica = (
      form.querySelector("#clinica") as HTMLInputElement
    ).value.trim();
    const email = (
      form.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const tel = (form.querySelector("#tel") as HTMLInputElement).value.trim();
    const msg = (
      form.querySelector("#msg") as HTMLTextAreaElement
    ).value.trim();

    btn.textContent = "A enviar…";
    btn.disabled = true;

    const payload = {
      embeds: [
        {
          title: "🆕 Novo contacto — Vistoo",
          color: 0x3b6fd4,
          fields: [
            { name: "👤 Nome", value: nome || "—", inline: true },
            { name: "🏥 Clínica", value: clinica || "—", inline: true },
            { name: "📧 Email", value: email || "—", inline: true },
            { name: "📞 Telefone", value: tel || "—", inline: true },
            { name: "📦 Plano", value: selectedPlan || "—", inline: true },
            {
              name: "🚀 Add-on SEO com IA",
              value: addonActive ? "Sim (+€89/mês)" : "Não",
              inline: true,
            },
            { name: "💬 Mensagem", value: msg || "—", inline: false },
          ],
          footer: { text: "vistoo.pt" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const res = await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok || res.status === 204) {
        btn.textContent = "Pedido enviado ✓";
        btn.style.background = "#22C55E";
        form.reset();
        setSelectedPlan("Crescimento — €597 setup + €55/mês");
        setAddonActive(false);
        setTimeout(() => {
          btn.textContent = "Enviar pedido";
          btn.disabled = false;
          btn.style.background = "";
        }, 3000);
      } else {
        throw new Error("webhook failed");
      }
    } catch {
      btn.textContent = "Erro — tente de novo";
      btn.style.background = "#EF4444";
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = "Enviar pedido";
        btn.style.background = "";
      }, 3000);
    }
  };

  return (
    <form
      ref={formRef}
      className="contact__form"
      id="contactForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" placeholder="Nome" required />
      </div>
      <div className="field">
        <label htmlFor="clinica">Nome da clínica</label>
        <input
          id="clinica"
          name="clinica"
          type="text"
          placeholder="Ex.: Clínica Sofia"
        />
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="o.seu@email.pt"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="tel">Telefone</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            placeholder="912 345 678"
            maxLength={11}
            autoComplete="tel"
            inputMode="numeric"
            onInput={handleTelInput}
            onKeyDown={handleTelKeyDown}
          />
        </div>
      </div>

      {/* Plan selector */}
      <div className="field">
        <label>Plano de interesse</label>
        <input type="hidden" name="plano" value={selectedPlan} readOnly />
        <div className="plan-cards">
          {PLANS.map((plan) => {
            const value = `${plan.label} — ${plan.price}`;
            const active = selectedPlan === value;
            return (
              <button
                key={plan.id}
                type="button"
                className={`plan-card${active ? " plan-card--active" : ""}`}
                onClick={() => setSelectedPlan(value)}
                aria-pressed={active}
              >
                {'featured' in plan && plan.featured && (
                  <span className="plan-card__badge">Mais escolhido</span>
                )}
                <span className="plan-card__label">{plan.label}</span>
                <span className="plan-card__price">{plan.price}</span>
                <span className="plan-card__check" aria-hidden="true">
                  <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6l2.5 2.5L10 3.5" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className={`plan-undecided${selectedPlan === "Ainda não sei" ? " plan-undecided--active" : ""}`}
          onClick={() => setSelectedPlan("Ainda não sei")}
        >
          Ainda não sei
        </button>
      </div>

      {/* Add-on toggle */}
      <button
        type="button"
        className={`addon-toggle${addonActive ? " addon-toggle--active" : ""}`}
        onClick={() => setAddonActive((v) => !v)}
        aria-pressed={addonActive}
      >
        <div className="addon-toggle__text">
          <span className="addon-toggle__label">
            Add-on Crescimento SEO com IA
          </span>
          <span className="addon-toggle__sub">
            +€89/mês · cancela quando quiseres
          </span>
        </div>
        <div
          className={`toggle-sw${addonActive ? " toggle-sw--on" : ""}`}
          aria-hidden="true"
        >
          <div className="toggle-sw__thumb" />
        </div>
      </button>

      <div className="field">
        <label htmlFor="msg">Conte-nos sobre o projecto</label>
        <textarea
          id="msg"
          name="msg"
          rows={4}
          placeholder="Tipo de clínica, tratamentos, prazos…"
        />
      </div>
      <button ref={btnRef} type="submit" className="btn btn--primary btn--full">
        Enviar pedido
      </button>
      <p className="form__tos">
        Ao enviar, concorda com a nossa política de privacidade.
      </p>
    </form>
  );
}
