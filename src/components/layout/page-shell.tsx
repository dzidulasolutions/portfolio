import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { TechStack } from "@/content/types";

interface PageShellProps {
  children: ReactNode;
  technos?: TechStack[];
}

export function PageShell({ children, technos }: PageShellProps) {
  return (
    <>
      <Navbar />
      <div className="grid-background" />
      <main className="grid-wrapper">{children}</main>
      <Footer technos={technos} />
    </>
  );
}