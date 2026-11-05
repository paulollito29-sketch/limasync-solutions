"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  lang?: "es" | "en";
}

const chapters = {
  es: [
    {
      id: "web-express",
      theme: "dark" as const,
      className: "showcase-chapter showcase-dark",
      title: "Web Express en 72 horas",
      lead: "Presencia comercial de alta velocidad para empresas, estudios y comercios que necesitan captar pedidos y consultas por WhatsApp desde el primer día.",
      bullets: [
        "Arquitectura Astro de carga instantánea en móviles y escritorio",
        "Dominio .com propio por un año y certificado SSL configurado",
        "Flujo de conversión directa con mensajes prearmados de venta",
      ],
      cta: "Cotizar Web Express (S/ 499)",
      href: "#precios",
      images: [
        {
          src: "/images/hero_mockup.webp",
          alt: "Vista móvil y escritorio de sitio Web Express",
          w: 960,
          h: 720,
        },
        {
          src: "/images/hero_web_showcase.webp",
          alt: "Diseño de interfaz web corporativa en Lima",
          w: 960,
          h: 720,
        },
      ],
    },
    {
      id: "carta-pos",
      theme: "sand" as const,
      className: "showcase-chapter showcase-sand",
      title: "Carta Digital QR",
      lead: "Menú interactivo moderno para restaurantes, cafeterías, sangucherías y dark kitchens en Lima. Tus comensales escanean en mesa y el pedido se gestiona sin intermediarios.",
      bullets: [
        "Carta interactiva autoadministrable para cambiar platos y precios en un clic",
        "Recepción de pedidos de salón, recojo y delivery sin pagar comisiones",
        "Códigos QR listos para impresión en acrílicos de mesa y empaques",
      ],
      cta: "Cotizar Carta Digital QR (S/ 790)",
      href: "#precios",
      images: [
        {
          src: "/images/service_restaurant_pos.webp",
          alt: "Carta digital QR interactiva para restaurantes en Lima",
          w: 1200,
          h: 900,
        },
      ],
    },
    {
      id: "dashboards-bots",
      theme: "sky" as const,
      className: "showcase-chapter showcase-sky",
      title: "Dashboards, CRM y bots 24/7",
      lead: "Software empresarial a medida para gestión de prospectos en CRM, centralizar inventarios, reportes en vivo y atención inteligente por WhatsApp sin hojas manuales.",
      bullets: [
        "CRM comercial integrado con WhatsApp para seguimiento de ventas y prospectos",
        "Paneles y dashboards en tiempo real con roles y permisos por usuario",
        "Bots de WhatsApp y flujos de automatización conectados a bases de datos y webhooks",
      ],
      cta: "Cotizar Dashboard, CRM y Bots (A medida)",
      href: "#precios",
      images: [
        {
          src: "/images/service_dashboard.webp",
          alt: "Panel de control de métricas operativas y CRM en tiempo real",
          w: 960,
          h: 720,
        },
        {
          src: "/images/service_automation_bot.webp",
          alt: "Flujo de automatización, CRM y bot de atención comercial 24/7",
          w: 960,
          h: 720,
        },
      ],
    },
  ],
  en: [
    {
      id: "web-express",
      theme: "dark" as const,
      className: "showcase-chapter showcase-dark",
      title: "Web Express in 72 hours",
      lead: "High-velocity commercial web presence for businesses and studios that need to capture leads and WhatsApp orders from day one.",
      bullets: [
        "Instant-loading Astro architecture across mobile and desktop",
        "Custom .com domain for one year and configured SSL security",
        "Direct conversion flow with pre-filled sales messages",
      ],
      cta: "Quote Web Express (S/ 499)",
      href: "#pricing",
      images: [
        {
          src: "/images/hero_mockup.webp",
          alt: "Mobile and desktop view of Web Express site",
          w: 960,
          h: 720,
        },
        {
          src: "/images/hero_web_showcase.webp",
          alt: "Corporate web interface design in Lima",
          w: 960,
          h: 720,
        },
      ],
    },
    {
      id: "carta-pos",
      theme: "sand" as const,
      className: "showcase-chapter showcase-sand",
      title: "Digital QR Menu",
      lead: "Modern interactive menu for restaurants, cafes, and dark kitchens in Lima. Guests scan at the table and orders are placed without third-party fees.",
      bullets: [
        "Self-managed interactive menu to update dishes and prices in one click",
        "Dine-in, pickup, and delivery order routing with zero commissions",
        "Print-ready table QR codes for acrylic stands and packaging",
      ],
      cta: "Quote Digital QR Menu (S/ 790)",
      href: "#pricing",
      images: [
        {
          src: "/images/service_restaurant_pos.webp",
          alt: "Interactive digital QR menu for restaurants in Lima",
          w: 1200,
          h: 900,
        },
      ],
    },
    {
      id: "dashboards-bots",
      theme: "sky" as const,
      className: "showcase-chapter showcase-sky",
      title: "Dashboards, CRM and 24/7 bots",
      lead: "Custom business software for CRM lead tracking, inventory management, live reporting, and automated WhatsApp workflows.",
      bullets: [
        "Commercial CRM wired with WhatsApp for sales and lead tracking",
        "Real-time admin portals with role-based user permissions",
        "WhatsApp bots and automated workflows connected to databases and webhooks",
      ],
      cta: "Quote Dashboard, CRM & Bots (Custom)",
      href: "#pricing",
      images: [
        {
          src: "/images/service_dashboard.webp",
          alt: "Real-time operational metrics and CRM dashboard",
          w: 960,
          h: 720,
        },
        {
          src: "/images/service_automation_bot.webp",
          alt: "Automation workflow, CRM, and 24/7 commercial bot",
          w: 960,
          h: 720,
        },
      ],
    },
  ],
};

export default function ServicesSection({ lang = "es" }: ServicesSectionProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 960);
  }, []);

  const list = chapters[lang];
  const sectionId = lang === "es" ? "servicios" : "services";

  return (
    <div id={sectionId}>
      {list.map((ch) => (
        <section
          key={ch.id}
          className={ch.className}
          data-chapter={ch.theme}
        >
          <div className="showcase-grid">
            <motion.div
              className="showcase-copy-col"
              initial={{ opacity: 0, x: isDesktop ? -52 : 0, y: isDesktop ? 0 : 36 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="showcase-title">
                {ch.title}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p>{ch.lead}</p>

                <ul className="showcase-Feature-list">
                  {ch.bullets.map((b, i) => (
                    <li key={i} className="showcase-Feature-item">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M4 12.5L9.5 18L20 6.5"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="square"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a href={ch.href} className="btn-action">
                  <span>{ch.cta}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              className={
                ch.images.length > 1 ? "showcase-media-col" : "showcase-media-single"
              }
              initial={{ opacity: 0, x: isDesktop ? 52 : 0, y: isDesktop ? 0 : 36 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch.images.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="showcase-portrait"
                />
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
