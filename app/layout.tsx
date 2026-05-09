import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Falcatio Librorum — Curaduría bibliográfica privada",
  description:
    "Curaduría bibliográfica privada. Un espacio para el arraigo verdadero y la conversación analógica.",
  openGraph: {
    title: "Falcatio Librorum",
    description:
      "Curaduría bibliográfica privada. Un espacio para el arraigo verdadero y la conversación analógica.",
    url: "https://falcatiolibrorum.es",
    siteName: "Falcatio Librorum",
    images: [
      {
        url: "https://falcatiolibrorum.es/logo-share.png",
        width: 1200,
        height: 630,
        alt: "Falcatio Librorum",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} min-h-screen bg-[#F8F6F2] text-black antialiased flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}