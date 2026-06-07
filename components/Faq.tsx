"use client";

import { useCallback } from "react";

const faqItems = [
  {
    question:
      "Como criar um site profissional para a minha clínica de estética?",
    answer:
      "O processo começa com uma reunião de descoberta onde percebemos os seus tratamentos, público e objectivos. A Vistoo trata de tudo — copy, design, desenvolvimento e SEO — e entrega o site pronto a captar pacientes em 14 dias úteis. Não precisa de ter conhecimentos técnicos nem de gerir alojamentos ou domínios: fazemos tudo por si.",
  },
  {
    question: "Quanto tempo demora a entrega do site?",
    answer:
      "14 dias úteis a contar do briefing inicial. Se precisarmos de mais tempo, avisamos com antecedência — mas até hoje cumprimos sempre o prazo.",
  },
  {
    question: "Trabalham com clínicas em todo o país?",
    answer:
      "Sim. Todo o processo é remoto — reuniões por videochamada e entregas online. Já lançámos sites para clínicas de Lisboa ao Algarve, passando pelos Açores.",
  },
  {
    question: "Como funciona o modelo de preços?",
    answer:
      "Existe um setup único (€397 ou €597) que cobre o design, desenvolvimento, copy e SEO. A esse valor acresce uma mensalidade obrigatória de €55/mês que inclui alojamento, segurança, suporte técnico e pequenas atualizações. O compromisso mínimo é de 6 meses — depois fica mês a mês.",
  },
  {
    question: "Posso editar o site depois de entregue?",
    answer:
      "Sim. Entregamos com um painel simples onde altera textos, imagens e cria publicações de blog sem mexer em código. Damos formação de 30 minutos à sua equipa.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Tem uma ronda de revisões completa incluída e mostramos o protótipo antes de construir. Se mesmo assim não estiver satisfeita, devolvemos o sinal. Nunca aconteceu, mas o compromisso é real.",
  },
  {
    question: "Fazem manutenção depois do lançamento?",
    answer:
      "Sim. Os €55/mês já incluem suporte técnico, segurança e pequenas alterações de conteúdo. Para trabalho mais extenso (novo design, funcionalidades extra) orçamentamos à parte. O add-on de SEO + IA está disponível por +€25/mês.",
  },
];

export default function Faq() {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const head = e.currentTarget;
      const item = head.closest(".acc__item");
      if (!item?.parentElement) return;

      const open = item.getAttribute("data-open") === "true";

      item.parentElement.querySelectorAll(".acc__item").forEach((i) => {
        i.setAttribute("data-open", "false");
        i.querySelector(".acc__head")?.setAttribute("aria-expanded", "false");
      });

      if (!open) {
        item.setAttribute("data-open", "true");
        head.setAttribute("aria-expanded", "true");
      }
    },
    []
  );

  return (
    <section className="faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro">
          <span className="kicker">FAQ</span>
          <h2 className="h2">
            Perguntas
            <br />
            frequentes.
          </h2>
          <p className="section-sub">
            Não encontra resposta?{" "}
            <a href="#contacto">Fale connosco directamente.</a>
          </p>
        </div>
        <ul className="acc">
          {faqItems.map((item) => (
            <li key={item.question} className="acc__item">
              <button
                className="acc__head"
                aria-expanded="false"
                onClick={handleClick}
              >
                <span>{item.question}</span>
                <span className="acc__icon" aria-hidden="true" />
              </button>
              <div className="acc__body">
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
