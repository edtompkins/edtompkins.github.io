// Grayscale client logo strip. Optical heights are tuned per mark so wide
// wordmarks (BofA, Ingram) don't dominate the square marks.
const LOGOS: { src: string; alt: string; h: number }[] = [
  { src: '/assets/logos/zf.svg', alt: 'ZF', h: 42 },
  { src: '/assets/logos/bmw.svg', alt: 'BMW', h: 46 },
  { src: '/assets/logos/ingram-micro.svg', alt: 'Ingram Micro', h: 22 },
  { src: '/assets/logos/cummins.svg', alt: 'Cummins', h: 42 },
  { src: '/assets/logos/hp.svg', alt: 'HP', h: 42 },
  { src: '/assets/logos/bank-of-america.svg', alt: 'Bank of America', h: 18 },
]

export default function LogoStrip({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-14 gap-y-11 border-t border-ink-15 pt-12 ${className}`}
    >
      {LOGOS.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          style={{ height: `${logo.h}px`, width: 'auto' }}
          className="opacity-50 transition-opacity duration-200 [filter:grayscale(1)_contrast(.95)] hover:opacity-[.85]"
        />
      ))}
    </div>
  )
}
