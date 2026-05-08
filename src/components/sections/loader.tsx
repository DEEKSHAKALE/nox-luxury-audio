import { motion as m } from "framer-motion";

export default function Loader() {
  return (
    <m.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl tracking-[0.4em] text-white"
        >
          NOX
        </m.h1>

        <m.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mx-auto mt-6 h-[2px] bg-white/40"
        />
      </div>
    </m.div>
  );
}