import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import headphones from "../../assets/headphones.png";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 0.25], [0, -36]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.22], [0.7, 0.35]);
  const contentY = useTransform(scrollYProgress, [0, 0.2], [0, -12]);

  return (
    <Section className="relative overflow-hidden pt-24 md:pt-32">
      <m.div
        className="pointer-events-none absolute inset-0"
        style={
          prefersReducedMotion
            ? { opacity: 0.7 }
            : { y: glowY, opacity: glowOpacity }
        }
      >
        <div className="absolute -top-12 left-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 rounded-full bg-gradient-radial-glow blur-3xl" />
        <div className="absolute bottom-[14vh] left-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.85_0.05_250/0.35),transparent_60%)] blur-3xl" />
      </m.div>

      <Container className="relative">
        <m.div
          className="mx-auto max-w-3xl text-center"
          style={prefersReducedMotion ? undefined : { y: contentY }}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          >
          <div className="mb-6 flex items-center justify-center">
            <p className="text-[12px] uppercase tracking-[0.5em] text-white/20">
              A NOX FILM — 2026
        </p>
        </div>

          <m.div
            variants={{
              hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-foreground/70"
          >
            <span className="text-silver font-semibold">New</span>
            <span>Adaptive noise control for real life.</span>
          </m.div>

          <m.div
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="relative mx-auto mt-10 w-full max-w-[22rem] sm:max-w-[26rem] md:mt-12 md:max-w-[32rem]"
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-[55%] h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-glow blur-3xl opacity-70" />
              <div className="absolute left-1/2 top-[65%] h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.02_260/0.18),transparent_60%)] blur-3xl" />
            </div>

            <m.div
              className="relative"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -14, 0], rotate: [0, 0.8, 0] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 2.5, ease: "easeInOut", repeat: Infinity }
              }
            >
              <img
                src={headphones}
                alt="NOX headphones"
                className="mx-auto w-full select-none drop-shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
                draggable={false}
              />

              <div className="pointer-events-none absolute inset-x-10 -bottom-4 h-10 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.02_250/0.22),transparent_70%)] blur-2xl" />
            </m.div>
          </m.div>

          <m.h1
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-8 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl"
          >
            <span className="text-silver">Silence</span> that feels natural.
          </m.h1>

          <m.p
            variants={{
              hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/70"
          >
            NOX blends ultra-low latency audio processing with a calm, minimal
            interface. Fewer taps. Better focus. Cleaner sound.
          </m.p>

          <m.div
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button onClick={() => {
              document.getElementById("cta")?.scrollIntoView({
            behavior: "smooth",
  });
}}>
  Get NOX
</Button>

<Button
  variant="ghost"
  onClick={() => {
    document.getElementById("tech")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Watch demo
</Button>
          </m.div>

          <m.div
            variants={{
              hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3"
          >
            {[
              { k: "0.7ms", v: "Processing latency" },
              { k: "48kHz", v: "Hi‑res audio path" },
              { k: "24h", v: "Battery with ANC" },
            ].map((s) => (
              <m.div
                key={s.k}
                className="rounded-3xl glass p-6 text-left"
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="font-display text-3xl text-silver">{s.k}</div>
                <div className="mt-2 text-sm text-foreground/70">{s.v}</div>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </Container>
    </Section>
  );
}

