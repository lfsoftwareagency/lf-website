import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import AboutSection from './components/home/about';
import ValueSection from './components/home/our-values';
import ServiceSection from './components/home/services'

import {Analytics} from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "F&L Software Agency",
};

export default function Home() {
  return (
      <main>
        <Analytics/>
        <HeroSection />
        <AboutSection />
        <ValueSection />
        <ServiceSection/>
      </main>
  )
}
