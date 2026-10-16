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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
      }}
    >
      <motion.a
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
