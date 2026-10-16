"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: "ceviches" | "criollos" | "causas" | "bebidas";
  badge?: string;
}

const MENU: MenuItem[] = [
  {
    id: "m1",
    name: "Ceviche Clásico Carretillero",
    desc: "Pesca del día en leche de tigre al rocoto, canchita chulpi crocante, camote glaseado y chicharrón de pota.",
    price: 36,
    category: "ceviches",
    badge: "Más Pedido",
  },
  {
    id: "m2",
    name: "Arroz con Mariscos al Wok",
    desc: "Arroz norteño meloso aromatizado con chicha de jora, salsa madre de mariscos y parmesano gratinado.",
    price: 42,
    category: "ceviches",
    badge: "Especialidad",
  },
  {
    id: "m3",
    name: "Lomo Saltado al Pisco",
    desc: "Trozos de lomo fino flambeados al wok con pisco Quebranta, cebollas crocantes, tomate fresco y papas amarillas fritas.",
    price: 45,
    category: "criollos",
    badge: "Plato Fuerte",
  },
  {
    id: "m4",
    name: "Ají de Gallina Cremoso",
    desc: "Pechuga de gallina deshilachada en crema de ají amarillo criollo, nueces tostadas, huevo y aceituna botija.",
    price: 34,
    category: "criollos",
  },
  {
    id: "m5",
    name: "Trío de Causas Limeñas",
    desc: "Causa de pulpa de cangrejo, pollo al ají amarillo y tartar de atún nikkei sobre suave masa de papa amarilla y ají.",
    price: 32,
    category: "causas",
  },
  {
    id: "m6",
    name: "Chicha Morada de la Casa (1L)",
    desc: "Elaborada con maíz morado cusqueño, manzana, piña, canela y clavo de olor.",
    price: 16,
    category: "bebidas",
  },
  {
    id: "m7",
    name: "Pisco Sour Clásico (Quebranta)",
    desc: "Coctel bandera con pisco acholado premium, limón sutil recién exprimido y gotas de amargo de angostura.",
    price: 24,
    category: "bebidas",
    badge: "2x1 Happy Hour",
  },
];

