/// <reference types="vite/client" />

interface CalendlyWidget {
  initPopupWidget: (options: { url: string }) => void
}

interface Window {
  Calendly?: CalendlyWidget
}
