"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, GraduationCap, Globe2, Play, Quote } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Rigour",
    desc: "We set unapologetically high standards. Students are pushed beyond what they believe is possible — and they exceed it.",
  },
  {
    icon: Target,
    title: "Character Building",
    desc: "Brilliance without discipline is wasted. We build resilience, integrity, and the focus to perform when it matters.",
  },
  {
    icon: Globe2,
    title: "Global Outlook",
    desc: "Our curriculum and university counselling are designed to create global citizens ready for any stage in the world.",
  },
];

const team = [
  {
    name: "Dr. Bola Obe",
    role: "Director of Platform Schools",
    note: "Visionary leader architecting Platform's legacy of excellence and holistic education.",
    img: "/team/dr-dola-obe.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[68px] bg-white min-h-screen">

      {/* ── Hero — Video Intro ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-off-white border-b lg:border-b-0 lg:border-r border-hairline px-6 md:px-12 lg:px-16 py-24 flex flex-col justify-center">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">About Platform College</span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3 mb-6">The Platform Story.</h1>
          <p className="font-body font-light text-[18px] text-iron leading-relaxed max-w-md">
            Founded with a singular vision: provide Cambridge education in Lagos that rivals the best sixth-form colleges in the United Kingdom.
          </p>
        </div>
        {/* Director's Voice */}
        <div className="relative min-h-[360px] lg:min-h-0 border-b border-hairline overflow-hidden bg-navy flex flex-col items-center justify-center text-center p-10">
          <Quote className="w-8 h-8 text-white/20 mb-6" />
          <p className="font-body font-light text-[18px] text-white/90 leading-relaxed mb-8 max-w-md">
            "At Platform College, we are committed to providing world-class Cambridge education. 
            Our A-Level program is designed to challenge students, build character, and prepare them 
            for the best universities globally. We believe in your potential."
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full max-w-sm justify-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-crimson shrink-0">
              <Image src="/team/dr-dola-obe.jpg" alt="Dr. Bola Obe" fill className="object-cover object-top" />
            </div>
            <div className="text-left">
              <p className="font-body font-bold text-white text-[14px]">Dr. Bola Obe</p>
              <p className="font-body text-white/50 text-[12px]">Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div {...fade(0)}>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mb-8">
              Excellence is not an act, <span className="italic text-crimson">but a habit.</span>
            </h2>
            <div className="space-y-5 font-body text-[16px] text-iron leading-relaxed">
              <p>
                Platform College was established as the crowning jewel of the Platform Schools Group — an institution with over 15 years of academic excellence across Lagos. For over a decade, we have nurtured brilliance.
              </p>
              <p>
                Our A-Level college was born from a clear realization: talented Nigerian students should not have to leave the country at 16 to receive world-class pre-university preparation. We built Platform College so they don&apos;t have to.
              </p>
              <p>
                Our faculty comprises Cambridge-certified examiners and subject experts who don&apos;t just teach the syllabus — they teach students how to think critically, analyze deeply, and perform consistently under examination pressure.
              </p>
            </div>
          </motion.div>

          {/* Bento aside */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div {...fade(0.07)} className="bg-navy text-white border border-navy p-8 col-span-2 bento-hover">
              <p className="font-display italic text-[22px] md:text-[28px] leading-snug">
                &ldquo;Platform College is producing the next generation of Nigerian leaders, one A* at a time.&rdquo;
              </p>
              <p className="font-body text-white/50 text-[12px] mt-4">— Platform Schools Group Founder</p>
            </motion.div>
            <motion.div {...fade(0.1)} className="border border-hairline p-8 bento-hover">
              <span className="font-display text-[56px] text-navy leading-none">15+</span>
              <p className="font-body font-bold text-[11px] text-smoke uppercase tracking-widest mt-2">Years in Education</p>
            </motion.div>
            <motion.div {...fade(0.13)} className="border border-hairline p-8 bento-hover">
              <span className="font-display text-[56px] text-navy leading-none">100%</span>
              <p className="font-body font-bold text-[11px] text-smoke uppercase tracking-widest mt-2">Pass Rate</p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ── Pillars ── */}
      <section className="bg-off-white border-y border-hairline py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fade(0)} className="mb-14">
            <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Our Principles</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3">The Three Pillars of Platform.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.08)}
                className="bg-white border border-hairline p-10 bento-hover"
              >
                <div className="w-10 h-10 border border-hairline flex items-center justify-center mb-8">
                  <p.icon className="w-5 h-5 text-crimson" />
                </div>
                <h3 className="font-display text-[28px] text-navy mb-4">{p.title}</h3>
                <p className="font-body text-[14px] text-iron leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fade(0)} className="mb-14">
            <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Our Leadership</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3">The People Behind the Results.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                className="border border-hairline group bento-hover"
              >
                <div className="aspect-[3/4] relative border-b border-hairline overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-body font-bold text-[14px] text-navy mb-1 leading-snug">{member.name}</h3>
                  <p className="font-body text-[11px] font-semibold text-crimson uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="font-body text-[12px] text-smoke leading-relaxed">{member.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-24 px-6 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] text-white mb-6">
            Ready to Join the Platform?
          </h2>
          <p className="font-body font-light text-[16px] text-white/70 mb-10">
            Apply for the 2026/2027 academic year and secure your place.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 h-[52px] px-8 bg-crimson text-white font-body font-semibold text-[14px] hover:bg-[#a0182f] transition-colors"
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
