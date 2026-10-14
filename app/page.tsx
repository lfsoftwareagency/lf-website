import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Nosotros from './components/home/about';
import Servicios from './components/home/services';
import Nvalores from './components/home/our-values';
import Procesos from './components/home/procesos'
import Proyectos from './components/home/proyectos'
import FaqSection from './components/home/faq'
import {Analytics} from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "L&F Software Agency",
};

export default function Home() {
  return (
      <main>
        <Analytics/>
        <HeroSection />
        <Nosotros />
        <Nvalores />
        <Servicios />
        <Procesos/>
        <Proyectos/>
        <FaqSection/>
      </main>
  )
}
