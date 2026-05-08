import { useRef } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Reveal } from "../motion/Reveal";
import exploded from "../../assets/exploded-view.png";

const LABELS = ["DRIVER", "MAGNET", "CUSHION", "HEADBAND", "HINGE"] as const;

export function ExplodedView() {
  const prefersReducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 140, damping: 24, mass: 0.45 });
  const y = useSpring(my, { stiffness: 140, damping: 24, mass: 0.45 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set((px - 0.5) * 18);
    my.set((py - 0.5) * 14);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <Section className="relative min-h-[100svh] overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[45%] h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.20),transparent_60%)] blur-3xl opacity-70" />
        <div className="absolute left-1/2 top-[56%] h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.96_0.01_260/0.10),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 vignette opacity-80" />
        <div className="absolute inset-0 film-grain opacity-[0.07]" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-6xl flex-col items-center justify-between gap-10 md:min-h-[calc(100svh-10rem)]">
          <Reveal y={28} className="w-full">
            <div
              ref={wrapRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] md:max-w-[36rem] lg:max-w-[44rem]"
            >
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.02_250/0.22),transparent_62%)] blur-3xl opacity-60" />
              </div>

              <m.div
                className="relative"
                style={
                  prefersReducedMotion
                    ? undefined
                    : {
                        x,
                        y,
                        transformStyle: "preserve-3d",
                      }
                }
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -14, 0] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 7.8, ease: "easeInOut", repeat: Infinity }
                }
              >
                <img
                  src={exploded}
                  alt="NOX exploded view"
                  draggable={false}
                  className="mx-auto w-full select-none drop-shadow-[0_60px_180px_rgba(0,0,0,0.85)]"
                />

                <div className="pointer-events-none absolute inset-x-12 -bottom-6 h-12 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.02_250/0.16),transparent_70%)] blur-2xl" />
              </m.div>
            </div>
          </Reveal>

          <m.div
            className="w-full pb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {LABELS.map((label) => (
                <m.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="text-[11px] tracking-[0.34em] text-white/40"
                >
                  {label}
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </Container>
    </Section>
  );
}

