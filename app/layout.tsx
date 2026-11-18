import type { Metadata, Viewport } from "next";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const mono = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-mono", display: "swap" });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const siteUrl = "https://d4rkr0n1n.github.io";
const title = "Mridul Roy — I make systems behave.";
const description = "Forward Deployed Engineer. DevSecOps, infrastructure, deployment automation, and pragmatic engineering. Less buzzwords. More shipping.";
const ogImage = { url: "/og.png", width: 1200, height: 630, type: "image/png", alt: title };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Mridul Roy", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: { title: "Mridul Roy / Forward Deployed Engineer", description: "I make systems behave. Usually.", url: "/", siteName: "Mridul Roy", locale: "en_IN", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title: "Mridul Roy / Forward Deployed Engineer", description: "I make systems behave. Usually.", images: [ogImage] },
};

export const viewport: Viewport = { themeColor: "#080b0b", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${mono.variable} ${sans.variable} antialiased`}>{children}</body></html>;
}
