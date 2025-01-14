import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Footer from "@/components/ui/Footer";
import ContactSection from "@/components/ui/ContactSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UNO ACM",
  description:
    "University of New Orleans chapter of the Association for Computing Machinery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white">
          <NavBar />
          <div className="container mx-auto px-4 py-12 mt-16">
            {children}
            <ScrollToTop />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
