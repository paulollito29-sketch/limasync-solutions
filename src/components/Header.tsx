"use client";

import { useState } from "react";

interface HeaderProps {
  lang?: "es" | "en";
}

const navLinks = {
  es: [
    { href: "#servicios", label: "Servicios" },
    { href: "#demos", label: "Plantillas por Rubro" },
    { href: "#precios", label: "Plan S/ 499" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ],
  en: [
    { href: "#services", label: "Services" },
    { href: "#demos", label: "Templates by Industry" },
    { href: "#pricing", label: "Plan S/ 499" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ],
};

const ctaLabels = {
  es: {
    btn: "Cotizar en 72h",
    drawer: "Cotizar en 72h por WhatsApp →",
    waMsg: "Hola LimaSync Solutions, quiero cotizar un proyecto",
  },
  en: {
    btn: "Get Quote (72h)",
    drawer: "Get a 72h Quote on WhatsApp →",
    waMsg: "Hello LimaSync Solutions, I want to get a quote for a web project",
  },
};

export default function Header({ lang = "es" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const links = navLinks[lang];
  const cta = ctaLabels[lang];
  const waUrl = `https://wa.me/51906920958?text=${encodeURIComponent(cta.waMsg)}`;

  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav">
          <a className="logo" href={lang === "en" ? "/en" : "/"} onClick={() => setOpen(false)}>
            <span className="logo-mark" aria-hidden="true" />
            LIMASYNC SOLUTIONS
          </a>

          <div className="nav-cta">
            <div className="nav-links">
              {links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* Language Switcher Pill */}
            <div className="lang-switch" role="navigation" aria-label="Language selector">
              <a
                href="/"
                className={lang === "es" ? "active" : ""}
                aria-label="Versión en Español"
                aria-current={lang === "es" ? "page" : undefined}
              >
                ES
              </a>
              <span className="lang-divider" aria-hidden="true">/</span>
              <a
                href="/en"
                className={lang === "en" ? "active" : ""}
                aria-label="English version"
                aria-current={lang === "en" ? "page" : undefined}
              >
                EN
              </a>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {cta.btn}
            </a>

            <button
              className="burger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <>
                  <span style={{ transform: "rotate(45deg) translateY(2px)" }} />
                  <span style={{ transform: "rotate(-45deg) translateY(-2px)" }} />
                </>
              ) : (
                <>
                  <span />
                  <span />
                  <span />
                </>
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}

        <div style={{ paddingBlock: "0.85rem", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
            {lang === "es" ? "Idioma / Language:" : "Language / Idioma:"}
          </span>
          <div className="lang-switch">
            <a href="/" className={lang === "es" ? "active" : ""}>ES</a>
            <span className="lang-divider">/</span>
            <a href="/en" className={lang === "en" ? "active" : ""}>EN</a>
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{ border: "none", color: "var(--accent-strong)", fontWeight: 700 }}
        >
          {cta.drawer}
        </a>
      </div>
    </header>
  );
}
