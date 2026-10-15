"use client";

import Image from "next/image";

export default function VrStudioSection() {
  return (
    <section id="vr-studio" style={{ paddingBlock: "clamp(4rem, 7vw, 6rem)", background: "#060911", color: "#f8fafc", borderTop: "1px solid #1e293b" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <div>
            <span
              style={{
                background: "linear-gradient(90deg, #6366f1 0%, #ec4899 100%)",
                color: "#fff",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              División de Videojuegos & Computación Espacial
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, marginTop: "0.75rem" }}>
              LimaSync XR Lab · <span style={{ color: "#38bdf8" }}>Meta Quest Studio</span>
            </h2>
          </div>
          <span style={{ fontFamily: "var(--mono)", color: "#64748b", fontSize: "0.9rem" }}>
            05 / VR Studio
          </span>
        </div>

        <p style={{ maxWidth: "72ch", color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "3rem" }}>
          Nuestra agencia web financia el laboratorio de I+D donde desarrollamos títulos comerciales para la plataforma <strong>Meta Horizon Store</strong>, optimizados al milímetro para el procesador Snapdragon XR2 Gen 2 de <strong>Meta Quest 3 y Meta Quest 3S</strong>.
        </p>

        {/* Hero Card del Juego */}
        <div
          style={{
            background: "#0d1322",
            border: "1px solid #1e293b",
            borderRadius: "20px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Cover Image */}
          <div style={{ position: "relative", minHeight: "380px", background: "#0b0f19" }}>
            <img
              src="/images/neo_lima_vr_cover.jpg"
              alt="Neo-Lima: Coastal Reckoning VR Game Cover"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(8px)",
                padding: "0.4rem 0.8rem",
                borderRadius: "8px",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#38bdf8",
                border: "1px solid rgba(56,189,248,0.3)",
              }}
            >
              🎮 Meta Horizon Store Release (Target: Q3/Q4)
            </div>
          </div>

          {/* Ficha Técnica & Mecánicas */}
          <div style={{ padding: "clamp(1.75rem, 4vw, 2.75rem)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                <span style={{ background: "#1e1b4b", color: "#c7d2fe", fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "4px", fontWeight: 700 }}>
                  Unity 6 / OpenXR
                </span>
                <span style={{ background: "#064e3b", color: "#a7f3d0", fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "4px", fontWeight: 700 }}>
                  90 FPS Garantizados
                </span>
                <span style={{ background: "#701a75", color: "#f5d0fe", fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "4px", fontWeight: 700 }}>
                  Snapdragon XR2 Gen 2
                </span>
              </div>

              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f8fafc", marginBottom: "0.5rem" }}>
                Neo-Lima: Coastal Reckoning
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Una aventura de acción e infiltración ambientada en una Lima futurista ciberpunk. Recorre los acantilados de la Costa Verde y callejones coloniales iluminados en neón resolviendo acertijos táctiles y combates con físicas en tiempo real.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", borderTop: "1px solid #1e293b", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", display: "block" }}>Locomoción Anti-Cinetosis</span>
                  <strong style={{ fontSize: "0.9rem", color: "#e2e8f0" }}>Vignette Dinámico + Snap Turn</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", display: "block" }}>Interacción Táctil</span>
                  <strong style={{ fontSize: "0.9rem", color: "#e2e8f0" }}>Hand Tracking & Direct Touch</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", display: "block" }}>Optimizaciones de Shader</span>
                  <strong style={{ fontSize: "0.9rem", color: "#e2e8f0" }}>Draw Calls &lt; 120 / Baked Lights</strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", display: "block" }}>Audio Inmersivo</span>
                  <strong style={{ fontSize: "0.9rem", color: "#e2e8f0" }}>Meta Spatial Audio 3D</strong>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1.25rem", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/51981906958?text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20proyecto%20VR%20de%20LimaSync"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#6366f1",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                Hablar con el Líder Técnico VR →
              </a>
              <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
                Target de Venta: $14.99 USD en Meta Horizon Store
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
