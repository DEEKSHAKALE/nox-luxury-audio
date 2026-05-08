import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Reveal } from "../motion/Reveal";
import { m, useReducedMotion } from "framer-motion";

export function Cta() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Section id="cta" className="py-32">
      <Container>
        <Reveal y={26}>
          <m.div
            className="group relative overflow-hidden rounded-3xl glass p-[1px] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-glow hover:border-border/70"
            whileHover={prefersReducedMotion ? undefined : { y: -6 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 grid-noise opacity-80" />
            <div className="relative rounded-3xl bg-card p-10 md:p-14">
              <div className="max-w-3xl">
                <Reveal delay={0.06} y={14}>
                  <div className="text-xs tracking-widest uppercase text-foreground/60">
                    Ready when you are
                  </div>
                </Reveal>
                <Reveal delay={0.12} y={16}>
                  <h3 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                    Make silence a{" "}
                    <span className="text-silver">default</span>.
                  </h3>
                </Reveal>
                <Reveal delay={0.18} y={14}>
                  <p className="mt-4 text-base leading-relaxed text-foreground/70">
                    Start with curated profiles, then fine-tune. NOX keeps your
                    settings simple and your sound consistent.
                  </p>
                </Reveal>

                <Reveal delay={0.22} y={12}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button>Get NOX</Button>
                    <Button variant="ghost">Contact sales</Button>
                  </div>
                </Reveal>
              </div>

              <div className="pointer-events-none absolute -right-12 -top-12 hidden h-[55vmin] w-[55vmin] rounded-full bg-gradient-radial-glow blur-3xl md:block" />
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
              <div className="absolute -top-24 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.96_0.01_260/0.12),transparent_65%)] blur-3xl" />
            </div>
          </m.div>
        </Reveal>
      </Container>
    </Section>
  );
}

