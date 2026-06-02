import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yokefaith.com"),
  title: {
    default: "Yoke: Faith Together",
    template: "%s | Yoke",
  },
  description:
    "Be equally yoked. A faith-based dating app connecting Christian singles who are serious about finding a partner who shares their walk with God.",
  openGraph: {
    type: "website",
    siteName: "Yoke: Faith Together",
    title: "Yoke: Faith Together",
    description:
      "Be equally yoked. A faith-based dating app connecting Christian singles.",
    url: "https://yokefaith.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoke: Faith Together",
    description:
      "Be equally yoked. A faith-based dating app connecting Christian singles.",
    site: "@yokefaith",
    creator: "@yokefaith",
  },
  alternates: {
    canonical: "https://yokefaith.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-warm text-charcoal">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
