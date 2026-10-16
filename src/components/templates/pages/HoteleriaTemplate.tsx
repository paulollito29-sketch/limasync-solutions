"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const ROOMS = [
  {
    id: "suite",
    name: "Master Suite Ejecutiva con Balcón Privado",
    pricePerNight: 230,
    priceUsd: 62,
    otaPrice: 310,
    capacity: "2 Adultos",
    bed: "1 Cama King Size Premium",
    badge: "Más Solicitada",
    desc: "Vista exterior al boulevard miraflorino, aire acondicionado silencioso, cafetera Nespresso, escritorio ergonómico y baño de mármol con tina hidromasaje.",
    amenities: ["Wi-Fi 300 Mbps Fibra", "Balcón exterior", "Smart TV 55\" 4K", "Desayuno Buffet Criollo incluido", "Frigobar libre"],
  },
  {
    id: "deluxe",
    name: "Habitación Matrimonial Superior Deluxe",
    pricePerNight: 180,
    priceUsd: 48,
    otaPrice: 245,
    capacity: "2 Personas",
    bed: "1 Cama Queen Size Ortopédica",
    badge: "Mejor Relación Calidad-Precio",
    desc: "Espacio acústicamente aislado con doble vidriado hermético, lencería de algodón pima peruano de 400 hilos y ducha española tipo lluvia.",
    amenities: ["Wi-Fi 300 Mbps", "Caja fuerte electrónica", "Algodón Pima 400 hilos", "Desayuno Buffet incluido"],
  },
  {
    id: "loft",
    name: "Loft Familiar con Terraza Privada & Kitchenette",
    pricePerNight: 295,
    priceUsd: 79,
    otaPrice: 390,
    capacity: "Hasta 4 Personas",
    bed: "1 King + 2 Camas de 1.5 Plazas",
    badge: "Estadías Largas",
    desc: "Departamento tipo estudio totalmente equipado con cocina de inducción, refrigeradora, sala de estar y terraza con vista a los atardeceres del malecón.",
    amenities: ["Cocina de inducción", "Terraza panorámica", "Comedor para 4", "Desayuno Buffet incluido", "Pet Friendly"],
  },
];

