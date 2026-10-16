"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  sizes: string[];
  colors: string[];
  tag?: string;
}

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Heavyweight Boxy Hoodie — Acid Wash",
    desc: "100% algodón rústico peruano 400 GSM, corte oversize con capucha reforzada y bolsillos ocultos.",
    price: 119,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro Lavado", "Gris Cemento", "Hueso"],
    tag: "Drop 01",
  },
  {
    id: "p2",
    name: "Polo Oversize 100% Algodón Pima",
    desc: "Algodón Pima peruano de fibra larga 24/1, cuello grueso en rib y caída pesada premium.",
    price: 69,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Off-White", "Negro Profundo", "Verde Militar"],
    tag: "Básico Infaltable",
  },
  {
    id: "p3",
    name: "Cargo Pants Multi-Bolsillo Ripstop",
    desc: "Tela ripstop antidesgarro, 6 bolsillos utilitarios, cintura elastizada y tobillos ajustables.",
    price: 139,
    sizes: ["28", "30", "32", "34"],
    colors: ["Negro", "Beige Desierto", "Grafito"],
    tag: "Más Vendido",
  },
  {
    id: "p4",
    name: "Windbreaker Jacket Reflectiva",
    desc: "Casaca cortaviento impermeable con detalles reflectivos 3M y forro interior transpirable.",
    price: 159,
    sizes: ["M", "L", "XL"],
    colors: ["Negro Mate", "Azul Eléctrico"],
  },
];

