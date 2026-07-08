import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { programmes } from "@/data/programmes";

export function generateStaticParams() {
  return programmes.map((p) => ({ id: p.id }));
}

export default async function ProgrammePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const programme = programmes.find((p) => p.id === id);
  if (!programme) notFound();

  const others = programmes.filter((p) => p.id !== id).slice(0, 2);

  return (
    <div className="pt-[68px] bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 font-body text-[13px] text-iron hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Programmes
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[10px] font-bold text-white bg-navy px-3 py-1.5 uppercase tracking-widest">
              {programme.cat}
            </span>
            <span className="inline-flex items-center gap-2 font-body text-[13px] text-iron">
              <Clock className="w-4 h-4" /> {programme.duration}
            </span>
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,64px)] text-navy max-w-3xl">
            {programme.title}
          </h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-2xl leading-relaxed">
            {programme.desc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Article Body */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="font-display text-[clamp(24px,2.5vw,36px)] text-navy mb-5">Programme Overview</h2>
            <p className="font-body text-[16px] text-iron leading-[1.85] whitespace-pre-line">
              {programme.overview}
            </p>
          </div>

          <div>
            <h2 className="font-display text-[clamp(24px,2.5vw,36px)] text-navy mb-6">What You Will Study</h2>
            <ul className="space-y-4">
              {programme.curriculum.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-crimson/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-crimson" />
                  </div>
                  <span className="font-body text-[15px] text-iron leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-off-white border border-hairline p-8">
            <h3 className="font-display text-[22px] text-navy mb-4">Entry Requirements</h3>
            <p className="font-body text-[14px] text-iron leading-relaxed">{programme.requirements}</p>
          </div>

          <div className="bg-navy p-8 flex flex-col gap-5">
            <h3 className="font-display text-[22px] text-white">Ready to apply?</h3>
            <p className="font-body text-[14px] text-white/60 leading-relaxed">
              Speak to our admissions team to confirm your eligibility and reserve your place.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-crimson text-white font-body font-semibold px-6 py-3 hover:bg-[#a0182f] transition-colors"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/2349053028880"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-bold px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Ask via WhatsApp
            </a>
          </div>
        </aside>
      </section>

      {/* Other Programmes */}
      {others.length > 0 && (
        <section className="bg-off-white border-t border-hairline px-6 lg:px-10 py-20">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-display text-[clamp(24px,2.5vw,36px)] text-navy mb-10">Explore Other Programmes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/programmes/${other.id}`}
                  className="bg-white border border-hairline p-8 flex flex-col gap-4 group hover:border-navy transition-colors"
                >
                  <span className="font-mono text-[10px] font-bold text-crimson uppercase tracking-widest">{other.cat}</span>
                  <h3 className="font-display text-[22px] text-navy group-hover:text-crimson transition-colors">{other.title}</h3>
                  <span className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-navy">
                    View Programme <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
