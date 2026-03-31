import { HeroCarousel } from "@/widgets/hero-carousel/HeroCarousel";
import { ServicesGrid } from "@/widgets/services-grid/ServicesGrid";
import { AboutSection } from "@/widgets/about/AboutSection";
import { PortfolioSection } from "@/widgets/portfolio/PortfolioSection";
import { VideoTestimonials } from "@/widgets/video-testimonials/VideoTestimonials";
import { ContactSection } from "@/widgets/contact/ContactSection";

export function MainContent() {
  return (
    <main id="main" className="flex-1">
      <HeroCarousel />
      <ServicesGrid />
      <AboutSection />
      <PortfolioSection />
      <VideoTestimonials />
      <ContactSection />
    </main>
  );
}
