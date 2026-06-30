import AgeGate from '@/components/AgeGate';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSpecs from '@/components/ProductSpecs';
import Manufacturing from '@/components/Manufacturing';
import AboutSawyer from '@/components/AboutSawyer';
import Benefits from '@/components/Benefits';
import Countdown from '@/components/Countdown';
import BuySection from '@/components/BuySection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-cream-50">
      <AgeGate />
      <Navbar />
      <Hero />
      <ProductSpecs />
      <Manufacturing />
      <AboutSawyer />
      <Benefits />
      <Countdown />
      <BuySection />
      <FAQ />
      <Footer />
    </main>
  );
}
