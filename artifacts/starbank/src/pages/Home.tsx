import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import Overview from "@/sections/Overview";
import Pillars from "@/sections/Pillars";
import Solutions from "@/sections/Solutions";
import Differentiators from "@/sections/Differentiators";
import Audiences from "@/sections/Audiences";
import Credibility from "@/sections/Credibility";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Pillars />
        <Solutions />
        <Differentiators />
        <Audiences />
        <Credibility />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}