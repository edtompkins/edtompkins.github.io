import { useState } from 'react'
import { BookCallButton } from './ui'

export type PageKey = 'home' | 'about' | 'proof' | 'contact'

const LINKS: { key: PageKey; label: string; href: string }[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about/' },
  { key: 'proof', label: 'Proof', href: '/proof/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
]

function navLinkClass(active: boolean): string {
  return [
    'pb-[3px] text-[14px] font-medium border-b-2 hover:no-underline',
    active
      ? 'text-ink border-amber'
      : 'text-ink-70 border-transparent hover:text-ink',
  ].join(' ')
}

export default function Nav({ active }: { active: PageKey }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative border-b border-ink-15 bg-paper">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/"
          className="font-display text-[21px] font-medium tracking-[-0.01em] text-ink hover:no-underline"
        >
          Ed Tompkins<span className="text-amber">.</span>
        </a>

        {/* Mobile toggle — a text "Menu" (the brand avoids icons) */}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="text-[14px] font-semibold tracking-[0.02em] text-ink md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.key} href={l.href} className={navLinkClass(l.key === active)}>
              {l.label}
            </a>
          ))}
          <BookCallButton />
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-20 flex flex-col gap-1 border-b border-ink-15 bg-paper px-6 pb-5 pt-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className={`py-2.5 text-[14px] font-medium hover:no-underline ${
                l.key === active ? 'text-ink' : 'text-ink-70 hover:text-ink'
              }`}
            >
              {l.label}
            </a>
          ))}
          <BookCallButton className="mt-2 self-start" />
        </div>
      )}
    </nav>
  )
}
