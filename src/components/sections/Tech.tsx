import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Reveal } from "../motion/Reveal";
import { m, useReducedMotion } from "framer-motion";

const STATS = [
  { k: "16‑band", v: "Adaptive EQ" },
  { k: "32‑bit", v: "DSP pipeline" },
  { k: "−42dB", v: "Noise floor" },
];

export function Tech() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Section id="tech" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-glow blur-3xl opacity-40" />
        <div className="absolute -right-24 -top-24 h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,oklch(0.92_0.02_260/0.18),transparent_55%)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center rounded-full glass px-4 py-2 text-xs tracking-widest uppercase text-foreground/70">
                The system
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-4xl tracking-tight md:text-5xl">
                Engineered for{" "}
                <span className="text-silver">silence</span>, tuned for life.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70">
                Real-time processing that stays transparent. NOX keeps phase
                stable, minimizes pressure, and adapts without the “underwater”
                effect.
              </p>
            </Reveal>

            <m.div
              className="mt-10 grid gap-3 sm:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
            >
              {STATS.map((s) => (
                <m.div
                  key={s.k}
                  className="group relative rounded-3xl glass p-6 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-glow hover:border-border/70"
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
                    <div className="absolute -top-10 left-1/2 h-44 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.18),transparent_65%)] blur-2xl" />
                  </div>
                  <div className="font-display text-2xl text-silver">{s.k}</div>
                  <div className="mt-2 text-xs text-foreground/60">{s.v}</div>
                </m.div>
              ))}
            </m.div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-xl" y={24}>
            <div className="group relative overflow-hidden rounded-3xl glass p-[1px] shadow-card transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-glow hover:border-border/70">
              <div className="absolute inset-0 grid-noise opacity-80" />
              <div className="relative rounded-3xl bg-card px-8 py-10 md:px-10 md:py-12">
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-widest uppercase text-foreground/60">
                    Live profile
                  </div>
                  <div className="rounded-full glass px-3 py-1 text-xs text-foreground/70">
                    Adaptive
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    { label: "Noise control", value: "78%" },
                    { label: "Voice focus", value: "42%" },
                    { label: "Ambience", value: "18%" },
                  ].map((row) => (
                    <div key={row.label} className="grid gap-2">
                      <div className="flex items-center justify-between text-xs text-foreground/70">
                        <span>{row.label}</span>
                        <span className="text-foreground/60">{row.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-foreground/[0.06]">
                        <m.div
                          className="h-2 rounded-full cta-gradient"
                          initial={{ width: 0 }}
                          whileInView={{ width: row.value }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: prefersReducedMotion ? 0 : 1.1,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.08,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border border-border/60 opacity-70 blur-[0.2px] [mask-image:radial-gradient(circle,black_55%,transparent_75%)]" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-border/30 opacity-60 [mask-image:radial-gradient(circle,black_45%,transparent_75%)]" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.22),transparent_60%)] blur-3xl animate-float-slow" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
                <div className="absolute -top-24 left-1/2 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.96_0.01_260/0.12),transparent_65%)] blur-3xl" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 animate-spin-slow opacity-40">
              <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,transparent,oklch(0.78_0.02_250/0.5),transparent)] blur-2xl" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

