import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; } .page-enter { animation: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
