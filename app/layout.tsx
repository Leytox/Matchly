import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaMatch",
  description: "Created by Leytox - A comprehensive media matching platform",
  keywords: [
    "media matching",
    "entertainment",
    "movies",
    "music",
    "books",
    "recommendations",
  ],
  authors: [{ name: "Leytox" }, { name: "xonitrillgay" }],
  creator: "Leytox",
  publisher: "Leytox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "entertainment",
  classification: "Media Matching Platform",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} ${raleway.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
