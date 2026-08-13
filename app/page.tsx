import Header from "@/components/Header";

const services = [
  {
    num: "01",
    title: "Software a medida",
    desc: "Sistemas web, internos y de gestión diseñados alrededor de tu operación real — no alrededor de un molde genérico.",
    tags: ["Web apps", "Paneles de gestión", "APIs", "Bases de datos"],
  },
  {
    num: "02",
    title: "Automatización",
    desc: "Convertimos tareas manuales y repetitivas en flujos que corren solos: reportes, notificaciones, sincronización entre herramientas.",
    tags: ["Flujos de trabajo", "Reportes automáticos", "Bots", "Procesamiento de datos"],
  },
  {
    num: "03",
    title: "Integraciones",
    desc: "Conectamos las herramientas que ya usas — CRM, hojas de cálculo, facturación, correo — para que hablen entre sí.",
    tags: ["API REST", "Webhooks", "Google Workspace", "CRMs"],
  },
  {
    num: "04",
    title: "Mantenimiento y soporte",
    desc: "Tu software evoluciona con tu empresa. Nos encargamos de mejoras, correcciones y monitoreo después del lanzamiento.",
    tags: ["Monitoreo", "Mejoras continuas", "Soporte"],
  },
];

const steps = [
  {
    num: "01",
    title: "Escuchamos",
    desc: "Entendemos tu operación, tu dolor y tu objetivo antes de escribir una sola línea.",
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
  "Software a medida",
  "Automatización de procesos",
  "Integraciones API",
  "Dashboards",
  "Bots y flujos internos",
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
            <p className="kicker">Desarrollo de software · Automatización</p>
            <h1>
              Tu negocio gira en un punto.
              <br />
              Nosotros movemos <span className="outline">el resto.</span>
            </h1>
            <p className="hero-sub">
              Diseñamos y construimos software a medida, e integramos
              automatizaciones que eliminan el trabajo repetitivo. Menos
              fricción, más velocidad.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-accent">
                Hablemos de tu proyecto
              </a>
              <a href="#servicios" className="btn">
                Ver servicios
              </a>
            </div>
            <p className="hero-note">// Proyectos claros, alcance definido, sin sorpresas.</p>
          </div>
          <div className="orbit" aria-hidden="true">
            <div className="ring" />
            <div className="ring r2" />
            <div className="ring r3" />
            <div className="axis" />
            <div className="axis h" />
            <div className="core">
              <span>PIVOT</span>
            </div>
            <div className="dot" />
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
            <h2>¿Tienes un proceso que debería funcionar solo?</h2>
            <p>
              Cuéntanos qué te quita tiempo hoy. En una conversación corta te
              decimos si tiene solución simple — y si no la tiene, también te
              lo decimos.
            </p>
            <a href="mailto:hola@pivotsolutions.com" className="btn">
              Escríbenos →
            </a>
          </div>
          <div className="cta-mail">
            <b>hola@pivotsolutions.com</b>
            Lima · Remoto · Latam
          </div>
        </div>
      </section>
      </main>

      <footer className="footer">
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} PIVOT SOLUTIONS — Software y automatización</span>
        <span>
          <a href="mailto:hola@pivotsolutions.com">hola@pivotsolutions.com</a>
          {" · "}
          <a href="#top">Inicio ↑</a>
        </span>
      </div>
      </footer>
    </>
  );
}
