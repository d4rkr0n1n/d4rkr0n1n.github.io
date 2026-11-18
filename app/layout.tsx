import type { Metadata } from "next";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const mono = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-mono", display: "swap" });
const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Mridul Roy — I make systems behave.",
  description: "Forward Deployed Engineer. DevSecOps, infrastructure, deployment automation, and pragmatic engineering. Less buzzwords. More shipping.",
  openGraph: { title: "Mridul Roy / Systems Engineer", description: "I make systems behave. Usually.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${mono.variable} ${sans.variable} antialiased`}>{children}</body></html>;
}
