import type { Metadata } from "next";
import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnaut.dev.br"),
  title:
    "Arnaut LTDA: Software house de engenharia autônoma para sistemas críticos",
  description:
    "Projetamos e operamos esteiras de software autônomas com agentes de IA, testes contínuos e arquitetura corporativa confinada.",
  openGraph: {
    type: "website",
    title:
      "Arnaut LTDA: Software house de engenharia autônoma para sistemas críticos",
    description:
      "Projetamos e operamos esteiras de software autônomas com agentes de IA, testes contínuos e arquitetura corporativa confinada.",
    images: ["/share.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arnaut LTDA: Software house de engenharia autônoma para sistemas críticos",
    description:
      "Projetamos e operamos esteiras de software autônomas com agentes de IA, testes contínuos e arquitetura corporativa confinada.",
    images: ["/share.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-type="software"
      data-radius="soft"
      data-ground="sand"
      data-buttons="solid"
      data-motion=""
      className={`${hostGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
