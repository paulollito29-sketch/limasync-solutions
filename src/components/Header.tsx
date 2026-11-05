"use client";

import React, { useEffect, useState } from "react";

interface HeaderProps {
  lang?: "es" | "en";
}

const navItems = {
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
};

export default function Header({ lang = "es" }: HeaderProps) {
  const [theme, setTheme] = useState<"paper" | "dark" | "sand" | "sky">("paper");
  const isEs = lang === "es";
  const items = navItems[lang];

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

  return (
    <header className="site-header" data-chapter-theme={theme}>
      <div className="header-inner">
        <a
          href={isEs ? "/" : "/en"}
          className="wordmark"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
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
            <a
              href={isEs ? "/en" : "/"}
              className="nav-link"
              aria-label={isEs ? "Switch to English" : "Cambiar a Español"}
            >
              {isEs ? "EN" : "ES"}
            </a>
          </div>

          <a href={isEs ? "#precios" : "#pricing"} className="btn-action">
            <span>{isEs ? "Cotizar en 72h" : "Quote in 72h"}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
