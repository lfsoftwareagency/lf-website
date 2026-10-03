import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Nosotros from './components/home/about';
export const metadata: Metadata = {
  title: "F&L Software Agency",
};

export default function Home() {
  return (
      <main>
        <HeroSection />
        <Nosotros />
      </main>
  )
}
