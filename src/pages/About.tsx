import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { BookCallButton, Label, TLink, Throughline } from '../components/ui'

const STORY: string[] = [
  'My degree is in History, with a minor in Psychology. I spent my early twenties studying why institutions collapse, why smart people make decisions that do not survive contact with reality, and why the official story of a failure is almost never the real one. I figured that would keep me around books. Instead it put me in IT.',
  'I came up from the ground floor. A university service desk first, then campus infrastructure projects, then field implementation rolling hardware out across 60-plus bank branches for HP and Bank of America. Years of it. It was not glamorous, but it taught me two things you cannot learn from a deck: how systems actually break, and how the people using them actually feel when they do. That is where the user-first habit got wired in.',
  "ZF was my first real product job, and it dropped me straight into industrial IoT. Machines were going down and nobody could say why. Turns out the skill I had been training all along was the right one: read the system, read the people around it, and keep asking questions until the actual root cause shows up. I built ZF's first IoT platform and its first applied-AI model, cut unplanned downtime by 75 percent, and saved more than 15 million dollars a year. I was hooked. Not on the technology, on the detective work.",
  'Then it kept happening. BMW handed me a 6.3 million dollar program most people had already written off. I did the thing I always do. Diagnosed it, rebuilt it, got uptime from 90 to 99.8 percent, and protected more than 30 million a year in production. (Somewhere in there I stopped being the IoT guy and became the guy you call when a critical platform has stalled and nobody can tell you why.)',
  'The numbers got bigger but the job stayed the same. At Ingram Micro I spent four years modernizing an ERP that served a 200 million dollar business. A discovery framework I built turned into 50 million in new revenue, and an API strategy added 35 million more. At Cummins I inherited a 100 million dollar marketplace that had been stuck for two years, and had it on a clear, executable path inside 90 days. Different industries, same work every time: walk into the mess, find what is actually broken, and turn it into a plan that ships.',
  'Here is the part most product managers skip. When I take over something that is failing, I do not come in swinging. I sit in it first. I feel where the team is stuck, I earn their trust and respect, and I prove I understand both the business and the technology before I change a thing. The only time I move on day one is when there is no leadership and no communication at all, and someone has to steady the ship. A lot of people show up like a wrecking ball, changing everything from the first meeting, and they leave more dysfunction than they found. I would rather learn what is actually going on, earn the right to speak with authority, and then make it better. That is the whole method, and when it does come time to hold a hard line, I bring the receipts. When a vendor insisted their part was approved while it was breaking in a week, I pulled the email trail and the dates and showed it never was.',
  "Outside of work I read a lot, 45 books last year, still mostly history. I am a hopeless college football diehard, Go Blue, and I run almost entirely on nitro cold brew (a habit my grandma started when she introduced me to whipped coffee at a Tim Horton's in 2002). Same curiosity, pointed at different things.",
]

export default function About() {
  return (
    <>
      <Nav active="about" />

      {/* OPENING */}
      <section className="pb-[72px] pt-16 md:pt-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            <Label className="mb-[26px] text-ink-70">About</Label>
            <h1 className="m-0 font-display text-[34px] font-normal leading-[1.14] tracking-[-0.01em] text-ink md:text-[42px]">
              I did not set out to fix broken software. I set out to figure out why
              things fall apart.
            </h1>
            <Throughline className="mt-7" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            {STORY.map((para, i) => (
              <p
                key={i}
                className="mb-[22px] text-[17px] leading-[1.72] text-black last:mb-0 md:text-[18px]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* THE LINE PEOPLE REMEMBER — pull quote on Ink */}
      <section className="bg-ink py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            <Label className="mb-[26px] text-amber">The line people remember</Label>
            <p className="m-0 font-serif text-[34px] font-normal italic leading-[1.32] text-white">
              "A History major who rescues technical platforms. He reads a failing
              software program the way a historian reads a failing empire, and treats
              a stalled platform as a mystery with a cause, not a backlog with a
              deadline."
            </p>
            <Throughline className="mt-8" />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-ink-15 bg-paper-sunken py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="max-w-[720px]">
            <h2 className="m-0 font-serif text-[32px] font-bold leading-[1.18] text-ink">
              Let's talk about what's stalled.
            </h2>
            <Throughline className="mt-5" />
            <p className="mt-6 text-[18px] leading-[1.65] text-ink-70">
              If you are leading a platform that has stalled and a team that cannot
              quite say why, that is the conversation I like most. The fastest way to
              find out whether I am the right person to fix it is to talk. Tell me
              where things are stuck and I will tell you honestly whether I can help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-[26px]">
              <BookCallButton size="lg" />
              <TLink href="mailto:edtompkins@gmail.com" className="text-[15px]">
                edtompkins@gmail.com
              </TLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
