"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, GraduationCap, Globe2, Quote } from "lucide-react";

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
    role: "Director of Platform College",
    note: "Visionary leader architecting Platform's legacy of excellence and holistic education.",
    img: "/team/dr-dola-obe.jpg",
  },
  {
    name: "Mrs. Bola Obe",
    role: "Co-Director, Platform College",
    note: "Dedicated to nurturing academic excellence and character formation in every A-Level student.",
    img: "/team/mrs-obe.jpg",
  },
  {
    name: "Miss Adetutu Esther",
    role: "Programme Manager",
    note: "Committed to guiding students through their A-Level journey with personalized academic support.",
    img: "/team/programme-manager.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[68px] bg-white min-h-screen">

      {/* ── Hero — The Story + Director ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left — About Text */}
        <div className="bg-off-white border-b lg:border-b-0 lg:border-r border-hairline px-6 md:px-12 lg:px-16 py-24 flex flex-col justify-center">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">About Platform College</span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3 mb-6 leading-[1.02]">
            The Platform Story.
          </h1>
          <p className="font-body font-light text-[18px] text-iron leading-relaxed max-w-md">
            Founded with a singular vision: provide Cambridge education in Lagos that rivals the best sixth-form colleges in the United Kingdom.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <div className="flex -space-x-3">
              {team.slice(0, 3).map((m, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image src={m.img} alt={m.name} fill className="object-cover object-top" />
                </div>
              ))}
            </div>
            <p className="font-body text-[13px] text-smoke">
              Led by <span className="font-semibold text-navy">Dr. Bola Obe</span>
            </p>
          </div>
        </div>

        {/* Right — Director's Voice */}
        <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden bg-navy flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16">
          {/* Decorative Quote Marks */}
          <div className="flex items-start gap-3 mb-6">
            <Quote className="w-10 h-10 text-crimson/40 shrink-0 mt-1" />
            <p className="font-body font-light text-[17px] md:text-[19px] text-white/95 leading-relaxed max-w-lg">
              &ldquo;At Platform College, we&apos;re not just preparing students for exams — we&apos;re preparing them for life. Our Cambridge A-Level programme challenges, inspires, and transforms.&rdquo;
            </p>
          </div>

          {/* Avatar at bottom-left */}
          <div className="flex items-center gap-5 pt-6 border-t border-white/10 max-w-sm mt-auto">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-[3px] border-crimson shrink-0 shadow-xl">
              <Image src="/team/dr-dola-obe.jpg" alt="Dr. Bola Obe" fill className="object-cover object-top" priority />
            </div>
            <div>
              <p className="font-body font-bold text-white text-[16px]">Dr. Bola Obe</p>
              <p className="font-body text-white/50 text-[13px]">Director of Platform College</p>
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

      {/* ── Programme Manager Message ── */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fade(0)} className="mb-14 text-center">
            <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">A Message from Leadership</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3">Programme Manager&apos;s Address.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-10 items-center bg-off-white border border-hairline overflow-hidden">
            {/* Image Side — 2/5 */}
            <motion.div
              {...fade(0.06)}
              className="lg:col-span-2 relative h-[360px] md:h-[480px] lg:h-full min-h-[400px] overflow-hidden"
            >
              <Image
                src="/team/programme-manager.jpg"
                alt="Miss Adetutu Esther — Programme Manager"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
            </motion.div>

            {/* Message Side — 3/5 */}
            <motion.div
              {...fade(0.12)}
              className="lg:col-span-3 px-8 md:px-12 lg:px-16 py-12"
            >
              <Quote className="w-8 h-8 text-crimson/20 mb-6" />
              <div className="space-y-5 font-body text-[15px] md:text-[16px] text-iron leading-relaxed">
                <p className="text-lg font-medium text-navy">
                  Welcome to Platform College (Sixth Form School), where we are committed to preparing students for success at university and beyond through a world-class A-Level education.
                </p>
                <p>
                  Our programme is designed to develop academic excellence, critical thinking, leadership, and the confidence needed to thrive in an increasingly competitive global environment. With experienced teachers, personalised academic support, and a culture of excellence, we equip every student with the knowledge and skills required to gain admission into top universities and excel in their chosen careers.
                </p>
                <p>
                  Beyond outstanding examination results, we are passionate about nurturing responsible, innovative, and well-rounded individuals who are ready to make meaningful contributions to society. We also provide dedicated university and career guidance, ensuring that every student is well prepared for the next stage of their academic journey.
                </p>
                <p className="font-semibold text-navy">
                  At Platform College, we believe every student has the potential to achieve greatness. We invite you to join our vibrant learning community and take the next step towards a future filled with opportunities and success.
                </p>
              </div>
              <div className="flex items-center gap-5 mt-8 pt-6 border-t border-hairline">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-crimson shrink-0 shadow-md">
                  <Image src="/team/programme-manager.jpg" alt="Miss Adetutu Esther" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="font-body font-bold text-[15px] text-navy">Miss Adetutu Esther</p>
                  <p className="font-body text-[12px] text-smoke">Programme Manager, Platform College</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 px-6 lg:px-10 bg-off-white border-y border-hairline">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fade(0)} className="mb-14">
            <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Our Leadership</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3">The People Behind the Results.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.07)}
                className="border border-hairline group bento-hover bg-white"
              >
                <div className="aspect-[3/4] relative border-b border-hairline overflow-hidden bg-stone">
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
