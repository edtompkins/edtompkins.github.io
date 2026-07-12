import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LogoStrip from '../components/LogoStrip'
import { PrimaryButton, Label, TLink, Throughline } from '../components/ui'

const HERO_CARDS: {
  num: string
  title: string
  body: string
  tag: string
}[] = [
  {
    num: '$50M',
    title: 'In new revenue. A $200M business unit brought onto the platform.',
    body: 'I modernized a legacy ERP so it could absorb a $200M business unit without breaking, drove more than $50M in new revenue, and cut AWS costs by 35 percent along the way. The rollout went from a siloed scramble to a repeatable model the org could reuse.',
    tag: 'Ingram Micro · 2022–2024',
  },
  {
    num: '$35M',
    title: 'Unlocked by rebooting a stalled API program.',
    body: 'I inherited an API modernization effort that had stalled, shipped a new public REST suite, and turned it into $35M in incremental revenue and 6 partner integrations. I migrated auth to OKTA, moved the stack from .NET 3.5 to .NET 8, and reported status directly to the CISO.',
    tag: 'Ingram Micro · 2024–2025',
  },
]

const PATTERN: { num: string; body: string; tag: string }[] = [
  {
    num: '99.8% uptime',
    body: 'Handed a $6.3M real-time location system most people had written off, losing 15 to 60 minutes of assembly-line time a week. I diagnosed it, reengineered the key components, moved the team to Agile, and took uptime from 90 to 99.8 percent, protecting more than $30M a year in production.',
    tag: 'BMW · 2018–2019',
  },
  {
    num: '75% less downtime',
    body: "A true 0 to 1. I built ZF's first industrial IoT platform and its first applied-AI model, cut unplanned downtime by 75 percent, and saved more than $15M a year. It started as a pilot and ended up running across live production.",
    tag: 'ZF · 2016–2018',
  },
  {
    num: '85% fewer manual orders',
    body: 'The first major eCommerce redesign since 2005, the first overhaul in 18 years. I cut manual and email orders by 85 percent, dropped support tickets by 15 percent, and delivered on time and under budget.',
    tag: 'Ingram Micro · 2021',
  },
]

const SMALL_QUOTES: { quote: string; name: string; role: string }[] = [
  {
    quote:
      '"He was able to step in and make an immediate impact on a team that needed help. It was easy to tell that Ed was curious and asked the right questions."',
    name: 'Peter Ryan',
    role: "Director of Product, Hill Holliday · Ed's manager",
  },
  {
    quote:
      `"He's strategic, but never disconnected from the technical details. If you're building a cloud-native or enterprise-scale product, you want Ed in the room."`,
    name: 'Kevin Kwasniewski',
    role: "Sr. Business Analyst · on Ed's team at Ingram Micro, dotted-line report",
  },
]

