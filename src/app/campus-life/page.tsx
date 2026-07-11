"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, GraduationCap, Trophy, Globe, Users } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

const highlights = [
  {
    icon: GraduationCap,
    title: "Science Olympiad Winners",
    body: "Our science teams consistently top national competitions, presenting original research to judging panels from top universities.",
    tag: "Academic Co-Curricular",
  },
  {
    icon: Globe,
    title: "Global University Placements",
    body: "Our students receive university counselling from day one, with alumni at Cambridge, LSE, Toronto, and leading Nigerian institutions.",
    tag: "University Pathways",
  },
  {
    icon: Users,
    title: "A Thriving Community",
    body: "Platform students build lifelong networks through a culture of collaboration, discipline and ambition.",
    tag: "Community & Culture",
  },
];

export default function CampusLifePage() {
  return (
    <div className="pt-[68px] bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
        <div className="bg-off-white border-b lg:border-b-0 lg:border-r border-hairline px-6 md:px-12 lg:px-16 py-24 flex flex-col justify-center">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">
            The Platform Experience
          </span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3 mb-6">
            More Than <span className="italic text-crimson">Just Study.</span>
          </h1>
          <p className="font-body font-light text-[18px] text-iron leading-relaxed max-w-md">
            At Platform, academic brilliance meets co-curricular excellence. Discover the full richness of student life.
          </p>
          <a
            href="https://www.platformschools.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 font-body font-semibold text-[13px] text-royal hover:gap-4 transition-all"
          >
            Explore the full campus experience <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="relative min-h-[360px] lg:min-h-0 border-b border-hairline overflow-hidden">
          <Image
            src="/a_level_studnets_in_the_field.jpg"
            alt="Platform College Students"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        </div>
      </section>

      {/* ── Highlights Grid ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <motion.div {...fade(0)} className="mb-14">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">What Sets Us Apart</span>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3">
            Students Who Excel <span className="italic text-crimson">Inside and Out.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.08)}
              className="border border-hairline p-10 flex gap-6 items-start bento-hover group"
            >
              <div className="w-12 h-12 border border-hairline flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:border-navy transition-colors">
                <item.icon className="w-5 h-5 text-crimson group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="font-body text-[10px] font-bold text-crimson uppercase tracking-[0.16em]">{item.tag}</span>
                <h3 className="font-display text-[24px] text-navy mt-1 mb-3">{item.title}</h3>
                <p className="font-body text-[14px] text-iron leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Image Mosaic ── */}
      <section className="bg-off-white border-y border-hairline py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fade(0)} className="mb-14">
            <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Life on Campus</span>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] text-navy mt-3">One Standard.</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[320px] gap-3">
            <motion.div {...fade(0)} className="col-span-2 relative overflow-hidden border border-hairline bento-hover">
              <Image src="/full_a_level_students.jpg" alt="Platform Students" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-body font-bold text-white text-[14px]">A-Level Cohort</p>
                <p className="font-body text-white/60 text-[12px]">Platform College</p>
              </div>
            </motion.div>
            <motion.div {...fade(0.07)} className="relative overflow-hidden border border-hairline bento-hover">
              <Image src="/a_level_girl_smiling.jpg" alt="Student" fill className="object-cover object-top" />
            </motion.div>
            <motion.div {...fade(0.1)} className="relative overflow-hidden border border-hairline bento-hover">
              <Image src="/preety_aleveL_students.jpg" alt="Students" fill className="object-cover" />
            </motion.div>
            <motion.div {...fade(0.13)} className="relative overflow-hidden border border-hairline bento-hover">
              <Image src="/a_level_students_wearing_whites.jpg" alt="Students in Uniform" fill className="object-cover" />
            </motion.div>
            <motion.div {...fade(0.16)} className="relative overflow-hidden border border-hairline bento-hover">
              <Image src="/alevelstudents.jpg" alt="Students" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Redirect CTA ── */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            {...fade(0)}
            className="bg-navy grid grid-cols-1 lg:grid-cols-2 border border-hairline overflow-hidden"
          >
            <div className="p-12 lg:p-16 flex flex-col justify-center gap-6">
              <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">
                Platform Schools Group
              </span>
              <h2 className="font-display text-[clamp(28px,3vw,44px)] text-white leading-tight">
                Discover the Full Platform Experience Online.
              </h2>
              <p className="font-body font-light text-[15px] text-white/70 leading-relaxed max-w-md">
                From Nursery to A-Levels, the Platform Schools website has everything — gallery, campus tours, news, and student life in full detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.platformschools.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-[52px] px-8 bg-crimson text-white font-body font-semibold text-[13px] hover:bg-[#a0182f] transition-colors"
                >
                  Visit Platform Schools <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 h-[52px] px-8 border border-white/30 text-white font-body font-semibold text-[13px] hover:bg-white/10 transition-colors"
                >
                  Apply for 2026/2027 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
              <Image src="/two_girl_one_boy.jpg" alt="Platform Students" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/50 hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
