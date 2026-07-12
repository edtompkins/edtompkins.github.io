import { bookCall } from '../lib/calendly'

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-white">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:gap-10">
          <div className="max-w-[320px]">
            <a
              href="/"
              className="font-display text-[22px] font-medium tracking-[-0.01em] text-white hover:no-underline"
            >
              Ed Tompkins<span className="text-amber">.</span>
            </a>
            <p className="mt-4 text-[14px] leading-[1.6] text-inverse">
              Platform product manager. I rescue stalled eCommerce, ERP, and API
              programs and turn them into roadmaps that ship.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-left md:items-end md:text-right">
            <a
              href="#"
              onClick={bookCall}
              className="text-[14px] font-semibold text-amber hover:text-amber-hover"
            >
              Book a call
            </a>
            <a
              href="mailto:edtompkins@gmail.com"
              className="text-[14px] text-white hover:text-white"
            >
              edtompkins@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/edltompkins"
              target="_blank"
              rel="noopener"
              className="text-[14px] text-white hover:text-white"
            >
              LinkedIn →
            </a>
            <a
              href="/assets/Ed-Tompkins-Resume.pdf"
              download
              className="text-[14px] text-white hover:text-white"
            >
              Resume →
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/12 pt-6 text-[13px] text-meta">
          <span>© 2026 Ed Tompkins</span>
          <span>Platform Product Manager · edtompkins.com</span>
        </div>
      </div>
    </footer>
  )
}
