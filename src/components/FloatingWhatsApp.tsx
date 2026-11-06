"use client";

import React from "react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface FloatingWhatsAppProps {
  lang?: "es" | "en";
}

export default function FloatingWhatsApp({ lang = "es" }: FloatingWhatsAppProps) {
  const isEs = lang === "es";

  const msg = isEs
    ? "Hola LimaSync Solutions, quiero cotizar un proyecto web en 72 horas."
    : "Hello LimaSync Solutions, I want to get a quote for a 72-hour web project.";

  const waUrl = getWhatsAppUrl(msg);
  const ariaLabel = isEs
    ? "Contactar directamente por WhatsApp al equipo de ingeniería"
    : "Contact engineering team directly via WhatsApp";

  return (
    <motion.aside
      aria-label={ariaLabel}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 90,
      }}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#15803d",
          color: "#ffffff",
          padding: "12px 18px",
          borderRadius: "0",
          fontWeight: 700,
          fontSize: "0.95rem",
          textDecoration: "none",
          border: 0,
          transition: "background-color 160ms ease",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Status indicator */}
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "8px",
              height: "8px",
              backgroundColor: "#bbf7d0",
              borderRadius: "50%",
            }}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        <span>{isEs ? "WhatsApp" : "WhatsApp"}</span>
      </a>
    </motion.aside>
  );
}
