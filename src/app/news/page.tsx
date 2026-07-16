"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { newsArticles, NewsArticle } from "@/data/news";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

const CATEGORIES = ["All", "Admissions", "Results", "Academics", "Events"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Pin the admissions-open article to top as featured
  const featuredId = "admissions-open-2026-2027";
  const featured = newsArticles.find((a) => a.id === featuredId) ?? newsArticles[0];
  const rest = newsArticles.filter((a) => a.id !== featured.id);

  return (
    <div className="pt-[68px] bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-20">
        <div className="max-w-[1280px] mx-auto">
          <motion.div {...fade(0)} className="flex items-center gap-2 mb-4">
            <Newspaper className="w-4 h-4 text-crimson" />
            <span className="font-body font-bold text-[11px] text-crimson uppercase tracking-[0.16em]">
              News &amp; Announcements
            </span>
          </motion.div>
          <motion.h1
            {...fade(0.06)}
            className="font-display text-[clamp(40px,5vw,72px)] text-navy leading-[1.02]"
          >
            Latest from Platform College.
          </motion.h1>
          <motion.p
            {...fade(0.12)}
            className="font-body font-light text-[18px] text-iron mt-6 max-w-xl leading-relaxed"
          >
            Admissions updates and everything happening at Platform College.
          </motion.p>
        </div>
      </section>

      {/* ── Featured Article — 2026/27 Admissions ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <motion.div {...fade(0)}>
          <span className="font-body font-bold text-[10px] text-crimson uppercase tracking-[0.18em] mb-4 block">
            Featured · {featured.cat}
          </span>
        </motion.div>
        <motion.div
          {...fade(0.06)}
          className="relative bg-navy text-white overflow-hidden group"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-crimson/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 bg-crimson animate-pulse" />
                <span className="font-body font-bold text-[10px] text-crimson uppercase tracking-[0.18em]">
                  Breaking News
                </span>
              </div>
              <p className="font-body font-semibold text-[11px] text-white/40 uppercase tracking-widest mb-3">
                {featured.date}
              </p>
              <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-tight text-white mb-6">
                {featured.title}
              </h2>
              <p className="font-body font-light text-[16px] text-white/70 leading-relaxed max-w-2xl mb-8">
                {featured.excerpt}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 mb-10">
                {[
                  { label: "Applications", value: "Now Open" },
                  { label: "Session Starts", value: "September 2026" },
                  { label: "Cambridge Exams", value: "May / June 2027" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-body font-bold text-[10px] text-white/40 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="font-body font-semibold text-[16px] text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-3 font-body font-bold text-[14px] text-white bg-crimson px-7 py-3.5 hover:bg-crimson/80 transition-colors"
              >
                Begin Your Application <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {[
                { num: "100%", label: "Cambridge Pass Rate" },
                { num: "17+", label: "Years of Excellence" },
                { num: "500+", label: "Lagos Families Trust Us" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 px-6 py-5"
                >
                  <p className="font-display text-[42px] text-white leading-none">
                    {s.num}
                  </p>
                  <p className="font-body text-[12px] text-white/50 uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Article Grid ── */}
      <section className="bg-off-white border-t border-hairline py-20 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article, i) => (
              <ArticleCard key={article.id} article={article} delay={i * 0.06} />
            ))}
          </div>

          {rest.length === 0 && (
            <div className="text-center py-24">
              <p className="font-body text-[15px] text-smoke">
                No news articles at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ArticleCard({
  article,
  delay,
}: {
  article: NewsArticle;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white border border-hairline p-7 flex flex-col gap-4 group hover:border-navy transition-colors"
    >
      <span className="font-body font-bold text-[10px] text-crimson uppercase tracking-[0.16em]">
        {article.date} · {article.cat}
      </span>
      <h3 className="font-display text-[22px] text-navy leading-tight group-hover:text-crimson transition-colors line-clamp-3">
        {article.title}
      </h3>
      <p className="font-body text-[13px] text-iron leading-relaxed line-clamp-3 flex-1">
        {article.excerpt}
      </p>
      <Link
        href="/admissions"
        className="mt-auto inline-flex items-center gap-1.5 font-body font-semibold text-[13px] text-royal hover:gap-3 transition-all"
      >
        Read more <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.div>
  );
}