export default function RestauranteTemplate() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [deliveryType, setDeliveryType] = useState<"delivery" | "recojo">("delivery");
  const [district, setDistrict] = useState("Miraflores");
  const [clientName, setClientName] = useState("");
  const [address, setAddress] = useState("");

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const filteredItems =
    selectedCat === "all" ? MENU : MENU.filter((i) => i.category === selectedCat);

  const cartItems = Object.keys(cart).map((id) => {
    const item = MENU.find((m) => m.id === id)!;
    return { ...item, qty: cart[id] };
  });

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const deliveryCost = deliveryType === "delivery" && subtotal > 0 ? 8 : 0;
  const total = subtotal + deliveryCost;

  const handleSendOrder = () => {
    if (cartItems.length === 0) return;
    let text = `*NUEVO PEDIDO — LA REDONDA BISTRO*\n`;
    text += `Cliente: ${clientName || "Cliente"}\n`;
    text += `Modalidad: ${deliveryType === "delivery" ? `Delivery a ${district}` : "Recojo en local"}\n`;
    if (deliveryType === "delivery" && address) text += `Dirección: ${address}\n`;
    text += `\n*Detalle del Pedido:*\n`;
    cartItems.forEach((item) => {
      text += `• ${item.qty}x ${item.name} — S/ ${item.price * item.qty}\n`;
    });
    text += `\nSubtotal: S/ ${subtotal}`;
    if (deliveryCost > 0) text += `\nEnvío: S/ ${deliveryCost}`;
    text += `\n*TOTAL A PAGAR: S/ ${total}*\n`;
    text += `\n_Pedido generado desde la web demo desarrollada por LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0b0f19", color: "#f8fafc", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <TemplateBanner niche="Restaurantes & Gastronomía" />

      {/* Hero del Restaurante */}
      <header
        style={{
          borderBottom: "1px solid #1e293b",
          background: "radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0b0f19 80%)",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span
            style={{
              background: "#ea580c",
              color: "#fff",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Sabor Tradicional Limeño
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "1rem", fontWeight: 800 }}>
            La Redonda <span style={{ color: "#f97316" }}>Cevichería & Bistro</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
            Pesca del día artesanal, cortes premium y la auténtica sazón criolla directo a tu mesa en Miraflores y San Isidro.
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#carta"
              style={{
                background: "#f97316",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Ver Menú Digital ↓
            </a>
            <a
              href="https://wa.me/51906920958?text=Hola%20quiero%20reservar%20una%20mesa%20en%20La%20Redonda"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#1e293b",
                color: "#f8fafc",
                border: "1px solid #334155",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Reservar Mesa (WhatsApp)
            </a>
          </div>
        </div>
      </header>

      {/* Menú y Carrito Grid */}
      <main id="carta" style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(320px, 380px)", gap: "2.5rem" }}>
          
          {/* Columna Menú */}
          <div>
            <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "1rem", marginBottom: "1.5rem" }}>
              {[
                { id: "all", label: "Todos los Platos" },
                { id: "ceviches", label: "Ceviches & Marina" },
                { id: "criollos", label: "Platos Criollos" },
                { id: "causas", label: "Causas & Entradas" },
                { id: "bebidas", label: "Bebidas & Coctelería" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCat(c.id)}
                  style={{
                    background: selectedCat === c.id ? "#f97316" : "#1e293b",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "#131b2e",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.1rem", margin: 0, fontWeight: 700 }}>{item.name}</h3>
                      {item.badge && (
                        <span
                          style={{
                            background: "#7c2d12",
                            color: "#fdba74",
                            fontSize: "0.7rem",
                            padding: "0.15rem 0.45rem",
                            borderRadius: "4px",
                            fontWeight: 700,
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.4rem", lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                    <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "1.05rem", display: "block", marginTop: "0.5rem" }}>
                      S/ {item.price.toFixed(2)}
                    </span>
                  </div>

                  <div>
                    {cart[item.id] ? (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#1e293b", borderRadius: "8px", padding: "0.3rem" }}>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{ background: "#334155", color: "#fff", border: "none", width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                        >
                          -
                        </button>
                        <span style={{ minWidth: "20px", textAlign: "center", fontWeight: 700 }}>{cart[item.id]}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          style={{ background: "#f97316", color: "#fff", border: "none", width: "28px", height: "28px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        style={{
                          background: "#ea580c",
                          color: "#fff",
                          border: "none",
                          padding: "0.6rem 1rem",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          cursor: "pointer",
                        }}
                      >
                        + Agregar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Carrito / Checkout WhatsApp */}
          <div>
            <div
              style={{
                background: "#131b2e",
                border: "1px solid #1e293b",
                borderRadius: "16px",
                padding: "1.5rem",
                position: "sticky",
                top: "70px",
              }}
            >
              <h2 style={{ fontSize: "1.3rem", margin: "0 0 1rem", borderBottom: "1px solid #1e293b", paddingBottom: "0.75rem" }}>
                🛒 Tu Pedido Online
              </h2>

              {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "2rem 1rem", color: "#64748b" }}>
                  <p>Tu carrito está vacío.</p>
                  <p style={{ fontSize: "0.85rem" }}>Agrega platos del menú para armar tu pedido.</p>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: "220px", overflowY: "auto", paddingRight: "0.25rem" }}>
                    {cartItems.map((item) => (
                      <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                        <span>
                          {item.qty}x {item.name}
                        </span>
                        <span style={{ fontWeight: 700 }}>S/ {(item.price * item.qty).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: "1px solid #1e293b", marginTop: "1rem", paddingTop: "1rem" }}>
                    <label style={{ fontSize: "0.8rem", color: "#94a3b8", display: "block", marginBottom: "0.3rem" }}>
                      Modalidad de Entrega:
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      <button
                        onClick={() => setDeliveryType("delivery")}
                        style={{
                          background: deliveryType === "delivery" ? "#ea580c" : "#1e293b",
                          color: "#fff",
                          border: "none",
                          padding: "0.4rem",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        🛵 Delivery (S/ 8)
                      </button>
                      <button
                        onClick={() => setDeliveryType("recojo")}
                        style={{
                          background: deliveryType === "recojo" ? "#ea580c" : "#1e293b",
                          color: "#fff",
                          border: "none",
                          padding: "0.4rem",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        🏪 Recojo en Local
                      </button>
                    </div>

                    {deliveryType === "delivery" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          style={{
                            background: "#0b0f19",
                            color: "#fff",
                            border: "1px solid #334155",
                            borderRadius: "6px",
                            padding: "0.45rem",
                            fontSize: "0.85rem",
                          }}
                        >
                          <option value="Miraflores">Miraflores</option>
                          <option value="San Isidro">San Isidro</option>
                          <option value="Barranco">Barranco</option>
                          <option value="Surco">Santiago de Surco</option>
                          <option value="San Miguel">San Miguel</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Dirección exacta (calle, número, dpto)"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          style={{
                            background: "#0b0f19",
                            color: "#fff",
                            border: "1px solid #334155",
                            borderRadius: "6px",
                            padding: "0.45rem",
                            fontSize: "0.85rem",
                          }}
                        />
                      </div>
                    )}

                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#0b0f19",
                        color: "#fff",
                        border: "1px solid #334155",
                        borderRadius: "6px",
                        padding: "0.45rem",
                        fontSize: "0.85rem",
                        marginBottom: "0.75rem",
                        boxSizing: "border-box",
                      }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "0.3rem" }}>
                      <span>Subtotal:</span>
                      <span>S/ {subtotal.toFixed(2)}</span>
                    </div>
                    {deliveryCost > 0 && (
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "0.3rem" }}>
                        <span>Envío Express:</span>
                        <span>S/ {deliveryCost.toFixed(2)}</span>
                      </div>
                    )}
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.15rem", fontWeight: 800, color: "#38bdf8", marginTop: "0.5rem" }}>
                      <span>Total:</span>
                      <span>S/ {total.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={handleSendOrder}
                      style={{
                        width: "100%",
                        background: "#22c55e",
                        color: "#fff",
                        border: "none",
                        padding: "0.85rem",
                        borderRadius: "8px",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        marginTop: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        boxShadow: "0 4px 14px rgba(34,197,94,0.3)",
                      }}
                    >
                      <span>📲</span> Enviar Pedido a WhatsApp
                    </button>
                    <p style={{ fontSize: "0.75rem", color: "#64748b", textAlign: "center", marginTop: "0.5rem" }}>
                      Aceptamos Yape, Plin y transferencia BCP/Interbank
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