export default function TiendaTemplate() {
  const [cart, setCart] = useState<{ [key: string]: { product: Product; size: string; color: string; qty: number } }>({});
  const [selectedSizes, setSelectedSizes] = useState<{ [id: string]: string }>({
    p1: "M",
    p2: "L",
    p3: "32",
    p4: "L",
  });
  const [selectedColors, setSelectedColors] = useState<{ [id: string]: string }>({
    p1: "Negro Lavado",
    p2: "Off-White",
    p3: "Negro",
    p4: "Negro Mate",
  });
  const [shippingCity, setShippingCity] = useState("Lima Metropolitana (Express)");
  const [customerName, setCustomerName] = useState("");

  const addToCart = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    const color = selectedColors[product.id] || product.colors[0];
    const key = `${product.id}-${size}-${color}`;

    setCart((prev) => ({
      ...prev,
      [key]: {
        product,
        size,
        color,
        qty: (prev[key]?.qty || 0) + 1,
      },
    }));
  };

  const removeCartItem = (key: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const cartList = Object.values(cart);
  const subtotal = cartList.reduce((acc, curr) => acc + curr.product.price * curr.qty, 0);
  const shippingCost = subtotal > 0 ? (shippingCity.includes("Lima") ? 10 : 15) : 0;
  const total = subtotal + shippingCost;

  const handleSendOrder = () => {
    if (cartList.length === 0) return;
    let text = `*NUEVO PEDIDO — GAMARRA URBANA MODA*\n`;
    text += `Cliente: ${customerName || "Cliente"}\n`;
    text += `Zona de Envío: ${shippingCity}\n`;
    text += `\n*Prendas Seleccionadas:*\n`;
    cartList.forEach((item) => {
      text += `• ${item.qty}x ${item.product.name} (Talla: ${item.size}, Color: ${item.color}) — S/ ${item.product.price * item.qty}\n`;
    });
    text += `\nSubtotal: S/ ${subtotal}`;
    text += `\nEnvío: S/ ${shippingCost}`;
    text += `\n*TOTAL: S/ ${total}*\n`;
    text += `\nMétodo de pago preferido: Yape / Plin / Transferencia BCP\n`;
    text += `_Pedido generado desde la tienda demo desarrollada por LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#18181b", color: "#f4f4f5", minHeight: "100vh", fontFamily: "var(--sans)" }}>
      <TemplateBanner niche="E-Commerce, Tiendas & Ropa (Gamarra)" currentSlug="tienda" />

      {/* Hero Tienda con Fotografía Editorial */}
      <header
        style={{
          borderBottom: "1px solid #27272a",
          padding: "3.5rem 1.5rem 2.5rem",
          background: "radial-gradient(circle at center, #27272a 0%, #18181b 100%)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center", marginBottom: "1rem" }}>
              <span
                style={{
                  background: "#fafafa",
                  color: "#09090b",
                  padding: "0.25rem 0.65rem",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Hecho en Perú · Algodón Pima 100%
              </span>
              <span
                style={{
                  background: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#7dd3fc",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.2rem 0.55rem",
                  borderRadius: "999px",
                }}
              >
                ⭐ 4.9 (1,200+ pedidos enviados)
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Gamarra <span style={{ color: "#38bdf8" }}>Urbana</span>
            </h1>

            <p style={{ color: "#a1a1aa", fontSize: "1.08rem", marginTop: "1rem", lineHeight: 1.6, maxWidth: "500px" }}>
              Streetwear premium con cortes boxy y telas pesadas de 400 GSM. Envíos el mismo día a todo el Perú vía Shalom y Olva Courier.
            </p>

            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem", fontSize: "0.85rem", color: "#cbd5e1", flexWrap: "wrap" }}>
              <span>📦 Envío Lima 24h: S/ 10</span>
              <span>•</span>
              <span>🚚 Provincias: S/ 15</span>
              <span>•</span>
              <span>📲 Paga con Yape / Plin</span>
            </div>
          </div>

          {/* Hero Editorial Card */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "2px solid rgba(56, 189, 248, 0.35)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                position: "relative",
              }}
            >
              <img
                src="/images/templates/tienda.jpg"
                alt="Colección Streetwear Gamarra Urbana"
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  insetInline: 0,
                  background: "linear-gradient(to top, rgba(24, 24, 27, 0.95) 0%, transparent 100%)",
                  padding: "1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <span style={{ color: "#38bdf8", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>Nueva Colección</span>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>Drop 01 — Heavyweight Hoodies</div>
                </div>
                <span style={{ background: "#38bdf8", color: "#09090b", fontWeight: 800, padding: "0.25rem 0.65rem", borderRadius: "6px", fontSize: "0.95rem" }}>
                  Desde S/ 69
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tienda Main Grid */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(320px, 360px)", gap: "2.5rem" }}>
          
          {/* Catalogo */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: "#27272a",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  border: "1px solid #3f3f46",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {prod.tag && (
                    <span style={{ background: "#38bdf8", color: "#09090b", fontSize: "0.7rem", fontWeight: 800, padding: "0.15rem 0.45rem", borderRadius: "4px" }}>
                      {prod.tag}
                    </span>
                  )}
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0.5rem 0 0.3rem" }}>{prod.name}</h3>
                  <p style={{ color: "#a1a1aa", fontSize: "0.85rem", lineHeight: 1.4 }}>{prod.desc}</p>
                  <p style={{ fontSize: "1.3rem", fontWeight: 900, color: "#fafafa", marginTop: "0.75rem" }}>
                    S/ {prod.price.toFixed(2)}
                  </p>

                  {/* Selector Talla */}
                  <div style={{ marginTop: "1rem" }}>
                    <label style={{ fontSize: "0.75rem", color: "#a1a1aa", display: "block", marginBottom: "0.3rem" }}>Talla:</label>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      {prod.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSizes((prev) => ({ ...prev, [prod.id]: s }))}
                          style={{
                            background: selectedSizes[prod.id] === s ? "#38bdf8" : "#18181b",
                            color: selectedSizes[prod.id] === s ? "#09090b" : "#fff",
                            border: "1px solid #52525b",
                            padding: "0.3rem 0.6rem",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector Color */}
                  <div style={{ marginTop: "0.75rem" }}>
                    <label style={{ fontSize: "0.75rem", color: "#a1a1aa", display: "block", marginBottom: "0.3rem" }}>Color:</label>
                    <select
                      value={selectedColors[prod.id] || prod.colors[0]}
                      onChange={(e) => setSelectedColors((prev) => ({ ...prev, [prod.id]: e.target.value }))}
                      style={{
                        width: "100%",
                        background: "#18181b",
                        color: "#fff",
                        border: "1px solid #52525b",
                        padding: "0.4rem",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {prod.colors.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(prod)}
                  style={{
                    width: "100%",
                    background: "#fafafa",
                    color: "#09090b",
                    border: "none",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    marginTop: "1.25rem",
                    textTransform: "uppercase",
                  }}
                >
                  + Agregar al Carrito
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Bar */}
          <div>
            <div
              style={{
                background: "#27272a",
                border: "1px solid #3f3f46",
                borderRadius: "12px",
                padding: "1.5rem",
                position: "sticky",
                top: "70px",
              }}
            >
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 1rem", borderBottom: "1px solid #3f3f46", paddingBottom: "0.75rem" }}>
                🛍️ Bolsa de Compras ({cartList.length})
              </h2>

              {cartList.length === 0 ? (
                <div style={{ textAlign: "center", padding: "2rem 0", color: "#71717a" }}>
                  <p>Tu bolsa está vacía.</p>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: "250px", overflowY: "auto" }}>
                    {cartList.map((item, idx) => (
                      <div key={idx} style={{ borderBottom: "1px solid #3f3f46", paddingBottom: "0.5rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 700 }}>
                          <span>
                            {item.qty}x {item.product.name}
                          </span>
                          <span>S/ {(item.product.price * item.qty).toFixed(2)}</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#a1a1aa", marginTop: "0.2rem" }}>
                          <span>Talla: {item.size} · {item.color}</span>
                          <button
                            onClick={() => removeCartItem(`${item.product.id}-${item.size}-${item.color}`)}
                            style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "0.75rem" }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <label style={{ fontSize: "0.8rem", color: "#a1a1aa", display: "block", marginBottom: "0.3rem" }}>Destino del Envío:</label>
                    <select
                      value={shippingCity}
                      onChange={(e) => setShippingCity(e.target.value)}
                      style={{ width: "100%", background: "#18181b", color: "#fff", border: "1px solid #52525b", padding: "0.5rem", borderRadius: "6px", fontSize: "0.85rem", marginBottom: "0.75rem" }}
                    >
                      <option value="Lima Metropolitana (Express S/ 10)">Lima Metropolitana (Express S/ 10)</option>
                      <option value="Provincias — Agencia Shalom (S/ 15)">Provincias — Agencia Shalom (S/ 15)</option>
                      <option value="Provincias — Olva Courier a Domicilio (S/ 18)">Provincias — Olva Courier a Domicilio (S/ 18)</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Tu nombre para el despacho"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      style={{ width: "100%", background: "#18181b", color: "#fff", border: "1px solid #52525b", padding: "0.5rem", borderRadius: "6px", fontSize: "0.85rem", marginBottom: "1rem", boxSizing: "border-box" }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#a1a1aa" }}>
                      <span>Subtotal:</span>
                      <span>S/ {subtotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#a1a1aa", marginTop: "0.2rem" }}>
                      <span>Envío:</span>
                      <span>S/ {shippingCost.toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: 900, color: "#38bdf8", marginTop: "0.5rem" }}>
                      <span>Total a Pagar:</span>
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
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        marginTop: "1rem",
                      }}
                    >
                      Comprar por WhatsApp →
                    </button>
                    <p style={{ fontSize: "0.75rem", color: "#a1a1aa", textAlign: "center", marginTop: "0.5rem" }}>
                      Paga seguro con Yape, Plin o Transferencia bancaria
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
