import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // Opcional: pesos específicos
});

export const metadata: Metadata = {
  title: "L&F Software Agency",
  description: "L&F Software Agency es una empresa de tecnología enfocada en el desarrollo de soluciones digitales, software a medida y diseño de experiencias web. Creamos soluciones pensadas para las necesidades reales de cada negocio, combinando tecnología, diseño e innovación.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable}  h-full antialiased`}
    >
    <body className={`${plusJakartaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
