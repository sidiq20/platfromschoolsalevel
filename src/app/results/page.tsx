"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Award, Star, ChevronRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

const results = [
  { grade: "4A*",   name: "Michael Dada",     dest: "Engineering — Imperial College London",   year: "2025", bg: "bg-navy", text: "text-white" },
  { grade: "3A*1A", name: "Ayeni Faith",       dest: "Medicine — University of Lagos",          year: "2025", bg: "bg-white", text: "text-navy" },
  { grade: "2A*2A", name: "David Emmanuel",    dest: "Economics — University of Toronto",       year: "2024", bg: "bg-crimson", text: "text-white" },
  { grade: "7A*2A", name: "Sarah Okafor",      dest: "Platform College (IGCSE → A-Level)",      year: "2024", bg: "bg-white", text: "text-navy" },
];

const awards = [
  { year: "2025", title: "Best Secondary School in Nigeria",            org: "Prestige Africa Awards" },
  { year: "2025", title: "National Science Olympiad Champions",          org: "Ministry of Education" },
  { year: "2024", title: "Top in World — Cambridge A Level Mathematics", org: "Cambridge Assessment" },
  { year: "2024", title: "1st Prize, National Music Festival",           org: "Arts Council Nigeria" },
  { year: "2023", title: "Best A-Level Results in West Africa",          org: "British Council" },
];

export default function ResultsPage() {
  return (
    <div className="pt-[68px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(120px,25vw,280px)] text-navy/[0.03] pointer-events-none select-none">
          A*
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">
            Exam Results
          </span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3 max-w-2xl">
            Proof is in the Performance.
          </h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-xl leading-relaxed">
            Every year. Without exception. Our students lead nationally.
          </p>
        </div>
      </section>

      {/* Results Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <h2 className="font-display text-[clamp(28px,3vw,40px)] text-navy mb-10">Student Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {results.map((r, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.07)}
              className={`${r.bg} ${r.text} border border-hairline p-8 flex flex-col justify-between aspect-square bento-hover`}
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current text-gold" />
                ))}
              </div>
              <div>
                <p className="font-display text-[48px] md:text-[56px] leading-none mb-4">{r.grade}</p>
                <p className="font-body font-bold text-[14px] leading-snug mb-1">{r.name}</p>
                <p className="font-body text-[12px] opacity-60">{r.dest}</p>
              </div>
              <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${r.bg === "bg-white" ? "text-crimson" : "text-white/50"}`}>
                {r.year}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards List */}
      <section className="bg-off-white border-y border-hairline py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-14">
            <div>
              <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Awards & Recognition</span>
              <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-2">Every Year, We Win.</h2>
            </div>
          </div>

          <div className="divide-y divide-hairline">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.06)}
                className="flex items-center gap-6 py-7 group cursor-pointer hover:bg-white transition-colors -mx-6 lg:-mx-10 px-6 lg:px-10"
              >
                <div className="w-10 h-10 bg-white border border-hairline flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-crimson" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-mono text-[11px] font-bold text-crimson uppercase tracking-wider">{award.year}</span>
                  <h3 className="font-body font-bold text-[15px] text-navy md:col-span-1">{award.title}</h3>
                  <p className="font-body text-[13px] text-smoke">{award.org}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-mist group-hover:text-navy transition-colors shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pass Rate Banner */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <Trophy className="w-10 h-10 text-gold mx-auto mb-6" />
          <p className="font-display text-[clamp(60px,12vw,120px)] text-navy leading-none mb-4">100%</p>
          <p className="font-body font-semibold text-[16px] text-smoke uppercase tracking-[0.14em]">
            Cambridge Pass Rate — Every Single Year
          </p>
        </div>
      </section>
    </div>
  );
}
