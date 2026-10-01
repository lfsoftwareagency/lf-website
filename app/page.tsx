import { Metadata } from "next";
import HeroSection from "./components/home/hero";

export const metadata: Metadata = {
  title: "Fabridev Software Solutions",
};

export default function Home() {
  return (
      <main>
        <HeroSection />
      </main>
  )
}
