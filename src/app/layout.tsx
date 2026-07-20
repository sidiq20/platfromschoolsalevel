import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Fallback to Vercel domain or use custom env variable
const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://platfromschoolsalevel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: "Platform College — Cambridge A-Level School in Lagos",
    template: "%s | Platform College"
  },
  description:
    "Platform College offers Cambridge AS & A Level education in Lagos, Nigeria. Unrivalled results, expert faculty. Apply for 2026/2027.",
  keywords: [
    "Cambridge A-Level Lagos",
    "Platform College",
    "sixth form Nigeria",
    "IGCSE Lagos",
    "A Level Direct Entry",
    "Best Sixth Form Lagos"
  ],
  authors: [{ name: "Platform College" }],
  creator: "Platform College",
  publisher: "Platform Schools Group",
  icons: {
    icon: "/newlogo.png",
    apple: "/newlogo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: domain,
    title: "Platform College — Cambridge A-Level School",
    description: "Where Nigeria's best students come to fly. Cambridge-accredited.",
    siteName: "Platform College",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Platform College — Cambridge A-Level School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform College — Cambridge A-Level School",
    description: "Where Nigeria's best students come to fly. Cambridge-accredited.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1941956419842145'); 
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1941956419842145&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
