import type { MouseEvent, ReactNode } from 'react'
import { bookCall } from '../lib/calendly'

// The throughline: a 40x2px amber rule under headers / hero H1 and on callouts.
// Margins are set by the caller (top margin varies by placement).
export function Throughline({ className = '' }: { className?: string }) {
  return <div className={`h-[2px] w-10 bg-amber ${className}`} />
}

type ButtonSize = 'nav' | 'lg' | 'xl'

const buttonSize: Record<ButtonSize, string> = {
  nav: 'px-6 py-3 text-[14px]',
  lg: 'px-7 py-[14px] text-[15px]',
  xl: 'px-[30px] py-[15px] text-[15px]',
}

// Primary CTA — opens the Calendly popup overlay.
export function BookCallButton({
  size = 'nav',
  className = '',
}: {
  size?: ButtonSize
  className?: string
}) {
  return (
    <a
      href="#"
      onClick={bookCall}
      className={`inline-flex items-center gap-2 rounded-sm bg-amber font-semibold leading-none text-white transition-colors duration-150 hover:bg-amber-hover hover:text-white hover:no-underline ${buttonSize[size]} ${className}`}
    >
      Book a call
    </a>
  )
}

// Amber text link with the brand's hover behavior.
export function TLink({
  href,
  children,
  external = false,
  download = false,
  className = '',
  onClick,
}: {
  href: string
  children: ReactNode
  external?: boolean
  download?: boolean
  className?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      {...(download ? { download: true } : {})}
      className={`font-semibold text-amber hover:text-amber-hover ${className}`}
    >
      {children}
    </a>
  )
}

// Uppercase section label — the only uppercase on the site.
export function Label({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`text-[12px] font-semibold uppercase tracking-[0.1em] ${className}`}
    >
      {children}
    </div>
  )
}
