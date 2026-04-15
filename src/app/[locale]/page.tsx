import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { MainContent } from "@/widgets/main-content/MainContent";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
