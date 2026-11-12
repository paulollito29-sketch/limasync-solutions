"use client";

import React, { useState, useEffect, useRef } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface PricingSectionProps {
  lang?: "es" | "en";
}

interface PlanItem {
  id: string;
  num: string;
  badge: string;
  isPopular?: boolean;
  name: string;
  price: string;
  features: string[];
  btn: string;
  msg: string;
  mockupImage?: string;
}

export default function PricingSection({ lang = "es" }: PricingSectionProps) {
  const isEs = lang === "es";
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Scroll-pinned sequential rise from below (Obys Books Effect)
  const pricingTrackRef = useRef<HTMLElement>(null);
  const [pricingProgress, setPricingProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!pricingTrackRef.current) return;
      if (window.innerWidth <= 1024) {
        setPricingProgress(1);
        return;
      }
      const rect = pricingTrackRef.current.getBoundingClientRect();
      const trackH = pricingTrackRef.current.offsetHeight - window.innerHeight;
      if (trackH > 0) {
        const raw = (-rect.top + window.innerHeight * 0.14) / trackH;
        setPricingProgress(Math.min(Math.max(raw, 0), 1));
      } else {
        setPricingProgress(1);
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

  const plans: PlanItem[] = [
    {
      id: "web",
      num: "01",
      badge: "72 HORAS",
      isPopular: true,
      name: isEs ? "Web Corporativa" : "Corporate Web",
      price: "S/ 499",
      features: [
        isEs ? "Entrega en máximo 72 horas" : "Guaranteed 72-hour delivery",
        isEs ? "Diseño editorial a medida" : "Bespoke editorial design",
        isEs ? "Dominio .com propio y SSL" : ".com domain & SSL certificate",
        isEs ? "PageSpeed 99/100 garantizado" : "99/100 PageSpeed verified",
      ],
      btn: isEs ? "Iniciar con S/ 249.50" : "Start with S/ 249.50",
      msg: "Hola LimaSync, quiero cotizar el Plan Web Corporativa (S/ 499) con entrega en 72 horas.",
      mockupImage: "/images/clay-mockups/plan_clay_web.jpg",
    },
    {
      id: "tienda",
      num: "02",
      badge: "VENTAS 24/7",
      isPopular: false,
      name: isEs ? "Tienda Online" : "Online Store",
      price: "S/ 990",
      features: [
        isEs ? "Catálogo dinámico con variantes" : "Dynamic variant catalog",
        isEs ? "Pedidos directos a WhatsApp" : "Direct WhatsApp checkout",
        isEs ? "Control de stock en tiempo real" : "Live inventory tracking",
        isEs ? "Panel autogestionable ligero" : "Self-managed admin panel",
      ],
      btn: isEs ? "Iniciar con S/ 495.00" : "Start with S/ 495.00",
      msg: "Hola LimaSync, quiero cotizar el Plan Tienda Online (S/ 990).",
      mockupImage: "/images/clay-mockups/plan_clay_tienda.jpg",
    },
    {
      id: "erp",
      num: "03",
      badge: "MULTIALMACÉN",
      isPopular: false,
      name: isEs ? "Sistemas ERP / CRM" : "ERP / CRM Systems",
      price: "S/ 1,890",
      features: [
        isEs ? "Control de stock multialmacén" : "Multi-warehouse inventory control",
        isEs ? "Cotizaciones PDF al instante" : "Instant branded PDF quotes",
        isEs ? "CRM comercial y roles de usuario" : "Sales CRM & user roles",
        isEs ? "Base PostgreSQL + export Excel" : "Cloud PostgreSQL + Excel export",
      ],
      btn: isEs ? "Iniciar con S/ 945.00" : "Start with S/ 945.00",
      msg: "Hola LimaSync, quiero cotizar el Sistema ERP / CRM (Desde S/ 1,890).",
      mockupImage: "/images/clay-mockups/plan_clay_erp.jpg",
    },
    {
      id: "custom",
      num: "04",
      badge: "A MEDIDA",
      isPopular: false,
      name: isEs ? "Software & Apps" : "Custom Software & Apps",
      price: isEs ? "A medida" : "Bespoke",
      features: [
        isEs ? "Arquitectura directa con ingenieros" : "Direct engineer architecture",
        isEs ? "Prototipo interactivo en Figma" : "High-fidelity Figma prototype",
        isEs ? "Apps nativas iOS y Android" : "Native iOS/Android Flutter apps",
        isEs ? "Código fuente 100% a tu nombre" : "100% client code ownership",
      ],
      btn: isEs ? "Solicitar cotización técnica" : "Request technical quote",
      msg: "Hola LimaSync, quiero solicitar una cotización técnica para Software & Apps a Medida.",
      mockupImage: "/images/clay-mockups/plan_clay_mobile.jpg",
    },
  ];

  // Sequential reveal one-by-one from below as the user scrolls
  const getCardScrollStyle = (index: number) => {
    const start = 0.02 + index * 0.2;
    const end = start + 0.18;
    const raw = (pricingProgress - start) / (end - start);
    const clamped = Math.min(Math.max(raw, 0), 1);
    const eased = 1 - Math.pow(1 - clamped, 3);

    const translateY = (1 - eased) * 115;
    const opacity = clamped;
    const isVisible = clamped > 0.01;

    return {
      translateY,
      opacity,
      pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <section
      id="precios"
      ref={pricingTrackRef}
      className="pricing-scroll-track"
      aria-label={isEs ? "Planes y Precios" : "Plans and Pricing"}
    >
      <div className="pricing-sticky-viewport">
        {/* Editorial Section Header with Master Swiss Typography */}
        <div className="pricing-editorial-header">
          <div className="pricing-header-left">
            <h2 className="pricing-display-h2">
              {isEs ? "PLANES CLAROS" : "CLEAR PLANS"}
            </h2>
          </div>
        </div>

        {/* Monolithic Standing Columns Grid: Rising one by one from below on scroll */}
        <div className="obys-monolith-pricing-deck">
          {plans.map((p, idx) => {
            const { translateY, opacity, pointerEvents } = getCardScrollStyle(idx);

            return (
              <MonolithPlanCard
                key={p.id}
                plan={p}
                isActive={hoveredCardId === p.id}
                scrollTranslateY={translateY}
                scrollOpacity={opacity}
                pointerEvents={pointerEvents}
                onSelect={() => setHoveredCardId(p.id)}
                onDeselect={() => setHoveredCardId(null)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface MonolithPlanCardProps {
  plan: PlanItem;
  isActive: boolean;
  scrollTranslateY: number;
  scrollOpacity: number;
  pointerEvents: "auto" | "none";
  onSelect: () => void;
  onDeselect: () => void;
}

function MonolithPlanCard({
  plan,
  isActive,
  scrollTranslateY,
  scrollOpacity,
  pointerEvents,
  onSelect,
  onDeselect,
}: MonolithPlanCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 3;
    const rotY = ((x - centerX) / centerX) * 3;
    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    onDeselect();
  };

  const hoverLift = isActive ? -6 : 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onSelect}
      onMouseLeave={handleMouseLeave}
      className={`monolith-standing-card ${plan.isPopular ? "is-popular-monolith" : ""} ${
        isActive ? "is-elevated" : ""
      }`}
      style={{
        transform: `perspective(1000px) translate3d(0, calc(${scrollTranslateY}% + ${hoverLift}px), 0) rotateX(${
          isActive ? tilt.x : 0
        }deg) rotateY(${isActive ? tilt.y : 0}deg)`,
        opacity: scrollOpacity,
        pointerEvents,
        transition:
          "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.25s ease, opacity 0.2s ease",
      }}
    >
      {/* Head: Monolithic Index & Badge */}
      <div className="monolith-head">
        <span className="monolith-num">({plan.num})</span>
        <div className="monolith-badges">
          {plan.isPopular ? (
            <span className="monolith-star-badge">★ POPULAR 72H</span>
          ) : (
            <span className="monolith-type-badge">{plan.badge}</span>
          )}
        </div>
      </div>

      {/* Body: Title, Price, Mockup, Features */}
      <div className="monolith-body">
        <h3 className="monolith-title">{plan.name}</h3>

        <div className="monolith-price-row">
          <div className="monolith-price">{plan.price}</div>
        </div>

        {plan.mockupImage && (
          <div className="monolith-clay-preview">
            <img
              src={plan.mockupImage}
              alt={`${plan.name} Clay Mockup`}
              className="monolith-clay-img"
              loading="lazy"
              width="480"
              height="270"
            />
          </div>
        )}

        {/* Feature List */}
        <ul className="monolith-features">
          {plan.features.map((f, i) => (
            <li key={i} className="monolith-feature-item">
              <span className="monolith-check-icon" aria-hidden="true">✓</span>
              <span className="monolith-feature-text">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer: WhatsApp Direct Button */}
      <a
        href={getWhatsAppUrl(plan.msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="monolith-action-btn"
      >
        <span>{plan.btn}</span>
        <span className="monolith-action-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
