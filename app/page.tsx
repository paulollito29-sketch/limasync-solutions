import Header from "@/components/Header";

const WHATSAPP =
  "https://wa.me/51981906958?text=" +
  encodeURIComponent("Hola LimaSync Solutions, quiero cotizar un proyecto");

const EMAIL = "limasync0@gmail.com";

const services = [
  {
    num: "01",
    title: "Desarrollo web",
    desc: "Sitios y tiendas virtuales diseñados para vender: rápidos, claros y hechos a la medida de tu negocio.",
    tags: ["Landing pages", "Tiendas virtuales", "E-commerce", "Web apps"],
  },
  {
    num: "02",
    title: "Dashboards y paneles",
    desc: "Paneles de gestión y reportes en tiempo real para que decidas con datos, no con corazonadas.",
    tags: ["Dashboards", "Reportes en tiempo real", "KPIs", "Visualización de datos"],
  },
  {
    num: "03",
    title: "Automatización",
    desc: "Convertimos tareas repetitivas en flujos que corren solos: reportes, notificaciones y sincronización entre herramientas.",
    tags: ["Flujos de trabajo", "Reportes automáticos", "Bots", "Integraciones API"],
  },
  {
    num: "04",
    title: "POS restaurante",
    desc: "Control de mesas y pedidos para restaurantes, desde la primera orden hasta el cierre de caja.",
    tags: ["Control de mesas", "Pedidos", "Reportes de venta", "Caja"],
  },
];

const steps = [
  {
    num: "01",
    title: "Escuchamos",
    desc: "Entendemos tu negocio, tu operación y tu objetivo antes de escribir una sola línea.",
  },
  {
    num: "02",
    title: "Proponemos",
    desc: "Alcance, plan y presupuesto claros. Sabes exactamente qué se construye y cuánto cuesta.",
  },
  {
    num: "03",
    title: "Construimos",
    desc: "Desarrollo en ciclos cortos con entregas visibles. Nada de cajas negras ni sorpresas de último minuto.",
  },
  {
    num: "04",
    title: "Entregamos",
    desc: "Puesta en marcha, documentación y soporte. Tu equipo queda operando sin depender de nosotros.",
  },
];

const stripItems = [
  "Dashboards y paneles",
  "Desarrollo web",
  "Tiendas virtuales",
  "Automatización",
  "POS restaurante",
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
              <p className="kicker">Agencia web · Software · Automatización</p>
              <h1>
                Tu negocio en línea,
                <br />
                <span className="outline">sin fricción.</span>
              </h1>
              <p className="hero-sub">
                Creamos webs, paneles y automatizaciones para negocios
                que quieren vender más sin complicarse la operación.
              </p>
              <div className="hero-actions">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Hablemos por WhatsApp
                </a>
                <a href="#servicios" className="btn">
                  Ver servicios
                </a>
              </div>
              <p className="hero-note">{"// Diseño claro, alcance definido, sin sorpresas."}</p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="win">
                <div className="win-bar">
                  <span className="win-dot" />
                  <span className="win-dot accent" />
                  <span className="win-dot" />
                  <span className="win-title">limasync.sh</span>
                </div>
                <div className="win-body">
                  <p>
                    <span className="p">$</span> limasync build --site
                  </p>
                  <p>
                    <span className="ok">✓</span> landing creada
                  </p>
                  <p>
                    <span className="ok">✓</span> dashboard en línea
                  </p>
                  <p>
                    <span className="ok">✓</span> pedidos → WhatsApp
                  </p>
                  <p>
                    <span className="p">$</span> <span className="cursor" />
                  </p>
                </div>
              </div>
              <span className="chip chip-1">v1.0</span>
              <span className="chip chip-2">KPI</span>
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

        {/* SERVICIOS */}
        <section id="servicios">
          <div className="wrap">
            <div className="sec-head">
              <h2>Qué hacemos</h2>
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

        {/* PROCESO */}
        <section id="proceso" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <h2>Cómo trabajamos</h2>
              <span className="sec-num">02 / Proceso</span>
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

        {/* CTA */}
        <section id="contacto" className="cta">
          <div className="wrap">
            <div>
              <h2>¿Quieres que tu negocio venda más?</h2>
              <p>
                Cuéntanos qué necesitas por WhatsApp. En una conversación corta
                te decimos qué se puede hacer — y cuánto costaría.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn">
                Escríbenos por WhatsApp →
              </a>
            </div>
            <div className="cta-mail">
              <b>{EMAIL}</b>
              WhatsApp +51 981 906 958 · Lima · Remoto · Latam
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} LIMASYNC SOLUTIONS — Agencia web y automatización</span>
          <span>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp
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
