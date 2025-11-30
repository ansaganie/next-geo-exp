import * as React from "react";
import { cn } from "@/lib/utils";

export interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function ExternalLink({
  children,
  className,
  rel,
  target,
  ...props
}: ExternalLinkProps) {
  // Ensure security attributes are always applied for external links
  const finalRel = rel ? rel : "noopener noreferrer";
  const finalTarget = target ? target : "_blank";
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
        className
      )}
      rel={finalRel}
      target={finalTarget}
      {...props}
    >
      {children}
    </a>
  );
}
