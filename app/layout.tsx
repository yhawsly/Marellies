import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Marellies | Premier Event Planning & Design",
    template: "%s | Marellies",
  },
  description: "Breathtaking events, beautifully planned. Marellies offers bespoke event design and coordination for weddings, corporate galas, and private celebrations.",
  keywords: ["event planning", "wedding planner", "event design", "corporate events", "party planner", "Marellies"],
  authors: [{ name: "Marellies Team" }],
  creator: "Marellies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marellies.com",
    siteName: "Marellies",
    title: "Marellies | Premier Event Planning",
    description: "Creating unforgettable moments through modern event planning and design.",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added later or use a generic one
        width: 1200,
        height: 630,
        alt: "Marellies Event Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marellies | Premier Event Planning",
    description: "Breathtaking events, beautifully planned.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