export default function HoteleriaTemplate() {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].id);
  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState("2 Huéspedes");
  const [guestName, setGuestName] = useState("");
  const [checkInDate, setCheckInDate] = useState("2026-10-24");

  const room = ROOMS.find((r) => r.id === selectedRoom) || ROOMS[0];
  const totalPriceSoles = room.pricePerNight * nights;
  const totalPriceUsd = room.priceUsd * nights;
  const otaSavings = (room.otaPrice - room.pricePerNight) * nights;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE RESERVA DIRECTA — NUNA BOUTIQUE HOTEL MIRAFLORES*\n\n` +
      `Titular: ${guestName || "Huésped por confirmar"}\n` +
      `Habitación: ${room.name}\n` +
      `Fecha de Check-in: ${checkInDate}\n` +
      `Estadía: ${nights} noche(s)\n` +
      `Ocupantes: ${guests}\n` +
      `*Total Tarifa Web Directa: S/ ${totalPriceSoles} (~$${totalPriceUsd} USD)*\n` +
      `Ahorro vs Booking.com: S/ ${otaSavings} soles\n` +
      `Beneficios incluidos: Desayuno Buffet Criollo + Cóctel de Bienvenida Pisco Sour\n\n` +
      `_Deseo confirmar disponibilidad inmediata y los métodos de pago (Tarjetas / Transferencia)._`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0f0f11", color: "#f4f4f5", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <TemplateBanner niche="Hoteles Boutique, Hospedaje & Airbnb" />

      {/* Trust Announcement Bar */}
      <div style={{ background: "#27272a", borderBottom: "1px solid #3f3f46", padding: "0.55rem 1.5rem", fontSize: "0.8rem", color: "#d4d4d8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#facc15", fontWeight: 700 }}>🏨 Nuna Boutique Hotel</span>
            <span>·</span>
            <span>A solo 3 cuadras del Malecón de Miraflores & Larcomar</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#facc15", fontWeight: 700 }}>⭐ 4.9 / 5.0 en Google & TripAdvisor (540+ reseñas)</span>
            <span>·</span>
            <span style={{ color: "#4ade80" }}>Sin comisión de Booking</span>
          </div>
        </div>
      </div>

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
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, #eab308, #ca8a04)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
            🏨
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.05em", color: "#fef08a" }}>
              NUNA
            </span>
            <span style={{ color: "#a1a1aa", fontSize: "0.82rem", marginLeft: "0.4rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Boutique Hotel · Miraflores
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "#a1a1aa" }}>📍 Calle Alcanfores 460, Miraflores</span>
          <a
            href="https://wa.me/51906920958?text=Hola,%20deseo%20consultar%20disponibilidad%20en%20Nuna%20Boutique%20Hotel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#eab308",
              color: "#18181b",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontWeight: 800,
              fontSize: "0.85rem",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(234, 179, 8, 0.35)",
            }}
          >
            Consultar Concierge
          </a>
        </div>
      </nav>

      {/* Hero with Real High-Res Photography */}
      <header
        style={{
          padding: "4.5rem 1.5rem 3.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(234, 179, 8, 0.15)",
                border: "1px solid rgba(234, 179, 8, 0.35)",
                color: "#fde047",
                padding: "0.35rem 0.9rem",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              <span>✨ Mejor Tarifa Garantizada en Web Oficial</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Descanso Exclusivo y Calidez en el Corazón de <span style={{ color: "#facc15" }}>Miraflores</span>
            </h1>

            <p style={{ color: "#a1a1aa", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "560px" }}>
              Suites de diseño con lencería de algodón pima, aislamiento acústico y atención de conserjería 24/7. Reserva directamente y obtén desayuno buffet criollo de cortesía.
            </p>

            {/* Direct Booking Advantage Box */}
            <div
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                padding: "1rem 1.25rem",
                borderRadius: "10px",
                marginTop: "1.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <div>
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "0.9rem", display: "block" }}>
                  🎁 Beneficios de Reservar en Nuestra Web:
                </span>
                <span style={{ color: "#d4d4d8", fontSize: "0.82rem" }}>
                  Cóctel Pisco Sour de cortesía + Late check-out (sujeto a disponibilidad) + 0% comisiones.
                </span>
              </div>
            </div>
          </div>

          {/* Real Photography Card */}
          <div
            style={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <img
              src="/images/templates/hoteleria.jpg"
              alt="Nuna Boutique Hotel Habitación Master Suite Miraflores"
              style={{
                width: "100%",
                height: "440px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                padding: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <span style={{ background: "#eab308", color: "#000", fontWeight: 800, fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: "4px", textTransform: "uppercase" }}>
                  Fotografía Real del Hotel
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginTop: "0.4rem" }}>
                  Master Suite con Balcón Exterior
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#d4d4d8" }}>Miraflores, Lima · Vista a la ciudad</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.8rem", color: "#a1a1aa", textDecoration: "line-through", display: "block" }}>S/ 310 en Booking</span>
                <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#facc15" }}>S/ 230 / noche</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Room Selection & Live Booking Simulator */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Rooms List */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.2rem", color: "#f4f4f5" }}>
              Nuestras Habitaciones & Suites
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              {ROOMS.map((r) => {
                const isSelected = r.id === selectedRoom;
                return (
                  <div
                    key={r.id}
                    onClick={() => setSelectedRoom(r.id)}
                    style={{
                      background: isSelected ? "rgba(234, 179, 8, 0.1)" : "rgba(39, 39, 42, 0.5)",
                      border: isSelected ? "2px solid #eab308" : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      padding: "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: isSelected ? "0 10px 30px rgba(234, 179, 8, 0.15)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                      <div>
                        <span style={{ fontWeight: 800, fontSize: "1.15rem", color: isSelected ? "#fde047" : "#fff" }}>
                          {r.name}
                        </span>
                        <div style={{ fontSize: "0.82rem", color: "#a1a1aa", marginTop: "0.25rem" }}>
                          🛏️ {r.bed} · 👥 {r.capacity}
                        </div>
                      </div>
                      <span
                        style={{
                          background: "rgba(234, 179, 8, 0.2)",
                          color: "#fef08a",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.6rem",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {r.badge}
                      </span>
                    </div>

                    <p style={{ color: "#a1a1aa", fontSize: "0.88rem", marginBottom: "1rem", lineHeight: 1.5 }}>
                      {r.desc}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                      {r.amenities.map((am, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "rgba(0,0,0,0.3)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontSize: "0.75rem",
                            padding: "0.25rem 0.55rem",
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
                        paddingTop: "0.85rem",
                      }}
                    >
                      <div>
                        <span style={{ fontSize: "0.8rem", color: "#71717a", textDecoration: "line-through", display: "block" }}>
                          Tarifa OTA: S/ {r.otaPrice}
                        </span>
                        <span style={{ fontSize: "0.82rem", color: "#4ade80", fontWeight: 600 }}>
                          Ahorras S/ {r.otaPrice - r.pricePerNight} por noche
                        </span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fde047" }}>
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
              borderRadius: "18px",
              padding: "2.25rem",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              position: "sticky",
              top: "90px",
            }}
          >
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.2rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.78rem", color: "#eab308", textTransform: "uppercase", fontWeight: 700 }}>
                Cotizador de Estadía en Tiempo Real
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginTop: "0.4rem", color: "#fff" }}>
                {room.name}
              </h3>
              <p style={{ color: "#a1a1aa", fontSize: "0.85rem", marginTop: "0.3rem" }}>
                Sin cargos ocultos ni cobro de comisiones internacionales.
              </p>
            </div>

            <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8", fontWeight: 600 }}>
                  Nombre del Huésped Titular:
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
                    padding: "0.8rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8", fontWeight: 600 }}>
                    Fecha de Entrada:
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
                      padding: "0.8rem",
                      color: "#fff",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8", fontWeight: 600 }}>
                    Noches de Estadía:
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
                      padding: "0.8rem",
                      color: "#fff",
                      fontSize: "0.95rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#d4d4d8", fontWeight: 600 }}>
                  Número de Huéspedes:
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#09090b",
                    border: "1px solid #3f3f46",
                    borderRadius: "8px",
                    padding: "0.8rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="1 Huésped">1 Huésped Solo</option>
                  <option value="2 Huéspedes">2 Huéspedes (Pareja / Negocios)</option>
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
                  padding: "1.1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "0.4rem", color: "#d4d4d8" }}>
                  <span>S/ {room.pricePerNight} x {nights} noche(s)</span>
                  <span>S/ {totalPriceSoles}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "0.4rem", color: "#4ade80" }}>
                  <span>Desayuno Buffet Criollo</span>
                  <span>Incluido S/ 0</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "0.5rem", color: "#facc15" }}>
                  <span>Ahorro vs Booking.com</span>
                  <span>- S/ {otaSavings} soles</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "0.75rem",
                    fontWeight: 800,
                    fontSize: "1.25rem",
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
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 6px 20px rgba(34, 197, 94, 0.35)",
                }}
              >
                <span>📲 Reservar Directo por WhatsApp (S/ {totalPriceSoles})</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#08080a", padding: "2.5rem 1.5rem", textAlign: "center", fontSize: "0.8rem", color: "#71717a" }}>
        <p>© 2026 Nuna Boutique Hotel S.A.C. · RUC 20608972134 · Miraflores, Lima, Perú</p>
        <p style={{ marginTop: "0.4rem" }}>Check-in: 3:00 PM · Check-out: 12:00 PM · Servicio de transfer al Aeropuerto Jorge Chávez disponible</p>
      </footer>
    </div>
  );
}
