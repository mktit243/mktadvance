import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKTAdvance",
  description:
    "Nous sommes un groupe de professionnels de la communication qui ont chacun acquis une expertise tout en travaillant pour certaines des plus grandes agences et clients en Afrique centrale et occidentale. Notre expérience depuis plus de 15 ans, nous permet d'apporter notre riche expertise et une meilleure gestion de la communication au bénéfice de nos clients.",
  generator: "Next.js",
  keywords: [
    "Marketing",
    "MKTAdvance",
    "Congolaise",
    "Affichage",
    "Publicité",
  ],
  openGraph: {
    images: '/assets/images/mkt-advance-details.jpeg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
