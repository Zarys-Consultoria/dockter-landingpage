import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const GTM_ID = "GTM-5GZF5979";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://dockter.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dockter | A gestão da vida profissional do médico em um só lugar",
    template: "%s | Dockter",
  },
  description:
    "Agenda, plantões, prontuário e receituário com assinatura digital, conectados para você acompanhar a sua prática médica com clareza.",
  applicationName: "Dockter",
  keywords: [
    "gestão médica",
    "prontuário eletrônico",
    "receituário digital",
    "assinatura digital VIDaaS",
    "agenda médica",
    "plantões",
    "SOAP",
    "SBAR",
    "software para médicos",
  ],
  authors: [{ name: "Dockter" }],
  creator: "Dockter",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dockter",
    title: "Dockter | A gestão da vida profissional do médico em um só lugar",
    description:
      "Agenda, plantões, prontuário e receituário com assinatura digital, conectados para você acompanhar a sua prática médica com clareza.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dockter | A gestão da vida profissional do médico em um só lugar",
    description:
      "Agenda, plantões, prontuário e receituário com assinatura digital em um só lugar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = { themeColor: "#3155d9" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dockter",
  url: siteUrl,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description:
    "Agenda, plantões, prontuário e receituário com assinatura digital, conectados para você acompanhar a sua prática médica com clareza.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    description: "Teste grátis por 30 dias",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; } .page-enter { animation: none !important; }`}</style>
        </noscript>
        {children}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </body>
    </html>
  );
}
