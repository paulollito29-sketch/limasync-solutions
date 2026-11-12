"use client";

import React from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface HeaderProps {
  lang?: string;
}

export default function Header({ lang = "es" }: HeaderProps) {
  const isEs = lang === "es";

  const defaultMsg = isEs
    ? "Hola LimaSync Solutions, quiero solicitar información sobre sus servicios de software."
    : "Hello LimaSync Solutions, I want to request information about your software services.";

  return (
    <header className="obys-video-header" role="banner">
      <div className="header-container">
        {/* Left: Solid Square + Wordmark */}
        <a href={lang === "es" ? "/" : `/${lang}`} className="header-left-brand">
          <span className="black-square-mini" aria-hidden="true" />
          <span className="brand-text">LIMASYNC</span>
          <span className="brand-badge-tag">SOLUTIONS</span>
        </a>

        {/* Center Nav Links */}
        <nav className="header-center-nav" aria-label="Navegación principal">
          <a href="/">Intro</a>
          <span className="nav-slash">/</span>
          <a href="/servicios">Servicios</a>
          <span className="nav-slash">/</span>
          <a href="/#proceso">{isEs ? "Cómo trabajamos" : "How we work"}</a>
          <span className="nav-slash">/</span>
          <a href="/#precios">Planes</a>
          <span className="nav-slash">/</span>
          <a href="/faq">FAQ</a>
        </nav>

        {/* Right Studio Signature + WhatsApp CTA */}
        <div className="header-right-meta">
          <span className="studio-copy hide-mobile">LimaSync ©2026</span>
          <a
            href={getWhatsAppUrl(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-quote-btn"
          >
            <span>COTIZAR ↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
