import { useRef, useEffect } from "react";

function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${
        e.clientY - 200
      }px, 0)`;
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen blur-3xl"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--primary) 40%, transparent), transparent 60%)",
      }}
    />
  );
}

export default CursorGlow;
