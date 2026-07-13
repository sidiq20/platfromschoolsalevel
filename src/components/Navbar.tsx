"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Programmes",
    href: "/programmes",
    sub: [
      { label: "AS & A Levels (2 Years)",           href: "/programmes/a-level-2-years" },
      { label: "AS & A Levels Accelerated (1 Year)", href: "/programmes/a-level-1-year" },
      { label: "University Foundation Programme",    href: "/programmes/foundation" },
      { label: "Direct Entry A Level",               href: "/programmes/direct-entry" },
    ],
  },
  { label: "Campus Life",  href: "/campus-life" },
  { label: "About Us",     href: "/about" },
  { label: "News",         href: "/news" },
  { label: "Contact Us",   href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programmeOpen, setProgrammeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b border-hairline shadow-sm" : "bg-white border-b border-hairline"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/platformalevellogo.png" alt="Platform College Logo" width={160} height={40} className="w-auto h-10 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.sub ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProgrammeOpen(true)}
                  onMouseLeave={() => setProgrammeOpen(false)}
                >
                  <button className="flex items-center gap-1 font-body text-[13px] font-medium text-iron hover:text-navy transition-colors">
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${programmeOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {programmeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-3 bg-white border border-hairline shadow-xl w-[260px] p-2"
                      >
                        {link.sub.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2.5 font-body text-[13px] text-iron hover:text-navy hover:bg-off-white transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-hairline">
                          <Link href="/programmes" className="block px-4 py-2.5 font-body text-[13px] font-semibold text-royal hover:bg-off-white transition-colors">
                            View all subjects →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-[13px] font-medium text-iron hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/admissions"
              className="hidden md:inline-flex h-[38px] px-5 items-center bg-crimson text-white font-body font-semibold text-[13px] tracking-wide hover:bg-[#a0182f] transition-colors"
            >
              Apply Now
            </Link>
            <button
              className="md:hidden text-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[68px] z-40 bg-white overflow-y-auto"
          >
            <nav className="flex flex-col divide-y divide-hairline">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-5 font-body text-[18px] font-medium text-navy hover:bg-off-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-6">
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center h-[52px] bg-crimson text-white font-body font-semibold text-[15px]"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
