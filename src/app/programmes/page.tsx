"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { programmes, categories } from "@/data/programmes";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

export default function ProgrammesPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? programmes : programmes.filter((p) => p.cat === active);

  return (
    <div className="pt-[68px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Our Programmes</span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3 max-w-3xl">
            Find Your Path to the World's Best Universities.
          </h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-xl leading-relaxed">
            Whether you have two years or one, we have a Cambridge-certified programme designed to get you there.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-[68px] z-30 bg-white border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex gap-0 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-4 font-body text-[13px] font-medium whitespace-nowrap border-b-2 transition-all ${
                active === cat
                  ? "border-crimson text-crimson"
                  : "border-transparent text-iron hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((programme, i) => (
            <motion.div
              key={programme.id}
              {...fadeUp(i * 0.08)}
              className="bg-white border border-hairline p-8 md:p-10 flex flex-col gap-6 group bento-hover cursor-pointer hover:border-navy transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-off-white flex items-center justify-center group-hover:bg-crimson/10 transition-colors">
                  <programme.icon className="w-6 h-6 text-iron group-hover:text-crimson transition-colors" />
                </div>
                <span className="font-mono text-[10px] font-bold text-white bg-navy px-3 py-1.5 uppercase tracking-widest">
                  {programme.cat}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-[26px] text-navy mb-3">{programme.title}</h3>
                <p className="font-body text-[14px] text-iron leading-relaxed">{programme.desc}</p>
              </div>

              <div className="flex items-center gap-2 text-mist">
                <Clock className="w-4 h-4" />
                <span className="font-body text-[13px]">{programme.duration}</span>
              </div>

              <div className="pt-2 border-t border-hairline">
                <Link
                  href={`/programmes/${programme.id}`}
                  className="font-body text-[13px] font-semibold text-navy flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Full Programme <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="bg-off-white border-y border-hairline px-6 lg:px-10 py-20">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Entry Requirements</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3 mb-10">Who can apply?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "IGCSE", detail: "Minimum 5 Credits including Maths & English at IGCSE level." },
              { label: "WAEC / SSCE", detail: "Minimum 5 Credits/Distinctions including Maths & English." },
              { label: "NECO", detail: "Minimum 5 Credits including Maths & English from NECO results." },
            ].map((req, i) => (
              <motion.div key={req.label} {...fadeUp(i * 0.1)} className="bg-white border border-hairline p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-crimson" />
                  <h3 className="font-body font-bold text-[18px] text-navy">{req.label}</h3>
                </div>
                <p className="font-body text-[14px] text-iron leading-relaxed">{req.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 px-6 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-white mb-6">
            Ready to apply?
          </h2>
          <p className="font-body text-white/60 text-[16px] mb-10 leading-relaxed">
            Take the first step towards your future. Our admissions team is here to guide you through every step.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-crimson text-white font-body font-semibold px-8 py-4 hover:bg-[#a0182f] transition-colors"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
