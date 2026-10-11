"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { BrandIcon } from "@/shared/ui/brand-icon";
import { Phone, Mail, Clock } from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { useTranslations } from "next-intl";

const schema = z.object({
  name: z.string().min(2, "minChars"),
  surname: z.string().min(2, "minChars"),
  phone: z.string().regex(/^(?:\+7|8)\d{10}$/i, "phoneFormat"),
  comment: z.string().optional(),
});

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );
  const t = useTranslations("contact");

  const phoneMain = process.env.NEXT_PUBLIC_PHONE_MAIN || "+77755020555";
  const phoneDisplay =
    process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
    process.env.NEXT_PUBLIC_PHONE_MAIN ||
    "+7 (775) 502-05-55";
  const email = process.env.NEXT_PUBLIC_EMAIL || "info@geoexploration.kz";
  const whatsappHref =
    process.env.NEXT_PUBLIC_WHATSAPP_BASE ||
    `https://wa.me/${phoneMain.replace(/\D/g, "")}`;

  async function onSubmit(data: z.infer<typeof schema>) {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact-us"
      aria-labelledby="contact-heading"
      className="py-20 section-deferred"
    >
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
            {t("eyebrow")}
          </p>
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight"
          >
            {t("heading")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary/60" />
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {t("cardTitle")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("cardDescription")}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("phoneLabel")}
                    </p>
                    <a
                      href={`tel:${phoneMain}`}
                      className="font-medium text-foreground transition-colors hover:text-secondary"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("emailLabel")}
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-foreground transition-colors hover:text-secondary"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t("workingHoursLabel")}
                    </p>
                    <p className="font-medium text-foreground">
                      {t("workingHours")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/60">
              <Button
                asChild
                className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-lg shadow-xs font-medium gap-2"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("whatsappAction")}
                >
                  <BrandIcon
                    icon={siWhatsapp}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                  <span>{t("whatsappAction")}</span>
                </a>
              </Button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-xl border border-border/60 bg-card p-6 shadow-sm"
            aria-describedby={status !== "idle" ? "form-status" : undefined}
          >
            <Input
              placeholder={t("name")}
              className="rounded-lg border-border/60 bg-background"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-600">
                {t(errors.name.message as "minChars" | "phoneFormat")}
              </p>
            )}
            <Input
              placeholder={t("surname")}
              className="rounded-lg border-border/60 bg-background"
              {...register("surname")}
            />
            {errors.surname && (
              <p className="text-xs text-red-600">
                {t(errors.surname.message as "minChars" | "phoneFormat")}
              </p>
            )}
            <Input
              placeholder={t("phone")}
              className="rounded-lg border-border/60 bg-background"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-red-600">
                {t(errors.phone.message as "minChars" | "phoneFormat")}
              </p>
            )}
            <Textarea
              placeholder={t("comment")}
              className="rounded-lg border-border/60 bg-background"
              {...register("comment")}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
            >
              {isSubmitting ? t("submitting") : t("submit")}
            </Button>
            {status === "success" && (
              <p id="form-status" className="text-xs text-green-600">
                {t("success")}
              </p>
            )}
            {status === "error" && (
              <p id="form-status" className="text-xs text-red-600">
                {t("error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
