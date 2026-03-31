"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";

const schema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  surname: z.string().min(2, "Минимум 2 символа"),
  phone: z
    .string()
    .regex(/^(?:\+7|8)\d{10}$/i, "Формат +7XXXXXXXXXX или 8XXXXXXXXXX"),
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
      className="py-16"
    >
      <div className="mx-auto max-w-6xl px-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="contact-heading" className="mb-4 text-2xl font-semibold">
            Оставьте контакты — мы свяжемся
          </h2>
          <div className="rounded border p-2">
            <iframe
              src={process.env.NEXT_PUBLIC_MAP_IFRAME_SRC}
              title="Офис GeoExploration на карте"
              className="h-72 w-full"
              allowFullScreen
            />
          </div>
          <div className="mt-4 space-y-1 text-sm">
            <div>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`}
                className="font-medium"
              >
                {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="text-muted-foreground"
              >
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          aria-describedby="form-status"
        >
          <Input placeholder="Имя" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-600">
              {errors.name.message as string}
            </p>
          )}
          <Input placeholder="Фамилия" {...register("surname")} />
          {errors.surname && (
            <p className="text-xs text-red-600">
              {errors.surname.message as string}
            </p>
          )}
          <Input placeholder="Телефон (+7XXXXXXXXXX)" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-600">
              {errors.phone.message as string}
            </p>
          )}
          <Textarea
            placeholder="Комментарий (необязательно)"
            {...register("comment")}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить"}
          </Button>
          {status === "success" && (
            <p id="form-status" className="text-xs text-green-600">
              Заявка успешно отправлена!
            </p>
          )}
          {status === "error" && (
            <p id="form-status" className="text-xs text-red-600">
              Ошибка при отправке. Попробуйте ещё раз.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
