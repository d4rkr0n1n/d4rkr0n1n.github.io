import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mridul Roy — DevOps Engineer",
  description: "Portfolio of Mridul Roy, a DevOps Engineer building reliable, scalable cloud infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
