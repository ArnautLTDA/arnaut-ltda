import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arnaut.dev.br"),
  title:
    "Arnaut - Tenha Sua Própria Agência de Software | Plataforma AI-Native",
  description:
    "The Agency by Arnaut: plataforma de IA que permite a qualquer empreendedor operar sua própria agência de desenvolvimento de software sem saber programar. Configure, fature e escale.",
  openGraph: {
    type: "website",
    title:
      "Arnaut - Tenha Sua Própria Agência de Software | Plataforma AI-Native",
    description:
      "The Agency by Arnaut: plataforma de IA que permite a qualquer empreendedor operar sua própria agência de desenvolvimento de software sem saber programar. Configure, fature e escale.",
    images: ["/share.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arnaut - Tenha Sua Própria Agência de Software | Plataforma AI-Native",
    description:
      "The Agency by Arnaut: plataforma de IA que permite a qualquer empreendedor operar sua própria agência de desenvolvimento de software sem saber programar. Configure, fature e escale.",
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
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
