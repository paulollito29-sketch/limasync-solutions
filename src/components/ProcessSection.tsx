"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProcessSectionProps {
  lang?: "es" | "en";
}

const stageData = {
  es: {
    id: "proceso",
    rangeLabel: "Desliza por las etapas de entrega en 72 horas",
    planSelectLabel: "Simular contrato con plan:",
    plans: [
      { id: "express", name: "Web Express", total: 499, totalLabel: "S/ 499.00", half: "S/ 249.50" },
      { id: "resto", name: "Carta Digital QR", total: 790, totalLabel: "S/ 790.00", half: "S/ 395.00" },
      { id: "custom", name: "Dashboard, CRM & Bots", isQuote: true, totalLabel: "A cotizar a medida", half: "50% anticipo" },
    ],
    stages: [
      {
        stopName: "Inicio y 50%",
        clause: "Primero defines con el 50%",
        desc: "Alineamos la arquitectura de tu negocio en 10 minutos, registramos tu dominio .com propio y activamos el entorno con solo la mitad de adelanto.",
        uiStatus: "HITO INICIAL CONFIRMADO",
        uiStep: "Registro de dominio .com y estructura base",
        uiMetricLabel: "Adelanto requerido hoy",
        uiProgress: "25%",
      },
      {
        stopName: "Día uno: Interfaz",
        clause: "Segundo ves tu web viva",
        desc: "Construimos el diseño completo adaptado a celulares y computadoras sobre un enlace privado para que navegues tu plataforma en tiempo real.",
        uiStatus: "SERVIDOR STAGING EN LÍNEA",
        uiStep: "Vistas móviles, catálogo y velocidad 99/100",
        uiMetricLabel: "Tiempo transcurrido",
        uiProgress: "50%",
      },
      {
        stopName: "Día dos: Pedidos",
        clause: "Tercero pruebas pedidos",
        desc: "Conectamos tus botones de WhatsApp, comandas QR de restaurante o paneles de métricas y realizamos pruebas reales de compra contigo.",
        uiStatus: "FLUJO WHATSAPP Y PEDIDOS CONECTADO",
        uiStep: "Pruebas de pedidos, SSL y automatización",
        uiMetricLabel: "Pruebas superadas",
        uiProgress: "75%",
      },
      {
        stopName: "Hora 72: Entrega",
        clause: "Cuarto apruebas y cierras",
        desc: "Verificas todo funcionando desde tu propio teléfono, recibes tu capacitación de 15 minutos y recién entonces abonas el 50% restante.",
        uiStatus: "ENTREGA VERIFICADA EN PRODUCCIÓN",
        uiStep: "Dominio activo, accesos entregados y garantía",
        uiMetricLabel: "Saldo contra conformidad",
        uiProgress: "100%",
      },
    ],
  },
  en: {
    id: "process",
    rangeLabel: "Drag through the 72-hour delivery stages",
    planSelectLabel: "Simulate contract with plan:",
    plans: [
      { id: "express", name: "Web Express", total: 499, totalLabel: "S/ 499.00", half: "S/ 249.50" },
      { id: "resto", name: "Digital QR Menu", total: 790, totalLabel: "S/ 790.00", half: "S/ 395.00" },
      { id: "custom", name: "Dashboard, CRM & Bots", isQuote: true, totalLabel: "Custom quote", half: "50% deposit" },
    ],
    stages: [
      {
        stopName: "Start & 50%",
        clause: "First lock in with 50%",
        desc: "We align your business architecture in 10 minutes, register your custom .com domain, and spin up the project with a 50% milestone deposit.",
        uiStatus: "INITIAL MILESTONE CONFIRMED",
        uiStep: "Custom .com domain and core structure",
        uiMetricLabel: "Deposit required today",
        uiProgress: "25%",
      },
      {
        stopName: "Day one: Interface",
        clause: "Second preview live UI",
        desc: "We build the complete mobile and desktop interface on a private staging link so you can interact with your platform in real time.",
        uiStatus: "STAGING SERVER ONLINE",
        uiStep: "Mobile views, catalog, and 99/100 speed",
        uiMetricLabel: "Elapsed window",
        uiProgress: "50%",
      },
      {
        stopName: "Day two: Orders",
        clause: "Third test live orders",
        desc: "We wire your WhatsApp checkout flows, restaurant QR kitchen tickets, or dashboard metrics and run live end-to-end order tests with you.",
        uiStatus: "WHATSAPP & ORDERS FLOW WIRED",
        uiStep: "Order routing, SSL, and bot verification",
        uiMetricLabel: "Verification checks",
        uiProgress: "75%",
      },
      {
        stopName: "Hour 72: Handover",
        clause: "Fourth approve and launch",
        desc: "You verify everything working on your own phone, complete your 15-minute training, and only then settle the remaining 50% balance.",
        uiStatus: "VERIFIED PRODUCTION LAUNCH",
        uiStep: "Active domain, full credentials, and support",
        uiMetricLabel: "Balance upon approval",
        uiProgress: "100%",
      },
    ],
  },
};

