"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#demos", label: "Demos en Vivo" },
  { href: "#precios", label: "Plan S/ 499" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav">
          <Link className="logo" href="/" onClick={() => setOpen(false)}>
            <span className="logo-mark" aria-hidden="true" />
            LIMASYNC SOLUTIONS
          </Link>
          <div className="nav-cta">
            <div className="nav-links">
              {links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/51906920958?text=Hola%20LimaSync%20Solutions,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Cotizar en 72h
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
          href="https://wa.me/51906920958?text=Hola%20LimaSync%20Solutions,%20quiero%20cotizar%20un%20proyecto"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{ border: "none", color: "var(--accent-strong)", fontWeight: 700 }}
        >
          Cotizar en 72h por WhatsApp →
        </a>
      </div>
    </header>
  );
}
