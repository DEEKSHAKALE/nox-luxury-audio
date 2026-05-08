import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_50%_55%,oklch(18%_0.02_260)_0%,oklch(6%_0.005_260)_55%,oklch(4%_0_0)_100%)]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

