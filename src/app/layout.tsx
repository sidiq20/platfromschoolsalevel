import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://platformschoolsalevel.com"),
  title: {
    default: "Platform College — Cambridge A-Level School in Lagos",
    template: "%s | Platform College"
  },
  description:
    "Platform College offers Cambridge AS & A Level education in Lagos, Nigeria. Unrivalled results, expert faculty, three campuses. Apply for 2026/2027.",
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
    url: "https://platformschoolsalevel.com",
    title: "Platform College — Cambridge A-Level School",
    description: "Where Nigeria's best students come to fly. Cambridge-accredited. Three campuses in Lagos.",
    siteName: "Platform College",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform College — Cambridge A-Level School",
    description: "Where Nigeria's best students come to fly. Cambridge-accredited. Three campuses in Lagos.",
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
      </head>
      <body className="min-h-full flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
