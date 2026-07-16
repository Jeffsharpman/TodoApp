const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  size: 2 + (((i * 7 + 3) % 11) / 11) * 4,
  left: ((i * 13 + 5) % 100),
  delay: ((i * 3 + 1) % 8),
  dur: 10 + ((i * 5 + 2) % 12),
}));

function Particles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PARTICLES.map((item, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${item.left}%`,
            top: "-5%",
            width: item.size,
            height: item.size,
            background: "radial-gradient(circle, var(--primary), transparent 70%)",
            boxShadow: "0 0 12px color-mix(in srgb, var(--primary) 80%, transparent)",
            animation: `fall ${item.dur}s linear ${item.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