export default function ProcessSection({ lang = "es" }: ProcessSectionProps) {
  const t = stageData[lang];
  const [stageIdx, setStageIdx] = useState(0);
  const [planIdx, setPlanIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 960);
  }, []);

  const triggerStageChange = (nextIdx: number) => {
    if (nextIdx === stageIdx) return;
    setTransitioning(true);
    setStageIdx(nextIdx);
    window.setTimeout(() => setTransitioning(false), 180);
  };

  const currentStage = t.stages[stageIdx];
  const currentPlan = t.plans[planIdx];

  return (
    <section id={t.id} className="stages-chapter" data-chapter="sand">
      <div className="stages-split">
        <motion.div
          className="stages-left-field"
          initial={{ opacity: 0, x: isDesktop ? -52 : 0, y: isDesktop ? 0 : 36 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className={`stage-clause-heading ${
              transitioning ? "stage-transitioning" : ""
            }`}
          >
            {currentStage.clause}
          </h2>

          <p
            className={transitioning ? "stage-transitioning" : ""}
            style={{
              transition:
                "filter 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            {currentStage.desc}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span id="plan-select-label" style={{ fontSize: "var(--step-small)", fontWeight: 700 }}>
              {t.planSelectLabel}
            </span>
            <div
              role="radiogroup"
              aria-labelledby="plan-select-label"
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {t.plans.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={idx === planIdx}
                  onClick={() => setPlanIdx(idx)}
                  style={{
                    padding: "10px 16px",
                    border: 0,
                    fontWeight: 700,
                    fontSize: "var(--step-small)",
                    backgroundColor: idx === planIdx ? "#0369a1" : "#e2e8f0",
                    color: idx === planIdx ? "#ffffff" : "#0f172a",
                    transition:
                      "transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background-color 180ms ease",
                  }}
                >
                  {p.name} {p.total ? `(S/ ${p.total})` : lang === "es" ? "(A cotizar)" : "(Custom)"}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="stages-right-field"
          initial={{ opacity: 0, x: isDesktop ? 52 : 0, y: isDesktop ? 0 : 36 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            data-ui="true"
            className={transitioning ? "stage-transitioning" : ""}
            style={{
              width: "100%",
              maxWidth: "460px",
              backgroundColor: "#0a0a0a",
              color: "#f2f2f2",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              transition:
                "filter 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 200ms cubic-bezier(0.23, 1, 0.32, 1), transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#181818",
                padding: "12px 14px",
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#38bdf8",
                }}
              >
                {currentStage.uiStatus}
              </span>
              <span style={{ fontSize: "0.85rem", fontWeight: 900 }}>
                {currentStage.uiProgress}
              </span>
            </div>

            <div>
              <div style={{ fontSize: "0.85rem", color: "#38bdf8", marginBottom: "4px" }}>
                {currentPlan.name}
              </div>
              <div style={{ fontSize: "1.35rem", fontWeight: 900, lineHeight: 1.15 }}>
                {currentStage.uiStep}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#181818",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.9rem" }}>{currentStage.uiMetricLabel}</span>
                <strong style={{ fontSize: "1.1rem", color: "#38bdf8" }}>
                  {currentPlan.half}
                </strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.9rem" }}>
                  {lang === "es" ? "Inversión total cerrada" : "Total locked price"}
                </span>
                <strong>{currentPlan.totalLabel || `S/ ${currentPlan.total}.00`}</strong>
              </div>
            </div>

            <a
              href={`mailto:limasync0@gmail.com?subject=${encodeURIComponent(
                `Consulta 50/50 - ${currentPlan.name}${currentPlan.total ? ` (S/ ${currentPlan.total})` : " (A cotizar)"}`
              )}`}
              className="btn-action"
              style={{ width: "100%", textAlign: "center" }}
            >
              <span>
                {currentPlan.isQuote
                  ? lang === "es"
                    ? "Cotizar Dashboard, CRM y Bots"
                    : "Quote Dashboard, CRM & Bots"
                  : lang === "es"
                  ? `Iniciar ${currentPlan.name} con ${currentPlan.half}`
                  : `Start ${currentPlan.name} with ${currentPlan.half}`}
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="stages-bar"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <label
          htmlFor="limasync-stage-slider"
          style={{
            display: "block",
            fontSize: "var(--step-small)",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          {t.rangeLabel}
        </label>
        <input
          id="limasync-stage-slider"
          type="range"
          min={0}
          max={3}
          step={1}
          value={stageIdx}
          aria-label={t.rangeLabel}
          onChange={(e) => triggerStageChange(Number(e.target.value))}
          className="stage-range-input"
        />

        <div className="stage-stops-row" role="tablist" aria-label={t.rangeLabel}>
          {t.stages.map((st, idx) => (
            <button
              key={st.stopName}
              type="button"
              role="tab"
              aria-selected={idx === stageIdx}
              data-active={idx === stageIdx ? "true" : "false"}
              onClick={() => triggerStageChange(idx)}
              className="stage-stop-btn"
            >
              {st.stopName}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
