import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Nosotros from './components/home/about';
import Procesos from './components/home/procesos'
import Proyectos from './components/home/proyectos'
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
        <Procesos/>
        <Proyectos/>
      </main>
  )
}
