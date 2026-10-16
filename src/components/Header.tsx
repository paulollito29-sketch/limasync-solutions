"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  lang?: "es" | "en";
}

const navLinks = {
  es: [
    { href: "/#servicios", label: "Servicios" },
    { href: "/demos", label: "Demos en Vivo" },
    { href: "/#precios", label: "Planes" },
    { href: "/#proceso", label: "Proceso" },
    { href: "/#contacto", label: "Contacto" },
  ],
  en: [
    { href: "/en#services", label: "Services" },
    { href: "/en/demos", label: "Live Demos" },
    { href: "/en#pricing", label: "Plans" },
    { href: "/en#process", label: "Process" },
    { href: "/en#contact", label: "Contact" },
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
  const [isDemosPage, setIsDemosPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDemosPage(window.location.pathname.includes("/demos"));
    }
  }, []);

  const links = navLinks[lang];
  const cta = ctaLabels[lang];
  const waUrl = `https://wa.me/51906920958?text=${encodeURIComponent(cta.waMsg)}`;

  const esHref = isDemosPage ? "/demos" : "/";
  const enHref = isDemosPage ? "/en/demos" : "/en";

  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav">
          {/* Zone 1: Brand & Logo */}
          <div className="nav-brand">
            <a className="logo" href={lang === "en" ? "/en" : "/"} onClick={() => setOpen(false)}>
              <span className="logo-mark" aria-hidden="true" />
              <span>LIMASYNC SOLUTIONS</span>
            </a>
          </div>

          {/* Zone 2: Navigation Links (Centered with spacious margins) */}
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Zone 3: Actions (Language Switcher + Quote Button + Mobile Burger) */}
          <div className="nav-actions">
            <div className="lang-switch" role="navigation" aria-label="Language selector">
              <a
                href={esHref}
                className={lang === "es" ? "active" : ""}
                aria-label="Versión en Español"
                aria-current={lang === "es" ? "page" : undefined}
              >
                ES
              </a>
              <span className="lang-divider" aria-hidden="true">/</span>
              <a
                href={enHref}
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
              className="btn btn-accent"
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

      {/* Mobile Drawer */}
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
            <a href={esHref} className={lang === "es" ? "active" : ""}>ES</a>
            <span className="lang-divider">/</span>
            <a href={enHref} className={lang === "en" ? "active" : ""}>EN</a>
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{ border: "none", color: "var(--accent-strong)", fontWeight: 700, paddingBlock: "1rem" }}
        >
          {cta.drawer}
        </a>
      </div>
    </header>
  );
}
