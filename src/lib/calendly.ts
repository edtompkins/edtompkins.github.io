import type { MouseEvent } from 'react'

export const CALENDLY_URL = 'https://calendly.com/edtompkins-6llc/15min'

// Opens Ed's Calendly as a popup overlay (widget.js is loaded in each page's
// <head>). Falls back to opening the scheduling page directly if the widget
// script has not loaded yet.
export function bookCall(e?: MouseEvent<HTMLElement>): void {
  e?.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank', 'noopener')
  }
}
