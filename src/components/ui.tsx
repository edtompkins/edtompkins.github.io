import type { MouseEvent, ReactNode } from 'react'

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

// Primary CTA button — GT Sectra Medium (UI voice), links to the Contact page.
export function PrimaryButton({
  href,
  children,
  size = 'nav',
  className = '',
}: {
  href: string
  children: ReactNode
  size?: ButtonSize
  className?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm bg-amber font-ui font-medium leading-none tracking-[0.01em] text-white transition-colors duration-150 hover:bg-amber-hover hover:text-white hover:no-underline ${buttonSize[size]} ${className}`}
    >
      {children}
    </a>
  )
}

// Amber text link — GT Sectra Medium (UI voice).
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
      className={`font-ui font-medium tracking-[0.01em] text-amber hover:text-amber-hover ${className}`}
    >
      {children}
    </a>
  )
}

// Section label — GT Sectra Medium, 12px, +0.12em. The one uppercase style.
export function Label({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`u-caps font-ui text-[12px] font-medium uppercase tracking-[0.12em] ${className}`}
    >
      {children}
    </div>
  )
}
