"use client";

interface TemplateBannerProps {
  niche: string;
  price?: string;
  deliveryTime?: string;
}

export default function TemplateBanner({
  niche,
  price = "S/ 499",
  deliveryTime = "72 horas",
}: TemplateBannerProps) {
  const whatsappUrl =
    "https://wa.me/51906920958?text=" +
    encodeURIComponent(
      `Hola LimaSync Solutions, vi la plantilla de demo para ${niche} y quiero una igual adaptada a mi negocio con la oferta de ${price}.`
    );

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)",
        color: "#ffffff",
        padding: "0.65rem 1rem",
        fontSize: "0.85rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.75rem",
        borderBottom: "2px solid #0ea5e9",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span
          style={{
            background: "#0ea5e9",
            color: "#ffffff",
            padding: "0.2rem 0.5rem",
            borderRadius: "4px",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Demo Oficial
        </span>
        <span>
          Plantilla Maestra para <strong>{niche}</strong> · Entrega en{" "}
          <strong style={{ color: "#38bdf8" }}>{deliveryTime}</strong> por{" "}
          <strong style={{ color: "#38bdf8" }}>{price}</strong> (+ S/ 99/mes hosting & soporte).
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <a
          href="/"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            fontSize: "0.8rem",
            padding: "0.3rem 0.6rem",
            borderRadius: "4px",
            border: "1px solid #334155",
            transition: "all 0.2s",
          }}
        >
          ← Volver a LimaSync
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#22c55e",
            color: "#ffffff",
            textDecoration: "none",
            padding: "0.35rem 0.75rem",
            borderRadius: "4px",
            fontWeight: 600,
            fontSize: "0.8rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          Pedir esta plantilla por WhatsApp →
        </a>
      </div>
    </div>
  );
}
