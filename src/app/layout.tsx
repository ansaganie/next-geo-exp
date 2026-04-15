import type { ReactNode } from "react";

// Root layout renders the minimal document shell.
// Locale-aware content is handled in the nested [locale] segment.
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
