export interface Business {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  rubro: string;
  category: "belleza" | "restaurante" | "hotel";
  styleTheme: {
    name: string;
    description: string;
    fontFamilyHeading: string;
    fontFamilyBody: string;
    bgClass: string;
    accentColor: string;
    badgeStyle: string;
    cardStyle: string;
  };
  address: string;
  phone: string;
  cleanPhone: string;
  rating: string;
  reviewCount: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutStory: string;
  services: {
    title: string;
    price: string;
    duration?: string;
    description: string;
    highlight?: boolean;
  }[];
  specials: {
    title: string;
    tag: string;
    description: string;
  }[];
  reviews: {
    author: string;
    text: string;
    stars: number;
    badge?: string;
  }[];
  hours: {
    days: string;
    time: string;
  }[];
  features: string[];
}

export const businesses: Business[] = [
  {
    id: "P010",
    slug: "leivonns-salon-spa",
    name: "Leivonns Salón & Spa",
    tagline: "Alta Peluquería & Cuidado Capilar Experto en San Miguel",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Editorial Rosé & Velvet Gold",
      description: "Estilo revista de moda de lujo, serif clásico, fondos arena cálidos y toques de oro rosado.",
      fontFamilyHeading: "'Playfair Display', Georgia, serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#FAF7F2] text-[#1C1917]",
      accentColor: "#D97706",
      badgeStyle: "bg-[#FDF4E6] text-[#B45309] border border-[#FDE68A]",
      cardStyle: "bg-white/90 border border-[#E7E0D3] shadow-sm",
    },
    address: "Jr. Lima 1392, San Miguel, Lima 15087",
    phone: "(01) 5028326",
    cleanPhone: "51906920958", // Vinculado a soporte o demo
    rating: "4.8",
    reviewCount: "128 reseñas verificadas",
    heroHeadline: "El arte de resaltar tu belleza con técnicas de vanguardia.",
    heroSubheadline: "Especialistas en balayage orgánico, alisados de keratina sin formol y tratamientos de spa relajantes en el corazón de Jr. Lima.",
    aboutStory: "En Leivonns combinamos estilistas con más de 12 años de trayectoria y productos importados de alta gama para brindarte un servicio personalizado que cuida la salud real de tu cabello y piel.",
    services: [
      { title: "Balayage & Colorimetría Signature", price: "Desde S/ 180", duration: "180 min", description: "Diseño de color personalizado con decoloración protectora y matizado botánico.", highlight: true },
      { title: "Alisado Orgánico & Botox Capilar", price: "Desde S/ 150", duration: "120 min", description: "Reconstrucción intensiva que elimina el frizz y devuelve el brillo de espejo sin maltratar." },
      { title: "Manicure Rusa & Soft Gel", price: "Desde S/ 65", duration: "75 min", description: "Limpieza profunda de cutícula, nivelación y esmaltado en gel de larga duración." },
      { title: "Facial Hidratante Profundo + Luz LED", price: "Desde S/ 90", duration: "60 min", description: "Extracción ultrasónica, vapor de ozono y mascarilla de colágeno regenerativo." }
    ],
    specials: [
      { title: "Miércoles de Renacimiento Capilar", tag: "-20% OFF", description: "Tratamiento de nutrición Olaplex gratis con tu servicio de corte o tinte." },
      { title: "Combo Uñas + Pestañas 1x1", tag: "Pack Especial", description: "Manicure en gel + lifting de pestañas por solo S/ 110." }
    ],
    reviews: [
      { author: "Valeria Cárdenas", text: "El mejor balayage que me han hecho en Lima. Entendieron exactamente el tono que quería y mi cabello quedó súper suave.", stars: 5, badge: "Cliente recurrente" },
      { author: "Andrea Morales", text: "Excelente atención de todo el equipo en Jr. Lima. El ambiente es relajante y muy pulcro.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "09:30 AM – 08:30 PM" },
      { days: "Domingos", time: "10:00 AM – 06:00 PM (Previa Cita)" }
    ],
    features: ["Atención con cita programada", "Wi-Fi de alta velocidad & Café de cortesía", "Estacionamiento cercano", "Aceptamos Yape, Plin y todas las tarjetas"]
  },
  {
    id: "P011",
    slug: "mentha-salon-spa",
    name: "Mentha Salón & Spa",
    tagline: "Eco-Estética Botánica, Aromaterapia & Belleza Consciente",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Organic Botanical & Sage Minimal",
      description: "Estética nórdica y botánica, tonos salvia (#15803d/#2dd4bf), minimalismo zen y tarjetas orgánicas.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#F3F7F4] text-[#132A1C]",
      accentColor: "#15803D",
      badgeStyle: "bg-[#E6F4EA] text-[#166534] border border-[#BBF7D0]",
      cardStyle: "bg-white border border-[#D1E7D8] shadow-sm",
    },
    address: "Av. Lima 562, San Miguel 15086",
    phone: "(01) 2632591",
    cleanPhone: "51906920958",
    rating: "4.9",
    reviewCount: "94 opiniones",
    heroHeadline: "Tu oasis de desconexión y cuidado natural en Av. Lima.",
    heroSubheadline: "Tratamientos capilares orgánicos, aromaterapia relajante y estética facial no invasiva diseñada para tu bienestar holístico.",
    aboutStory: "En Mentha creemos que el verdadero cuidado nace del respeto al cuerpo. Empleamos cosmética cruelty-free y formulaciones libres de amoníaco ni sulfatos pesados, en un espacio donde cada detalle invita a respirar paz.",
    services: [
      { title: "Detox Capilar de Menta & Romero", price: "Desde S/ 110", duration: "60 min", description: "Exfoliación suave de cuero cabelludo con aceites esenciales para activar el crecimiento.", highlight: true },
      { title: "Tinte Botánico Sin Amoníaco", price: "Desde S/ 140", duration: "90 min", description: "Cobertura total de canas y brillo sedoso respetando la fibra capilar." },
      { title: "Masaje Antiestrés con Piedras Calientes", price: "S/ 120", duration: "60 min", description: "Descontracturante de espalda y cuello con aceites herbales tibios de lavanda." },
      { title: "Pedicure Spa Botánico", price: "S/ 70", duration: "60 min", description: "Inmersión en sales minerales, exfoliación cítrica y reflexología podal relajante." }
    ],
    specials: [
      { title: "Plan Relax Dúo", tag: "Promo Amigas", description: "Ven con una acompañante a facial + masaje y obtén 25% de descuento en la segunda persona." }
    ],
    reviews: [
      { author: "Fiorella Wong", text: "Es entrar y desconectarte del tráfico de San Miguel. La aromaterapia y el trato son insuperables.", stars: 5 },
      { author: "Camila Rivas", text: "El detox capilar me solucionó la resequedad. Productos de primera calidad.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "09:00 AM – 08:00 PM" },
      { days: "Domingos", time: "Cerrado" }
    ],
    features: ["Productos certificados veganos y orgánicos", "Bebida detox de cortesía", "Ambiente climatizado con aromaterapia", "Pagos digitales directos"]
  },
  {
    id: "P018",
    slug: "la-maquinita-del-sabor",
    name: "La Maquinita Del Sabor",
    tagline: "Cevichería Criolla Tradicional & Mar de Fuego en San Miguel",
    rubro: "Restaurante y cafetería",
    category: "restaurante",
    styleTheme: {
      name: "Seafood Vibrant & Coastal Ocean",
      description: "Estilo costero marino con toques vibrantes de naranja cítrico y azul marino profundo, tipografía con fuerza criolla.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#0A192F] text-[#F1F5F9]",
      accentColor: "#F97316",
      badgeStyle: "bg-[#F97316]/20 text-[#FB923C] border border-[#F97316]/40",
      cardStyle: "bg-[#112240] border border-[#233554] shadow-md",
    },
    address: "Pando 9na Etapa, Av. Venezuela Cdr. 36 Mz B Lt 5, San Miguel",
    phone: "(01) 3701135",
    cleanPhone: "51906920958",
    rating: "4.7",
    reviewCount: "310 reseñas en Maps",
    heroHeadline: "La sazón marina que no perdona: Pesca fresca del día y fuego criollo.",
    heroSubheadline: "Ceviches al momento, arroz con mariscos humeante, chicharrones crocantes y rondas marinas para compartir en familia y amigos.",
    aboutStory: "Nacidos con la pasión de la cocina de barrio chalaco-limeña, en La Maquinita del Sabor cocinamos con pescado de primera calidad, limón recién exprimido y ese toque picante y generoso que deja huella.",
    services: [
      { title: "Ceviche Clásico Carretillero", price: "S/ 36", description: "Pesca del día con chicharrón de pota crocante, camote glaseado y choclo tierno.", highlight: true },
      { title: "Ronda Marina 'La Maquinita'", price: "S/ 72", description: "Ceviche tradicional + Arroz con mariscos + Causa de pulpa de cangrejo + Chicharrón mixto." },
      { title: "Arroz con Mariscos a la Limeña", price: "S/ 42", description: "Cremoso, salteado al wok con conchas, langostinos, calamares y salsa madre criolla." },
      { title: "Jalea Mixta Especial", price: "S/ 48", description: "Trozos crocantes de pescado y mariscos con yucas fritas y tártara casera de la casa." }
    ],
    specials: [
      { title: "Chilcano de Cortesía", tag: "Todos los días", description: "Por cada plato marino fuerte te servimos un concentrado de chilcano de pescado bien caliente." },
      { title: "Dúo Marino Ejecutivo", tag: "Lunes a Viernes", description: "Ceviche + Chicharrón de pescado a precio especial hasta las 3:00 PM." }
    ],
    reviews: [
      { author: "Jorge Mendoza", text: "¡El ceviche está en su punto exacto! Buenísima porción, pescado fresquísimo y el chicharrón crujiente.", stars: 5 },
      { author: "Lucía Paredes", text: "La ronda marina alcanza fácil para 3 personas. Excelente atención y rápido despacho.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Domingo", time: "10:30 AM – 05:30 PM" }
    ],
    features: ["Insumos frescos del terminal pesquero cada mañana", "Amplio salón ventilado", "Delivery express en San Miguel y zonas aledañas", "Aceptamos Yape, Plin y tarjetas"]
  },
  {
    id: "P022",
    slug: "aura-salon-spa",
    name: "Aura Salón Spa",
    tagline: "Vanguardia en Tendencias de Belleza & Estilismo Capilar",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Luxury Dark Plum & Golden Glass",
      description: "Estilo sofisticado nocturno/luxe, morados profundos, contrastes dorados y diseño de cristal translúcido.",
      fontFamilyHeading: "'Playfair Display', serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#181124] text-[#F5F3FF]",
      accentColor: "#C084FC",
      badgeStyle: "bg-[#581C87]/50 text-[#E9D5FF] border border-[#9333EA]",
      cardStyle: "bg-[#251A38]/80 border border-[#3B2857] shadow-xl backdrop-blur-md",
    },
    address: "Av. Lima 1376 (Altura Tottus de La Marina), San Miguel",
    phone: "987 555 803",
    cleanPhone: "51906920958",
    rating: "4.8",
    reviewCount: "142 clientas felices",
    heroHeadline: "Tu estilo, elevado a su máxima expresión de brillo y elegancia.",
    heroSubheadline: "Cortes modernos de autor, mechas babylights personalizadas y tratamientos de colágeno frente a Tottus de La Marina.",
    aboutStory: "En Aura creemos que una visita al salón debe ser una experiencia transformadora. Nuestro equipo se capacita constantemente en las últimas técnicas globales para que salgas luciendo radiante y renovada.",
    services: [
      { title: "Babylights & Mechas Iluminadas", price: "Desde S/ 190", duration: "180 min", description: "Efecto de luz natural ultrafino sin marcas bruscas, con hidratación intensiva post-color.", highlight: true },
      { title: "Lifting de Pestañas + Tinte + Keratina", price: "S/ 85", duration: "60 min", description: "Curvatura y definición de mirada que dura de 4 a 6 semanas." },
      { title: "Corte de Cabello de Autor + Brushing", price: "S/ 55", duration: "45 min", description: "Visagismo según la forma de tu rostro para dar volumen y movimiento." },
      { title: "Acrílicas Esculpidas & Baby Boomer", price: "S/ 95", duration: "90 min", description: "Estructura perfecta con acabado degradé y encapsulado resistente." }
    ],
    specials: [
      { title: "Viernes Glamour", tag: "Fin de Semana", description: "Cepillado con ondas + Maquillaje social exprés por S/ 99." }
    ],
    reviews: [
      { author: "Daniela Salazar", text: "Excelente ubicación al costado de La Marina. Las mechas me quedaron espectaculares.", stars: 5 },
      { author: "Patricia Vega", text: "El lifting de pestañas duró intacto más de un mes. 100% recomendado.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "10:00 AM – 09:00 PM" },
      { days: "Domingos", time: "11:00 AM – 06:00 PM" }
    ],
    features: ["Ubicación estratégica con acceso rápido", "Productos L'Oréal y Wella profesionales", "Café Nespresso & bebidas frías", "Agendamiento ágil por WhatsApp"]
  },
  {
    id: "P027",
    slug: "kawai-salon-spa",
    name: "Kawai Salón & Spa",
    tagline: "Nail Art Creativo, Pestañas de Impacto & Cuidados Soft",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Pastel Chic & Candy Rose",
      description: "Estilo fresco, lúdico y juvenil, tonalidades pastel rosa/lila, tarjetas redondeadas y detalles kawaii modernos.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#FFF5F8] text-[#4A2035]",
      accentColor: "#EC4899",
      badgeStyle: "bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]",
      cardStyle: "bg-white border border-[#FBCFE8] shadow-sm rounded-2xl",
    },
    address: "Avenida Lima 1385, San Miguel",
    phone: "982 234 100",
    cleanPhone: "51906920958",
    rating: "4.9",
    reviewCount: "87 reseñas",
    heroHeadline: "El rincón más cute para mimarte de pies a cabeza.",
    heroSubheadline: "Diseños de uñas virales en TikTok, extensiones de pestañas efecto foxy y tratamientos faciales con mascarillas coreanas.",
    aboutStory: "Kawai nació para romper con la peluquería monótona. Aquí el nail art es una forma de arte, las pestañas se adaptan a tu vibra y cada rincón está pensado para que te tomes las mejores fotos después de tu cambio de look.",
    services: [
      { title: "Nail Art Temático & Efecto Ojo de Gato", price: "Desde S/ 75", duration: "75 min", description: "Diseños a mano alzada, pedrería coreana, degradados y polvos magnéticos.", highlight: true },
      { title: "Pestañas Volumen Ruso & Efecto Wispy", price: "S/ 110", duration: "90 min", description: "Fibras de seda ultra livianas que no dañan tu pestaña natural." },
      { title: "Planchado de Cejas + Brow Lamination", price: "S/ 55", duration: "45 min", description: "Diseño visajístico y fijación para unas cejas pobladas y peinadas." },
      { title: "Facial Coreano Glass Skin", price: "S/ 95", duration: "60 min", description: "Doble limpieza, peeling enzimático suave y ampolla iluminadora de centella asiática." }
    ],
    specials: [
      { title: "Pack Kawai Queen", tag: "Best Seller", description: "Uñas en gel con diseño + Pestañas clásicas por solo S/ 135." }
    ],
    reviews: [
      { author: "Stefany Silva", text: "¡Las chicas hacen cualquier diseño que les muestres en Pinterest! Mis uñas quedaron idénticas.", stars: 5 },
      { author: "Melany Ramos", text: "El local es hermoso y la atención súper dulce. Volveré siempre.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "10:00 AM – 08:00 PM" }
    ],
    features: ["Especialistas en tendencias virales de uñas", "Ambiente instagrameable con set fotográfico", "Esterilización de herramientas en autoclave clínica", "Promos para estudiantes con carnet"]
  },
  {
    id: "P038",
    slug: "cevicheria-tentaciones",
    name: "Cevicheria Peruana Tentaciones",
    tagline: "El Auténtico Sabor del Mercado Modelo de San Miguel",
    rubro: "Restaurante y cafetería",
    category: "restaurante",
    styleTheme: {
      name: "Street Food Gourmet & Warm Amber",
      description: "Estética de gastronomía popular premium, amarillos dorados y pizarra oscura, fotografías apetitosas y tipografía directa.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#1E1B18] text-[#F5F5F4]",
      accentColor: "#EAB308",
      badgeStyle: "bg-[#FEF08A]/10 text-[#FACC15] border border-[#CA8A04]/40",
      cardStyle: "bg-[#292524] border border-[#44403C] shadow-lg",
    },
    address: "Av. La Paz Cdra. 8 (Mercado Modelo Puesto 115 - 116), San Miguel",
    phone: "965 853 698",
    cleanPhone: "51906920958",
    rating: "4.8",
    reviewCount: "250 comensales frecuentes",
    heroHeadline: "El secreto mejor guardado de Av. La Paz: Pescado fresquito y generosidad criolla.",
    heroSubheadline: "Porciones bien servidas, leche de tigre potente y ese sabor casero de mercado que nunca falla desde hace más de 15 años.",
    aboutStory: "En el Mercado Modelo de San Miguel, el Puesto 115-116 es una parada obligatoria. Tentaciones nació de la tradición marina más pura: comprar directo del muelle a las 5 AM para servir platos recién hechos con limón norteño y ají limo picado al instante.",
    services: [
      { title: "Trío Marino 'Tentación'", price: "S/ 38", description: "Ceviche de pescado fresco + Arroz con mariscos ahumado + Chicharrón crocante de calamar.", highlight: true },
      { title: "Ceviche Mixto con Conchas Negras", price: "S/ 42", description: "Pesca fresca, pulpo, langostinos y conchas negras importadas de Tumbes." },
      { title: "Leche de Tigre 'Levanta Muertos'", price: "S/ 18", description: "Copa generosa con trozos de pescado, canchita crocante y chicharrón de pota." },
      { title: "Parihuela de Pescado Entero", price: "S/ 35", description: "Sopa marina concentrada a base de chicha de jora, cangrejo y frutos del mar." }
    ],
    specials: [
      { title: "Plato Ejecutivo del Día", tag: "Almuerzos", description: "Ceviche con chicharrón + vaso de chicha morada casera a solo S/ 25 de 11:30 AM a 2:30 PM." }
    ],
    reviews: [
      { author: "Carlos Benítez", text: "El mejor ceviche del Mercado Modelo sin discusión. Porciones abundantes y el pescado no tiene rival.", stars: 5 },
      { author: "Rosa Elvira Ruiz", text: "Vengo con mi familia todos los fines de semana. Rápido, higiénico y con un sabor increíble.", stars: 5 }
    ],
    hours: [
      { days: "Martes a Domingo", time: "09:30 AM – 05:00 PM" },
      { days: "Lunes", time: "Cerrado por abastecimiento" }
    ],
    features: ["Pescado blanco seleccionado del día", "Mesas cómodas y atención familiar", "Pedidos para llevar en envases térmicos sellados", "Yape y Plin disponible"]
  },
  {
    id: "P045",
    slug: "bellisimas-salon-spa",
    name: "Bellisima's Salón & Spa",
    tagline: "Especialistas en Transformaciones Capilares & Cuidado Integral",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Modern Lavender & Clean Slate",
      description: "Tonos lila/púrpura lavanda, diseño limpio y equilibrado, contrastes claros y atmósfera de confianza médica y cosmética.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#F8FAFC] text-[#0F172A]",
      accentColor: "#7C3AED",
      badgeStyle: "bg-[#EDE9FE] text-[#6D28D9] border border-[#DDD6FE]",
      cardStyle: "bg-white border border-[#E2E8F0] shadow-sm",
    },
    address: "Av. Rafael Escardó 412, San Miguel 15087",
    phone: "940 208 893",
    cleanPhone: "51906920958",
    rating: "4.7",
    reviewCount: "78 opiniones",
    heroHeadline: "Cuida tu imagen con manos profesionales en Av. Escardó.",
    heroSubheadline: "Diagnóstico capilar computarizado, tratamientos para cabellos procesados y manicura spa de alta durabilidad.",
    aboutStory: "En Bellisima's nos enfocamos en resultados reales y duraderos. Antes de cualquier procedimiento químico evaluamos la resistencia de tu fibra capilar para garantizar un cambio de look espectacular sin comprometer tu salud.",
    services: [
      { title: "Cirugía Capilar Anti-Volumen", price: "Desde S/ 160", duration: "120 min", description: "Sella la cutícula, reduce el encrespamiento hasta un 95% y aporta suavidad de seda.", highlight: true },
      { title: "Diseño y Perfilado de Cejas con Henna", price: "S/ 45", duration: "40 min", description: "Pigmentación vegetal que dura hasta 15 días con sombreado degradé." },
      { title: "Corte Bob & Capas Texturizadas", price: "S/ 50", duration: "45 min", description: "Asesoría de imagen personalizada con lavado dermatológico y finalizado con ondas." },
      { title: "Spa de Manos y Pies Parafina Caliente", price: "S/ 90", duration: "75 min", description: "Hidratación profunda para pieles secas, exfoliación y pulido de uñas." }
    ],
    specials: [
      { title: "Tratamiento de Brillo Cristal", tag: "Promo Mensual", description: "Añádelo a tu tinte por solo S/ 35 adicionales (precio regular S/ 70)." }
    ],
    reviews: [
      { author: "Karina Gómez", text: "Salvé mi cabello después de una mala decoloración en otro lugar. La cirugía capilar me lo dejó como nuevo.", stars: 5 },
      { author: "Lorena Flores", text: "Puntuales con las citas y muy amables. El spa de pies es un sueño.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "09:30 AM – 08:30 PM" }
    ],
    features: ["Diagnóstico capilar gratuito previo", "Personal certificado en marcas internacionales", "Zona de espera con estación de té y café", "Aceptamos tarjetas sin recargo"]
  },
  {
    id: "P047",
    slug: "d-maritza-salon-boutique",
    name: "D' Maritza Salón Spa y Boutique",
    tagline: "Estilismo Exclusivo & Moda Boutique en Maranga",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Warm Terracotta & Boutique Chic",
      description: "Tonos terracota y lino natural, espíritu cálido de boutique de barrio residencial, elegancia clásica.",
      fontFamilyHeading: "'Playfair Display', serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#FDFBF7] text-[#292524]",
      accentColor: "#EA580C",
      badgeStyle: "bg-[#FFEDD5] text-[#C2410C] border border-[#FDBA74]",
      cardStyle: "bg-white border border-[#E7E5E4] shadow-sm",
    },
    address: "Av. Los Precursores 795 (Urb. Maranga 4ta Etapa), San Miguel",
    phone: "986 414 112",
    cleanPhone: "51906920958",
    rating: "4.8",
    reviewCount: "65 clientes fieles",
    heroHeadline: "La combinación perfecta entre estilismo experto y prendas exclusivas.",
    heroSubheadline: "Renueva tu cabello y complementa tu outfit en un solo lugar con la atención cercana de la Sra. Maritza en Maranga.",
    aboutStory: "Con más de una década acompañando a las vecinas de Maranga y San Miguel, D' Maritza une un salón de belleza completo con una selecta boutique de ropa y accesorios ideales para eventos y el día a día.",
    services: [
      { title: "Peinado y Maquillaje Social para Eventos", price: "Desde S/ 130", duration: "90 min", description: "Preparación de piel blindada y peinados recogidos o semirrecogidos de alta fijación.", highlight: true },
      { title: "Tinte Raíces + Baño de Color", price: "Desde S/ 95", duration: "75 min", description: "Cobertura perfecta y brillo reflectante con sellado de nutrición." },
      { title: "Manicure Clásica + Esmalte OPI", price: "S/ 35", duration: "45 min", description: "Limpieza impecable con exfoliación de almendras y esmaltes de larga fijación." },
      { title: "Botox Capilar Rejuvenecedor", price: "Desde S/ 110", duration: "90 min", description: "Rellena la hebra capilar quebradiza con ácido hialurónico y aminoácidos." }
    ],
    specials: [
      { title: "Descuento Salón + Boutique", tag: "Exclusivo", description: "Por cualquier consumo mayor a S/ 80 en el salón, obtén 15% de descuento en la boutique." }
    ],
    reviews: [
      { author: "Gladys Huamán", text: "Maritza es una profesional increíble. Me arregló para la boda de mi hija y quedé fascinada.", stars: 5 },
      { author: "Silvia Castro", text: "La atención es muy cálida, como estar en casa pero saliendo regia. Buenos precios y calidad.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "10:00 AM – 08:00 PM" }
    ],
    features: ["Atención personalizada y asesoría de imagen", "Zona boutique con prendas exclusivas", "Ubicación tranquila en Maranga", "Ambiente acogedor y familiar"]
  },
  {
    id: "P057",
    slug: "venus-salon-spa",
    name: "Venus Salón & Spa",
    tagline: "El Templo de la Belleza & Relajación en Juana Riofrío",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Mythic Rose & Gold Elegance",
      description: "Estilo mitológico refinado, tonos oro y cuarzo rosa, tarjetas sofisticadas con sombras sutiles.",
      fontFamilyHeading: "'Playfair Display', serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#FFF9F9] text-[#261C1D]",
      accentColor: "#E11D48",
      badgeStyle: "bg-[#FFE4E6] text-[#BE123C] border border-[#FDA4AF]",
      cardStyle: "bg-white border border-[#F3E8E8] shadow-sm",
    },
    address: "Calle Juana Riofrío 174, San Miguel 15087",
    phone: "999 770 464",
    cleanPhone: "51906920958",
    rating: "4.8",
    reviewCount: "52 opiniones",
    heroHeadline: "Dedícate el tiempo que mereces en un espacio pensado para tu armonía.",
    heroSubheadline: "Servicios integrales de peluquería, masajes reductores, depilación profesional y manicura en una calle tranquila y segura.",
    aboutStory: "Venus Salón & Spa fue diseñado como un refugio de calma para consentirte. Cada sesión es un ritual donde la técnica profesional y los productos de alta calidad se unen para que te sientas renovada por dentro y por fuera.",
    services: [
      { title: "Masaje Relajante con Aromaterapia", price: "S/ 90", duration: "60 min", description: "Movimientos rítmicos que liberan tensiones musculares en espalda, hombros y cuello.", highlight: true },
      { title: "Tratamiento Reductor y Reafirmante", price: "Paquete 6 sesiones S/ 380", duration: "60 min/sesión", description: "Maderoterapia + Ondas Rusas + Gel criógeno para moldear cintura y abdomen." },
      { title: "Depilación con Cera de Miel Elástica", price: "Piernas completas S/ 50", duration: "40 min", description: "Cera tibia hipoalergénica que arranca el vello de raíz sin irritar la piel." },
      { title: "Laciado Dual con Macadamia", price: "Desde S/ 170", duration: "150 min", description: "Cabello liso natural con volumen controlado e hidratación prolongada." }
    ],
    specials: [
      { title: "Día de Spa Venus", tag: "Full Day", description: "Masaje relajante + Limpieza facial básica + Manicure spa por S/ 160." }
    ],
    reviews: [
      { author: "Rocío Salazar", text: "Excelente atención de las chicas. El masaje fue justo lo que necesitaba para el estrés de la semana.", stars: 5 },
      { author: "Carla Navarro", text: "Súper higiénico y reservado. La depilación es casi indolora, usan muy buena cera.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "09:00 AM – 08:00 PM" }
    ],
    features: ["Cabinas privadas para masajes y faciales", "Duchas y toallas esterilizadas", "Citas coordinadas por WhatsApp sin esperas", "Fácil estacionamiento en la calle"]
  },
  {
    id: "P090",
    slug: "d-veras-salon-spa",
    name: "D' Veras Salon Spa",
    tagline: "Especialistas en Color, Mechas & Alisados en Av. Faucett",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "High-Contrast Urban Slate & Neon Cyan",
      description: "Estética urbana y moderna, contraste en tonos grafito (#0F172A) con destellos de cian brillante (#06B6D4), rápido y dinámico.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#0B132B] text-[#E0E6ED]",
      accentColor: "#00E5FF",
      badgeStyle: "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30",
      cardStyle: "bg-[#1C2541] border border-[#3A506B] shadow-md",
    },
    address: "Av. Elmer Faucett 305, San Miguel 15088",
    phone: "(01) 4643663",
    cleanPhone: "51906920958",
    rating: "4.7",
    reviewCount: "115 reseñas",
    heroHeadline: "Cambios de look radicales con la máxima protección para tu cabello.",
    heroSubheadline: "Ubicados estratégicamente en la Av. Faucett, transformamos tu estilo con productos de nivel profesional y atención ágil.",
    aboutStory: "En D' Veras sabemos que tu tiempo es valioso. Ofrecemos servicios con tiempos optimizados y la destreza de estilistas experimentados en cortes modernos, colorimetría y laciados de larga duración.",
    services: [
      { title: "Balayage Contouring & Corrección de Color", price: "Desde S/ 175", duration: "180 min", description: "Técnica avanzada para neutralizar tonos no deseados y aportar luminosidad al rostro.", highlight: true },
      { title: "Alisado Japonés Termoactivo", price: "Desde S/ 160", duration: "150 min", description: "Lacio impecable tipo tabla que se activa con el calor del secador.", highlight: false },
      { title: "Corte Masculino & Barbería Premium", price: "S/ 35", duration: "35 min", description: "Degradado fade perfecto, perfilado de barba y lavado refrescante." },
      { title: "Uñas Esculpidas en Acrylgel", price: "S/ 85", duration: "90 min", description: "Resistencia máxima con acabado delgado y natural." }
    ],
    specials: [
      { title: "2x1 en Corte de Puntas con Tinte", tag: "Días de Semana", description: "Corte split-ender gratuito al realizarte cualquier tinte completo." }
    ],
    reviews: [
      { author: "Manuel Arana", text: "Excelente atención en Av. Faucett. Rápido y el corte quedó exactamente como lo pedí.", stars: 5 },
      { author: "Melissa Paz", text: "Hicieron milagros con mi color. El tono rubio cenizo quedó perfecto sin mancharse.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "09:00 AM – 09:00 PM" },
      { days: "Domingos", time: "10:00 AM – 06:00 PM" }
    ],
    features: ["Atención continua en horario extendido", "Servicio unisex para damas y caballeros", "Fácil acceso desde La Marina y Faucett", "Pagos con POS físico y billeteras electrónicas"]
  },
  {
    id: "P093",
    slug: "dalila-salon-spa",
    name: "Dalila Salón Spa",
    tagline: "El Salón de Barrio de Confianza en Mariscal Gamarra",
    rubro: "Belleza y bienestar",
    category: "belleza",
    styleTheme: {
      name: "Warm Peach & Serene Pearl",
      description: "Estilo acogedor y sereno, tonos melocotón perla, tipografía humanista, diseño limpio y familiar.",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#FFFBF5] text-[#292524]",
      accentColor: "#F97316",
      badgeStyle: "bg-[#FFEDD5] text-[#EA580C] border border-[#FDBA74]",
      cardStyle: "bg-white border border-[#E7E5E4] shadow-sm",
    },
    address: "Mariscal Agustín Gamarra 243, San Miguel 15087",
    phone: "920 846 342",
    cleanPhone: "51906920958",
    rating: "4.8",
    reviewCount: "48 valoraciones",
    heroHeadline: "Calidez, buen trato y precios honestos que cuidan tu economía.",
    heroSubheadline: "El lugar predilecto de las familias de San Miguel para peinados, tintes, manicure y cuidado personal sin complicaciones.",
    aboutStory: "Dalila Salón Spa se ha ganado el aprecio de sus clientas gracias a la honestidad en sus recomendaciones y un trato cariñoso que te hace sentir entre amigas mientras disfrutas de una atención esmerada.",
    services: [
      { title: "Cepillado con Ondas al Agua", price: "S/ 35", duration: "40 min", description: "Ondas naturales con movimiento y brillo que duran todo el fin de semana.", highlight: true },
      { title: "Tinte Tradicional con Ampolla Nutritiva", price: "Desde S/ 70", duration: "60 min", description: "Color parejo de raíces a puntas con tratamiento de keratina reparadora." },
      { title: "Manicure Clásica + Exfoliación", price: "S/ 25", duration: "35 min", description: "Limpieza suave y esmaltado con marcas reconocidas." },
      { title: "Tratamiento Anticaída con Alta Frecuencia", price: "S/ 60", duration: "45 min", description: "Estimulación capilar con ozono para fortalecer la raíz del cabello débil." }
    ],
    specials: [
      { title: "Jueves de Vecinas", tag: "Comunidad", description: "Manicure + Pedicure completo por solo S/ 45 los días jueves." }
    ],
    reviews: [
      { author: "Ana María Delgado", text: "Muy buena atención, Dalila es un encanto y siempre te recomienda lo que de verdad le hace bien a tu cabello.", stars: 5 },
      { author: "Juana Ríos", text: "Precios súper justos y el cepillado me dura un montón. Recomiendo sacar cita previa.", stars: 5 }
    ],
    hours: [
      { days: "Lunes a Sábado", time: "09:30 AM – 07:30 PM" }
    ],
    features: ["Precios accesibles sin perder calidad", "Ambiente acogedor y tranquilo", "Citas sin largas esperas", "Aceptamos efectivo, Yape y Plin"]
  },
  {
    id: "P113",
    slug: "nuna-hotel",
    name: "Nuna Hotel",
    tagline: "Descanso, Confort & Calidez en San Miguel",
    rubro: "Hospedaje",
    category: "hotel",
    styleTheme: {
      name: "Boutique Hospitality & Deep Indigo",
      description: "Estética de hotel boutique moderno, azul marino elegante (#0F172A), detalles en bronce dorado, tarjetas de reserva intuitivas.",
      fontFamilyHeading: "'Playfair Display', serif",
      fontFamilyBody: "'Plus Jakarta Sans', sans-serif",
      bgClass: "bg-[#0F172A] text-[#F8FAFC]",
      accentColor: "#38BDF8",
      badgeStyle: "bg-[#0369A1]/30 text-[#7DD3FC] border border-[#0284C7]/50",
      cardStyle: "bg-[#1E293B] border border-[#334155] shadow-xl",
    },
    address: "162 San Miguel, Tungasuca, Lima (A minutos del aeropuerto)",
    phone: "(01) 5782286",
    cleanPhone: "51906920958",
    rating: "4.6",
    reviewCount: "89 viajeros satisfechos",
    heroHeadline: "Tu estadía cómoda, segura y conectada en Lima.",
    heroSubheadline: "Habitaciones modernas e insonorizadas, Wi-Fi veloz para trabajo remoto y ubicación estratégica a corta distancia del Aeropuerto Jorge Chávez y centros comerciales.",
    aboutStory: "Nuna Hotel nace de la palabra quechua 'Nuna' (alma y espíritu). Brindamos un refugio de hospitalidad cálida para viajeros de negocios, parejas y familias que buscan descansar en un entorno limpio, seguro y con atención personalizada las 24 horas.",
    services: [
      { title: "Habitación Matrimonial Ejecutiva", price: "Desde S/ 110 / noche", description: "Cama Queen Size, Smart TV 50'' con streaming, baño privado con agua caliente y escritorio de trabajo.", highlight: true },
      { title: "Habitación Doble Twin", price: "Desde S/ 130 / noche", description: "Dos camas de plaza y media, ideal para colegas de trabajo o amistades.", highlight: false },
      { title: "Suite Nuna con Jacuzzi", price: "Desde S/ 180 / noche", description: "Tina de hidromasaje privada, cama King, frigobar y ambientación romántica bajo pedido." },
      { title: "Traslado Aeropuerto Jorge Chávez", price: "S/ 35", description: "Movilidad privada segura con chofer de confianza las 24 horas del día." }
    ],
    specials: [
      { title: "Tarifa Larga Estadía (+3 noches)", tag: "Descuento", description: "15% de descuento en estadías mayores a 3 noches reservando por WhatsApp." },
      { title: "Day Use para Escalas", tag: "Viajeros", description: "Estadía diurna de hasta 6 horas para descansar entre vuelos con ducha caliente." }
    ],
    reviews: [
      { author: "Carlos Gutierrez (Arequipa)", text: "Excelente hotel para hacer escala antes de un vuelo internacional. Todo limpio, silencioso y seguro.", stars: 5 },
      { author: "Sophie Martin (Francia)", text: "Very friendly staff and clean rooms. Great Wi-Fi speed and comfortable bed.", stars: 5 }
    ],
    hours: [
      { days: "Recepción y Check-in", time: "Abierto 24 Horas / 7 Días" },
      { days: "Check-in / Check-out", time: "Entrada: 01:00 PM | Salida: 12:00 PM" }
    ],
    features: ["Recepción 24/7 con vigilancia", "Wi-Fi de fibra óptica de alta velocidad", "Agua caliente continua y toallas blancas", "Servicio de taxi seguro coordinado al instante"]
  }
];
