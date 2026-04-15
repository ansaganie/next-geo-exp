"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
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
      className="py-20"
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
          <div>
            <div className="overflow-hidden rounded-xl border border-border/60 shadow-sm">
              {process.env.NEXT_PUBLIC_MAP_IFRAME_SRC ? (
                <iframe
                  src={process.env.NEXT_PUBLIC_MAP_IFRAME_SRC}
                  title={t("mapTitle")}
                  className="h-72 w-full"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-72 w-full items-center justify-center bg-muted text-muted-foreground text-sm">
                  {t("mapTitle")}
                </div>
              )}
            </div>
            <div className="mt-4 space-y-1 text-sm">
              {process.env.NEXT_PUBLIC_PHONE_MAIN && (
                <div>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`}
                    className="font-medium text-foreground transition-colors hover:text-secondary"
                  >
                    {process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
                      process.env.NEXT_PUBLIC_PHONE_MAIN}
                  </a>
                </div>
              )}
              {process.env.NEXT_PUBLIC_EMAIL && (
                <div>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className="text-muted-foreground transition-colors hover:text-secondary"
                  >
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
              )}
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
