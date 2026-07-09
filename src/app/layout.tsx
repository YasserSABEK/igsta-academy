import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://92.118.206.86:3801"),
  title: "IGSTA Academy | Skills That Move You Forward",
  description: "Practical communication, digital, career, and life-skills pathways for ambitious Algerian students and young professionals.",
  keywords: ["IGSTA", "Algeria", "skills training", "English", "AI skills", "career readiness"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IGSTA Academy | Skills That Move You Forward",
    description: "Practical skills for ambitious Algerian students and young professionals.",
    type: "website",
    locale: "en_DZ",
    images: [{ url: "/igsta/hero-brand.jpg", width: 1376, height: 768, alt: "IGSTA Academy students learning together" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
