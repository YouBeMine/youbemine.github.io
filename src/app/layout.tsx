import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouBeMine — Privacy by Design, Connection by Intent",
  description:
    "The impenetrable digital sanctuary for modern couples. Open-source, zero-knowledge, and built for absolute trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0a] text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
