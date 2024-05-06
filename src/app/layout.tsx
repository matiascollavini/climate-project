import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GBA Weather",
  description: "Gran Buenos Aires climate and forecast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-b from-slate-300 to-slate-400 dark:from-[#22272e] dark:to-[#0f0e0e] min-h-screen`}>
        <Header />

        <main className="min-h-[calc(100vh-121px)] mx-auto py-10 px-6 grow">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
