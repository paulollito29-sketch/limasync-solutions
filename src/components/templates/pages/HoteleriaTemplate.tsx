"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const ROOMS = [
  {
    id: "suite",
    name: "Suite Ejecutiva con Balcón Privado",
    pricePerNight: 220,
    priceUsd: 59,
    capacity: "2 Adultos",
    bed: "1 Cama King Size",
    badge: "Más Solicitada",
    desc: "Vista a la ciudad, aire acondicionado, escritorio de trabajo, cafetera Nespresso y baño de mármol con tina hidromasaje.",
    amenities: ["Wi-Fi 200 Mbps", "Balcón exterior", "Smart TV 55\"", "Desayuno incluido"],
  },
  {
    id: "deluxe",
    name: "Habitación Matrimonial Deluxe",
    pricePerNight: 175,
    priceUsd: 47,
    capacity: "2 Personas",
    bed: "1 Cama Queen Size",
    badge: "Excelente Valor",
    desc: "Espacio acogedor y silencioso con aislamiento acústico, ideal para viajes de negocios o escapadas de fin de semana.",
    amenities: ["Wi-Fi 200 Mbps", "Caja fuerte", "Frigobar", "Desayuno incluido"],
  },
  {
    id: "loft",
    name: "Loft Familiar con Terraza & Cocina",
    pricePerNight: 290,
    priceUsd: 78,
    capacity: "Hasta 4 Personas",
    bed: "1 King + 2 Plazas",
    badge: "Espacioso",
    desc: "Departamento tipo estudio equipado con cocina completa, sala de estar y terraza privada con vista al atardecer miraflorino.",
    amenities: ["Cocina equipada", "Terraza privada", "Sala de estar", "Desayuno incluido"],
  },
];

export default function HoteleriaTemplate() {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].id);
  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState("2 Huéspedes");
  const [guestName, setGuestName] = useState("");
  const [checkInDate, setCheckInDate] = useState("2026-10-20");

  const room = ROOMS.find((r) => r.id === selectedRoom) || ROOMS[0];
  const totalPriceSoles = room.pricePerNight * nights;
  const totalPriceUsd = room.priceUsd * nights;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE RESERVA DIRECTA — NUNA HOTEL MIRAFLORES*\n
