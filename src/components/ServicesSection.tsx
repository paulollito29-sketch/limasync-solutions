"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ServicesSectionProps {
  lang?: "es" | "en";
}

export default function ServicesSection({ lang = "es" }: ServicesSectionProps) {
  const isEs = lang === "es";

  // State for which service is currently focused in the sticky left panel
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  const servicesData = [
    {
      id: "webs",
      num: "01",
      name: isEs ? "Webs Corporativas & Landings" : "Corporate Websites & Landings",
      shortName: isEs ? "Webs Corporativas" : "Corporate Websites",
      grid: "12 Columns",
      delivery: "72 Horas",
      speed: "99/100 PageSpeed",
      investment: "S/ 499.00",
      step1Title: isEs ? "Estructura y Prototipo" : "Structure & Prototype",
      step1Desc: isEs ? "Definimos la jerarquía visual de conversión en 24h sin plantillas." : "Visual conversion hierarchy built in 24 hours.",
      step2Title: isEs ? "Desarrollo 99/100" : "99/100 Development",
      step2Desc: isEs ? "Astro 5 + SSR estático para cargar en menos de 0.6 segundos." : "Astro 5 + static SSR for sub-second loading speeds.",
      notes: isEs
        ? "(1)Puedes usar un diseño web sin plantillas pesadas de WordPress. (2)Optimizamos el código fuente para Google PageSpeed 99/100. (3)Garantía de saldo cancelado únicamente contra total conformidad en tu dominio."
        : "(1)Bespoke engineering without slow templates. (2)Google PageSpeed 99/100 guaranteed. (3)50% balance paid upon verified production delivery.",
      cta: isEs ? "Iniciar Web Corporativa (S/ 499)" : "Start Corporate Web (S/ 499)",
      msg: "Hola LimaSync, quiero cotizar el Plan Web Corporativa (S/ 499).",
      image: "/images/clay-mockups/plan_clay_web.jpg",
      imageAlt: "Clay Mockup Laptop Web Corporativa LimaSync",
      tech: ["Astro 5", "TypeScript", "99/100 Speed", "72h SLA"],
    },
    {
      id: "tiendas",
      num: "02",
      name: isEs ? "Tiendas Online & E-commerce" : "Online Stores & E-commerce",
      shortName: isEs ? "Tiendas Online" : "E-commerce Stores",
      grid: "Golden Canon",
      delivery: "5 a 7 Días",
      speed: "Ventas 24/7",
      investment: "S/ 990.00",
      step1Title: isEs ? "Catálogo y Stock" : "Catalog & Stock",
      step1Desc: isEs ? "Variantes dinámicas con tallas, colores y precios mayoristas." : "Dynamic variants with sizes, colors, and wholesale prices.",
      step2Title: isEs ? "Checkout Directo" : "Direct Checkout",
      step2Desc: isEs ? "Flujo ágil de compra optimizado por web y WhatsApp." : "Streamlined web and WhatsApp order checkout flow.",
      notes: isEs
        ? "(1)El inventario se descuenta solo con cada compra confirmada. (2)Alertas automáticas de venta directo al WhatsApp de tu negocio. (3)Capacitación en vivo para tu equipo."
        : "(1)Real-time automatic stock decrement. (2)Instant WhatsApp order alerts. (3)Live training for your staff.",
      cta: isEs ? "Iniciar Tienda Online (S/ 990)" : "Start Online Store (S/ 990)",
      msg: "Hola LimaSync, quiero cotizar el Plan Tienda Online (S/ 990).",
      image: "/images/clay-mockups/plan_clay_tienda.jpg",
      imageAlt: "Clay Mockup Tablet E-commerce Store LimaSync",
      tech: ["Catálogo 24/7", "Stock en Vivo", "Checkout Web", "Ventas 24/7"],
    },
    {
      id: "erp",
      num: "03",
      name: isEs ? "Sistemas de Gestión: ERP y CRM" : "Management Systems: ERP & CRM",
      shortName: isEs ? "Sistemas ERP & CRM" : "ERP & CRM Systems",
      grid: "Modular Matrix",
      delivery: "Sprints Quincenales",
      speed: "Multialmacén",
      investment: "Desde S/ 1,890",
      step1Title: isEs ? "Mapeo de Inventarios" : "Inventory Mapping",
      step1Desc: isEs ? "Centralización de bodegas y stock para reemplazar hojas de Excel." : "Multi-warehouse centralization to replace fragile spreadsheets.",
      step2Title: isEs ? "Cotizaciones en PDF" : "PDF Quotes & Roles",
      step2Desc: isEs ? "Permisos granulares por usuario y exportación en 1 clic." : "Granular user roles and 1-click exports.",
      notes: isEs
        ? "(1)El control de almacén mantiene tus costos y existencias cuadradas al milímetro. (2)Tus vendedores generan cotizaciones con membrete en segundos. (3)Migración asistida de tus archivos actuales."
        : "(1)Precise multi-warehouse inventory tracking. (2)Professional PDF quotes in seconds. (3)Assisted data migration.",
      cta: isEs ? "Iniciar ERP / CRM (Desde S/ 1,890)" : "Start ERP / CRM (From S/ 1,890)",
      msg: "Hola LimaSync, quiero cotizar el Sistema ERP / CRM (Desde S/ 1,890).",
      image: "/images/clay-mockups/plan_clay_erp.jpg",
      imageAlt: "Clay Mockup Monitor ERP CRM Dashboard LimaSync",
      tech: ["Control Multi-sede", "Cotizaciones PDF", "Roles de Usuario", "PostgreSQL"],
    },
    {
      id: "apps",
      num: "04",
      name: isEs ? "Apps Móviles (iOS y Android)" : "Mobile Apps (iOS & Android)",
      shortName: isEs ? "Apps Móviles" : "Mobile Apps",
      grid: "Fluid Grid",
      delivery: "Sprints Ágiles",
      speed: "60 FPS Nativo",
      investment: "A Cotización",
      step1Title: isEs ? "UX Táctil Adaptativa" : "Adaptive Touch UX",
      step1Desc: isEs ? "Diseño ergonómico para navegación fluida con una sola mano." : "Ergonomic single-hand mobile interactions.",
      step2Title: isEs ? "Sincronización Offline" : "Offline Synchronization",
      step2Desc: isEs ? "Operarios de campo registran pedidos aún sin señal de internet." : "Field teams capture data even without internet access.",
      notes: isEs
        ? "(1)Una sola arquitectura Flutter / React Native para ahorrar 40% en costos. (2)Integración con cámara para escáner QR y geolocalización GPS. (3)Publicación oficial en App Store y Google Play."
        : "(1)Unified Flutter codebase saves 40% in maintenance. (2)Camera QR scanner and GPS routes. (3)App Store & Google Play publishing.",
      cta: isEs ? "Cotizar App Móvil" : "Quote Mobile App",
      msg: "Hola LimaSync, quiero cotizar una App Móvil para iOS y Android.",
      image: "/images/clay-mockups/plan_clay_mobile.jpg",
      imageAlt: "Clay Mockup Smartphones Mobile App LimaSync",
      tech: ["Flutter / React Native", "iOS & Android", "Offline Sync", "GPS & QR"],
    },
    {
      id: "medida",
      num: "05",
      name: isEs ? "Software a Medida" : "Custom Software Engineering",
      shortName: isEs ? "Software a Medida" : "Custom Software",
      grid: "Bespoke Canon",
      delivery: "Roadmap Ágil",
      speed: "Cloud Dedicado",
      investment: "Presupuesto Cerrado",
      step1Title: isEs ? "Levantamiento Técnico" : "Technical Discovery",
      step1Desc: isEs ? "Reunión directa con ingenieros para definir alcance sin ambigüedades." : "Direct engineering consultation with fixed milestones.",
      step2Title: isEs ? "Entregables por Sprints" : "Sprint Deliverables",
      step2Desc: isEs ? "Pruebas operativas cada 15 días sobre servidor privado." : "Bi-weekly operational releases on private staging.",
      notes: isEs
        ? "(1)Código fuente 100% transferido a tu empresa sin candados de permanencia. (2)Bases de datos dedicadas PostgreSQL y microservicios. (3)Garantía contractual de entrega y soporte técnico."
        : "(1)100% intellectual property and code transfer. (2)Dedicated PostgreSQL cloud backends. (3)Contractual delivery guarantees.",
      cta: isEs ? "Solicitar Diagnóstico Técnico" : "Request Technical Diagnostic",
      msg: "Hola LimaSync, quiero solicitar un diagnóstico para Software a Medida.",
      image: "/images/clay-mockups/clay_mockup_custom.jpg",
      imageAlt: "Clay Mockup Multi-Device Ecosystem Software a Medida LimaSync",
      tech: ["Microservicios", "PostgreSQL", "Docker Cloud", "IP 100% Cliente"],
    },
  ];

  const currentService = servicesData[activeServiceIdx];

  // Smooth scroll to a project card
  const scrollToProject = (id: string, idx: number) => {
    setActiveServiceIdx(idx);
    const targetEl = document.getElementById(`project-${id}`);
    if (targetEl) {
      const navOffset = 60;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  // Auto-update active index on intersection during scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveServiceIdx(index);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: "-10% 0px -40% 0px" }
    );

    const cards = document.querySelectorAll(".project-card-row");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="services-master-wrapper" aria-label="Nuestros 5 servicios de software">
      {/* =========================================================================
          2-COLUMN SPLIT SCREEN: STICKY METADATA + SCROLLING CLAY MOCKUPS
          Exact Obys Layout (Frames 016, 018, 022, 028)
      ========================================================================= */}
      <div className="obys-split-container">
        {/* =========================================================================
            LEFT COLUMN: Sticky Pinned Panel with Enhanced Animations
        ========================================================================= */}
        <aside className="split-left-pinned">
          <div className="pinned-content-body">
            {/* Top Metadata with Animated Name and Number */}
            <div className="pinned-top-meta">
              <div className="pinned-title-row">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="service-dot-name"
                  >
                    <span className="service-dot" aria-hidden="true" />
                    <span>{currentService.name}</span>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentService.num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="service-index-mono"
                  >
                    ({currentService.num})
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Technical Spec Table: Clean 3-row layout without clutter */}
            <table className="pinned-spec-table">
              <tbody>
                <tr>
                  <td>Plazo de Entrega</td>
                  <td>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentService.delivery}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.18 }}
                        className="spec-highlight-delivery"
                      >
                        {currentService.delivery}
                      </motion.span>
                    </AnimatePresence>
                  </td>
                </tr>
                <tr>
                  <td>Rendimiento</td>
                  <td>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentService.speed}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.18 }}
                        className="spec-highlight-speed"
                      >
                        {currentService.speed}
                      </motion.span>
                    </AnimatePresence>
                  </td>
                </tr>
                <tr>
                  <td>Inversión</td>
                  <td>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentService.investment}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.18 }}
                        className="spec-highlight-investment"
                      >
                        {currentService.investment}
                      </motion.span>
                    </AnimatePresence>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Core Modules Stack with Clean Swiss Typography */}
            <div className="pinned-modules-stack">
              <div className="pinned-module-item">
                <span className="module-tag-mono">[Módulo 01]</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.step1Title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <h3 className="module-title-clean">{currentService.step1Title}</h3>
                    <p className="module-desc-clean">{currentService.step1Desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pinned-module-item">
                <span className="module-tag-mono">[Módulo 02]</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.step2Title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <h3 className="module-title-clean">{currentService.step2Title}</h3>
                    <p className="module-desc-clean">{currentService.step2Desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Clean Structured Notes List (Eliminates wall of legal text) */}
            <div className="pinned-editorial-notes">
              <span className="notes-tag-mono">(GARANTÍAS & CONTROL)</span>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={currentService.notes}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pinned-notes-list"
                >
                  {currentService.notes
                    .split(/\(\d\)/)
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .map((item, idx) => (
                      <li key={idx} className="pinned-note-item">
                        <span className="note-dash">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>

          {/* Action Button */}
          <div className="pinned-action-box">
            <motion.a
              href={getWhatsAppUrl(currentService.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="pinned-cta-btn"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentService.cta}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.16 }}
                >
                  💬 {currentService.cta}
                </motion.span>
              </AnimatePresence>
              <span aria-hidden="true">↗</span>
            </motion.a>
          </div>
        </aside>

        {/* =========================================================================
            RIGHT COLUMN: Scrolling Project Frames with Smooth Reveal & Clay Mockups
        ========================================================================= */}
        <main className="split-right-scroll">
          {servicesData.map((service, index) => {
            const isActive = activeServiceIdx === index;

            return (
              <motion.div
                key={service.id}
                id={`project-${service.id}`}
                data-index={index}
                className={`project-card-row ${isActive ? "card-active" : ""}`}
                onMouseEnter={() => setActiveServiceIdx(index)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Project Card Header with Active Pulse Dot */}
                <div className="project-card-header">
                  <div className="project-header-left">
                    <span className="project-header-num">({service.num})</span>
                    <span className="project-header-title">{service.name}</span>
                  </div>
                </div>

                {/* Project Card Body with Clay Mockup Image & Tactile Physics */}
                <div className="project-card-body">
                  <div className="clay-mockup-frame">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="clay-mockup-img"
                      loading={index === 0 ? "eager" : "lazy"}
                      width="1920"
                      height="1080"
                    />

                    {/* Subtle Clay Bezel Glow Effect on Hover */}
                    <div className="clay-rim-glow" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </main>
      </div>
    </section>
  );
}
