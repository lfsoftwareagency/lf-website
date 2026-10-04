import type { Metadata } from "next";
import "./global.scss";
import Header from './components/layout/header';
import ScrollToTop from './components/scroll-to-top'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "L&F Software Agency",
  description: "L&F Software Agency es una empresa de tecnología enfocada en el desarrollo de soluciones digitales, software a medida y diseño de experiencias web. Creamos soluciones pensadas para las necesidades reales de cada negocio, combinando tecnología, diseño e innovación.",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='es' suppressHydrationWarning>
        <body>
        <Header />
        {children}
        <ScrollToTop />
        {/*<ThemeProvider attribute='class' enableSystem={false} defaultTheme='light'>
            <Header />
            {children}
            <Footer />
            <FabriBot/>
            <ScrollToTop />
        </ThemeProvider>*/}
        </body>
        </html>
    )
}
