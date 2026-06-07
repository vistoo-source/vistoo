import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vistoo — Websites para Clínicas de Estética em Portugal",
  description:
    "Criamos websites profissionais para clínicas de estética em Portugal. Design premium, SEO local e marcações online. Entrega em 14 dias. A partir de €397.",
  keywords: [
    "criar site clinica estetica Portugal",
    "site para clinica de estetica",
    "agencia web design estetica",
    "criacao de site estetica",
    "website clinica estetica Portugal",
    "marcacoes online clinica",
    "SEO local clinica estetica",
    "landing page clinica estetica",
    "agencia criacao sites Portugal",
  ],
  authors: [{ name: "Vistoo" }],
  metadataBase: new URL("https://vistoo.pt"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://vistoo.pt/",
    title: "Vistoo — Websites para Clínicas de Estética em Portugal",
    description:
      "Websites profissionais para clínicas de estética. SEO local, marcações online e entrega em 14 dias. A partir de €397.",
    images: ["https://vistoo.pt/assets/og-image.png"],
    locale: "pt_PT",
    siteName: "Vistoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistoo — Websites para Clínicas de Estética",
    description:
      "Websites profissionais para clínicas de estética em Portugal. A partir de €397.",
    images: ["https://vistoo.pt/assets/og-image.png"],
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vistoo",
  url: "https://vistoo.pt",
  logo: "https://vistoo.pt/assets/logo.png",
  image: "https://vistoo.pt/assets/og-image.png",
  description:
    "Agência especializada em criação de websites para clínicas de estética em Portugal.",
  telephone: "+351934882249",
  email: "geral@vistoo.pt",
  address: { "@type": "PostalAddress", addressCountry: "PT" },
  areaServed: "PT",
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "20:00",
  },
  sameAs: [
    "https://www.instagram.com/vistoo.pt",
    "https://www.linkedin.com/company/vistoo",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "100",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Criação de Sites para Clínicas de Estética",
  provider: {
    "@type": "ProfessionalService",
    name: "Vistoo",
    url: "https://vistoo.pt",
  },
  description:
    "Criamos websites profissionais para clínicas de estética em Portugal. Design premium, SEO local, marcações online e entrega em 14 dias úteis.",
  areaServed: "PT",
  offers: [
    {
      "@type": "Offer",
      name: "Plano Essencial",
      price: "397",
      priceCurrency: "EUR",
      description:
        "Site de 5 páginas, SEO técnico local, formulário de contacto, entrega em 14 dias",
    },
    {
      "@type": "Offer",
      name: "Plano Crescimento",
      price: "597",
      priceCurrency: "EUR",
      description:
        "Site completo com marcações online, blog SEO, Google Business Profile, Pixel Meta",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como criar um site profissional para a minha clínica de estética?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Vistoo trata de tudo: copy, design, desenvolvimento e SEO. Entregamos o site pronto a captar pacientes em 14 dias úteis, sem necessidade de conhecimentos técnicos.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo demora a entrega do site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "14 dias úteis a contar do briefing inicial.",
      },
    },
    {
      "@type": "Question",
      name: "Trabalham com clínicas em todo o país?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todo o processo é remoto — reuniões por videochamada e entregas online.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o custo mensal obrigatório?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "€55/mês, independentemente do plano escolhido. Cobre alojamento, segurança, suporte técnico e pequenas atualizações. Mínimo de 6 meses.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
