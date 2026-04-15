import type { ReactNode } from "react";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const lang = headersList.get("x-next-intl-locale") ?? "ru";
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
