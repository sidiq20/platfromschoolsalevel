"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { newsArticles } from "@/data/news";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

function ImgSlot({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`bg-stone flex flex-col items-center justify-center gap-2 text-mist ${className}`}>
      <Building2 className="w-8 h-8 opacity-40" />
      {label && <span className="font-body text-[11px] font-medium uppercase tracking-widest opacity-50">{label}</span>}
    </div>
  );
}

const catColors: Record<string, string> = {
  Awards:    "text-gold bg-gold-bg border-gold/30",
  Academics: "text-royal bg-stone border-hairline",
  Admissions:"text-crimson bg-crimson-bg border-crimson-border",
  Events:    "text-navy bg-off-white border-hairline",
  Results:   "text-crimson bg-crimson-bg border-crimson-border",
};

export default function NewsPage() {
  const [featured, ...rest] = newsArticles;

  return (
    <div className="pt-[68px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-body font-semibold text-[11px] text-crimson uppercase tracking-[0.16em]">News & Updates</span>
          <h1 className="font-display text-[clamp(40px,5vw,72px)] text-navy mt-3">Latest from Platform.</h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-lg leading-relaxed">
            Achievements, announcements, and stories from our campuses.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        {/* Featured Article */}
        <motion.div {...fade(0)} className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-hairline mb-10 group bento-hover cursor-pointer">
          <div className="relative min-h-[320px] border-b lg:border-b-0 lg:border-r border-hairline overflow-hidden">
            {featured.image ? (
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            ) : (
              <ImgSlot label="Featured Photo" className="absolute inset-0" />
            )}
            <div className="absolute top-5 left-5 bg-white border border-hairline px-3 py-1.5 font-body font-bold text-[11px] text-navy uppercase tracking-wider">
              Featured
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-body text-[11px] font-bold px-3 py-1 border ${catColors[featured.cat]}`}>
                  {featured.cat}
                </span>
                <span className="font-body text-[12px] text-mist flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {featured.date}
                </span>
              </div>
              <h2 className="font-display text-[clamp(24px,2.5vw,36px)] text-navy mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="font-body text-[15px] text-iron leading-relaxed">{featured.excerpt}</p>
            </div>
            <Link
              href={`/news/${featured.id}`}
              className="mt-8 inline-flex items-center gap-2 font-body text-[13px] font-semibold text-navy group-hover:gap-4 transition-all"
            >
              Read Full Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((article, i) => (
            <motion.div
              key={article.id}
              {...fade(i * 0.08)}
              className="border border-hairline flex flex-col group bento-hover cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden border-b border-hairline">
                {article.image ? (
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                ) : (
                  <ImgSlot className="absolute inset-0" />
                )}
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-body text-[10px] font-bold px-2.5 py-1 border ${catColors[article.cat]}`}>
                    {article.cat}
                  </span>
                  <span className="font-body text-[11px] text-mist flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                </div>
                <h3 className="font-display text-[18px] text-navy leading-snug flex-1">{article.title}</h3>
                <p className="font-body text-[12px] text-iron leading-relaxed line-clamp-2">{article.excerpt}</p>
                <Link
                  href={`/news/${article.id}`}
                  className="font-body text-[12px] font-semibold text-navy flex items-center gap-1.5 group-hover:gap-3 transition-all mt-auto pt-3 border-t border-hairline"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
