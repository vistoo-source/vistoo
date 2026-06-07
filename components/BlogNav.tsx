import Link from "next/link";

export default function BlogNav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="brand" aria-label="Vistoo">
          <img
            src="/assets/logo.png"
            alt="Vistoo"
            className="brand__logo"
          />
          <span className="brand__name">Vistoo</span>
        </Link>
        <nav className="nav__links" aria-label="Principal">
          <Link href="/#funcionalidades">Funcionalidades</Link>
          <Link href="/#processo">Processo</Link>
          <Link href="/#precos">Preços</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <div className="nav__cta">
          <Link href="/#contacto" className="btn btn--primary btn--sm">
            Pedir orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
