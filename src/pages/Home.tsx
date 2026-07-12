import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LogoStrip from '../components/LogoStrip'
import { PrimaryButton, Label, TLink, Throughline } from '../components/ui'

const TEASERS: { num: string; numClass: string; body: string; tag: string }[] = [
  {
    num: '$50M',
    numClass: 'text-[44px]',
    body: 'In new revenue. Modernized a legacy ERP to absorb a $200M business unit without breaking.',
    tag: 'Ingram Micro',
  },
  {
    num: '$35M',
    numClass: 'text-[44px]',
    body: 'Unlocked. Rebooted a stalled API program into a public REST suite and six partner integrations.',
    tag: 'Ingram Micro',
  },
  {
    num: '90 → 99.8%',
    numClass: 'text-[40px]',
    body: 'Uptime. Rescued a $6.3M program most people had written off, protecting $30M a year in production.',
    tag: 'BMW',
  },
]

export default function Home() {
  return (
    <>
      <Nav active="home" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-paper">
        <div className="relative flex items-center justify-end overflow-hidden bg-paper md:absolute md:inset-y-0 md:right-0 md:w-[46%] lg:w-[44%]">
          <img
            src="/assets/headshot.jpg"
            alt="Ed Tompkins, Platform Product Manager"
            className="block h-auto w-full [filter:saturate(.92)_contrast(1.02)]"
          />
          <div className="absolute inset-y-0 left-0 z-[2] w-[5px] bg-amber" />
        </div>
        <div className="relative mx-auto max-w-content px-6 md:px-10">
          <div className="md:flex">
            <div className="w-full pb-2 pt-11 md:w-1/2 md:max-w-[480px] md:py-[88px] lg:w-[54%] lg:max-w-[540px] lg:py-[92px]">
              <Label className="mb-5 text-amber">Open to Principal Product Manager roles</Label>
              <h1 className="m-0 font-display text-[38px] font-normal leading-[1.08] tracking-[-0.01em] text-ink md:text-[46px] lg:text-[54px]">
                I turn stalled platform programs into roadmaps that ship.
              </h1>
              <Throughline className="mt-6" />
              <p className="mt-6 max-w-[48ch] text-[18px] leading-[1.6] text-ink-70">
                Principal product manager for eCommerce, ERP, and API platforms. I
                walk into the business-critical programs that have stalled, earn the
                team, own the backend other people avoid, and turn the mess into a
                plan that ships. Roughly $95 million in measurable impact across five
                platforms and three industries.
              </p>
              <div className="mt-[34px] flex flex-wrap items-center gap-6">
                <PrimaryButton href="/contact/" size="lg">Get in touch</PrimaryButton>
                <TLink href="/proof/" className="text-[15px]">
                  See the proof →
                </TLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF TEASERS */}
      <section className="border-t border-ink-15 bg-paper-sunken py-16 md:py-[88px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
            <Label className="text-ink-70">Selected turnarounds</Label>
            <TLink href="/proof/" className="text-[14px]">
              See all five turnarounds →
            </TLink>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEASERS.map((t) => (
              <a
                key={t.num + t.tag + t.body.slice(0, 8)}
                href="/proof/"
                className="block rounded border border-ink-15 bg-white px-7 py-8 hover:no-underline"
              >
                <div
                  className={`border-t-2 border-amber pt-4 font-display font-bold leading-none text-ink ${t.numClass}`}
                >
                  {t.num}
                </div>
                <p className="mt-4 text-[15px] leading-[1.55] text-black">{t.body}</p>
                <div className="mt-[18px] text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-40">
                  {t.tag}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK (Ink) */}
      <section className="bg-ink py-16 md:py-[104px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Label className="mb-[22px] text-amber">How I work</Label>
          <h2 className="m-0 max-w-[20ch] font-serif text-[34px] font-bold leading-[1.15] text-white">
            I don't come in like a wrecking ball.
          </h2>
          <Throughline className="mt-5" />
          <p className="mt-7 max-w-[64ch] text-[18px] leading-[1.65] text-inverse">
            Most people take over something that's failing and start changing
            everything on day one. They leave more dysfunction than they found. I do
            the opposite. I sit in the problem first, feel where the team is stuck,
            and earn their trust. I prove I understand both the business and the
            technology. Then I change what's broken into something better. The only
            time I move fast on day one is when there's no leadership and no
            communication at all, and someone has to steady the ship.
          </p>
          <div className="mt-8">
            <TLink href="/about/" className="text-[15px]">
              More about how I got here →
            </TLink>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF + LOGOS */}
      <section className="bg-paper py-16 md:py-[104px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[760px]">
            <Label className="mb-[22px] text-ink-70">
              Trusted across the org, not just my own team
            </Label>
            <blockquote className="m-0 border-l-2 border-amber pl-7">
              <p className="m-0 font-serif text-[26px] font-normal italic leading-[1.4] text-ink">
                "He makes everything effortless for the team and keeps everything
                moving. He is definitely a game changer."
              </p>
              <footer className="mt-[18px] text-[14px] text-ink-70">
                <span className="font-semibold text-ink">Susan Teague</span> · Sr.
                Manager, Accounting
              </footer>
            </blockquote>
          </div>
          <LogoStrip className="mt-16" />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-ink-15 bg-paper-sunken py-16 md:py-[104px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="m-0 font-serif text-[34px] font-bold leading-[1.15] text-ink">
            Looking for a Principal PM who fixes stalled platforms?
          </h2>
          <Throughline className="mt-5" />
          <p className="mt-6 max-w-[64ch] text-[18px] leading-[1.65] text-ink-70">
            I'm exploring my next full-time Principal Product Manager role, platform,
            eCommerce, or API-heavy. If you're hiring for work like this, I'd love to
            talk.
          </p>
          <p className="mt-[22px] text-[16px] font-semibold text-ink">
            I reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-[26px]">
            <PrimaryButton href="/contact/" size="lg">Get in touch</PrimaryButton>
            <TLink href="mailto:edtompkins@gmail.com" className="text-[15px]">
              edtompkins@gmail.com
            </TLink>
            <TLink href="/assets/Ed-Tompkins-Resume.pdf" download className="text-[15px]">
              Resume →
            </TLink>
            <TLink
              href="https://linkedin.com/in/edltompkins"
              external
              className="text-[15px]"
            >
              LinkedIn →
            </TLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
