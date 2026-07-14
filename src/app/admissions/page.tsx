"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

const steps = [
  { n: "01", title: "Application",         desc: "Complete the online enquiry form with student and academic details." },
  { n: "02", title: "Entrance Assessment", desc: "Written test in English, Mathematics, and chosen A-Level subjects." },
  { n: "03", title: "Interview",           desc: "Brief formal meeting with the Head of College." },
  { n: "04", title: "Offer Letter",        desc: "Issued within 5 working days of a successful interview." },
  { n: "05", title: "Enrolment",           desc: "Pay the deposit and submit required documentation." },
  { n: "06", title: "Welcome",             desc: "Receive your timetable, book list, and joining instructions." },
];

export default function AdmissionsPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="pt-[68px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-crimson animate-pulse" />
            <span className="font-body font-bold text-[11px] text-crimson uppercase tracking-[0.16em]">Applications Open</span>
          </div>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy max-w-2xl">
            Join Platform College.
          </h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-xl leading-relaxed">
            Begin your journey to the world's top universities. 2026/2027 places are being filled now.
          </p>
        </div>
      </section>

      {/* Two-Column — Steps + Form */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Steps */}
          <div>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] text-navy mb-12">How to Apply</h2>
            <div className="relative">
              <div className="absolute left-5 top-6 bottom-6 w-px bg-hairline" />
              <div className="flex flex-col gap-0">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-6 pb-10 relative cursor-pointer group"
                    onMouseEnter={() => setActiveStep(i)}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center shrink-0 z-10 border-2 transition-all duration-200 font-body font-bold text-[12px] ${
                        activeStep === i
                          ? "bg-crimson border-crimson text-white"
                          : "bg-white border-hairline text-smoke group-hover:border-navy group-hover:text-navy"
                      }`}
                    >
                      {step.n}
                    </div>
                    <div className="pt-2">
                      <h4 className={`font-body font-bold text-[16px] mb-1.5 transition-colors ${activeStep === i ? "text-navy" : "text-iron"}`}>
                        {step.title}
                      </h4>
                      <p className="font-body text-[14px] text-smoke leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="bg-white border border-hairline p-8 md:p-10">
              <h3 className="font-body font-bold text-[20px] text-navy mb-8 pb-6 border-b border-hairline">
                Begin Your Application
              </h3>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">
                    Student&apos;s Full Name <span className="text-crimson">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] text-charcoal focus:outline-none focus:border-navy transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">
                      Parent Name <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Parent / guardian"
                      className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">
                      Phone <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+234..."
                      className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] text-charcoal focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">
                    Programme <span className="text-crimson">*</span>
                  </label>
                  <select className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] text-charcoal focus:outline-none focus:border-navy transition-colors bg-white appearance-none">
                    <option>Cambridge A-Level</option>
                    <option>Cambridge AS-Level</option>
                    <option>Cambridge IGCSE</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">
                    Subject Interests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Mathematics, Physics, Chemistry..."
                    className="w-full p-4 border border-hairline font-body text-[14px] text-charcoal focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>

                <Button size="lg" variant="primary" className="w-full mt-2">
                  Submit Application
                </Button>

                <p className="text-center font-body text-[12px] text-smoke">
                  Prefer WhatsApp?{" "}
                  <a href="https://wa.me/2348064918422" className="text-[#25D366] font-semibold">Chat with us →</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="bg-off-white border-y border-hairline py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] text-navy mb-10">Key Dates & Deadlines</h2>
          <div className="border border-hairline bg-white divide-y divide-hairline">
            {[
              { date: "Rolling",    event: "Applications accepted throughout the year" },
              { date: "September",  event: "New academic year begins" },
              { date: "May / June", event: "Cambridge examinations — main series" },
              { date: "October",    event: "Cambridge examinations — second series" },
              { date: "August",     event: "Cambridge results published" },
            ].map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center px-8 py-5">
                <span className="w-full sm:w-[200px] font-body font-bold text-[14px] text-crimson shrink-0 mb-1 sm:mb-0">{row.date}</span>
                <span className="font-body text-[14px] text-iron">{row.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display text-[clamp(28px,3vw,40px)] text-navy mb-4">Fees & Funding</h2>
          <p className="font-body text-[16px] text-iron mb-12 max-w-xl">
            Fees vary by programme. Contact us for a full breakdown — we are happy to discuss in confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["Tuition", "Boarding (Optional)", "Cambridge Exam Fees"].map((fee, i) => (
              <div key={i} className="bg-off-white border border-hairline p-8">
                <h3 className="font-body font-bold text-[18px] text-navy mb-3">{fee}</h3>
                <p className="font-body text-[13px] text-iron mb-6 leading-relaxed">
                  Detailed schedule available on request during your consultation.
                </p>
                <a href="/contact" className="font-body font-semibold text-[13px] text-royal flex items-center gap-1.5 hover:gap-3 transition-all">
                  Request guide <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
