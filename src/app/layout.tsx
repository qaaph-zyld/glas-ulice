import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glas Ulice | Borba 015 x Cinematic Realitat",
  description: "Glas Ulice nije brend. Nije trend. To je otpor. Istina. Krik onih koje niko ne želi da čuje. BORBA 015 x CINEMATIC REALITAT AREA 015.",
  keywords: ["Glas Ulice", "Borba 015", "Cinematic Realitat", "underground", "neo-noir", "muzika", "film", "fotografija", "otpornik"],
  authors: [{ name: "Borba 015 x Cinematic Realitat" }],
  openGraph: {
    title: "Glas Ulice | Borba 015 x Cinematic Realitat",
    description: "Otpor. Istina. Krik onih koje niko ne želi da čuhe.",
    url: "https://glasulice.com",
    siteName: "Glas Ulice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glas Ulice | Borba 015 x Cinematic Realitat",
    description: "Otpor. Istina. Krik onih koje niko ne želi da čuhe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
