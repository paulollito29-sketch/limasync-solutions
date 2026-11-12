"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface FloatingWhatsAppProps {
  lang?: "es" | "en";
}

export default function FloatingWhatsApp({ lang = "es" }: FloatingWhatsAppProps) {
  const isEs = lang === "es";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroTrack = document.getElementById("top");

    const handleScroll = () => {
      if (!heroTrack) {
        setIsVisible(true);
        return;
      }

      // Check whether user has scrolled past the hero track (after LIMASYNC)
      const rect = heroTrack.getBoundingClientRect();
      // rect.bottom is distance to bottom of the hero track
      // When rect.bottom <= window.innerHeight * 0.65, user has completed hero and entered services
      const pastHero = rect.bottom <= window.innerHeight * 0.65;
      setIsVisible(pastHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const msg = isEs
    ? "Hola LimaSync Solutions, quiero solicitar información sobre sus servicios de software."
    : "Hello LimaSync Solutions, I want to request information about your software services.";

  const waUrl = getWhatsAppUrl(msg);
  const ariaLabel = isEs
    ? "Contactar directamente por WhatsApp al equipo de ingeniería"
    : "Contact engineering team directly via WhatsApp";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label={ariaLabel}
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 16 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 90,
          }}
        >
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#10b981",
              color: "#040814",
              padding: "12px 20px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 30px rgba(16, 185, 129, 0.4)",
              transition: "box-shadow 160ms ease, background-color 160ms ease",
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
              <span
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                }}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </span>
            <span>WhatsApp</span>
          </motion.a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
