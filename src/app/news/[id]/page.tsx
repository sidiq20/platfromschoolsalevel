import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ArrowRight, GraduationCap } from "lucide-react";
import { newsArticles } from "@/data/news";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ id: a.id }));
}

const catColors: Record<string, string> = {
  Awards:    "text-gold bg-gold-bg border-gold/30",
  Academics: "text-royal bg-stone border-hairline",
  Admissions:"text-crimson bg-crimson-bg border-crimson-border",
  Events:    "text-navy bg-off-white border-hairline",
  Results:   "text-crimson bg-crimson-bg border-crimson-border",
};

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = newsArticles.find((a) => a.id === id);
  if (!article) notFound();

  const related = newsArticles.filter((a) => a.id !== id).slice(0, 3);

  return (
    <div className="pt-[68px] bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-off-white border-b border-hairline px-6 lg:px-10 py-24">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-body text-[13px] text-iron hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className={`font-body text-[11px] font-bold px-3 py-1 border ${catColors[article.cat]}`}>
              {article.cat}
            </span>
            <span className="font-body text-[13px] text-mist flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {article.date}
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-crimson/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-crimson" />
            </div>
            <div>
              <p className="font-body text-[11px] font-semibold text-crimson uppercase tracking-wider">Platform College</p>
              <p className="font-body text-[13px] text-iron">Cambridge A-Level College, Lagos</p>
            </div>
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] text-navy max-w-4xl leading-tight">
            {article.title}
          </h1>
          <p className="font-body font-light text-[18px] text-iron mt-6 max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body + Sidebar */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Body - No Image */}
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            {article.content.split("\n\n").filter(p => p.trim()).map((para, i) => (
              <p
                key={i}
                className="font-body text-[16px] text-iron leading-[1.9] mb-6"
              >
                {para.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-navy p-8 flex flex-col gap-5">
            <h3 className="font-display text-[22px] text-white">Start Your Journey</h3>
            <p className="font-body text-[14px] text-white/60 leading-relaxed">
              Inspired by our results? Explore our Cambridge A-Level programmes and apply today.
            </p>
            <Link
              href="/programmes"
              className="inline-flex items-center justify-center gap-2 bg-crimson text-white font-body font-semibold px-6 py-3 hover:bg-[#a0182f] transition-colors"
            >
              Our Programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-off-white border border-hairline p-8">
            <h4 className="font-body font-bold text-[14px] text-navy uppercase tracking-widest mb-4">Contact Admissions</h4>
            <p className="font-body text-[13px] text-iron mb-4">Have questions about our A-Level programmes? Our team is available on WhatsApp.</p>
            <a
              href="https://wa.me/2348064918422"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body font-bold px-5 py-2.5 rounded-full hover:bg-[#20bd5a] transition-all text-[13px]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-off-white border-t border-hairline px-6 lg:px-10 py-20">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-display text-[clamp(24px,2.5vw,36px)] text-navy mb-10">More from Platform College</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/news/${rel.id}`}
                  className="bg-white border border-hairline p-8 flex flex-col gap-3 group hover:border-navy transition-colors"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-body text-[10px] font-bold px-2.5 py-1 border ${catColors[rel.cat]}`}>
                      {rel.cat}
                    </span>
                    <span className="font-body text-[11px] text-mist flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {rel.date}
                    </span>
                  </div>
                  <h3 className="font-display text-[18px] text-navy leading-snug group-hover:text-crimson transition-colors">{rel.title}</h3>
                  <span className="inline-flex items-center gap-1.5 font-body text-[12px] font-semibold text-navy mt-auto">
                    Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
