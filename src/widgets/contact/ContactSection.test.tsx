import { describe, it, expect } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { NextIntlClientProvider } from "next-intl";
import { ContactSection } from "./ContactSection";

const messages = {
  contact: {
    eyebrow: "Байланысу",
    heading: "Байланыс деректеріңізді қалдырыңыз - біз хабарласамыз",
    cardTitle: "Байланыс ақпараты",
    cardDescription: "Бізбен кез келген ыңғайлы тәсілмен байланысыңыз немесе өтінім қалдырыңыз.",
    phoneLabel: "Телефон",
    emailLabel: "Электрондық пошта",
    whatsappAction: "WhatsApp арқылы жазу",
    workingHoursLabel: "Жұмыс кестесі",
    workingHours: "Дс–Жм 09:00–18:00",
    addressLabel: "Мекенжай",
    address: "Алматы қ., Қазақстан",
    name: "Аты",
    surname: "Тегі",
    phone: "Телефон (+7XXXXXXXXXX)",
    comment: "Түсініктеме (міндетті емес)",
    submit: "Өтінім жіберу",
    submitting: "Жіберілуде...",
    success: "Өтінім сәтті жіберілді!",
    error: "Жіберу кезінде қате. Қайтадан көріңіз.",
    minChars: "Кемінде 2 таңба",
    phoneFormat: "+7XXXXXXXXXX немесе 8XXXXXXXXXX форматы",
  },
};

function renderComponent() {
  return renderToString(
    <NextIntlClientProvider locale="kk" messages={messages} onError={() => {}}>
      <ContactSection />
    </NextIntlClientProvider>
  );
}

describe("ContactSection", () => {
  it("does not render any map iframe or map placeholder", () => {
    const html = renderComponent();
    expect(html).not.toContain("<iframe");
    expect(html).not.toContain("mapTitle");
  });

  it("renders a structured contact card with phone, email, office address, and WhatsApp quick CTA", () => {
    const html = renderComponent();
    // Phone link
    expect(html).toContain('href="tel:');
    // Email link
    expect(html).toContain('href="mailto:');
    // Address / physical location note
    expect(html).toContain("Мекенжай");
    expect(html).toContain("Алматы қ., Қазақстан");
    // WhatsApp CTA button / link
    expect(html).toContain("wa.me");
    expect(html).toContain("WhatsApp арқылы жазу");
    // Verify theme-tokenized button styling (rounded-md, bg-secondary)
    expect(html).toContain("bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md");
    // Verify icon tile styling per DESIGN.md (rounded-[10px] w-10 h-10 bg-muted text-foreground)
    expect(html).toContain("rounded-[10px] bg-muted text-foreground");
  });
});
