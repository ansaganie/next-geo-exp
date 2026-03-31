import type { ReactNode } from "react";

// Locale-specific rendering (html, body, fonts, providers) is handled
// by src/app/[locale]/layout.tsx.  This root layout exists only to
// satisfy the Next.js requirement that every app has a root layout.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
