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
  title: "Flavio Raise — Software & Networks",
  description:
    "Flavio Raise — junior software developer with a background in systems and networks, based near Venice. Projects, experience and how to reach me.",
  openGraph: {
    title: "Flavio Raise — Software & Networks",
    description:
      "Junior software developer with a background in systems and networks, based near Venice.",
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
