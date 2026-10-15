import Header from "@/components/Header";
import DemoShowcase from "@/components/DemoShowcase";
import PricingSection from "@/components/PricingSection";
import RoiCalculator from "@/components/RoiCalculator";
import VrStudioSection from "@/components/VrStudioSection";
import ProposalGenerator from "@/components/ProposalGenerator";

const WHATSAPP =
  "https://wa.me/51981906958?text=" +
  encodeURIComponent("Hola LimaSync Solutions, quiero cotizar mi sitio web por S/ 500");

const EMAIL = "limasync0@gmail.com";

const services = [
  {
    num: "01",
    title: "Desarrollo Web Express (S/ 500)",
    desc: "Sitios corporativos y landing pages diseñados para vender. Rápidos, claros, optimizados para celulares y entregados en 72 horas.",
    tags: ["Landing pages", "Entrega 72h", "WhatsApp Checkout", "Dominio .com"],
  },
  {
    num: "02",
    title: "Dashboards y Paneles",
    desc: "Paneles de gestión y reportes en tiempo real para que decidas con datos de tu negocio, no con corazonadas.",
    tags: ["Dashboards", "Reportes en tiempo real", "KPIs", "Visualización de datos"],
  },
  {
    num: "03",
    title: "Automatización & Bots",
    desc: "Convertimos tareas repetitivas en flujos que corren solos: notificaciones a WhatsApp, reportes por correo y sincronización entre apps.",
    tags: ["Flujos de trabajo", "Notificaciones WhatsApp", "Integraciones API", "Google Sheets"],
  },
  {
    num: "04",
    title: "POS & Carta Digital para Restaurantes",
    desc: "Control de mesas, carta QR y pedidos directos a cocina o WhatsApp, desde la primera comanda hasta el cierre de caja.",
    tags: ["Carta QR", "Pedidos WhatsApp", "Control de mesas", "Caja rápida"],
  },
];

const steps = [
  {
    num: "01",
    title: "Elegimos tu Plantilla",
    desc: "Seleccionamos la arquitectura ideal según tu rubro (Restaurante, Salud, Legal, Tienda o Servicios).",
  },
  {
    num: "02",
    title: "Anticipo del 50% (S/ 250)",
    desc: "Nos envías tu logo, fotos y teléfonos. Aseguramos el inicio inmediato con contrato estándar.",
  },
  {
    num: "03",
    title: "Desarrollo Express en 72 Horas",
    desc: "Configuramos tu dominio, SSL, diseño responsive y botones directos de WhatsApp en tiempo récord.",
  },
  {
    num: "04",
    title: "Lanzamiento & Capacitación",
    desc: "Verificas la web en vivo, abonas el 50% restante (S/ 250) y te capacitamos en 15 min para operarla.",
  },
];

const stripItems = [
  "Entrega en 72 Horas",
  "Webs desde S/ 500",
  "Meta Quest VR Studio",
  "Pedidos directos a WhatsApp",
  "Dominio .com & SSL Incluido",
  "Mantenimiento S/ 100/mes",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <div className="wrap">
          <div className="hero">
            <div>
              <p className="kicker">Agencia Web · Software · Estudio Meta Quest VR</p>
              <h1>
                Tu negocio en línea,
                <br />
                <span className="outline">en 72 horas por S/ 500.</span>
              </h1>
              <p className="hero-sub">
                Creamos páginas web de alto impacto, paneles y soluciones digitales en Lima.
                Sin contratos complicados ni sobrecostos: 50% de inicio y 50% contra entrega verificada.
              </p>
              <div className="hero-actions">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Hablemos por WhatsApp →
                </a>
                <a href="#demos" className="btn">
                  Ver Demos en Vivo ↓
                </a>
              </div>
              <p className="hero-note">{"// Entrega en 72h · Dominio .com y SSL incluidos · Soporte continuo"}</p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="win">
                <div className="win-bar">
                  <span className="win-dot" />
                  <span className="win-dot accent" />
                  <span className="win-dot" />
                  <span className="win-title">limasync-deploy.sh</span>
                </div>
                <div className="win-body">
                  <p>
                    <span className="p">$</span> limasync deploy --client "pyme-lima"
                  </p>
                  <p>
                    <span className="ok">✓</span> plantilla maestra configurada (72h)
                  </p>
                  <p>
                    <span className="ok">✓</span> dominio .com &amp; SSL activo
                  </p>
                  <p>
                    <span className="ok">✓</span> pedidos y cotizaciones → WhatsApp
                  </p>
                  <p>
                    <span className="ok">✓</span> VR Lab: Meta Quest 3S (90 FPS)
                  </p>
                  <p>
                    <span className="p">$</span> <span className="cursor" />
                  </p>
                </div>
              </div>
              <span className="chip chip-1">S/ 500</span>
              <span className="chip chip-2">72 Horas</span>
            </div>
          </div>
        </div>

        {/* STRIP */}
        <div className="strip" aria-hidden="true">
          <div className="strip-inner">
            {[...stripItems, ...stripItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* 01 SERVICIOS */}
        <section id="servicios">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="kicker" style={{ color: "var(--accent-strong)" }}>
                  Soluciones de Ingeniería de Sistemas
                </p>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>Qué hacemos</h2>
              </div>
              <span className="sec-num">01 / Servicios</span>
            </div>

            <div className="svc">
              {services.map((s) => (
                <div className="svc-row" key={s.num}>
                  <span className="svc-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <div>
                    <p>{s.desc}</p>
                    <div className="svc-tags">
                      {s.tags.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 DEMOS EN VIVO */}
        <DemoShowcase />

        {/* 03 PRECIOS & CONTRATO */}
        <PricingSection />
        <div className="wrap">
          <ProposalGenerator />
        </div>

        {/* 04 CALCULADORA ROI */}
        <RoiCalculator />

        {/* 05 ESTUDIO VR META QUEST */}
        <VrStudioSection />

        {/* 06 PROCESO */}
        <section id="proceso" style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="kicker" style={{ color: "var(--accent-strong)" }}>
                  Metodología Ágil 72 Horas
                </p>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>Cómo trabajamos</h2>
              </div>
              <span className="sec-num">06 / Proceso</span>
            </div>
            <div className="steps">
              {steps.map((st) => (
                <div className="step" key={st.num}>
                  <span className="step-num">{st.num}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="cta">
          <div className="wrap">
            <div>
              <h2>¿Listo para poner tu negocio en línea en 72 horas?</h2>
              <p>
                Escríbenos por WhatsApp con el nombre y rubro de tu negocio. En 10 minutos
                te mostramos la demo recomendada y coordinamos el inicio con solo S/ 250 de anticipo.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn">
                Escríbenos por WhatsApp (+51 981 906 958) →
              </a>
            </div>
            <div className="cta-mail">
              <b>{EMAIL}</b>
              WhatsApp +51 981 906 958 · Lima · San Isidro · Miraflores · Remoto
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} LIMASYNC SOLUTIONS — Agencia Web &amp; Meta Quest VR Studio</span>
          <span>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp (+51 981 906 958)
            </a>
            {" · "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            {" · "}
            <a href="#top">Inicio ↑</a>
          </span>
        </div>
      </footer>
    </>
  );
}
