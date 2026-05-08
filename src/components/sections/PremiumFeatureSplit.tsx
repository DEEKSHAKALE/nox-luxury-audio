import { useMemo, useRef } from "react";
import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Reveal } from "../motion/Reveal";
import headphones from "../../assets/headphones.png";

type Feature = {
  title: string;
  desc: string;
};

function FeatureIcon() {
  return (
    <div className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
      <div className="size-2 rounded-full bg-[radial-gradient(circle,oklch(0.92_0.01_260/0.95),oklch(0.78_0.02_250/0.55))] shadow-[0_0_28px_oklch(0.78_0.02_250/0.28)]" />
    </div>
  );
}

export function PremiumFeatureSplit() {
  const prefersReducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(my, { stiffness: 120, damping: 22, mass: 0.4 });
  const ry = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.4 });

  const FEATURES: Feature[] = useMemo(
    () => [
      {
        title: "Titanium Driver",
        desc: "40mm beryllium-coated drivers tuned by Grammy engineers.",
      },
      {
        title: "Adaptive ANC",
        desc: "Realtime AI cancels noise across 12 acoustic profiles.",
      },
      {
        title: "Featherweight",
        desc: "248g of aerospace alloy, pressure-balanced cushions.",
      },
    ],
    [],
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set((px - 0.5) * 8);
    my.set((py - 0.5) * -8);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <Section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[85vmin] w-[85vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.22),transparent_60%)] blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-[70vmin] w-[70vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.96_0.01_260/0.10),transparent_60%)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={26} className="order-1 lg:order-none">
            <div
              ref={wrapRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem]"
            >
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[58%] h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.30),transparent_60%)] blur-3xl opacity-70" />
                <div className="absolute left-1/2 top-[66%] h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.96_0.01_260/0.14),transparent_62%)] blur-3xl" />
              </div>

              <m.div
                className="relative"
                style={
                  prefersReducedMotion
                    ? undefined
                    : {
                        rotateX: rx,
                        rotateY: ry,
                        transformStyle: "preserve-3d",
                      }
                }
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -16, 0], rotateZ: [0, 0.7, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 7.5, ease: "easeInOut", repeat: Infinity }
                }
              >
                <img
                  src={headphones}
                  alt="NOX premium headphones"
                  draggable={false}
                  className="mx-auto w-full select-none drop-shadow-[0_60px_160px_rgba(0,0,0,0.75)]"
                />
              </m.div>
            </div>
          </Reveal>

          <div className="order-0 lg:order-none">
            <Reveal>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Crafted to{" "}
                <span className="italic text-foreground/55">disappear.</span>
              </h2>
            </Reveal>

            <m.div
              className="mt-10 grid gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {FEATURES.map((f) => (
                <m.div
                  key={f.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-20px_rgba(0,0,0,0.85),0_0_120px_rgba(120,150,255,0.12)]"
                  variants={{
                    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-100">
                    <div className="absolute -top-16 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.20),transparent_62%)] blur-3xl" />
                  </div>

                  <div className="flex items-start gap-4">
                    <FeatureIcon />
                    <div className="min-w-0">
                      <div className="text-sm font-medium tracking-tight text-white/90">
                        {f.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-white/50">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

