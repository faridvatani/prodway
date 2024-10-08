import { Header } from "@/src/sections/Header";
import { Hero } from "@/src/sections/Hero";
import { LogoTicker } from "@/src/sections/LogoTicker";
import { ProductShowcase } from "@/src/sections/ProductShowcase";
import { Pricing } from "@/src/sections/Pricing";
import { Testimonials } from "@/src/sections/Testimonials";
import { CallToAction } from "@/src/sections/CallToAction";
import { Footer } from "@/src/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
