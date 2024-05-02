import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-gradient-to-b from-slate-200 to-slate-300 dark:from-[#22272e] dark:to-[#0f0e0e] min-h-screen`}>
        <header></header>

        <main className="min-h-[calc(100vh-121px)] mx-auto py-10 px-6 grow">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
