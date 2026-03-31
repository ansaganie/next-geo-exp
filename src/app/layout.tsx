import type { ReactNode } from "react";
import { headers } from "next/headers";

// Root layout renders the minimal document shell.
// The lang attribute is derived from the Accept-Language / x-next-intl-locale
// header set by the middleware so <html> always has the correct language.
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const h = await headers();
  const lang = h.get("x-next-intl-locale") ?? "ru";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
