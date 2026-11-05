"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MinimalHeroProps {
  lang?: "es" | "en";
}

export default function MinimalHero({ lang = "es" }: MinimalHeroProps) {
  const isEs = lang === "es";

  const line1 = isEs ? "WEBS Y MÁS" : "WEBS & MORE";
  const line2 = isEs ? "EN 72 HORAS" : "IN 72 HOURS";

  const slides = [
    {
      src: "/images/hero_web_showcase.jpg",
      alt: isEs
        ? "Plataforma web comercial express desarrollada en 72 horas"
        : "Express commercial web platform built in 72 hours",
      tag: "WEB EXPRESS",
      title: isEs ? "Páginas Web Corporativas" : "Corporate Web Platforms",
      badge: isEs ? "72 HORAS SLA" : "72-HOUR SLA",
    },
    {
      src: "/images/service_restaurant_pos.jpg",
      alt: isEs
        ? "Carta digital QR interactiva para restaurantes sin comisiones"
        : "Interactive digital QR menu for restaurants without fees",
      tag: "CARTA DIGITAL QR",
      title: isEs ? "Carta Digital QR Interactiva" : "Interactive Digital QR Menu",
      badge: isEs ? "CERO COMISIONES" : "ZERO COMMISSIONS",
    },
    {
      src: "/images/service_dashboard.jpg",
      alt: isEs
        ? "Dashboard, CRM y portal administrativo con métricas en tiempo real"
        : "Live metrics dashboard and custom CRM portal",
      tag: "DASHBOARD & CRM",
      title: isEs ? "Gestión y Control Operativo" : "Operations & CRM Pipeline",
      badge: isEs ? "A COTIZAR" : "CUSTOM QUOTE",
    },
    {
      src: "/images/service_automation_bot.jpg",
      alt: isEs
        ? "Bots de WhatsApp, flujos CRM y automatización comercial"
        : "WhatsApp bots, CRM workflows, and sales automation",
      tag: "BOTS & AUTOMATIZACIÓN",
      title: isEs ? "Automatización y Bots 24/7" : "24/7 Automation & Bots",
      badge: isEs ? "A COTIZAR" : "CUSTOM QUOTE",
    },
    {
      src: "/images/hero_mockup.png",
      alt: isEs
        ? "Ecosistema multiplataforma adaptado a celulares y computadoras con Angular.ts"
        : "Cross-platform mobile and desktop ecosystem with Angular.ts",
      tag: "TECNOLOGÍA 100%",
      title: isEs ? "Arquitectura Angular.ts" : "Angular.ts Architecture",
      badge: "ANGULAR.TS 100%",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
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

        <motion.div
          className="hero-headline-stack"
          initial={{ opacity: 0, scale: 0.96, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="hero-h1-layer">
            <span className="hero-line-top">{line1}</span>
            <br />
            <span className="hero-line-bottom">{line2}</span>
          </h1>
        </motion.div>
      </div>

      <div className="hero-lower-band" data-chapter="sky">
        <div className="hero-deck-grid">
          <motion.div
            className="hero-lead-col"
            initial={{ opacity: 0, x: isDesktop ? -54 : 0, y: isDesktop ? 0 : 32 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-lead-text">
              {isEs
                ? "Fácil, rápido, LimaSync. Webs, sistemas comerciales y software a medida en Lima. Inicias hoy con el 50% de anticipo y cancelas el saldo únicamente al verificar tu sistema funcionando en 72 horas."
                : "Easy, fast, LimaSync. Websites, commercial systems, and custom software in Lima. Start today with a 50% deposit and pay the balance upon verified delivery in 72 hours."}
            </p>

            <div className="hero-cta-row">
              <a href={isEs ? "#precios" : "#pricing"} className="btn-dark">
                <span>
                  {isEs ? "Ver planes desde S/ 499" : "View plans from S/ 499"}
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
              <a href={isEs ? "#proceso" : "#process"} className="btn-action">
                <span>{isEs ? "Probar reloj de 72h" : "Test 72h clock"}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-media-col"
            initial={{ opacity: 0, x: isDesktop ? 54 : 0, y: isDesktop ? 0 : 32 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.72, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 3D Flip Image Showcase (Perspective rotation, steady container) */}
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
                  initial="enter"
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
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          padding: "4px 8px",
                          backgroundColor: "#0369a1",
                          color: "#ffffff",
                          flexShrink: 0,
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
                  gap: "6px",
                  backgroundColor: "rgba(10, 15, 29, 0.72)",
                  padding: "5px 8px",
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
                      width: idx === activeSlide ? "22px" : "8px",
                      height: "8px",
                      backgroundColor:
                        idx === activeSlide ? "#38bdf8" : "rgba(255,255,255,0.45)",
                      border: 0,
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 180ms ease",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Contract Guarantee Tile */}
            <div
              data-ui="true"
              style={{
                backgroundColor: "var(--field-4)",
                color: "var(--field-4-ink)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#38bdf8",
                    marginBottom: "8px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {isEs ? "FÁCIL, RÁPIDO, LIMASYNC" : "EASY, FAST, LIMASYNC"}
                </div>
                <div style={{ fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.1 }}>
                  {isEs ? "Entrega en 72 horas" : "72-hour delivery"}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                >
                  <span>{isEs ? "Adelanto inicial" : "Initial deposit"}</span>
                  <strong>S/ 249.50 (50%)</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                >
                  <span>{isEs ? "Tecnología base" : "Base technology"}</span>
                  <strong style={{ color: "#38bdf8" }}>Angular.ts (100%)</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                >
                  <span>{isEs ? "Dominio .com + SSL" : ".com Domain + SSL"}</span>
                  <strong>{isEs ? "Incluido 1 año" : "Included 1 yr"}</strong>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "var(--accent)",
                    color: "var(--accent-ink)",
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  <span>{isEs ? "Saldo contra entrega" : "Balance on delivery"}</span>
                  <strong>S/ 249.50 (50%)</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