Huésped Titular: ${guestName || "Por confirmar"}
Habitación Elegida: ${room.name}
Fecha de Check-in: ${checkInDate}
Noches de Estadía: ${nights} noche(s)
Capacidad: ${guests}
Total Estimado: S/ ${totalPriceSoles} (aprox. $${totalPriceUsd} USD)
Beneficio aplicado: Tarifa directa sin comisiones de Booking/Expedia\n
_Solicitud generada desde la plantilla oficial de LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#121214", color: "#f4f4f5", minHeight: "100vh", fontFamily: "var(--sans)" }}>
      <TemplateBanner niche="Hoteles Boutique, Hospedaje & Airbnb" />

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.2rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ fontSize: "1.6rem" }}>🏨</span>
          <div>
            <span style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "0.04em", color: "#fef08a" }}>
              NUNA
            </span>
            <span style={{ color: "#a1a1aa", fontSize: "0.82rem", marginLeft: "0.4rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Boutique Hotel · Miraflores
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <span style={{ fontSize: "0.85rem", color: "#a1a1aa" }}>📍 A 3 cuadras del Malecón de Miraflores</span>
          <a
            href="https://wa.me/51906920958?text=Hola,%20deseo%20consultar%20disponibilidad%20en%20Nuna%20Hotel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#eab308",
              color: "#000",
              padding: "0.55rem 1rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
            }}
          >
            Consultar Disponibilidad
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        style={{
          padding: "4.5rem 1.5rem 3rem",
          textAlign: "center",
          maxWidth: "840px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(234, 179, 8, 0.15)",
            border: "1px solid rgba(234, 179, 8, 0.35)",
            color: "#fde047",
            padding: "0.3rem 0.85rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          Reserva Directa · Mejor Precio Garantizado
        </div>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Hospitalidad de Calidad y Calidez en el Corazón de Miraflores
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "660px", margin: "0 auto" }}>
          Habitaciones y lofts diseñados para descansar con tranquilidad. Disfruta de desayuno buffet peruano, Wi-Fi de alta velocidad y atención personalizada las 24 horas.
        </p>
      </header>

      {/* Booking Simulator */}
      <section style={{ maxWidth: "1120px", margin: "0 auto", padding: "1rem 1.5rem 5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Rooms List */}
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.2rem", color: "#f4f4f5" }}>
              Nuestras Habitaciones & Suites
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {ROOMS.map((r) => {
                const isSelected = r.id === selectedRoom;
                return (
                  <div
                    key={r.id}
                    onClick={() => setSelectedRoom(r.id)}
                    style={{
                      background: isSelected ? "rgba(234, 179, 8, 0.1)" : "rgba(39, 39, 42, 0.6)",
                      border: isSelected ? "2px solid #eab308" : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "1.4rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                      <div>
                        <span style={{ fontWeight: 700, fontSize: "1.1rem", color: isSelected ? "#fde047" : "#fff" }}>
                          {r.name}
                        </span>
                        <div style={{ fontSize: "0.82rem", color: "#a1a1aa", marginTop: "0.2rem" }}>
                          🛏️ {r.bed} · 👥 {r.capacity}
                        </div>
                      </div>
                      <span
                        style={{
                          background: "rgba(234, 179, 8, 0.2)",
                          color: "#fef08a",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                        }}
                      >
                        {r.badge}
                      </span>
                    </div>

                    <p style={{ color: "#a1a1aa", fontSize: "0.88rem", marginBottom: "1rem", lineHeight: 1.4 }}>
                      {r.desc}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
                      {r.amenities.map((am, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "rgba(0,0,0,0.3)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontSize: "0.75rem",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            color: "#d4d4d8",
                          }}
                        >
                          ✓ {am}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "0.75rem",
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", color: "#a1a1aa" }}>Tarifa por noche</span>
                      <div>
                        <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fde047" }}>
                          S/ {r.pricePerNight}
                        </span>
                        <span style={{ fontSize: "0.85rem", color: "#a1a1aa" }}> (${r.priceUsd} USD)</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Booking Calculator Box */}
          <div
            style={{
              background: "#18181b",
              border: "1px solid rgba(234, 179, 8, 0.4)",
              borderRadius: "16px",
              padding: "2rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              position: "sticky",
              top: "90px",
            }}
          >
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.2rem", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "#eab308", textTransform: "uppercase" }}>
                Cotizador de Estadía en Vivo
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginTop: "0.4rem" }}>
                {room.name}
              </h3>
              <p style={{ color: "#a1a1aa", fontSize: "0.85rem", marginTop: "0.3rem" }}>
                Sin comisiones de intermediarios: abonas al ingresar al hotel.
              </p>
            </div>

            <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8" }}>
                  Nombre del Huésped
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Sofía Benavides"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#09090b",
                    border: "1px solid #3f3f46",
                    borderRadius: "8px",
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8" }}>
                    Fecha de Entrada
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    style={{
                      width: "100%",
                      background: "#09090b",
                      border: "1px solid #3f3f46",
                      borderRadius: "8px",
                      padding: "0.75rem",
                      color: "#fff",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8" }}>
                    Noches de Estadía
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={nights}
                    onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{
                      width: "100%",
                      background: "#09090b",
                      border: "1px solid #3f3f46",
                      borderRadius: "8px",
                      padding: "0.75rem",
                      color: "#fff",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8" }}>
                  Número de Huéspedes
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#09090b",
                    border: "1px solid #3f3f46",
                    borderRadius: "8px",
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="1 Huésped">1 Huésped</option>
                  <option value="2 Huéspedes">2 Huéspedes</option>
                  <option value="3 Huéspedes">3 Huéspedes</option>
                  <option value="4 Huéspedes (Familiar)">4 Huéspedes (Familiar)</option>
                </select>
              </div>

              {/* Price Breakdown */}
              <div
                style={{
                  background: "rgba(234, 179, 8, 0.08)",
                  border: "1px solid rgba(234, 179, 8, 0.25)",
                  borderRadius: "10px",
                  padding: "1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "0.4rem", color: "#d4d4d8" }}>
                  <span>S/ {room.pricePerNight} x {nights} noches</span>
                  <span>S/ {totalPriceSoles}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "0.5rem", color: "#4ade80" }}>
                  <span>Comisión de Reserva</span>
                  <span>S/ 0.00 (Gratis)</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "0.6rem",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                  }}
                >
                  <span>Total Estadía:</span>
                  <span style={{ color: "#fde047" }}>S/ {totalPriceSoles} (~${totalPriceUsd} USD)</span>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  background: "#22c55e",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontWeight: 800,
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 6px 20px rgba(34, 197, 94, 0.35)",
                }}
              >
                <span>📲 Reservar por WhatsApp (S/ {totalPriceSoles})</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
