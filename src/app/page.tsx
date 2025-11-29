import { Header } from "@/components/sections/header/Header";
import { HeroCarousel } from "@/components/sections/hero/HeroCarousel";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { PortfolioSection } from "@/components/sections/portfolio/PortfolioSection";
import { VideoTestimonials } from "@/components/sections/videos/VideoTestimonials";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Footer } from "@/components/sections/footer/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ServicesGrid />
        <AboutSection />
        <PortfolioSection />
        <VideoTestimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
