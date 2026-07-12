import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Label, Throughline } from '../components/ui'
import { bookCall } from '../lib/calendly'

type Row = {
  label: string
  value: string
  href: string
  external?: boolean
  download?: boolean
}

const ROWS: Row[] = [
  { label: 'Email', value: 'edtompkins@gmail.com', href: 'mailto:edtompkins@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/edltompkins →',
    href: 'https://linkedin.com/in/edltompkins',
    external: true,
  },
  {
    label: 'Resume',
    value: 'Download PDF →',
    href: '/assets/Ed-Tompkins-Resume.pdf',
    download: true,
  },
]

export default function Contact() {
  return (
    <>
      <Nav active="contact" />

      {/* CONTACT */}
      <section className="pb-16 pt-16 md:pb-[104px] md:pt-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            <Label className="mb-6 text-ink-70">Contact</Label>
            <h1 className="m-0 font-display text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
              Get in touch
            </h1>
            <Throughline className="mt-6" />
            <p className="mt-6 text-[19px] leading-[1.65] text-ink-70">
              I'm looking for my next full-time Principal Product Manager role,
              platform, eCommerce, ERP, or API-heavy. If you're hiring for work like
              that, or you just want to talk platform turnarounds, I'd love to hear
              from you.
            </p>
            <p className="mt-[22px] text-[16px] font-semibold text-ink">
              I reply within one business day.
            </p>

            <div className="mt-12">
              {ROWS.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noopener' } : {})}
                  {...(row.download ? { download: true } : {})}
                  className="group flex flex-col items-start justify-between gap-2 border-t border-ink-15 py-[26px] last:border-b last:border-ink-15 hover:no-underline md:flex-row md:items-center md:gap-6"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.09em] text-ink-40">
                    {row.label}
                  </span>
                  <span className="font-body text-[19px] font-medium text-ink group-hover:text-amber">
                    {row.value}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-10 text-[16px] leading-[1.6] text-ink-70">
              Recruiters and hiring managers, prefer a quick call? Grab 15 minutes:{' '}
              <a
                href="#"
                onClick={bookCall}
                className="font-semibold text-amber hover:text-amber-hover"
              >
                Schedule 15 minutes →
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
