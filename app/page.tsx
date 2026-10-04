import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Nosotros from './components/home/about';
import {Analytics} from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "F&L Software Agency",
};

export default function Home() {
  return (
      <main>
        <Analytics/>
        <HeroSection />
        <Nosotros />
      </main>
  )
}
