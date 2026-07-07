import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=EB+Garamond:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F0FDFA] text-[#134E4A] antialiased">
        {children}
      </body>
    </html>
  );
}