export default function Proof() {
  return (
    <>
      <Nav active="proof" />

      {/* INTRO */}
      <section className="pb-16 pt-16 md:pb-[64px] md:pt-[88px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Label className="mb-6 text-ink-70">Proof &amp; results</Label>
          <h1 className="m-0 font-display text-[34px] font-normal leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
            The work.
          </h1>
          <Throughline className="mt-6" />
          <p className="mt-6 max-w-[64ch] text-[19px] leading-[1.65] text-ink-70">
            I get handed platforms that have stalled, and I find the real problem and
            turn it into a plan that ships. Here is the record, with the people who
            were in the room.
          </p>
        </div>
      </section>

      {/* LEAD: two hero results */}
      <section className="pb-10">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {HERO_CARDS.map((c) => (
              <div
                key={c.num}
                className="rounded border border-ink-15 bg-white px-10 py-11"
              >
                <div className="border-t-2 border-amber pt-[18px] font-display text-[62px] font-bold leading-none text-ink">
                  {c.num}
                </div>
                <h2 className="mt-5 font-serif text-[23px] font-bold leading-[1.3] text-ink">
                  {c.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.62] text-black">{c.body}</p>
                <div className="mt-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-40">
                  {c.tag}
                </div>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 max-w-[820px] border-l-2 border-amber pl-7">
            <p className="m-0 font-serif text-[24px] font-normal italic leading-[1.42] text-ink">
              "Ed's ownership of delivery, particularly on the platform side, was
              instrumental in ensuring seamless and successful product launches."
            </p>
            <footer className="mt-4 text-[14px] text-ink-70">
              <span className="font-semibold text-ink">John Cederman</span> · Senior
              Manager, Development · ran the dev team on Ed's platform
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SUPPORT: the pattern */}
      <section className="mt-14 border-t border-ink-15 bg-paper-sunken py-16 md:py-[88px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="m-0 mb-2 font-serif text-[28px] font-bold leading-[1.22] text-ink">
            It is not a one-time thing. Same job, five platforms, three industries.
          </h2>
          <Throughline className="mb-11 mt-[18px]" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {PATTERN.map((p) => (
              <div key={p.num} className="border-t-2 border-amber pt-5">
                <div className="font-display text-[40px] font-bold leading-[1.04] text-ink">
                  {p.num}
                </div>
                <p className="mt-4 text-[15px] leading-[1.6] text-black">{p.body}</p>
                <div className="mt-[18px] text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-40">
                  {p.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORROBORATION */}
      <section className="py-16 md:py-[88px]">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="m-0 mb-2 max-w-[24ch] font-serif text-[28px] font-bold leading-[1.22] text-ink">
            A different department said the same thing.
          </h2>
          <Throughline className="mt-[18px]" />
          <p className="mt-6 max-w-[64ch] text-[17px] leading-[1.65] text-ink-70">
            On Palmetto, the finance side of the house saw the work up close and put
            me in for the company's Palmetto Extra Mile award. This is from a senior
            manager in Accounting, not my own team.
          </p>
          <blockquote className="mt-9 max-w-[820px] border-l-2 border-amber pl-7">
            <p className="m-0 font-serif text-[24px] font-normal italic leading-[1.44] text-ink">
              "He goes the extra mile in creating purposeful meetings for the team,
              always preparing and bringing the pertinent information needed so we can
              easily show up and decisions can be made. He makes everything
              effortless for the team and keeps everything moving. He is definitely a
              game changer, and I personally appreciate all that he has done."
            </p>
            <footer className="mt-4 text-[14px] text-ink-70">
              <span className="font-semibold text-ink">Susan Teague</span> · Sr.
              Manager, Accounting · nominating Ed for the Palmetto Extra Mile award,
              March 2022
            </footer>
          </blockquote>
          <div className="mt-11 grid grid-cols-1 gap-7 md:grid-cols-2">
            {SMALL_QUOTES.map((q) => (
              <blockquote
                key={q.name}
                className="m-0 border-t border-ink-15 pt-6"
              >
                <p className="m-0 font-serif text-[19px] font-normal italic leading-[1.48] text-ink">
                  {q.quote}
                </p>
                <footer className="mt-3.5 text-[13px] text-ink-70">
                  <span className="font-semibold text-ink">{q.name}</span> · {q.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATH — quiet summation on Ink */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto flex max-w-content flex-wrap items-start gap-14 px-6 md:px-10">
          <div className="flex-none">
            <div className="border-t-2 border-amber pt-4 font-display text-[84px] font-bold leading-[.95] text-white">
              ≈$95M
            </div>
            <div className="mt-3.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-inverse">
              Measurable impact · five platforms
            </div>
          </div>
          <p className="mt-2 min-w-[300px] max-w-[34ch] flex-1 font-serif text-[24px] font-normal leading-[1.4] text-white">
            Five platforms. Roughly $95M in measurable impact. The number is not the
            point. The pattern is: walk into the mess, find what is actually broken,
            and ship the fix.
          </p>
        </div>
      </section>

      {/* WHERE IT STARTED — small and quiet */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            <Label className="mb-[22px] text-ink-70">Where it started</Label>
            <p className="m-0 text-[17px] leading-[1.68] text-black">
              I did not start in product. I came up through IT, from a university help
              desk to infrastructure projects to rolling hardware out across 60-plus
              bank branches. The people I worked with then say the same thing the
              people I work with now do.
            </p>
            <blockquote className="mt-7 border-l-2 border-amber pl-6">
              <p className="m-0 font-serif text-[19px] font-normal italic leading-[1.5] text-ink">
                "One of the most knowledgeable technicians I worked with. I've never
                seen him get angry with anyone, and he is always happy to give
                technical advice to anyone who asks."
              </p>
              <footer className="mt-3.5 text-[13px] text-ink-70">
                <span className="font-semibold text-ink">Ian Wagner</span> · worked
                with Ed in IT, 2011
              </footer>
            </blockquote>
          </div>
          <LogoStrip className="mt-16" />
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-ink-15 bg-paper-sunken py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            <h2 className="m-0 font-serif text-[30px] font-bold leading-[1.2] text-ink">
              That's the record. If you're hiring a Principal PM to do work like this,
              let's talk.
            </h2>
            <Throughline className="mt-[22px]" />
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
        </div>
      </section>

      <Footer />
    </>
  )
}
