"use client";

import { FormEvent, KeyboardEvent, useRef } from "react";

const DISCORD_WEBHOOK =
  process.env.NEXT_PUBLIC_DISCORD_WEBHOOK ||
  "https://discord.com/api/webhooks/1424214618930282507/rET1lXh63KIoyUQ9Yz9-Wwrd7aLhwOYLKogpe-6ptHevu1eznnvB3tu7vAO4O5DxSb6b";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

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
    const email = (form.querySelector("#email") as HTMLInputElement).value.trim();
    const tel = (form.querySelector("#tel") as HTMLInputElement).value.trim();
    const plano = (form.querySelector("#plano") as HTMLSelectElement).value;
    const msg = (form.querySelector("#msg") as HTMLTextAreaElement).value.trim();

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
            { name: "📦 Plano", value: plano || "—", inline: false },
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
      <div className="field">
        <label htmlFor="plano">Plano de interesse</label>
        <select id="plano" name="plano" defaultValue="Crescimento — €597 setup + €55/mês">
          <option>Essencial — €397 setup + €55/mês</option>
          <option>Crescimento — €597 setup + €55/mês</option>
          <option>Ainda não sei</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="msg">Conte-nos sobre o projecto</label>
        <textarea
          id="msg"
          name="msg"
          rows={4}
          placeholder="Tipo de clínica, tratamentos, prazos…"
        />
      </div>
      <button
        ref={btnRef}
        type="submit"
        className="btn btn--primary btn--full"
      >
        Enviar pedido
      </button>
      <p className="form__tos">
        Ao enviar, concorda com a nossa política de privacidade.
      </p>
    </form>
  );
}
