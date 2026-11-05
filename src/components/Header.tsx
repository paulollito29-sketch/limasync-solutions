"use client";

import React, { useEffect, useState, useRef } from "react";

interface HeaderProps {
  lang?: string;
}

const languages = [
  { code: "es", label: "Español", flag: "🇪🇸", href: "/" },
  { code: "en", label: "English", flag: "🇺🇸", href: "/en" },
  { code: "pt", label: "Português", flag: "🇧🇷", href: "/pt" },
  { code: "fr", label: "Français", flag: "🇫🇷", href: "/fr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", href: "/de" },
  { code: "it", label: "Italiano", flag: "🇮🇹", href: "/it" },
];

const navItems: Record<string, Array<{ href: string; label: string }>> = {
  es: [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#precios", label: "Planes" },
    { href: "#preguntas", label: "Preguntas" },
  ],
  en: [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Plans" },
    { href: "#faq", label: "Questions" },
  ],
  pt: [
    { href: "#services", label: "Serviços" },
    { href: "#process", label: "Processo" },
    { href: "#pricing", label: "Planos" },
    { href: "#faq", label: "Perguntas" },
  ],
  fr: [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Processus" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#faq", label: "Questions" },
  ],
  de: [
    { href: "#services", label: "Dienstleistungen" },
    { href: "#process", label: "Ablauf" },
    { href: "#pricing", label: "Pläne" },
    { href: "#faq", label: "Fragen" },
  ],
  it: [
    { href: "#services", label: "Servizi" },
    { href: "#process", label: "Processo" },
    { href: "#pricing", label: "Piani" },
    { href: "#faq", label: "Domande" },
  ],
};

const ctaLabels: Record<string, string> = {
  es: "Cotizar en 72h",
  en: "Quote in 72h",
  pt: "Cotar em 72h",
  fr: "Devis en 72h",
  de: "Angebot in 72h",
  it: "Preventivo in 72h",
};

export default function Header({ lang = "es" }: HeaderProps) {
  const [theme, setTheme] = useState<"paper" | "dark" | "sand" | "sky">("paper");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const isEs = lang === "es";
  const items = navItems[lang] || navItems.en;
  const ctaText = ctaLabels[lang] || ctaLabels.en;
  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-chapter]");
      let active: "paper" | "dark" | "sand" | "sky" = "paper";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 64 && rect.bottom >= 64) {
          const val = sec.getAttribute("data-chapter") as "paper" | "dark" | "sand" | "sky";
          if (val) active = val;
          break;
        }
      }
      setTheme(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleHeroClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hero = document.getElementById("top") || document.querySelector(".hero-chapter");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="site-header" data-chapter-theme={theme}>
      <div className="header-inner">
        <a
          href="#top"
          onClick={handleHeroClick}
          className="wordmark"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
          aria-label="LimaSync Solutions - Inicio"
        >
          <img
            src="/favicon.svg"
            alt=""
            width="24"
            height="24"
            style={{ display: "block", flexShrink: 0 }}
          />
          <span>LIMASYNC</span>
        </a>

        <nav className="nav-row" aria-label={isEs ? "Navegación principal" : "Main navigation"}>
          <div className="nav-links">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}

            {/* Language Selector Dropdown */}
            <div className="lang-selector-wrap" ref={langRef} style={{ position: "relative" }}>
              <button
                type="button"
                className="lang-trigger-btn"
                aria-haspopup="true"
                aria-expanded={isLangOpen}
                aria-label={isEs ? "Seleccionar idioma" : "Select language"}
                onClick={() => setIsLangOpen((prev) => !prev)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "transparent",
                  border: "1px solid var(--line)",
                  padding: "6px 10px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  color: "inherit",
                  cursor: "pointer",
                  minHeight: "36px",
                  transition: "transform 140ms var(--ease-out), background-color 160ms var(--ease-out)",
                }}
              >
                <span aria-hidden="true">{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isLangOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 180ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isLangOpen && (
                <div
                  role="menu"
                  className="lang-menu-list"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    minWidth: "170px",
                    backgroundColor: "var(--paper)",
                    color: "var(--ink)",
                    border: "1px solid var(--line-strong)",
                    boxShadow: "0 10px 28px rgba(0, 0, 0, 0.16)",
                    zIndex: 250,
                    display: "flex",
                    flexDirection: "column",
                    padding: "6px 0",
                  }}
                >
                  {languages.map((l) => (
                    <a
                      key={l.code}
                      href={l.href}
                      role="menuitem"
                      className="lang-menu-item"
                      onClick={() => setIsLangOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        fontSize: "0.88rem",
                        color: "var(--ink)",
                        textDecoration: "none",
                        backgroundColor: l.code === lang ? "rgba(2, 132, 199, 0.12)" : "transparent",
                        fontWeight: l.code === lang ? 700 : 500,
                        transition: "background-color 140ms ease",
                        minHeight: "44px",
                      }}
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "1.1rem" }}>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {l.code === lang && (
                        <span style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 900 }}>
                          ✓
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <a href={isEs ? "#precios" : "#pricing"} className="btn-action">
            <span>{ctaText}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
