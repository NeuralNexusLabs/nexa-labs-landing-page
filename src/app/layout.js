import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NexaLabs",
  description: "The future of strategy and digital product delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico"></link>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
