"use client";

import React, { useState, useEffect, useRef } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ProcessSectionProps {
  lang?: "es" | "en";
}

export default function ProcessSection({ lang = "es" }: ProcessSectionProps) {
  const isEs = lang === "es";

  // 1. Statement Track (TÓMALO CON CALMA)
  const statementTrackRef = useRef<HTMLDivElement>(null);
  const [statementProgress, setStatementProgress] = useState(0);

  // 2. Horizontal Process Track
  const processTrackRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [processProgress, setProcessProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      // 1. Statement track
      if (statementTrackRef.current) {
        const sRect = statementTrackRef.current.getBoundingClientRect();
        const sTrackH = statementTrackRef.current.offsetHeight - window.innerHeight;
        if (sTrackH > 0) {
          const raw = -sRect.top / sTrackH;
          setStatementProgress(Math.min(Math.max(raw, 0), 1));
        }
      }

      // 2. Horizontal process track
      if (processTrackRef.current && sliderRef.current) {
        const pRect = processTrackRef.current.getBoundingClientRect();
        const pTrackH = processTrackRef.current.offsetHeight - window.innerHeight;
        if (pTrackH > 0) {
          const raw = -pRect.top / pTrackH;
          const clamped = Math.min(Math.max(raw, 0), 1);
          setProcessProgress(clamped);

          const totalWidth = sliderRef.current.scrollWidth;
          const viewportWidth = processTrackRef.current.clientWidth || window.innerWidth;
          // Calculate max horizontal travel with comfortable end margin
          const maxScroll = Math.max(0, totalWidth - viewportWidth + 40);
          setTranslateX(clamped * maxScroll);
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Statement text blocks animation (exact original implementation)
  const statementBlocks = isEs
    ? ["TÓMALO", "CON", "CALMA"]
    : ["DON'T TAKE", "IT TOO", "SERIOUSLY"];

  const getStatementBlockStyle = (index: number) => {
    const startRange = 0.05 + index * 0.22;
    const endRange = startRange + 0.20;
    const raw = (statementProgress - startRange) / (endRange - startRange);
    const clamped = Math.min(Math.max(raw, 0), 1);
    const eased = 1 - Math.pow(1 - clamped, 3);
    const y = (1 - eased) * 105;
    const opacity = Math.min(clamped * 1.5, 1);

    return {
      transform: `translate3d(0, ${y}%, 0)`,
      opacity: opacity,
    };
  };

  const subStart = 0.72;
  const subEnd = 0.86;
  const subRaw = (statementProgress - subStart) / (subEnd - subStart);
  const subClamped = Math.min(Math.max(subRaw, 0), 1);
  const subEased = 1 - Math.pow(1 - subClamped, 2.5);
  const subOpacity = subEased;

  // Clean, uncluttered milestones: No blue words, no footers, pure Swiss typography
  const milestones = [
    {
      num: "01",
      timing: isEs ? "00 — 24H" : "00 — 24H",
      title: isEs ? "Arquitectura & Alcance" : "Architecture & Scope",
      desc: isEs
        ? "Definición del stack técnico, modelos de datos y registro de dominio .com con el 50% de anticipo inicial."
        : "Definition of tech stack, data models, and .com domain registration with the 50% milestone deposit.",
    },
    {
      num: "02",
      timing: isEs ? "24 — 48H" : "24 — 48H",
      title: isEs ? "Prototipo Interactivo" : "Interactive Prototype",
      desc: isEs
        ? "Maquetación navegable en servidor privado. Pruebas la interfaz en tu teléfono y computadora en tiempo real."
        : "Navigable prototype on a private link. Test the live interface on your phone and computer in real time.",
    },
    {
      num: "03",
      timing: isEs ? "48 — 72H" : "48 — 72H",
      title: isEs ? "Ingeniería & Rendimiento" : "Engineering & Speed",
      desc: isEs
        ? "Desarrollo en Astro 5 y React 19 sin librerías pesadas. Cero demoras, carga instantánea y optimización total."
        : "Engineered with Astro 5 and React 19. Zero heavy bloat, instant static loads, and complete optimization.",
    },
    {
      num: "04",
      timing: isEs ? "HORA 72+" : "HOUR 72+",
      title: isEs ? "Conformidad & Saldo 50%" : "Approval & 50% Balance",
      desc: isEs
        ? "Solo cuando verificas el proyecto terminado y estás 100% conforme con el resultado, abonas el 50% restante."
        : "Only when you verify the finished system and are 100% satisfied with the outcome, you settle the final 50%.",
    },
  ];

  const activeMilestoneIdx = Math.min(Math.floor(processProgress * 4), 3);

  return (
    <>
      {/* =========================================================================
          1. INVERTED BLACK STATEMENT SECTION: SCROLL-PINNED BLOCK-BY-BLOCK REVEAL
      ========================================================================= */}
      <div
        ref={statementTrackRef}
        className="statement-scroll-track"
        aria-label={isEs ? "Manifiesto de ingeniería LimaSync" : "LimaSync engineering statement"}
      >
        <div className="statement-sticky-viewport">
          <div className="statement-inner-content">
            {/* Top decorative modular boxes matching Swiss 12-column grid */}
            <div className="inverted-boxes-grid">
              <div className="gray-box" />
              <div className="gray-box light" />
              <div className="gray-box white" />
              <div className="gray-box" />
            </div>

            {/* Scroll-driven headline by blocks that stay pinned and reveal */}
            <div className="statement-blocks-stack">
              {statementBlocks.map((blockText, bIdx) => (
                <div key={bIdx} className="statement-block-line">
                  <div className="statement-block-mask">
                    <span
                      className="statement-block-inner"
                      style={getStatementBlockStyle(bIdx)}
                    >
                      {blockText}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtitle appearing smoothly after blocks */}
            <p
              className="inverted-sub-clause font-mono"
              style={{
                opacity: subOpacity,
                transform: `translate3d(0, ${(1 - subEased) * 20}px, 0)`,
                transition: "opacity 0.12s ease-out, transform 0.12s ease-out",
              }}
            >
              {isEs
                ? "(HACEMOS TODO POR TI · CERO COMPLICACIONES TÉCNICAS · GARANTÍA DE ENTREGA 50/50)"
                : "(WE DO EVERYTHING FOR YOU · ZERO TECHNICAL FRICTION · 50/50 GUARANTEE)"}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. HORIZONTAL SCROLL CONVEYOR SECTION (CÓMO TRABAJAMOS)
          Clean, minimal, creative Swiss editorial layout aligned 100% with the grid
      ========================================================================= */}
      <section
        id="proceso"
        ref={processTrackRef}
        className="horizontal-process-track"
        aria-label={isEs ? "Cómo trabajamos" : "How we work"}
      >
        <div className="horizontal-process-viewport">
          {/* Architectural Watermark in Background */}
          <div className="process-giant-watermark font-mono" aria-hidden="true">
            {isEs ? "CÓMO TRABAJAMOS // 50-50" : "HOW WE WORK // 50-50"}
          </div>

          {/* Minimal Top Header Bar */}
          <div className="horizontal-process-header">
            <div className="h-header-left">
              <h2 className="h-header-title">
                {isEs ? "CÓMO TRABAJAMOS" : "HOW WE WORK"}
              </h2>
            </div>

            <div className="h-header-right">
              <div className="h-phase-indicator font-mono">
                <span className="h-current-num">0{activeMilestoneIdx + 1}</span>
                <span className="h-total-num">/ 04</span>
              </div>
              <div className="h-progress-bar-wrap" aria-hidden="true">
                <div
                  className="h-progress-bar-fill"
                  style={{ width: `${Math.round(processProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cards Track (Slides horizontally with transform: translateX) */}
          <div className="horizontal-slider-container">
            <div
              ref={sliderRef}
              className="horizontal-cards-track"
              style={{
                transform: `translate3d(-${translateX}px, 0, 0)`,
              }}
            >
              {milestones.map((m, idx) => {
                const isActive = activeMilestoneIdx === idx;

                return (
                  <article
                    key={m.num}
                    className={`process-milestone-panel ${isActive ? "is-active-card" : ""}`}
                    aria-label={`Fase ${m.num}: ${m.title}`}
                  >
                    {/* Top: Large architectural number + Timing */}
                    <div className="panel-clean-top">
                      <span className="panel-clean-num font-mono">{m.num}</span>
                      <span className="panel-clean-timing font-mono">[{m.timing}]</span>
                    </div>

                    {/* Middle: Title & crisp description */}
                    <div className="panel-clean-body">
                      <h3 className="panel-clean-title">{m.title}</h3>
                      <p className="panel-clean-desc">{m.desc}</p>
                    </div>

                    {/* Bottom: Minimal hairline accent */}
                    <div className="panel-clean-bottom">
                      <span className="clean-hairline-accent" />
                    </div>
                  </article>
                );
              })}

              {/* Card 05: Minimal Clean CTA (No extra text, no resultado final, aligned to grid) */}
              <div className="process-milestone-panel process-card-five">
                <div className="panel-clean-top">
                  <span className="panel-clean-num font-mono">05</span>
                </div>

                <div className="panel-clean-body">
                  <h3 className="panel-clean-title">
                    {isEs ? "¿Iniciamos tu proyecto hoy?" : "Start your project today?"}
                  </h3>
                  <p className="panel-clean-desc">
                    {isEs
                      ? "Sin burocracia ni reuniones eternas. Empezamos en 24h con entrega ágil y garantía 50/50."
                      : "Zero bureaucracy or endless meetings. We begin within 24h with 50/50 milestone guarantee."}
                  </p>
                </div>

                <div className="panel-clean-action">
                  <a
                    href={getWhatsAppUrl(isEs ? "Hola, quiero iniciar un proyecto de software con el modelo 50/50." : "Hello, I want to start a software project with the 50/50 model.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel-clean-btn font-mono"
                    aria-label={isEs ? "Contactar por WhatsApp para iniciar proyecto" : "Contact on WhatsApp to start project"}
                  >
                    <span>{isEs ? "INICIAR PROYECTO ↗" : "START PROJECT ↗"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
