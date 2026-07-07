import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGSTA Academy | Algeria Skills Training Platform",
  description:
    "Campus-first EdTech platform for Algerian student employability, languages, digital skills, and certified training pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
