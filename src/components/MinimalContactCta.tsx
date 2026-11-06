"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface MinimalContactCtaProps {
  lang?: "es" | "en";
  email?: string;
}

const faqData = {
  es: {
    faqId: "preguntas",
    contactId: "contacto",
    faqHeading: "Preguntas reales",
    faqLead:
      "Todo lo que necesitas saber sobre tiempos de entrega, propiedad del código y el contrato 50/50 antes de iniciar.",
    items: [
      {
        q: "¿Cómo funciona exactamente el pago 50/50?",
        a: "Abonas el 50% al confirmar el alcance para registrar tu dominio .com y levantar el desarrollo. El 50% restante lo pagas únicamente cuando pruebas tu web o sistema funcionando en vivo y das tu conformidad.",
      },
      {
        q: "¿Qué pasa si no tengo textos ni fotografías listas?",
        a: "Nuestro equipo redacta la estructura comercial persuasiva de cada sección y prepara las piezas visuales de tu rubro para cumplir el plazo de 72 horas sin demoras.",
      },
      {
        q: "¿El dominio .com y el código fuente quedan a mi nombre?",
        a: "Sí. Al finalizar la entrega tienes la titularidad completa de tu dominio .com, accesos de administración y garantía técnica sobre todo el código desarrollado.",
      },
      {
        q: "¿Cómo se cotizan los proyectos de Dashboard, CRM y Bots?",
        a: "Evaluamos los requerimientos y procesos de tu negocio (canales de WhatsApp, volumen de prospectos, roles de usuario o integraciones) y te enviamos una propuesta técnica formal con presupuesto cerrado en pocas horas.",
      },
      {
        q: "¿Puedo escalar mi Web Express a un sistema más grande después?",
        a: "Por supuesto. Construimos sobre una arquitectura modular en Astro y React que permite añadir pasarelas de pago, catálogos dinámicos, CRM o paneles administrativos en cualquier momento.",
      },
    ],
    ctaHeading: "Inicia hoy con el 50%",
    ctaSub:
      "Escríbenos a limasync0@gmail.com con el rubro de tu negocio y recibe tu arquitectura en 10 minutos.",
    ctaWord: "COTIZAR",
    footerStatement:
      "Fácil, rápido, LimaSync. Webs de alto rendimiento, cartas digitales QR y automatización comercial en 72 horas.",
    footerLegal: "© 2026 LIMASYNC SOLUTIONS. Todos los derechos reservados.",
    footerNav: [
      { href: "#servicios", label: "Servicios" },
      { href: "#proceso", label: "Proceso 72h" },
      { href: "#precios", label: "Planes y Precios" },
      { href: "#preguntas", label: "Preguntas" },
      { href: "/en", label: "English Version" },
    ],
    cityTitle: "Sede operativa",
    cityName: "Lima, Perú",
    emailTitle: "Contacto directo",
    inviteText: "Escribir al equipo ahora",
  },
  en: {
    faqId: "faq",
    contactId: "contact",
    faqHeading: "Real questions",
    faqLead:
      "Everything you need to know about our 72-hour turnaround, code ownership, and the 50/50 milestone contract before starting.",
    items: [
      {
        q: "How does the 50/50 milestone payment work?",
        a: "You pay 50% upfront to register your custom .com domain and start development. The remaining 50% is paid only after you test your live website or digital system and approve delivery.",
      },
      {
        q: "What if I do not have copy or photographs ready?",
        a: "Our engineering and design team writes high-converting commercial copy and prepares visual assets tailored to your sector so we hit the 72-hour deadline.",
      },
      {
        q: "Do I own the .com domain and source code?",
        a: "Yes. Upon completion you receive full ownership of your .com domain, administrator credentials, and a complete source code warranty.",
      },
      {
        q: "How are custom Dashboard, CRM, and Bot projects quoted?",
        a: "We evaluate your business workflow (WhatsApp channels, lead volume, user permissions, and integrations) and send a formal technical proposal with a fixed budget within hours.",
      },
      {
        q: "Can I upgrade my Web Express site into a custom system later?",
        a: "Yes. We build on a modular Astro and React architecture that lets you add payment gateways, dynamic catalogs, CRM, or admin dashboards anytime.",
      },
    ],
    ctaHeading: "Start today with 50%",
    ctaSub:
      "Email us at limasync0@gmail.com with your business sector and receive your proposal in 10 minutes.",
    ctaWord: "LAUNCH",
    footerStatement:
      "Easy, fast, LimaSync. High-impact web platforms, interactive QR menus, and sales automation in 72 hours.",
    footerLegal: "© 2026 LIMASYNC SOLUTIONS. All rights reserved.",
    footerNav: [
      { href: "#services", label: "Services" },
      { href: "#process", label: "72h Process" },
      { href: "#pricing", label: "Plans & Pricing" },
      { href: "#faq", label: "Questions" },
      { href: "/", label: "Versión en Español" },
    ],
    cityTitle: "Operating base",
    cityName: "Lima, Peru",
    emailTitle: "Direct email",
    inviteText: "Message our engineering team",
  },
};

