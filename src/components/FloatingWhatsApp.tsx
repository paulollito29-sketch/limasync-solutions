"use client";

import { motion } from "framer-motion";

interface FloatingWhatsAppProps {
  lang?: "es" | "en";
}

export default function FloatingWhatsApp({ lang = "es" }: FloatingWhatsAppProps) {
  const msg =
    lang === "en"
      ? "Hello LimaSync Solutions, I want to get a quote for my website"
      : "Hola LimaSync Solutions, quiero cotizar mi sitio web";

  const label = lang === "en" ? "Chat on WhatsApp" : "Escríbenos por WhatsApp";
  const whatsappUrl = `https://wa.me/51906920958?text=${encodeURIComponent(msg)}`;

  const mailMsg = lang === "en" ? "Web Project Quote - LimaSync Solutions" : "Cotización de Proyecto Web - LimaSync Solutions";
  const mailUrl = `mailto:limasync0@gmail.com?subject=${encodeURIComponent(mailMsg)}`;
  const mailLabel = lang === "en" ? "Email Us" : "Escríbenos por Correo";

  return (
    <motion.div
      className="floating-contact-container"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
      }}
    >
      {/* Floating Email Button */}
      <motion.a
        className="floating-email-btn"
        href={mailUrl}
        aria-label={mailLabel}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 24px rgba(3, 105, 161, 0.45)",
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.55rem",
          background: "#0369a1",
          color: "#ffffff",
          padding: "0.6rem 1.1rem",
          borderRadius: "9999px",
          fontWeight: 600,
          fontSize: "0.86rem",
          textDecoration: "none",
          fontFamily: "var(--sans)",
          border: "2px solid rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 6px 18px rgba(3, 105, 161, 0.35)",
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>{mailLabel}</span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        className="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{
          scale: 1.06,
          boxShadow: "0 12px 30px rgba(34, 197, 94, 0.45)",
        }}
        whileTap={{ scale: 0.94 }}
        animate={{
          boxShadow: [
            "0 6px 20px rgba(34, 197, 94, 0.3)",
            "0 8px 26px rgba(34, 197, 94, 0.5)",
            "0 6px 20px rgba(34, 197, 94, 0.3)",
          ],
        }}
        transition={{
          boxShadow: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          },
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.65rem",
          background: "#22c55e",
          color: "#ffffff",
          padding: "0.75rem 1.25rem",
          borderRadius: "9999px",
          fontWeight: 700,
          fontSize: "0.95rem",
          textDecoration: "none",
          fontFamily: "var(--sans)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(6px)",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "22px",
            height: "22px",
          }}
        >
          {/* Animated online status ping */}
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "8px",
              height: "8px",
              background: "#4ade80",
              borderRadius: "50%",
              boxShadow: "0 0 0 2px #22c55e",
            }}
          />
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        <span>{label}</span>
      </motion.a>
    </motion.div>
  );
}
