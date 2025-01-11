import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Justin Wang | DroitXenon",
  metadataBase: new URL("https://droitxenon.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Justin Wang", url: "https://github.com/droitxenon" },
  ],
  description: "Justin Wang's personal page",
  openGraph: {
    title: "Justin Wang | DroitXenon",
    description: "Justin Wang's personal page",
    images: [
      {
        url: "/photo.jpeg",
        alt: "Justin Wang's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