export default function MinimalContactCta({
  lang = "es",
  email = "limasync0@gmail.com",
}: MinimalContactCtaProps) {
  const isEs = lang === "es";
  const t = faqData[lang];
  const [limaTime, setLimaTime] = useState("UTC-5");

  // Contact form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [service, setService] = useState("Web Express (S/ 499)");
  const [preference, setPreference] = useState<"whatsapp" | "email">("whatsapp");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 960);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat(lang === "es" ? "es-PE" : "en-US", {
          timeZone: "America/Lima",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setLimaTime(`${formatted} PET (UTC-5)`);
      } catch {
        setLimaTime("UTC-5");
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(timer);
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      nombre: name,
      telefono_whatsapp: phone,
      email: emailVal,
      servicio_solicitado: service,
      preferencia_contacto: preference,
      detalles: message || "Sin detalles adicionales",
      _subject: `Nueva solicitud LimaSync: ${name} (${preference})`,
    };

    const waMsg = `Hola LimaSync Solutions, soy ${name}. Solicito cotización para: ${service}.${message ? ` Detalles: ${message}.` : ""}`;
    const waRedirectUrl = `https://wa.me/51906920958?text=${encodeURIComponent(waMsg)}`;

    try {
      const res = await fetch("https://formsubmit.co/ajax/limasync0@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        if (preference === "whatsapp") {
          window.open(waRedirectUrl, "_blank", "noopener,noreferrer");
        }
      } else {
        if (preference === "whatsapp") {
          window.open(waRedirectUrl, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = `mailto:${email}?subject=${encodeURIComponent(
            `Solicitud de ${name} - ${service}`
          )}&body=${encodeURIComponent(
            `Nombre: ${name}\nWhatsApp: ${phone}\nEmail: ${emailVal}\nServicio: ${service}\nPreferencia: ${preference}\nMensaje: ${message}`
          )}`;
        }
        setSuccess(true);
      }
    } catch {
      if (preference === "whatsapp") {
        window.open(waRedirectUrl, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          `Solicitud de ${name} - ${service}`
        )}&body=${encodeURIComponent(
          `Nombre: ${name}\nWhatsApp: ${phone}\nEmail: ${emailVal}\nServicio: ${service}\nPreferencia: ${preference}\nMensaje: ${message}`
        )}`;
      }
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    lang === "es"
      ? "Cotización de Proyecto en 72h - LimaSync Solutions"
      : "72h Project Quote - LimaSync Solutions"
  )}`;

  return (
    <>
      <section id={t.faqId} className="faq-chapter" data-chapter="sky">
        <div className="faq-grid">
          <motion.div
            className="faq-heading-col"
            initial={{ opacity: 0, x: isDesktop ? -50 : 0, y: isDesktop ? 0 : 32 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 style={{ fontSize: "var(--step-head)" }}>
              {t.faqHeading}
            </h2>
            <p>{t.faqLead}</p>
          </motion.div>

          <motion.div
            className="faq-stack-col"
            initial={{ opacity: 0, x: isDesktop ? 50 : 0, y: isDesktop ? 0 : 32 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.items.map((item, idx) => (
              <details
                key={idx}
                name="limasync-faq"
                className="faq-tile"
                open={idx === 0}
              >
                <summary className="faq-summary">
                  <span>{item.q}</span>
                  <span className="faq-plus" aria-hidden="true">
                    <span className="faq-bar-h" />
                    <span className="faq-bar-v" />
                  </span>
                </summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      <section id={t.contactId} className="contact-chapter" data-chapter="dark">
        <div className="contact-grid">
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: isDesktop ? -50 : 0, y: isDesktop ? 0 : 32 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 style={{ fontSize: "var(--step-head)", maxWidth: "12ch" }}>
              {isEs ? "Inicia hoy con el 50%" : "Start today with 50%"}
            </h2>
            <p style={{ fontSize: "var(--step-lead)", color: "#94a3b8" }}>
              {isEs
                ? "Completa tus datos (WhatsApp o Correo) y te enviaremos la propuesta técnica y cotización formal en menos de 10 minutos."
                : "Fill out your details (WhatsApp or Email) and we will send your technical proposal in under 10 minutes."}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "#38bdf8" }}>
                  <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
                <span>{isEs ? "50% de anticipo y 50% al verificar tu sistema" : "50% upfront and 50% upon verified delivery"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "#38bdf8" }}>
                  <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
                <span>{isEs ? "Entrega garantizada en máximo 72 horas" : "Guaranteed delivery in 72 hours maximum"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "#38bdf8" }}>
                  <path d="M4 12.5L9.5 18L20 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
                <span>{isEs ? "Dominio .com propio y código a tu nombre" : "Full ownership of source code and .com domain"}</span>
              </div>
            </div>

            <div style={{ marginTop: "16px", padding: "16px 20px", backgroundColor: "#111827" }}>
              <span style={{ fontSize: "0.85rem", color: "#94a3b8", display: "block", marginBottom: "4px" }}>
                {isEs ? "Correo directo del equipo de ingeniería" : "Direct engineering team email"}
              </span>
              <a href={mailHref} style={{ fontSize: "1.1rem", fontWeight: 700, color: "#38bdf8" }}>
                {email}
              </a>
            </div>

            <div style={{ marginTop: "12px" }}>
              <a
                href={getWhatsAppUrl(
                  isEs
                    ? "Hola LimaSync Solutions, quiero cotizar un proyecto"
                    : "Hello LimaSync Solutions, I want to quote a project"
                )}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#16a34a",
                  color: "#ffffff",
                  padding: "12px 18px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="18"
                  height="18"
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
                <span>{isEs ? "Abrir chat en WhatsApp" : "Open WhatsApp chat"}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: isDesktop ? 50 : 0, y: isDesktop ? 0 : 32 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {success ? (
              <div className="form-success-box">
                <h3 style={{ fontSize: "1.35rem", fontWeight: 900 }}>
                  {isEs ? "¡Solicitud recibida con éxito!" : "Request successfully received!"}
                </h3>
                <p>
                  {isEs
                    ? `Hemos registrado tus datos y te contactaremos a la brevedad con la cotización formal.`
                    : `We have logged your request and will contact you shortly with the proposal.`}
                </p>
                {preference === "whatsapp" && (
                  <a
                    href={`https://wa.me/51906920958?text=${encodeURIComponent(
                      `Hola LimaSync Solutions, acabo de enviar una cotización para: ${service} (${name || "Cliente"}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "#16a34a",
                      color: "#ffffff",
                      width: "fit-content",
                    }}
                  >
                    <span>{isEs ? "Continuar por WhatsApp ahora" : "Continue on WhatsApp now"}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="btn-dark"
                  style={{ alignSelf: "flex-start", marginTop: "8px" }}
                >
                  {isEs ? "Enviar otra consulta" : "Send another inquiry"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    {isEs ? "Nombre o empresa *" : "Name or company *"}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isEs ? "Ej. Carlos Mendoza / Cevichería El Puerto" : "e.g. Alex Smith / Acme Studio"}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    {isEs ? "WhatsApp o teléfono *" : "WhatsApp or phone *"}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={isEs ? "Tu número de WhatsApp o celular" : "Your phone or WhatsApp number"}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    {isEs ? "Correo electrónico *" : "Email address *"}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    placeholder={isEs ? "nombre@empresa.com" : "name@company.com"}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service" className="form-label">
                    {isEs ? "¿Qué servicio necesitas?" : "Which service do you need?"}
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="form-select"
                  >
                    <option value="Web Express (S/ 499)">{isEs ? "Web Express en 72h (S/ 499)" : "Web Express in 72h (S/ 499)"}</option>
                    <option value="Carta Digital QR (S/ 790)">{isEs ? "Carta Digital QR (S/ 790)" : "Interactive QR Menu (S/ 790)"}</option>
                    <option value="Dashboard, CRM & Bots (A cotizar)">{isEs ? "Dashboard, CRM y Bots (A cotizar)" : "Dashboard, CRM & Bots (Custom Quote)"}</option>
                    <option value="Cloud Care & Hosting (S/ 99/mes)">{isEs ? "Cloud Care & Hosting (S/ 99/mes)" : "Cloud Care & Hosting (S/ 99/mo)"}</option>
                    <option value="Proyecto a Medida">{isEs ? "Proyecto a medida / Otro" : "Custom system / Other"}</option>
                  </select>
                </div>

                <div className="form-group">
                  <span id="preference-label" className="form-label">
                    {isEs ? "¿Cómo prefieres que te contactemos?" : "How should we contact you?"}
                  </span>
                  <div
                    role="radiogroup"
                    aria-labelledby="preference-label"
                    className="form-toggle-row"
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={preference === "whatsapp"}
                      data-active={preference === "whatsapp" ? "true" : "false"}
                      onClick={() => setPreference("whatsapp")}
                      className="form-toggle-btn"
                    >
                      {isEs ? "Prefiero WhatsApp" : "Prefer WhatsApp"}
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={preference === "email"}
                      data-active={preference === "email" ? "true" : "false"}
                      onClick={() => setPreference("email")}
                      className="form-toggle-btn"
                    >
                      {isEs ? "Prefiero Correo" : "Prefer Email"}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-msg" className="form-label">
                    {isEs ? "Detalles del proyecto (opcional)" : "Project details (optional)"}
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isEs ? "Cuéntanos sobre tu negocio, rubro o plazo deseado..." : "Tell us about your business, timeline, or requirements..."}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-action"
                  style={{ width: "100%", padding: "16px", fontSize: "1.05rem", justifyContent: "center" }}
                >
                  <span>
                    {submitting
                      ? (isEs ? "Enviando..." : "Sending...")
                      : (isEs ? "Enviar" : "Send")}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section data-chapter="dark">
        <motion.a
          href={mailHref}
          className="cta-band-link"
          initial={{ opacity: 0, y: 44, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-top-row">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 style={{ fontSize: "var(--step-subhead)", fontWeight: 900 }}>
                {t.ctaHeading}
              </h2>
              <p style={{ maxWidth: "48ch" }}>{t.ctaSub}</p>
            </div>

            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
              />
            </svg>
          </div>

          <span className="cta-giant-word">{t.ctaWord}</span>
        </motion.a>
      </section>

      <motion.footer
        className="footer-board"
        data-chapter="paper"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-tile ft-statement">
          <p style={{ fontSize: "var(--step-body)", fontWeight: 700, lineHeight: 1.35 }}>
            {t.footerStatement}
          </p>
          <span style={{ fontSize: "var(--step-small)" }}>{t.footerLegal}</span>
        </div>

        <nav className="footer-tile ft-nav" aria-label="Footer navigation">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {t.footerNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ fontSize: "var(--step-body)", fontWeight: 700 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-tile ft-city">
          <span style={{ fontSize: "var(--step-small)", fontWeight: 700 }}>
            {t.cityTitle}
          </span>
          <div>
            <div style={{ fontSize: "var(--step-lead)", fontWeight: 900 }}>
              {t.cityName}
            </div>
            <div style={{ fontSize: "var(--step-small)", marginTop: "4px" }}>
              {limaTime}
            </div>
          </div>
        </div>

        <div className="footer-tile ft-email">
          <span style={{ fontSize: "var(--step-small)", fontWeight: 700 }}>
            {t.emailTitle}
          </span>
          <a
            href={mailHref}
            style={{
              fontSize: "var(--step-lead)",
              fontWeight: 900,
              wordBreak: "break-all",
            }}
          >
            {email}
          </a>
        </div>

        <div className="footer-tile ft-wordmark">
          <span className="ft-wordmark-text">LIMASYNC</span>
        </div>

        <a
          href={getWhatsAppUrl(
            isEs
              ? "Hola LimaSync Solutions, quiero iniciar una conversación directa para mi proyecto en 72 horas."
              : "Hello LimaSync Solutions, I want to start a project in 72 hours."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-tile ft-invite"
        >
          <span style={{ fontSize: "var(--step-subhead)", fontWeight: 900, lineHeight: 1.1 }}>
            {t.inviteText}
          </span>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </a>
      </motion.footer>
    </>
  );
}
