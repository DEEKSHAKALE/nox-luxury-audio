import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(59,130,246,0.12) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}