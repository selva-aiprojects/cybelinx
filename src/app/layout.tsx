import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import CursorParticles from "@/components/CursorParticles";
import { brand } from "@/lib/content";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cybelinx.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "Cybelinx",
    "Enterprise AI Platforms",
    "Cloud Native PaaS",
    "DevSecOps Automation",
    "Quantum Ready Computing",
    "Enterprise HRMS Software",
    "Hospitality Management System",
    "Clinical Healthcare Software",
    "Pharma Commercial Operations",
    "Multi-Cloud Infrastructure",
  ],
  authors: [{ name: "Cybelinx Engineering", url: "https://cybelinx.com" }],
  creator: "Cybelinx",
  publisher: "Cybelinx",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    url: "https://cybelinx.com",
    siteName: brand.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/cybelinx-branding-kit.png",
        width: 1200,
        height: 630,
        alt: "Cybelinx Enterprise Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    images: ["/cybelinx-branding-kit.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cybelinx.com/#organization",
                  "name": brand.name,
                  "url": "https://cybelinx.com",
                  "logo": "https://cybelinx.com/cybelinx-logo.png",
                  "description": brand.description,
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": brand.email,
                    "contactType": "sales",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cybelinx.com/#website",
                  "url": "https://cybelinx.com",
                  "name": brand.name,
                  "publisher": {
                    "@id": "https://cybelinx.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen bg-transparent font-sans text-surface antialiased relative"
        suppressHydrationWarning
      >
        <GlobalBackground />
        <CursorParticles />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
