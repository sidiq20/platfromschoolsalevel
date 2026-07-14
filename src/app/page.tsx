"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Trophy, Star, ArrowRight, GraduationCap, Globe,
  CheckCircle2, Microscope, BookOpen, Building2, Users, Award, X,
  MessageCircle, ChevronDown, ExternalLink
} from "lucide-react";

/* ─── Framer helpers ────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

/* ─── Bento Tile ────────────────────────────────────────────────── */
function Tile({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-white border border-hairline bento-hover ${className}`}>
      {children}
    </div>
  );
}

/* ─── Image Placeholder ─────────────────────────────────────────── */
function ImgSlot({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`bg-stone flex flex-col items-center justify-center gap-2 text-mist ${className}`}>
      <Building2 className="w-8 h-8 opacity-40" />
      {label && <span className="font-body text-[11px] font-medium uppercase tracking-widest opacity-50">{label}</span>}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What programmes does Platform College offer?", a: "We offer Cambridge AS & A Levels (1 or 2 years), A' Level Direct Entry, and a University Foundation Programme — all internationally recognised pathways to top universities." },
    { q: "What are the entry requirements?", a: "Applicants need a minimum of 5 credits in WAEC, NECO, or IGCSE including Mathematics and English Language. Specific subject requirements apply per programme track." },
    { q: "When are admissions open?", a: "Admissions for the 2026/2027 academic year are currently open. Entrance assessments are ongoing — apply early as places are limited." },
    { q: "Which universities have your students been admitted to?", a: "Our alumni hold offers from universities including University of Cambridge, Imperial College London, LSE, University of Toronto, MIT, and top Nigerian institutions." },
    { q: "How do I register for the entrance exam?", a: "You can register via our online admissions portal. WhatsApp us at +234 806 491 8422 for a guided walkthrough." },
    { q: "Does Platform College offer boarding?", a: "We currently operate as a day school. For full details on facilities and schedules, visit the main Platform Schools website." },
  ];

  useEffect(() => {
    // Show modal shortly after load
    const timer = setTimeout(() => setShowModal(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-[68px] bg-white relative">
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-panel overflow-hidden flex flex-col items-center text-center p-10 z-10"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-iron hover:text-navy transition-colors bg-white/50 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>
              
              <Image
                src="/new flyer.jpeg"
                alt="Platform College Advert"
                width={800}
                height={800}
                className="w-full max-h-[45vh] object-contain rounded-xl mb-6 shadow-sm border border-hairline"
              />
              <h2 className="font-display text-[28px] text-navy mb-3 leading-tight">Our UK Summer Camp Is Now Open</h2>
              <p className="font-body text-iron mb-6 leading-relaxed">
                Build confidence, develop new skills, and form lasting friendships at this year’s Summer Camp.
              </p>
              <Button size="lg" className="w-full shadow-xl">
                Register Now
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          HERO — Split Layout
      ══════════════════════════════════════════ */}
      <section className="min-h-[calc(100vh-68px)] grid grid-cols-1 lg:grid-cols-2">

        {/* Left — Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-20 py-20">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5 font-body font-semibold text-[11px] text-royal uppercase tracking-[0.14em] mb-10">
              <GraduationCap className="w-3.5 h-3.5" />
              Cambridge International · AS & A Level
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-[clamp(48px,6vw,88px)] leading-[1.02] text-navy mb-8"
            {...fadeUp(0.08)}
          >
            Where Nigeria&apos;s
            <br />
            Best Students
            <br />
            Come to{" "}
            <span className="italic text-crimson">Fly.</span>
          </motion.h1>

          <motion.div {...fadeUp(0.16)}>
            <div className="w-12 h-[2px] bg-crimson mb-8" />
            <p className="font-body text-[17px] font-light text-iron leading-relaxed max-w-[480px] mb-12">
              Platform College delivers Cambridge AS & A Level education
              that places students into the world&apos;s best universities.
              Expert faculty. Zero compromise.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button size="lg" variant="primary" asChild>
              <Link href="/admissions">Apply for 2026/2027</Link>
            </Button>
            <Button size="lg" variant="ghost">
              Download Prospectus
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.28)} className="flex items-center gap-4 pt-8 border-t border-hairline">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#A87C2A] text-[#A87C2A]" />
              ))}
            </div>
            <span className="font-body text-[13px] text-smoke">Trusted by 500+ Lagos families</span>
          </motion.div>
        </div>

        {/* Right — Hero Image Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative hidden lg:block bg-stone border-l border-hairline overflow-hidden"
        >
          <Image src="/full_a_level_students.jpg" alt="Platform College Students" fill className="object-cover" priority />


          {/* Floating Stat Chip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="absolute top-10 right-8 bg-crimson text-white px-4 py-3"
          >
            <p className="font-display text-[28px] leading-none">100%</p>
            <p className="font-body text-[11px] font-medium mt-1 opacity-80">Cambridge Pass Rate</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Footer Logos */}
      <div className="border-y border-hairline bg-white py-12 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-body font-semibold text-[11px] text-smoke uppercase tracking-[0.16em] text-center mb-10">
            Recognised &amp; Accredited By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
            {[
              { src: "/cambridge-international-examinations-cambridge-international-centre-vector-logo.png", alt: "Cambridge International", w: 200, h: 60 },
              { src: "/bc.png", alt: "British Council", w: 180, h: 60 },
              { src: "/ielts.png", alt: "IELTS", w: 140, h: 60 },
              { src: "/ucas.png", alt: "UCAS", w: 140, h: 60 },
              { src: "/ie.png", alt: "International Education", w: 130, h: 60 },
              { src: "/pe.png", alt: "Pearson Edexcel", w: 150, h: 60 },
            ].map((logo) => (
              <div key={logo.alt} className="flex flex-col items-center gap-3 group">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain h-14 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <span className="font-body text-[10px] font-semibold text-smoke uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  {logo.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ADVERT BANNER SECTION
      ══════════════════════════════════════════ */}
      <section className="max-w-[1000px] mx-auto px-6 py-16">
        <motion.div {...fadeUp(0)} className="rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(11,34,64,0.15)] border-[8px] border-white/50 backdrop-blur-lg">
          <Image src="/new flyer.jpeg" alt="Platform College Admissions" width={1000} height={1000} className="w-full h-auto object-cover" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TICKER
      ══════════════════════════════════════════ */}
      <div className="border-y border-hairline bg-off-white h-[52px] overflow-hidden flex items-center">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-16 pr-16 shrink-0">
              {[
                "100% Cambridge Pass Rate",
                "Cambridge Accredited Since 2017",
                "Placements: UK · USA · Canada",
                "Admissions Open 2026/2027",
              ].map((item) => (
                <span key={item} className="flex items-center gap-3 font-body font-semibold text-[11px] text-navy uppercase tracking-[0.1em]">
                  <span className="w-1 h-1 bg-crimson shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS — 4 Bento Tiles
      ══════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-hairline divide-x divide-y divide-hairline">
          {[
            { num: "17+", label: "Years of Excellence", icon: Award },
            { num: "100%",label: "Cambridge Pass Rate", icon: Trophy },
          ].map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              className="flex flex-col items-center justify-center text-center py-12 px-6 gap-3 group hover:bg-off-white transition-colors"
            >
              <stat.icon className="w-5 h-5 text-crimson mb-1" />
              <span className="font-display text-[56px] md:text-[64px] text-navy leading-none">
                {stat.num}
              </span>
              <span className="font-body text-[11px] font-semibold text-smoke uppercase tracking-[0.12em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BENTO — Why Platform College & Programmes
      ══════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">
            Programmes & Pathways
          </span>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] text-navy mt-3 max-w-lg">
            The Smartest Choice for Sixth Form.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">

          {/* Tile 1 — Programmes */}
          <motion.div {...fadeUp(0)} className="md:col-span-2 md:row-span-2 glass-panel p-8 flex flex-col justify-between bento-hover overflow-hidden relative group">
            <div className="absolute -right-10 -bottom-10 w-[300px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
              <Image src="/illustrations/undraw_education_3vwh.svg" alt="Education" width={300} height={300} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy/5 text-navy mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display text-[32px] leading-tight text-navy mb-4">A-Levels Programmes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-crimson" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-navy text-[15px]">AS & A Levels Accelerated (1 Year)</p>
                    <p className="font-body text-iron text-[13px]">Fast-track your future.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-navy" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-navy text-[15px]">AS & A Levels (2 Years)</p>
                    <p className="font-body text-iron text-[13px]">Comprehensive preparation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-gold" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-navy text-[15px]">University Foundation Programme</p>
                    <p className="font-body text-iron text-[13px]">Build the foundation for global success.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tile 2 — Direct Entry */}
          <motion.div {...fadeUp(0.07)} className="glass-card p-7 flex flex-col justify-between bento-hover bg-gradient-to-br from-navy/90 to-navy text-white rounded-3xl">
            <Globe className="w-8 h-8 text-white/50 mb-4" />
            <div>
              <p className="font-display text-[24px] leading-tight text-white mb-2">A' Level (Direct Entry)</p>
              <p className="font-body text-[13px] text-white/70">A recognized pathway that qualifies eligible students for 200 Level admission into Nigerian and international universities.</p>
            </div>
          </motion.div>

          {/* Tile 3 — Entry Requirements */}
          <motion.div {...fadeUp(0.1)} className="glass-card p-7 flex flex-col justify-between bento-hover rounded-3xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 w-[120px] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Image src="/illustrations/undraw_reading-time_jva3.svg" alt="Reading" width={150} height={150} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-crimson" />
              </div>
              <p className="font-display text-[24px] leading-tight text-navy mb-2">Entry Requirements</p>
              <p className="font-body font-bold text-[16px] text-iron mt-2">IGCSE, WAEC OR NECO</p>
              <p className="font-body text-[12px] text-smoke mt-1">Required for admission.</p>
            </div>
          </motion.div>

          {/* Tile 4 — Educator Illustration */}
          <motion.div {...fadeUp(0.13)} className="glass-card p-7 flex flex-col items-center justify-center bento-hover rounded-3xl col-span-1 md:col-span-2">
            <Image src="/illustrations/undraw_educator_6dgp.svg" alt="Educator" width={220} height={160} />
            <p className="font-display text-[22px] text-navy mt-4">Expert Faculty Guidance</p>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESTINATIONS — Where our graduates go
      ══════════════════════════════════════════ */}
      <section className="bg-off-white border-y border-hairline py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">
                Graduate Destinations
              </span>
              <h2 className="font-display text-[clamp(32px,4vw,52px)] text-navy mt-2">
                From Lagos to the World&apos;s <span className="italic text-crimson">Top Universities.</span>
              </h2>
            </div>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 font-body font-semibold text-[13px] text-royal hover:gap-4 transition-all shrink-0"
            >
              Explore programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                flag: "🇬🇧",
                country: "United Kingdom",
                track: "Top Destination",
                unis: ["University of Cambridge", "Imperial College London", "LSE", "UCL", "University of Manchester"],
                desc: "The majority of our graduates secure places at Russell Group universities, with Cambridge and Imperial among our proudest placements.",
              },
              {
                flag: "🇨🇦",
                country: "Canada & USA",
                track: "Growing Pathway",
                unis: ["University of Toronto", "MIT", "McGill University", "UBC", "Cornell University"],
                desc: "Our UCAS and Common App counselling equips students to compete successfully for North America's most prestigious institutions.",
              },
              {
                flag: "🇳🇬",
                country: "Nigeria — Direct Entry",
                track: "200 Level Advantage",
                unis: ["University of Lagos", "University of Ibadan", "Covenant University", "LUTH Medicine", "Babcock University"],
                desc: "A' Level Direct Entry students gain 200 Level admission into Nigerian universities, bypassing JAMB and saving a full academic year.",
              },
            ].map((dest, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="bg-white border border-hairline p-8 flex flex-col gap-6 group cursor-pointer hover:border-navy transition-colors bento-hover"
              >
                <div className="text-[40px] leading-none">{dest.flag}</div>
                <div>
                  <span className="font-body text-[10px] font-bold text-crimson uppercase tracking-[0.16em]">
                    {dest.track}
                  </span>
                  <h3 className="font-display text-[24px] text-navy mt-1 mb-3">{dest.country}</h3>
                  <p className="font-body text-[13px] text-iron leading-relaxed mb-4">{dest.desc}</p>
                  <ul className="space-y-1.5">
                    {dest.unis.map((uni) => (
                      <li key={uni} className="flex items-center gap-2 font-body text-[12px] text-smoke">
                        <span className="w-1 h-1 bg-crimson shrink-0" />{uni}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════
          ADMISSIONS CTA
      ══════════════════════════════════════════ */}
      <section className="py-40 px-6">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-2 h-2 bg-crimson animate-pulse" />
              <span className="font-body font-bold text-[11px] text-crimson uppercase tracking-[0.16em]">
                Admissions Now Open
              </span>
            </div>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] text-navy mb-8 leading-[1.02]">
              Secure Your Place.<br />
              Shape Your Future.
            </h2>
            <p className="font-body font-light text-[18px] text-iron leading-relaxed mb-12 max-w-xl mx-auto">
              Limited places for 2026/2027. Entrance assessments are ongoing. Apply early to avoid disappointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="primary" asChild><Link href="/admissions">Apply Now</Link></Button>
              <Button size="lg" variant="ghost">Talk to an Adviser</Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["No application fee", "Results within 5 days", "WhatsApp support"].map((f) => (
                <span key={f} className="flex items-center gap-2 font-body text-[13px] text-smoke">
                  <CheckCircle2 className="w-4 h-4 text-crimson" /> {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHATSAPP + FAQ CHAT WIDGET
      ══════════════════════════════════════════ */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
        {/* FAQ Panel */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="w-[360px] max-h-[520px] bg-white border border-hairline shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-navy px-5 py-4 flex items-center justify-between shrink-0">
                <div>
                  <p className="font-body font-bold text-white text-[14px]">Platform College</p>
                  <p className="font-body text-white/60 text-[11px] mt-0.5">Frequently Asked Questions</p>
                </div>
                <button onClick={() => setShowChat(false)} className="text-white/60 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* FAQ list */}
              <div className="overflow-y-auto flex-1 divide-y divide-hairline">
                {faqs.map((faq, i) => (
                  <div key={i} className="cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="flex items-center justify-between px-5 py-4 hover:bg-off-white transition-colors gap-3">
                      <p className="font-body text-[13px] font-semibold text-navy leading-snug">{faq.q}</p>
                      <ChevronDown
                        className={`w-4 h-4 text-smoke shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="font-body text-[13px] text-iron leading-relaxed px-5 pb-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="px-5 py-4 border-t border-hairline shrink-0 bg-off-white">
                <p className="font-body text-[12px] text-smoke mb-3">Still have questions? Chat with us directly.</p>
                <a
                  href="https://wa.me/2348064918422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-10 bg-[#25D366] text-white font-body font-semibold text-[13px] hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setShowChat(!showChat)}
          className="relative flex items-center gap-2.5 bg-[#25D366] text-white px-5 py-3 shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:bg-[#20ba59] transition-all hover:scale-[1.03] active:scale-95"
        >
          {showChat ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
          <span className="font-body font-semibold text-[13px] uppercase tracking-wider hidden sm:inline">
            {showChat ? "Close" : "Chat with us"}
          </span>
          {!showChat && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
          )}
        </motion.button>
      </div>

    </div>
  );
}
