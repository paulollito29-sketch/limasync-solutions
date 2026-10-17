"use client";

import React, { useState } from "react";

export default function BusinessCards() {
  // Theme: 'dark' (Executive Dark) or 'light' (Editorial Paper)
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Mode: 'sheet' (A4 Sheet 10 cards) or 'individual' (Imprenta con sangría)
  const [mode, setMode] = useState<"sheet" | "individual">("sheet");

  // Print face: 'both' | 'front' | 'back'
  const [printFace, setPrintFace] = useState<"both" | "front" | "back">("both");

  // QR destination: 'web' | 'wa'
  const [qrDest, setQrDest] = useState<"web" | "wa">("web");

  // Drawer / editor toggled
  const [showEditor, setShowEditor] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // Editable Card Data (Defaults to Institutional Brand)
  const [cardData, setCardData] = useState({
    brand: "LIMASYNC SOLUTIONS",
    tagline: "Ingeniería de Sistemas & Soluciones Digitales",
    badge: "DESARROLLO EXPRESS 72H",
    slogan: "Sitios Web · Software a Medida · Automatización de Procesos",
    phone: "+51 906 920 958",
    email: "limasync0@gmail.com",
    website: "www.limasync.com",
    location: "Lima, Perú · San Isidro · Miraflores · Remoto",
    services: [
      "Desarrollo Web Express en 72 Horas",
      "Software & Dashboards a Medida",
      "Automatización de Flujos & Notificaciones",
      "Sistemas POS & Carta Digital QR",
    ],
  });

  const resetData = () => {
    setCardData({
      brand: "LIMASYNC SOLUTIONS",
      tagline: "Ingeniería de Sistemas & Soluciones Digitales",
      badge: "DESARROLLO EXPRESS 72H",
      slogan: "Sitios Web · Software a Medida · Automatización de Procesos",
      phone: "+51 906 920 958",
      email: "limasync0@gmail.com",
      website: "www.limasync.com",
      location: "Lima, Perú · San Isidro · Miraflores · Remoto",
      services: [
        "Desarrollo Web Express en 72 Horas",
        "Software & Dashboards a Medida",
        "Automatización de Flujos & Notificaciones",
        "Sistemas POS & Carta Digital QR",
      ],
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // Select QR SVG path based on theme and destination
  const getQrSrc = (dest: "web" | "wa", forceTheme?: "dark" | "light") => {
    const activeTheme = forceTheme || theme;
    if (dest === "web") {
      return activeTheme === "dark" ? "/images/qr-web-light.svg" : "/images/qr-web-dark.svg";
    }
    return activeTheme === "dark" ? "/images/qr-wa-light.svg" : "/images/qr-wa-dark.svg";
  };

  // Single Card Component (Anverso / Front)
  const CardFront = ({ overrideTheme, isPrint }: { overrideTheme?: "dark" | "light"; isPrint?: boolean }) => {
    const t = overrideTheme || theme;
    const isDark = t === "dark";

    return (
      <div className={`card card-front ${isDark ? "theme-dark" : "theme-light"}`}>
        {/* Subtle Decorative Grid Pattern */}
        <div className="card-bg-grid" aria-hidden="true" />

        <div className="card-inner">
          {/* Top Row: Meta Kicker & Status Badge */}
          <div className="front-top">
            <span className="card-kicker">INGENIERÍA & SOFTWARE</span>
            <span className="card-badge">
              <span className="pulse-dot" />
              {cardData.badge}
            </span>
          </div>

          {/* Center: Main Logo & Identity */}
          <div className="front-center">
            <div className="card-logo-lockup">
              <div className="card-logo-mark" aria-hidden="true" />
              <div className="card-brand-group">
                <span className="card-brand-name">{cardData.brand}</span>
                <span className="card-brand-sub">{cardData.tagline}</span>
              </div>
            </div>
            <p className="card-slogan">{cardData.slogan}</p>
          </div>

          {/* Bottom Row: Web, Coverage & QR Code */}
          <div className="front-bottom">
            <div className="front-bottom-meta">
              <span className="front-url">{cardData.website}</span>
              <span className="front-loc">{cardData.location}</span>
            </div>

            <div className="card-qr-box">
              <img
                src={getQrSrc(qrDest, t)}
                alt="QR LimaSync"
                className="card-qr-img"
                width="48"
                height="48"
              />
              <span className="qr-caption">{qrDest === "web" ? "ESCANEAR WEB" : "WHATSAPP"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Single Card Component (Reverso / Back)
  const CardBack = ({ overrideTheme, isPrint }: { overrideTheme?: "dark" | "light"; isPrint?: boolean }) => {
    const t = overrideTheme || theme;
    const isDark = t === "dark";

    return (
      <div className={`card card-back ${isDark ? "theme-dark" : "theme-light"}`}>
        <div className="card-bg-grid" aria-hidden="true" />

        <div className="card-inner">
          {/* Back Top Bar */}
          <div className="back-top">
            <div className="back-logo-mini">
              <span className="card-logo-mark mini" aria-hidden="true" />
              <span className="back-brand-title">{cardData.brand}</span>
            </div>
            <span className="back-tagline">CONSULTORÍA & DESARROLLO WEB</span>
          </div>

          {/* Back Body: 2 Columns */}
          <div className="back-grid">
            {/* Column 1: Core Services */}
            <div className="back-col-services">
              <span className="col-label">SOLUCIONES DIGITALES</span>
              <ul className="service-list">
                {cardData.services.map((svc, i) => (
                  <li key={i}>
                    <span className="svc-bullet">0{i + 1}</span>
                    <span className="svc-text">{svc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Direct Contact & WhatsApp QR */}
            <div className="back-col-contact">
              <span className="col-label">ATENCIÓN DIRECTA</span>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">WA</span>
                  <span className="contact-val">{cardData.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">MAIL</span>
                  <span className="contact-val">{cardData.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">WEB</span>
                  <span className="contact-val">{cardData.website}</span>
                </div>
              </div>

              <div className="back-qr-group">
                <img
                  src={getQrSrc("wa", t)}
                  alt="WhatsApp QR"
                  className="card-qr-img small"
                  width="44"
                  height="44"
                />
                <span className="qr-caption">WHATSAPP DIRECTO</span>
              </div>
            </div>
          </div>

          {/* Back Footer Line */}
          <div className="back-bottom">
            <span>{cardData.location}</span>
            <span className="guarantee-text">Garantía de Entrega 72 Horas</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tarjetas-container">
      {/* ============================================================ */}
      {/* 1. TOP TOOLBAR & CONTROLS (Hidden during printing)           */}
      {/* ============================================================ */}
      <aside className="toolbar no-print">
        <div className="toolbar-wrap">
          {/* Brand header & Back Link */}
          <div className="toolbar-header">
            <a href="/" className="back-btn" title="Volver al inicio">
              ← Volver al sitio
            </a>
            <div className="toolbar-title-wrap">
              <h1 className="toolbar-title">Tarjetas de Presentación</h1>
              <span className="toolbar-subtitle">
                LIMASYNC SOLUTIONS · Formato 90 × 50 mm · Alta Resolución Vectorial
              </span>
            </div>
          </div>

          {/* Control Group 1: Aesthetic Theme */}
          <div className="controls-row">
            <div className="control-group">
              <span className="control-label">ESTILO:</span>
              <div className="btn-toggle-group">
                <button
                  type="button"
                  className={`btn-toggle ${theme === "dark" ? "active" : ""}`}
                  onClick={() => setTheme("dark")}
                >
                  <span className="theme-dot dot-dark" />
                  Dark Executive
                </button>
                <button
                  type="button"
                  className={`btn-toggle ${theme === "light" ? "active" : ""}`}
                  onClick={() => setTheme("light")}
                >
                  <span className="theme-dot dot-light" />
                  Light Paper
                </button>
              </div>
            </div>

            {/* Control Group 2: Print Mode */}
            <div className="control-group">
              <span className="control-label">FORMATO:</span>
              <div className="btn-toggle-group">
                <button
                  type="button"
                  className={`btn-toggle ${mode === "sheet" ? "active" : ""}`}
                  onClick={() => setMode("sheet")}
                >
                  📄 Hoja A4 (10 Tarjetas para recortar)
                </button>
                <button
                  type="button"
                  className={`btn-toggle ${mode === "individual" ? "active" : ""}`}
                  onClick={() => setMode("individual")}
                >
                  🎯 Individual con Sangría (Imprenta)
                </button>
              </div>
            </div>

            {/* Control Group 3: Face Selection */}
            <div className="control-group">
              <span className="control-label">CARAS:</span>
              <div className="btn-toggle-group">
                <button
                  type="button"
                  className={`btn-toggle ${printFace === "both" ? "active" : ""}`}
                  onClick={() => setPrintFace("both")}
                >
                  Ambas Caras
                </button>
                <button
                  type="button"
                  className={`btn-toggle ${printFace === "front" ? "active" : ""}`}
                  onClick={() => setPrintFace("front")}
                >
                  Solo Anverso
                </button>
                <button
                  type="button"
                  className={`btn-toggle ${printFace === "back" ? "active" : ""}`}
                  onClick={() => setPrintFace("back")}
                >
                  Solo Reverso
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="toolbar-actions">
            <button
              type="button"
              className="btn-print"
              onClick={handlePrint}
              title="Abre el menú de impresión de tu navegador"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Imprimir / Guardar en PDF</span>
            </button>

            <button
              type="button"
              className={`btn-secondary ${showEditor ? "active" : ""}`}
              onClick={() => setShowEditor(!showEditor)}
            >
              ⚙️ {showEditor ? "Ocultar Editor" : "Editar Datos en Vivo"}
            </button>

            <button
              type="button"
              className={`btn-secondary ${showTips ? "active" : ""}`}
              onClick={() => setShowTips(!showTips)}
            >
              💡 Consejos de Imprenta
            </button>
          </div>

          {/* Tips Accordion */}
          {showTips && (
            <div className="tips-panel">
              <h4>Recomendaciones para una Impresión Profesional</h4>
              <div className="tips-grid">
                <div className="tip-box">
                  <strong>1. En la ventana de impresión (Ctrl + P):</strong>
                  <p>
                    Selecciona tamaño de papel <b>A4</b>, escala al <b>100%</b> (sin ajustar a página) y marca la casilla obligatoria <b>"Gráficos de fondo"</b> para que se impriman los fondos oscuros o satinados.
                  </p>
                </div>
                <div className="tip-box">
                  <strong>2. Tipo de Papel Recomendado:</strong>
                  <p>
                    Papel Couché de <b>300g o 350g</b> (acabado mate o plastificado soft-touch) o <b>Cartulina Opalina</b> de 250g-300g.
                  </p>
                </div>
                <div className="tip-box">
                  <strong>3. Impresión a Doble Cara (Dúplex):</strong>
                  <p>
                    La hoja de reversos está alineada milimétricamente con la de anversos. Selecciona en tu impresora "Voltear por el borde largo".
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Live Data Editor Drawer */}
          {showEditor && (
            <div className="editor-panel">
              <div className="editor-head">
                <h3>Editar Datos de la Tarjeta</h3>
                <button type="button" className="btn-reset" onClick={resetData}>
                  ↺ Restablecer valores
                </button>
              </div>

              <div className="editor-grid">
                <label className="editor-field">
                  <span>Marca / Razón Social:</span>
                  <input
                    type="text"
                    value={cardData.brand}
                    onChange={(e) => setCardData({ ...cardData, brand: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>Especialidad / Subtítulo:</span>
                  <input
                    type="text"
                    value={cardData.tagline}
                    onChange={(e) => setCardData({ ...cardData, tagline: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>Badge Superior:</span>
                  <input
                    type="text"
                    value={cardData.badge}
                    onChange={(e) => setCardData({ ...cardData, badge: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>WhatsApp:</span>
                  <input
                    type="text"
                    value={cardData.phone}
                    onChange={(e) => setCardData({ ...cardData, phone: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>Correo Electrónico:</span>
                  <input
                    type="text"
                    value={cardData.email}
                    onChange={(e) => setCardData({ ...cardData, email: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>Sitio Web:</span>
                  <input
                    type="text"
                    value={cardData.website}
                    onChange={(e) => setCardData({ ...cardData, website: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>Ubicación:</span>
                  <input
                    type="text"
                    value={cardData.location}
                    onChange={(e) => setCardData({ ...cardData, location: e.target.value })}
                  />
                </label>

                <label className="editor-field">
                  <span>Código QR Principal:</span>
                  <select
                    value={qrDest}
                    onChange={(e) => setQrDest(e.target.value as "web" | "wa")}
                  >
                    <option value="web">Sitio Web (limasync.com)</option>
                    <option value="wa">WhatsApp Directo (+51 906 920 958)</option>
                  </select>
                </label>
              </div>

              <div className="editor-services">
                <span className="services-title">Servicios Listados en el Reverso:</span>
                <div className="services-inputs">
                  {cardData.services.map((svc, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={svc}
                      onChange={(e) => {
                        const newSvcs = [...cardData.services];
                        newSvcs[idx] = e.target.value;
                        setCardData({ ...cardData, services: newSvcs });
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ============================================================ */}
      {/* 2. PRINT & PREVIEW AREA                                      */}
      {/* ============================================================ */}
      <main className="cards-stage">
        {mode === "individual" ? (
          /* ======================================================== */
          /* INDIVIDUAL MODE: High-res card with bleed & crop marks   */
          /* ======================================================== */
          <div className="individual-view-wrap">
            {(printFace === "both" || printFace === "front") && (
              <div className="individual-card-container">
                <div className="individual-header no-print">
                  <h3>ANVERSO (Frente)</h3>
                  <span>Medida estándar: 90 × 50 mm</span>
                </div>
                <div className="crop-marks-wrapper">
                  <div className="crop-corner top-left" />
                  <div className="crop-corner top-right" />
                  <div className="crop-corner bottom-left" />
                  <div className="crop-corner bottom-right" />
                  <CardFront />
                </div>
              </div>
            )}

            {(printFace === "both" || printFace === "back") && (
              <div className="individual-card-container">
                <div className="individual-header no-print">
                  <h3>REVERSO (Atrás)</h3>
                  <span>Medida estándar: 90 × 50 mm</span>
                </div>
                <div className="crop-marks-wrapper">
                  <div className="crop-corner top-left" />
                  <div className="crop-corner top-right" />
                  <div className="crop-corner bottom-left" />
                  <div className="crop-corner bottom-right" />
                  <CardBack />
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ======================================================== */
          /* SHEET MODE: Standard A4 page with 10 cards + cut lines   */
          /* ======================================================== */
          <div className="sheet-view-wrap">
            {/* PAGE 1: 10 Fronts */}
            {(printFace === "both" || printFace === "front") && (
              <div className="a4-sheet-container print-page">
                <div className="sheet-meta-header no-print">
                  <span className="sheet-title">Página 1: Hoja de Anversos (10 Tarjetas)</span>
                  <span className="sheet-guide">Líneas de corte perimetrales incluidas</span>
                </div>

                <div className="a4-page-content">
                  <div className="sheet-grid">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="sheet-card-cell">
                        <CardFront />
                        {/* Cut guides */}
                        <div className="cut-line-h" />
                        <div className="cut-line-v" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2: 10 Backs (Mirrored horizontally for perfect duplex alignment) */}
            {(printFace === "both" || printFace === "back") && (
              <div className="a4-sheet-container print-page">
                <div className="sheet-meta-header no-print">
                  <span className="sheet-title">Página 2: Hoja de Reversos (10 Tarjetas)</span>
                  <span className="sheet-guide">Alineado milimétricamente para impresión a doble cara</span>
                </div>

                <div className="a4-page-content">
                  <div className="sheet-grid sheet-grid-mirrored">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="sheet-card-cell">
                        <CardBack />
                        <div className="cut-line-h" />
                        <div className="cut-line-v" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ============================================================ */}
      {/* 3. DEDICATED PRINT & PHYSICAL CARD STYLES                    */}
      {/* ============================================================ */}
      <style>{`
        /* ==================== SCREEN & TOOLBAR LAYOUT ==================== */
        .tarjetas-container {
          min-height: 100vh;
          background: #0d0d0c;
          color: #f1f0ea;
          font-family: "Space Grotesk", system-ui, sans-serif;
          display: flex;
          flex-direction: column;
          -webkit-user-select: auto !important;
          user-select: auto !important;
        }

        .toolbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(18, 18, 16, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid #282823;
          padding: 1rem var(--pad, 1.5rem);
        }

        .toolbar-wrap {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .toolbar-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .back-btn {
          color: #0ea5e9;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          background: rgba(14, 165, 233, 0.1);
          border-radius: 6px;
          border: 1px solid rgba(14, 165, 233, 0.25);
          transition: background 0.2s;
        }
        .back-btn:hover {
          background: rgba(14, 165, 233, 0.2);
        }

        .toolbar-title-wrap {
          display: flex;
          flex-direction: column;
        }

        .toolbar-title {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0;
          color: #ffffff;
        }

        .toolbar-subtitle {
          font-size: 0.82rem;
          color: #94a3b8;
          font-family: "IBM Plex Mono", monospace;
        }

        .controls-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #23221e;
        }

        .control-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .control-label {
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #64748b;
        }

        .btn-toggle-group {
          display: inline-flex;
          background: #181816;
          border: 1px solid #2e2e28;
          border-radius: 8px;
          padding: 3px;
          gap: 2px;
        }

        .btn-toggle {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.18s ease;
          font-family: inherit;
        }
        .btn-toggle:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
        }
        .btn-toggle.active {
          background: #272722;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .theme-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-dark {
          background: #0ea5e9;
          border: 2px solid #16150f;
          box-shadow: 0 0 0 1px #0ea5e9;
        }
        .dot-light {
          background: #f6f5f1;
          border: 2px solid #16150f;
        }

        .toolbar-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-print {
          background: #0ea5e9;
          color: #ffffff;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .btn-print:hover {
          background: #0284c7;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.45);
        }

        .btn-secondary {
          background: #1d1d1a;
          color: #cbd5e1;
          border: 1px solid #32322b;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.18s ease;
          font-family: inherit;
        }
        .btn-secondary:hover,
        .btn-secondary.active {
          background: #272722;
          color: #ffffff;
          border-color: #4a4a40;
        }

        /* Tips Panel */
        .tips-panel {
          background: #141412;
          border: 1px solid #2a2a24;
          border-radius: 10px;
          padding: 1.25rem;
          margin-top: 0.5rem;
        }
        .tips-panel h4 {
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
          color: #38bdf8;
        }
        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
        }
        .tip-box {
          font-size: 0.82rem;
          line-height: 1.5;
          color: #94a3b8;
          background: #1b1b18;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          border-left: 3px solid #0ea5e9;
        }
        .tip-box strong {
          color: #ffffff;
          display: block;
          margin-bottom: 0.25rem;
        }

        /* Live Editor Panel */
        .editor-panel {
          background: #141412;
          border: 1px solid #2a2a24;
          border-radius: 10px;
          padding: 1.25rem;
          margin-top: 0.5rem;
        }
        .editor-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px solid #22221d;
          padding-bottom: 0.5rem;
        }
        .editor-head h3 {
          font-size: 0.95rem;
          color: #ffffff;
        }
        .btn-reset {
          background: transparent;
          border: 1px solid #383830;
          color: #94a3b8;
          font-size: 0.78rem;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-reset:hover {
          color: #ffffff;
          background: #22221d;
        }
        .editor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.75rem;
        }
        .editor-field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #94a3b8;
        }
        .editor-field input,
        .editor-field select {
          background: #1c1c19;
          border: 1px solid #33332c;
          color: #ffffff;
          padding: 0.5rem 0.7rem;
          border-radius: 6px;
          font-family: inherit;
          font-size: 0.85rem;
          outline: none;
        }
        .editor-field input:focus,
        .editor-field select:focus {
          border-color: #0ea5e9;
        }
        .editor-services {
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid #22221d;
        }
        .services-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #cbd5e1;
          display: block;
          margin-bottom: 0.5rem;
        }
        .services-inputs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0.5rem;
        }
        .services-inputs input {
          background: #1c1c19;
          border: 1px solid #33332c;
          color: #ffffff;
          padding: 0.45rem 0.7rem;
          border-radius: 6px;
          font-size: 0.82rem;
        }

        /* ==================== CARDS STAGE & PREVIEWS ==================== */
        .cards-stage {
          flex: 1;
          padding: 2.5rem 1.5rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background: #090908;
        }

        /* Individual Card View */
        .individual-view-wrap {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
        }
        .individual-card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .individual-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }
        .individual-header h3 {
          font-size: 1.1rem;
          color: #ffffff;
        }
        .individual-header span {
          font-size: 0.8rem;
          color: #64748b;
          font-family: "IBM Plex Mono", monospace;
        }

        /* Crop Marks Wrapper */
        .crop-marks-wrapper {
          position: relative;
          padding: 10mm;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        .crop-corner {
          position: absolute;
          width: 6mm;
          height: 6mm;
          border-color: #64748b;
          border-style: solid;
          pointer-events: none;
        }
        .crop-corner.top-left {
          top: 4mm;
          left: 4mm;
          border-width: 0.5mm 0 0 0.5mm;
        }
        .crop-corner.top-right {
          top: 4mm;
          right: 4mm;
          border-width: 0.5mm 0.5mm 0 0;
        }
        .crop-corner.bottom-left {
          bottom: 4mm;
          left: 4mm;
          border-width: 0 0 0.5mm 0.5mm;
        }
        .crop-corner.bottom-right {
          bottom: 4mm;
          right: 4mm;
          border-width: 0 0.5mm 0.5mm 0;
        }

        /* A4 Sheet Container */
        .sheet-view-wrap {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
        }
        .a4-sheet-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .sheet-meta-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }
        .sheet-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }
        .sheet-guide {
          font-size: 0.8rem;
          color: #64748b;
          font-family: "IBM Plex Mono", monospace;
        }

        /* Physical A4 Dimension Sheet: 210mm x 297mm */
        .a4-page-content {
          width: 210mm;
          height: 297mm;
          background: #ffffff;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
          box-sizing: border-box;
          padding: 23.5mm 15mm;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* 2 Columns x 5 Rows = 10 Cards (90mm x 50mm each) */
        .sheet-grid {
          display: grid;
          grid-template-columns: repeat(2, 90mm);
          grid-template-rows: repeat(5, 50mm);
          width: 180mm;
          height: 250mm;
          background: transparent;
          border: 0.5px dashed #ccc;
        }

        .sheet-card-cell {
          position: relative;
          width: 90mm;
          height: 50mm;
          box-sizing: border-box;
        }

        /* Cut line indicators */
        .cut-line-h {
          position: absolute;
          bottom: 0;
          left: -4mm;
          right: -4mm;
          height: 0.5px;
          border-bottom: 0.5px dashed #bbb;
          pointer-events: none;
        }
        .cut-line-v {
          position: absolute;
          top: -4mm;
          bottom: -4mm;
          right: 0;
          width: 0.5px;
          border-right: 0.5px dashed #bbb;
          pointer-events: none;
        }

        /* ==================== EXACT CARD SPECIFICATION (90mm x 50mm) ==================== */
        .card {
          width: 90mm;
          height: 50mm;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          font-family: "Space Grotesk", system-ui, sans-serif;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        /* Decorative Grid Overlay */
        .card-bg-grid {
          position: absolute;
          inset: 0;
          background-size: 8mm 8mm;
          pointer-events: none;
          opacity: 0.04;
        }

        .card-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          padding: 4.5mm 5.5mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* ==================== THEME: DARK EXECUTIVE ==================== */
        .card.theme-dark {
          background: #11110f;
          color: #f1f0ea;
          border: 1px solid #252420;
        }
        .card.theme-dark .card-bg-grid {
          background-image: linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px);
        }
        .card.theme-dark .card-kicker {
          color: #0ea5e9;
        }
        .card.theme-dark .card-badge {
          background: rgba(14, 165, 233, 0.12);
          border: 0.75px solid rgba(14, 165, 233, 0.4);
          color: #38bdf8;
        }
        .card.theme-dark .card-brand-name {
          color: #ffffff;
        }
        .card.theme-dark .card-brand-sub {
          color: #94a3b8;
        }
        .card.theme-dark .card-slogan {
          color: #cbd5e1;
          border-left: 2px solid #0ea5e9;
        }
        .card.theme-dark .front-url {
          color: #38bdf8;
        }
        .card.theme-dark .front-loc {
          color: #64748b;
        }
        .card.theme-dark .card-qr-box {
          background: #171714;
          border: 1px solid #2a2a24;
        }
        .card.theme-dark .qr-caption {
          color: #94a3b8;
        }
        .card.theme-dark .back-top {
          border-bottom: 0.75px solid #262520;
        }
        .card.theme-dark .back-brand-title {
          color: #ffffff;
        }
        .card.theme-dark .back-tagline {
          color: #0ea5e9;
        }
        .card.theme-dark .col-label {
          color: #0ea5e9;
        }
        .card.theme-dark .svc-bullet {
          color: #0ea5e9;
        }
        .card.theme-dark .svc-text {
          color: #e2e8f0;
        }
        .card.theme-dark .contact-icon {
          color: #64748b;
          border: 0.5px solid #33322c;
          background: #171714;
        }
        .card.theme-dark .contact-val {
          color: #f8fafc;
        }
        .card.theme-dark .back-bottom {
          border-top: 0.75px solid #262520;
          color: #64748b;
        }
        .card.theme-dark .guarantee-text {
          color: #38bdf8;
        }

        /* ==================== THEME: LIGHT PAPER ==================== */
        .card.theme-light {
          background: #f6f5f1;
          color: #16150f;
          border: 1px solid #dddacd;
        }
        .card.theme-light .card-bg-grid {
          background-image: linear-gradient(to right, #16150f 1px, transparent 1px),
                            linear-gradient(to bottom, #16150f 1px, transparent 1px);
        }
        .card.theme-light .card-kicker {
          color: #0369a1;
        }
        .card.theme-light .card-badge {
          background: rgba(14, 165, 233, 0.1);
          border: 0.75px solid rgba(14, 165, 233, 0.5);
          color: #0284c7;
        }
        .card.theme-light .card-brand-name {
          color: #16150f;
        }
        .card.theme-light .card-brand-sub {
          color: #5c5a50;
        }
        .card.theme-light .card-slogan {
          color: #334155;
          border-left: 2px solid #0284c7;
        }
        .card.theme-light .front-url {
          color: #0284c7;
        }
        .card.theme-light .front-loc {
          color: #64748b;
        }
        .card.theme-light .card-qr-box {
          background: #ffffff;
          border: 1px solid #dcd7ca;
        }
        .card.theme-light .qr-caption {
          color: #5c5a50;
        }
        .card.theme-light .back-top {
          border-bottom: 0.75px solid #e2ded4;
        }
        .card.theme-light .back-brand-title {
          color: #16150f;
        }
        .card.theme-light .back-tagline {
          color: #0284c7;
        }
        .card.theme-light .col-label {
          color: #0369a1;
        }
        .card.theme-light .svc-bullet {
          color: #0284c7;
        }
        .card.theme-light .svc-text {
          color: #1e293b;
        }
        .card.theme-light .contact-icon {
          color: #475569;
          border: 0.5px solid #dcd7ca;
          background: #ebe8e1;
        }
        .card.theme-light .contact-val {
          color: #0f172a;
        }
        .card.theme-light .back-bottom {
          border-top: 0.75px solid #e2ded4;
          color: #64748b;
        }
        .card.theme-light .guarantee-text {
          color: #0284c7;
        }

        /* ==================== COMMON CARD DETAILS ==================== */
        /* Official Logo Mark matching Header.tsx */
        .card-logo-mark {
          width: 22px;
          height: 22px;
          position: relative;
          flex-shrink: 0;
        }
        .card-logo-mark::before,
        .card-logo-mark::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid currentColor;
          border-radius: 50%;
        }
        .card-logo-mark::after {
          border-color: #0ea5e9;
          border-top-color: transparent;
          transform: rotate(35deg);
        }
        .card-logo-mark.mini {
          width: 14px;
          height: 14px;
        }
        .card-logo-mark.mini::before,
        .card-logo-mark.mini::after {
          border-width: 1.5px;
        }

        /* Front elements */
        .front-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-kicker {
          font-family: "IBM Plex Mono", monospace;
          font-size: 6pt;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .card-badge {
          font-family: "IBM Plex Mono", monospace;
          font-size: 5.5pt;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 1.2px 4.5px;
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          gap: 3px;
        }
        .pulse-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #0ea5e9;
        }

        .front-center {
          display: flex;
          flex-direction: column;
          gap: 2mm;
          margin-top: 1mm;
        }
        .card-logo-lockup {
          display: flex;
          align-items: center;
          gap: 2.8mm;
        }
        .card-brand-group {
          display: flex;
          flex-direction: column;
        }
        .card-brand-name {
          font-size: 11pt;
          font-weight: 800;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }
        .card-brand-sub {
          font-size: 5.8pt;
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }
        .card-slogan {
          font-size: 5.5pt;
          line-height: 1.35;
          padding-left: 2mm;
          margin: 0;
          font-family: "IBM Plex Mono", monospace;
        }

        .front-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .front-bottom-meta {
          display: flex;
          flex-direction: column;
          gap: 0.8mm;
        }
        .front-url {
          font-family: "IBM Plex Mono", monospace;
          font-size: 7.5pt;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .front-loc {
          font-size: 5pt;
          letter-spacing: 0.02em;
        }

        .card-qr-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5mm;
          border-radius: 4px;
          gap: 1mm;
        }
        .card-qr-img {
          width: 11mm;
          height: 11mm;
          display: block;
        }
        .card-qr-img.small {
          width: 9.5mm;
          height: 9.5mm;
        }
        .qr-caption {
          font-family: "IBM Plex Mono", monospace;
          font-size: 3.8pt;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        /* Back elements */
        .back-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.2mm;
        }
        .back-logo-mini {
          display: flex;
          align-items: center;
          gap: 1.5mm;
        }
        .back-brand-title {
          font-size: 6.8pt;
          font-weight: 800;
          letter-spacing: 0.05em;
        }
        .back-tagline {
          font-family: "IBM Plex Mono", monospace;
          font-size: 4.8pt;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .back-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3mm;
          margin-top: 1mm;
          align-items: start;
        }
        .col-label {
          font-family: "IBM Plex Mono", monospace;
          font-size: 5pt;
          font-weight: 700;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 1mm;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1mm;
        }
        .service-list li {
          display: flex;
          align-items: baseline;
          gap: 1.5mm;
          font-size: 5.3pt;
          line-height: 1.25;
        }
        .svc-bullet {
          font-family: "IBM Plex Mono", monospace;
          font-size: 4.5pt;
          font-weight: 700;
          flex-shrink: 0;
        }
        .svc-text {
          font-weight: 500;
        }

        .back-col-contact {
          display: flex;
          flex-direction: column;
          gap: 1mm;
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.8mm;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5mm;
          font-size: 5.3pt;
          font-family: "IBM Plex Mono", monospace;
        }
        .contact-icon {
          font-size: 4pt;
          font-weight: 700;
          padding: 0.5px 2px;
          border-radius: 2px;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .contact-val {
          font-weight: 600;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .back-qr-group {
          display: flex;
          align-items: center;
          gap: 1.5mm;
          margin-top: 0.8mm;
        }

        .back-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1mm;
          font-size: 4.6pt;
          font-family: "IBM Plex Mono", monospace;
        }

        /* ==================== EXACT PRINT RULES (@media print) ==================== */
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          body, html {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
          }

          .no-print {
            display: none !important;
          }

          .tarjetas-container {
            background: transparent !important;
            min-height: auto !important;
            display: block !important;
          }

          .cards-stage {
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
          }

          .a4-sheet-container {
            width: 210mm !important;
            height: 297mm !important;
            page-break-after: always !important;
            break-after: page !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }

          .a4-page-content {
            box-shadow: none !important;
            padding: 23.5mm 15mm !important;
            width: 210mm !important;
            height: 297mm !important;
          }

          .individual-view-wrap {
            padding: 20mm !important;
            gap: 15mm !important;
          }
          .individual-card-container {
            page-break-after: always !important;
            break-after: page !important;
          }
          .crop-marks-wrapper {
            background: transparent !important;
            padding: 10mm !important;
          }

          .card {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
