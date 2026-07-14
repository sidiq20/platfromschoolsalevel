"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

export default function ContactPage() {
  return (
    <div className="pt-[68px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">Contact Us</span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3">Get in Touch.</h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-lg leading-relaxed">
            Our admissions team is available Monday–Friday, 8am–5pm. WhatsApp responses within 1 hour.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-display text-[clamp(24px,3vw,36px)] text-navy mb-10">Contact Details</h2>
              <div className="flex flex-col gap-8">
                {[
                  { icon: Phone, label: "Phone", lines: ["+234 806 491 8422", "+234 905 302 8880"] },
                  { icon: Mail,  label: "Email", lines: ["info@platformcollege.org", "admissions@platformcollege.org"] },
                  { icon: MapPin,label: "Address", lines: ["16, James Fadipe, off Aina Obembe Street,", "Oluwaga, Ipaja, Lagos, Nigeria"] },
                ].map((item, i) => (
                  <motion.div key={i} {...fade(i * 0.07)} className="flex gap-5 items-start">
                    <div className="w-10 h-10 border border-hairline flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-iron" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-[11px] text-crimson uppercase tracking-widest mb-2">{item.label}</p>
                      {item.lines.map((l) => (
                        <p key={l} className="font-body text-[15px] text-navy">{l}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-hairline pt-10">
              <p className="font-body text-[13px] text-smoke mb-5">Prefer a quick conversation?</p>
              <a
                href="https://wa.me/2348064918422"
                className="inline-flex items-center gap-3 h-[48px] px-6 bg-[#25D366]/10 text-[#25D366] font-body font-semibold text-[14px] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Message Form */}
          <div>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] text-navy mb-10">Send a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                {[{ l: "First Name", t: "text" }, { l: "Last Name", t: "text" }].map((f) => (
                  <div key={f.l} className="flex flex-col gap-1.5">
                    <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">{f.l}</label>
                    <input
                      type={f.t}
                      className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] focus:outline-none focus:border-navy transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">Subject</label>
                <select className="w-full h-[46px] px-4 border border-hairline font-body text-[14px] focus:outline-none focus:border-navy transition-colors bg-white appearance-none">
                  <option>General Enquiry</option>
                  <option>Admissions</option>
                  <option>Fees & Finances</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-semibold text-[12px] text-navy uppercase tracking-wider">Message</label>
                <textarea
                  rows={5}
                  className="w-full p-4 border border-hairline font-body text-[14px] focus:outline-none focus:border-navy transition-colors resize-none"
                />
              </div>
              <Button size="lg" variant="primary" className="w-full mt-2">Send Message</Button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
