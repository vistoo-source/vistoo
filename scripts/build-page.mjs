import fs from "fs";

function fix(content) {
  return content
    .replace(/<img "\/assets\//g, '<img src="/assets/')
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/tabindex=/g, "tabIndex=")
    .replace(/&amp;/g, "&");
}

const before = fix(
  fs.readFileSync("components/_part-before-showcase.txt", "utf8")
);
const between = fix(
  fs.readFileSync("components/_part-between.txt", "utf8")
);
const contactIntro = fix(
  fs.readFileSync("components/_part-contact-intro.txt", "utf8")
);
const footer = fix(fs.readFileSync("components/_part-footer.txt", "utf8"));

const portfolioStart = before.lastIndexOf('<section className="portfolio"');
const beforePortfolio = before.slice(0, portfolioStart);
const portfolioHeader = before.slice(portfolioStart);
const portfolioHeaderEnd = portfolioHeader.indexOf('<div className="showcase"');
const portHeadOnly = portfolioHeader.slice(0, portfolioHeaderEnd);

const indent = (s) => s.split("\n").map((l) => "      " + l).join("\n");

const page = `import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
${indent(beforePortfolio)}
${indent(portHeadOnly)}
      <Showcase />
${indent(between)}
      <Faq />
${indent(contactIntro)}
      <ContactForm />
${indent(footer)}
      <ScrollReveal />
    </>
  );
}
`;

fs.writeFileSync("app/page.tsx", page);
console.log("page.tsx written", page.length);
