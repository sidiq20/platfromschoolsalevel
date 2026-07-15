import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const FacebookSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Contact", href: "/contact" },
  ],
  Programmes: [
    { label: "AS & A Levels (2 Years)", href: "/programmes/a-level-2-years" },
    { label: "AS & A Levels (1 Year)", href: "/programmes/a-level-1-year" },
    { label: "University Foundation", href: "/programmes/foundation" },
    { label: "Direct Entry A Level", href: "/programmes/direct-entry" },
    { label: "All Programmes →", href: "/programmes" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      {/* Top Band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <Image src="/newlogo.png" alt="Platform College Logo" width={180} height={48} className="w-auto h-12 object-contain" />
            </Link>
            <p className="font-display italic text-[17px] text-white/50 leading-relaxed mb-8">
              Cambridge AS & A Level education in Lagos, Nigeria.
            </p>
            <div className="flex gap-3">
              {[FacebookSvg, InstagramSvg, TwitterSvg].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-body font-semibold text-[10px] text-crimson uppercase tracking-[0.18em] mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.Explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-[13px] text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-body font-semibold text-[10px] text-crimson uppercase tracking-[0.18em] mb-6">Programmes</h4>
            <ul className="space-y-3">
              {footerLinks.Programmes.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-[13px] text-white/55 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-[10px] text-crimson uppercase tracking-[0.18em] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/55">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/30" />
                <span className="font-body text-[13px]">16, James Fadipe, off Aina Obembe Street,<br />Oluwaga, Ipaja, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-white/55">
                <Phone className="w-4 h-4 shrink-0 text-white/30" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-[13px]">+234 905 302 8880</span>
                  <span className="font-body text-[13px]">+234 905 301 8880</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/55">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-white/30" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-[13px]">info@platformschools.org</span>
                  <span className="font-body text-[13px]">admissions@platformcollege.org</span>
                </div>
              </li>
              <li className="pt-4">
                <a
                  href="https://wa.me/2348064918422"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body font-bold text-[14px] text-white bg-[#25D366] px-5 py-2.5 rounded-full hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ask via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Partner Logos */}
      <div className="bg-white border-y border-hairline py-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
          <Image src="/cambridge-international-examinations-cambridge-international-centre-vector-logo.png" alt="Cambridge" width={300} height={90} className="object-contain h-20 w-auto" />
          <Image src="/bc.png" alt="British Council" width={140} height={40} className="object-contain h-8 w-auto" />
          <Image src="/ielts.png" alt="IELTS" width={100} height={40} className="object-contain h-8 w-auto" />
          <Image src="/ucas.png" alt="UCAS" width={100} height={40} className="object-contain h-8 w-auto" />
          <Image src="/ie.png" alt="IE" width={100} height={40} className="object-contain h-8 w-auto" />
          <Image src="/pe.png" alt="Pearson Edexcel" width={100} height={40} className="object-contain h-8 w-auto" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-body text-[12px] text-white/30">
          Part of <a href="https://www.platformschools.org/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors underline">Platform Schools Group</a> &copy; {new Date().getFullYear()} Platform College
        </p>
        <p className="font-body text-[12px] text-white/30">
          Built by{" "}
          <a
            href="https://sidiqolasode.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white transition-colors font-medium"
          >
            jsx limited
          </a>
        </p>
      </div>
    </footer>
  );
}
