import { Header } from "@/components/sections/header/Header";
import { Footer } from "@/components/sections/footer/Footer";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
