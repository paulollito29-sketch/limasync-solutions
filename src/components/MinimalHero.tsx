"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface MinimalHeroProps {
  lang?: "es" | "en";
}

export default function MinimalHero({ lang = "es" }: MinimalHeroProps) {
  const isEs = lang === "es";

  const line1 = isEs ? "WEBS Y MÁS" : "WEBS & MORE";
  const line2 = isEs ? "EN 72 HORAS" : "IN 72 HOURS";

  const slides = [
    {
      src: "/images/hero_web_showcase.webp",
      alt: isEs
        ? "Plataforma web comercial express desarrollada en 72 horas"
        : "Express commercial web platform built in 72 hours",
      tag: "WEB EXPRESS",
      title: isEs ? "Páginas Web Corporativas" : "Corporate Web Platforms",
      badge: isEs ? "72 HORAS SLA" : "72-HOUR SLA",
    },
    {
      src: "/images/service_restaurant_pos.webp",
      alt: isEs
        ? "Carta digital QR interactiva para restaurantes sin comisiones"
        : "Interactive digital QR menu for restaurants without fees",
      tag: "CARTA DIGITAL QR",
      title: isEs ? "Carta Digital QR Interactiva" : "Interactive Digital QR Menu",
      badge: isEs ? "CERO COMISIONES" : "ZERO COMMISSIONS",
    },
    {
      src: "/images/service_dashboard.webp",
      alt: isEs
        ? "Dashboard, CRM y portal administrativo con métricas en tiempo real"
        : "Live metrics dashboard and custom CRM portal",
      tag: "DASHBOARD & CRM",
      title: isEs ? "Gestión y Control Operativo" : "Operations & CRM Pipeline",
      badge: isEs ? "A COTIZAR" : "CUSTOM QUOTE",
    },
    {
      src: "/images/service_automation_bot.webp",
      alt: isEs
        ? "Bots de WhatsApp, flujos CRM y automatización comercial"
        : "WhatsApp bots, CRM workflows, and sales automation",
      tag: "BOTS & AUTOMATIZACIÓN",
      title: isEs ? "Automatización y Bots 24/7" : "24/7 Automation & Bots",
      badge: isEs ? "A COTIZAR" : "CUSTOM QUOTE",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setIsDesktop(window.innerWidth >= 960);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <section className="hero-chapter" data-chapter="paper">
      <div className="hero-seam-stage">
        <div className="hero-field-top" aria-hidden="true" />
        <div className="hero-field-bottom" aria-hidden="true" />

        <div className="hero-headline-stack">
          <h1 className="hero-h1-layer">
            <span className="hero-line-top">{line1}</span>
            <br />
            <span className="hero-line-bottom">{line2}</span>
          </h1>
        </div>
      </div>

      <div className="hero-lower-band" data-chapter="sky">
        <div className="hero-deck-grid">
          <div className="hero-lead-col">
            <p className="hero-lead-text">
              <strong>{isEs ? "Fácil, rápido, LimaSync." : "Easy, fast, LimaSync."}</strong>{" "}
              {isEs
                ? "Webs, sistemas comerciales y software a medida en Lima. Inicias con el 50% de anticipo y cancelas el saldo únicamente al verificar tu sistema funcionando en 72 horas."
                : "Websites, commercial systems, and custom software in Lima. Start with a 50% deposit and pay the balance upon verified delivery in 72 hours."}
            </p>

            <div className="hero-cta-row">
              <a
                href={getWhatsAppUrl(
                  isEs
                    ? "Hola LimaSync Solutions, quiero cotizar mi proyecto web en 72 horas."
                    : "Hello LimaSync Solutions, I want to quote my 72-hour web project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <span>
                  {isEs ? "Cotizar por WhatsApp (desde S/ 499)" : "Quote on WhatsApp (from S/ 499)"}
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-media-col">
            {/* Showcase Visual */}
            <div
              className="hero-photo-wrap"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                position: "relative",
                perspective: "1200px",
                aspectRatio: "16 / 10",
                width: "100%",
                maxWidth: "100%",
                backgroundColor: "var(--field-4)",
                overflow: "hidden",
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSlide}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({
                      rotateY: d > 0 ? 85 : -85,
                      opacity: 0,
                      scale: 0.94,
                    }),
                    center: {
                      rotateY: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.62,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    },
                    exit: (d: number) => ({
                      rotateY: d > 0 ? -85 : 85,
                      opacity: 0,
                      scale: 0.94,
                      transition: {
                        duration: 0.45,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    }),
                  }}
                  initial={hasMounted ? "enter" : false}
                  animate="center"
                  exit="exit"
                  style={{
                    transformStyle: "preserve-3d",
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={slides[activeSlide].src}
                    alt={slides[activeSlide].alt}
                    width={1200}
                    height={750}
                    loading={activeSlide === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    data-ui="true"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(10, 15, 29, 0.9)",
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px 18px",
                      color: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "#38bdf8",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {slides[activeSlide].tag}
                        </div>
                        <div
                          style={{
                            fontSize: "1.08rem",
                            fontWeight: 900,
                            lineHeight: 1.2,
                            color: "#ffffff",
                          }}
                        >
                          {slides[activeSlide].title}
                        </div>
                      </div>
                      <span
                        className="hero-slide-badge"
                        style={{
                          backgroundColor: "#0284c7",
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          padding: "4px 8px",
                          display: "inline-block",
                        }}
                      >
                        {slides[activeSlide].badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive 3D indicators */}
              <div
                role="tablist"
                aria-label={isEs ? "Galería interactiva 3D" : "Interactive 3D gallery"}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  zIndex: 10,
                  display: "flex",
                  gap: "2px",
                  backgroundColor: "rgba(10, 15, 29, 0.72)",
                  padding: "2px 4px",
                  backdropFilter: "blur(6px)",
                }}
              >
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeSlide}
                    aria-label={`${isEs ? "Ver solución" : "View solution"} ${idx + 1}`}
                    onClick={() => {
                      setDirection(idx > activeSlide ? 1 : -1);
                      setActiveSlide(idx);
                    }}
                    style={{
                      minWidth: "26px",
                      minHeight: "26px",
                      padding: "6px 2px",
                      background: "transparent",
                      border: 0,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 140ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: idx === activeSlide ? "22px" : "8px",
                        height: "8px",
                        backgroundColor:
                          idx === activeSlide ? "#38bdf8" : "rgba(255,255,255,0.45)",
                        transition:
                          "width 240ms cubic-bezier(0.23, 1, 0.32, 1), background-color 180ms ease-out",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
