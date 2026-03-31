import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { MainContent } from "@/widgets/main-content/MainContent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
