"use client";

import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav">
          <a className="logo" href="#top" onClick={() => setOpen(false)}>
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
            <a href="#contacto" className="btn">
              Cotizar proyecto
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
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          style={{ border: "none", color: "var(--accent-strong)", fontWeight: 700 }}
        >
          Cotizar proyecto →
        </a>
      </div>
    </header>
  );
}
