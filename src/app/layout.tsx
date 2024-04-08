import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Чіп Чендж",
  description: "Обмінник валют",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
