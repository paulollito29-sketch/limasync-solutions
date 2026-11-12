const WA_PHONE = "51906920958";

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hola LimaSync Solutions, quiero cotizar un proyecto web en 72 horas.";
  const text = message || defaultMsg;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
}
