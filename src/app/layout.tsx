import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--ff-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--ff-mono",
});

export const metadata: Metadata = {
  title: "Flavio Raise — Systems & Networks",
  description:
    "Flavio Raise — IT technician working on systems, networks and security, based near Venice. Experience and how to reach me.",
  openGraph: {
    title: "Flavio Raise — Systems & Networks",
    description:
      "IT technician working on systems, networks and security, based near Venice.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
