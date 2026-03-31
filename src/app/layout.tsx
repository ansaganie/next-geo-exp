import type { ReactNode } from "react";

// Root layout renders the minimal document shell.
// Locale-specific providers, fonts, and metadata are handled
// by src/app/[locale]/layout.tsx which renders inside <body>.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
