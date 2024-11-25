import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKTAdvance",
  description:
    "Nous sommes une entreprise congolaise spécialisée dans la conception, production et affichage de vos supports de visibilité. Nous créons des espaces de rencontre entre vos marques et les consommateurs.",
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
