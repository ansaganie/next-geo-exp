import dynamic from "next/dynamic";
import { HeroCarousel } from "@/widgets/hero-carousel/HeroCarousel";
import { ServicesGrid } from "@/widgets/services-grid/ServicesGrid";
import { AboutSection } from "@/widgets/about/AboutSection";
import { PortfolioSection } from "@/widgets/portfolio/PortfolioSection";

const VideoTestimonials = dynamic(
  () =>
    import("@/widgets/video-testimonials/VideoTestimonials").then(
      (mod) => mod.VideoTestimonials,
    ),
  { ssr: true },
);

const ContactSection = dynamic(
  () =>
    import("@/widgets/contact/ContactSection").then((mod) => mod.ContactSection),
  { ssr: true },
);

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
