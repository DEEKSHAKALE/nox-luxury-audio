import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Reveal } from "../motion/Reveal";
import { m } from "framer-motion";

const FEATURES = [
  {
    title: "Adaptive ANC",
    desc: "Balances pressure and clarity as environments change.",
  },
  {
    title: "Voice Focus",
    desc: "Pulls speech forward without sounding synthetic.",
  },
  {
    title: "Low‑glare UI",
    desc: "Minimal controls designed for dark rooms and daylight.",
  },
  {
    title: "Spatial Comfort",
    desc: "Wide stereo image with a stable phantom center.",
  },
  {
    title: "Smart Profiles",
    desc: "Auto-switches presets based on time and location.",
  },
  {
    title: "Offline first",
    desc: "Core features work without an account or connection.",
  },
];

export function FeatureGrid() {
  return (
    <Section id="features" variant="muted">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Built for <span className="text-silver">quiet</span> moments.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-foreground/70">
            A composable system: hardware, DSP, and interface designed together.
            </p>
          </Reveal>
        </div>

        <m.div
          className="mt-16 grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {FEATURES.map((f) => (
            <m.div
              key={f.title}
              className="group relative rounded-3xl glass p-8 transition-[transform,box-shadow,border-color,background-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:shadow-glow hover:border-border/70"
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
                <div className="absolute -top-10 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.18),transparent_65%)] blur-2xl" />
              </div>
              <div className="font-display text-xl tracking-tight">
                {f.title}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-foreground/70">
                {f.desc}
              </div>
              <div className="mt-6 h-px w-full bg-border/50" />
              <div className="mt-6 text-xs tracking-widest uppercase text-foreground/60">
                Learn more
              </div>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}

