"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface MinimalHeroProps {
  lang?: "es" | "en";
}

export default function MinimalHero({ lang = "es" }: MinimalHeroProps) {
  const isEs = lang === "es";

  const words = [
    {
      word: "FÁCIL",
      rot: 0,
      sub: isEs
        ? "Procesos transparentes, directos y sin complicaciones técnicas."
        : "Transparent, direct processes without technical friction.",
    },
    {
      word: "RÁPIDO",
      rot: 32,
      sub: isEs
        ? "Despliegues en 72 horas con 99/100 de velocidad de carga garantizada."
        : "Deployments in 72 hours with guaranteed 99/100 page speed.",
    },
    {
      word: "LIMASYNC",
      rot: 0,
      sub: "",
    },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeWordIdx, setActiveWordIdx] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const phase = params.get("phase");
      if (phase === "rapido") return 1;
      if (phase === "limasync") return 2;
    }
    return 0;
  });
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll-driven animation handler
  useEffect(() => {
    setHasMounted(true);

    let rafId: number;

    const updateScrollProgress = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = trackRef.current.offsetHeight - window.innerHeight;

      if (trackHeight > 0) {
        const progress = Math.min(Math.max(-rect.top / trackHeight, 0), 1);
        setScrollProgress(progress);

        // When user scrolls through the track
        if (window.scrollY > 10 || progress > 0.02) {
          if (progress < 0.35) {
            setActiveWordIdx(0);
          } else if (progress < 0.70) {
            setActiveWordIdx(1);
          } else {
            setActiveWordIdx(2);
          }
        }
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Check initial query parameter if provided
    const params = new URLSearchParams(window.location.search);
    const phase = params.get("phase");
    if (phase === "limasync") {
      setTimeout(() => scrollToMilestone(2), 80);
    } else if (phase === "rapido") {
      setTimeout(() => scrollToMilestone(1), 80);
    } else {
      updateScrollProgress();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Jump smoothly to a word milestone within the track on click
  const scrollToMilestone = (idx: number) => {
    if (!trackRef.current) return;
    const trackTop = trackRef.current.offsetTop;
    const trackHeight = trackRef.current.offsetHeight - window.innerHeight;
    const milestonePercentages = [0.05, 0.50, 0.85];
    const targetScrollY = trackTop + trackHeight * milestonePercentages[idx];

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const current = words[activeWordIdx];

  const defaultMsg = isEs
    ? "Hola LimaSync Solutions, quiero iniciar un proyecto de software con el modelo 50/50."
    : "Hello LimaSync Solutions, I want to start a software project with the 50/50 model.";

  return (
    <div ref={trackRef} className="hero-scroll-track" id="top">
      {/* Sticky Fullscreen 100% Viewport Hero Container */}
      <section className="obys-hero-container" aria-label="Introducción LimaSync Solutions">
        {/* Upper Grid Layout (Exact Obys Header Grid Structure) */}
        <div className="obys-hero-grid-upper">
          <div className="hero-cell-statement">
            <div className="mobile-meta-kicker show-mobile-only">
              <span className="kicker-dot">■</span>
              <span>LIMA, PERÚ · SOFTWARE STUDIO</span>
            </div>
            <p className="statement-text">
              {isEs ? (
                <>
                  LimaSync Solutions es un estudio de desarrollo de software en Lima, Perú.<br />
                  En esta plataforma mostramos nuestros sistemas de alta precisión y el modelo transparente 50/50.
                </>
              ) : (
                <>
                  LimaSync Solutions is a bespoke software engineering studio in Lima, Peru.<br />
                  Here we demonstrate our precision engineering principles and 50/50 milestone model.
                </>
              )}
            </p>
          </div>

          <div className="hero-cell-spacer-1 hide-mobile" />
          <div className="hero-cell-spacer-2 hide-mobile" />
          <div className="hero-cell-spacer-3 hide-mobile" />
        </div>

        {/* Lower Section with the Big Animated Words */}
        <div className="obys-hero-grid-lower">
          <div className="hero-types-meta-row">
            {/* Scroll Indicator Telemetry */}
            <div className="hero-scroll-hint">
              <span className="scroll-hint-mono hide-mobile">
                {activeWordIdx === 2
                  ? isEs
                    ? "Sigue el scroll para ver servicios ↓"
                    : "Keep scrolling for services ↓"
                  : isEs
                  ? "Scroll para avanzar fases ↓"
                  : "Scroll to cycle phases ↓"}
              </span>
              <span className="scroll-hint-mono show-mobile-only">
                {activeWordIdx === 2 ? "Servicios ↓" : `Fase 0${activeWordIdx + 1}/03 ↓`}
              </span>
              <div className="scroll-mini-track">
                <div
                  className="scroll-mini-fill"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Kinetic Row: Rotating Square + Giant Morphing Word */}
          <div className="obys-kinetic-word-row">
            {/* Rotating Solid Black Square */}
            <motion.div
              className="obys-hero-square"
              animate={{ rotate: current.rot }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              aria-hidden="true"
            />

            {/* Giant Animated Word with Subtitle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.word}
                initial={hasMounted ? { opacity: 0, y: 15 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="obys-word-content-wrapper"
              >
                <h1
                  className={`obys-hero-giant-word word-${current.word
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(/[^a-z]/g, "")}`}
                >
                  {current.word}
                </h1>
                {current.sub && (
                  <p className="obys-word-subtitle">{current.sub}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
