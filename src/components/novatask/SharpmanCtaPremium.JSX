import React, { useState, useEffect } from "react";

/**
 * SharpmanCTA — Premium Developer CTA System
 * Oyenuga Joshua · SHARPMAN Brand · Design. Code. Elevate.
 *
 * Props:
 *   variant      — "hero"|"banner"|"card"|"minimal"|"terminal"|"float"|"newsletter"|"video"
 *   name         — Your brand name (default: "SHARPMAN")
 *   ctaUrl       — Primary action URL
 *   secondaryUrl — Secondary action URL
 */

// ── BRAND TOKENS ─────────────────────────────────────────────────────────────
const B = {
  bg: "#0E0E0E",
  surface: "#1A1A1A",
  surf2: "#111408",
  border: "#2C2C2C",
  border2: "#252b18",
  accent: "#C8F135",
  text: "#F2F0EB",
  muted: "#888880",
  faint: "#444440",
  ghost: "#222618",
};

// ── GLOBAL CSS ────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');

  @keyframes sm-pulse {
    0%,100% { box-shadow:0 0 0 0 rgba(200,241,53,0.3); }
    50%      { box-shadow:0 0 0 14px rgba(200,241,53,0); }
  }
  @keyframes sm-glow {
    0%,100% { text-shadow:0 0 10px rgba(200,241,53,0.45); }
    50%      { text-shadow:0 0 28px rgba(200,241,53,0.9),0 0 50px rgba(200,241,53,0.25); }
  }
  @keyframes sm-slide {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:none; }
  }
  @keyframes sm-float {
    0%,100% { transform:translateY(0); }
    50%      { transform:translateY(-6px); }
  }
  @keyframes sm-scan {
    0%   { top:0; opacity:0.55; }
    100% { top:100%; opacity:0; }
  }
  @keyframes sm-blink {
    0%,100% { opacity:1; } 50% { opacity:0; }
  }
  @keyframes sm-in {
    from { opacity:0; transform:translateY(14px) scale(0.97); }
    to   { opacity:1; transform:none; }
  }

  .sm-root {
    font-family:'Syne',sans-serif;
    animation:sm-slide 0.55s cubic-bezier(0.23,1,0.32,1) forwards;
  }

  /* ── Primary button — angled clip-path ── */
  .sm-btn-p {
    background:#C8F135;
    color:#0E0E0E;
    font-family:'Bebas Neue',sans-serif;
    font-size:14px;
    letter-spacing:3px;
    border:none;
    cursor:pointer;
    display:inline-flex;
    align-items:center;
    gap:10px;
    clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
    transition:transform 0.18s,box-shadow 0.18s,background 0.15s;
    text-decoration:none;
    white-space:nowrap;
  }
  .sm-btn-p:hover {
    background:#d4f54a;
    transform:translate(-3px,-3px);
    box-shadow:5px 5px 0 rgba(200,241,53,0.18),0 0 30px rgba(200,241,53,0.12);
  }
  .sm-btn-p:active { transform:scale(0.97); }

  /* ── Ghost button ── */
  .sm-btn-g {
    background:transparent;
    color:#F2F0EB;
    font-family:'Bebas Neue',sans-serif;
    font-size:14px;
    letter-spacing:3px;
    border:0.5px solid #2C2C2C;
    cursor:pointer;
    display:inline-flex;
    align-items:center;
    gap:10px;
    transition:border-color 0.18s,color 0.18s,box-shadow 0.18s;
    text-decoration:none;
    white-space:nowrap;
  }
  .sm-btn-g:hover {
    border-color:#C8F135;
    color:#C8F135;
    box-shadow:0 0 20px rgba(200,241,53,0.08);
  }

  /* ── Helpers ── */
  .sm-accent   { color:#C8F135; }
  .sm-glow-txt { animation:sm-glow 3s ease-in-out infinite; }
  .sm-pulse    { animation:sm-pulse 2.2s infinite; }
  .sm-float    { animation:sm-float 4s ease-in-out infinite; }
  .sm-blink    { animation:sm-blink 1s step-end infinite; }
  .sm-mono     { font-family:'JetBrains Mono',monospace; }
  .sm-bb       { font-family:'Bebas Neue',sans-serif; }

  /* ── Section label with glowing line ── */
  .sm-label {
    font-family:'JetBrains Mono',monospace;
    font-size:9px;
    letter-spacing:5px;
    color:#C8F135;
    text-transform:uppercase;
    display:flex;
    align-items:center;
    gap:10px;
  }
  .sm-label::before {
    content:'';
    display:inline-block;
    width:18px;height:1px;
    background:#C8F135;
    box-shadow:0 0 6px #C8F135;
  }

  /* ── Corner accent brackets ── */
  .sm-tl { position:absolute;top:-1px;left:-1px;width:14px;height:14px;border-top:1.5px solid #C8F135;border-left:1.5px solid #C8F135; }
  .sm-tr { position:absolute;top:-1px;right:-1px;width:14px;height:14px;border-top:1.5px solid #C8F135;border-right:1.5px solid #C8F135; }
  .sm-bl { position:absolute;bottom:-1px;left:-1px;width:14px;height:14px;border-bottom:1.5px solid #C8F135;border-left:1.5px solid #C8F135; }
  .sm-br { position:absolute;bottom:-1px;right:-1px;width:14px;height:14px;border-bottom:1.5px solid #C8F135;border-right:1.5px solid #C8F135; }

  /* ── Scan line ── */
  .sm-scan::after {
    content:'';
    position:absolute;left:0;right:0;height:1px;
    background:linear-gradient(to right,transparent,#C8F135,transparent);
    animation:sm-scan 3.5s linear infinite;
    pointer-events:none;
  }

  /* ── Input ── */
  .sm-input {
    background:rgba(200,241,53,0.04);
    border:0.5px solid #2C2C2C;
    color:#F2F0EB;
    font-family:'JetBrains Mono',monospace;
    font-size:12px;
    outline:none;
    transition:border-color 0.18s,box-shadow 0.18s;
  }
  .sm-input:focus { border-color:#C8F135; box-shadow:0 0 0 2px rgba(200,241,53,0.07); }
  .sm-input::placeholder { color:#444440; }

  /* ── Float panel animation ── */
  .sm-panel-in { animation:sm-in 0.3s cubic-bezier(0.23,1,0.32,1) forwards; }

  /* ── Mobile ── */
  @media(max-width:640px) {
    .sm-hide-sm { display:none !important; }
    .sm-stack   { flex-direction:column !important; }
  }
`;

// ── Logo SVG ──────────────────────────────────────────────────────────────────
const Logo = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
  >
    <polygon
      points="2,10 8,4 8,24 2,18"
      stroke="#C8F135"
      strokeWidth="1.5"
      fill="none"
    />
    <polygon
      points="26,10 20,4 20,24 26,18"
      stroke="#C8F135"
      strokeWidth="1.5"
      fill="none"
    />
    <polygon
      points="9,2 19,2 19,26 9,26"
      stroke="#C8F135"
      strokeWidth="1"
      fill="none"
    />
    <polyline
      points="17,4 12,14 16,14 11,24"
      stroke="#C8F135"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Grid background ────────────────────────────────────────────────────────────
const GridBg = ({ opacity = 0.4 }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: `linear-gradient(${B.ghost} 1px,transparent 1px),linear-gradient(90deg,${B.ghost} 1px,transparent 1px)`,
      backgroundSize: "60px 60px",
      opacity,
    }}
  />
);

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function HeroCTA({ name, ctaUrl, secondaryUrl }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,${B.bg} 0%,${B.surf2} 60%,#0a1000 100%)`,
        border: `0.5px solid ${B.border2}`,
        padding: "72px 48px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center,rgba(200,241,53,0.07) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <GridBg opacity={0.4} />
      {/* scan line */}
      <div
        className="sm-scan"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />
      {/* corner brackets */}
      <div className="sm-tl" />
      <div className="sm-tr" />
      <div className="sm-bl" />
      <div className="sm-br" />

      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          className="sm-label"
          style={{ justifyContent: "center", marginBottom: 20 }}
        >
          Open for Projects — 2026
        </div>

        <h1
          className="sm-bb sm-glow-txt"
          style={{
            fontSize: "clamp(42px,7vw,86px)",
            lineHeight: 0.9,
            letterSpacing: 1,
            color: B.accent,
            marginBottom: 10,
          }}
        >
          BUILD SOMETHING <span style={{ color: B.text }}>SHARP</span>
        </h1>

        <p
          className="sm-mono"
          style={{
            fontSize: 10,
            color: B.faint,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Design. Code. <span style={{ color: B.accent }}>Elevate.</span>
        </p>

        <p
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 14,
            color: B.muted,
            maxWidth: 480,
            margin: "0 auto 44px",
            lineHeight: 1.85,
          }}
        >
          Design, code, and ship a product that actually looks like it was built
          on purpose.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={ctaUrl}
            className="sm-btn-p sm-pulse"
            style={{ padding: "15px 44px" }}
          >
            START A PROJECT →
          </a>
          <a
            href={secondaryUrl || "#"}
            className="sm-btn-g"
            style={{ padding: "15px 36px" }}
          >
            VIEW THE WORK ↗
          </a>
        </div>

        <div
          className="sm-mono"
          style={{
            fontSize: 9,
            letterSpacing: 3,
            color: B.faint,
            marginTop: 28,
            textTransform: "uppercase",
          }}
        >
          {name} · Design. Code. Elevate.
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BANNER
// ─────────────────────────────────────────────────────────────────────────────
function BannerCTA({ name, ctaUrl, secondaryUrl }) {
  return (
    <div
      style={{
        background: B.surface,
        border: `0.5px solid ${B.border2}`,
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 18,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          background: B.accent,
          boxShadow: `0 0 10px ${B.accent}`,
        }}
      />
      {/* top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg,transparent,${B.accent},transparent)`,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Logo size={28} />
        <div>
          <div className="sm-label" style={{ marginBottom: 4 }}>
            Built by {name}
          </div>
          <div
            className="sm-bb"
            style={{
              fontSize: 22,
              letterSpacing: 2,
              color: B.text,
              lineHeight: 1,
            }}
          >
            WANT SOMETHING LIKE THIS?
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a
          href={ctaUrl}
          className="sm-btn-p sm-pulse"
          style={{ padding: "12px 28px" }}
        >
          START A PROJECT →
        </a>
        <a
          href={secondaryUrl || "#"}
          className="sm-btn-g"
          style={{ padding: "12px 22px" }}
        >
          VIEW PORTFOLIO ↗
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD
// ─────────────────────────────────────────────────────────────────────────────
function CardCTA({ name, ctaUrl }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="sm-float"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: B.surface,
        border: `0.5px solid ${hov ? B.accent : B.border}`,
        padding: 28,
        maxWidth: 320,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        transition: "border-color .2s,box-shadow .2s",
        boxShadow: hov ? `0 20px 48px rgba(200,241,53,0.07)` : "none",
      }}
    >
      <div className="sm-tl" />
      <div className="sm-tr" />
      <div className="sm-bl" />
      <div className="sm-br" />
      {/* subtle hover glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov
            ? "radial-gradient(circle at 50% 30%,rgba(200,241,53,0.05),transparent 65%)"
            : "none",
          transition: "background .3s",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Logo mark */}
        <div
          style={{
            width: 60,
            height: 60,
            margin: "0 auto 18px",
            background: "rgba(200,241,53,0.08)",
            border: `0.5px solid ${B.border2}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo size={34} />
        </div>

        <div
          className="sm-bb"
          style={{
            fontSize: 24,
            letterSpacing: 3,
            color: B.text,
            marginBottom: 4,
          }}
        >
          {name.toUpperCase()}
        </div>
        <div
          className="sm-label"
          style={{ justifyContent: "center", marginBottom: 16 }}
        >
          Design. Code. Elevate.
        </div>

        <p
          style={{
            fontSize: 12,
            color: B.muted,
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          Need a custom app, portfolio, or product built? Let's make it sharp.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <a
            href={ctaUrl}
            className="sm-btn-p"
            style={{
              padding: "13px 0",
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            LET'S TALK →
          </a>
          <a
            href="#work"
            className="sm-btn-g"
            style={{
              padding: "12px 0",
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            SEE MY WORK ↗
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MINIMAL
// ─────────────────────────────────────────────────────────────────────────────
function MinimalCTA({ name, ctaUrl }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "11px 18px",
        background: B.surface,
        border: `0.5px solid ${B.border}`,
        gap: 14,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 6,
            height: 6,
            background: B.accent,
            borderRadius: "50%",
            boxShadow: `0 0 7px ${B.accent}`,
            flexShrink: 0,
          }}
        />
        <Logo size={20} />
        <span
          className="sm-mono"
          style={{ color: B.muted, fontSize: 10, letterSpacing: 2 }}
        >
          Built by <span style={{ color: B.accent }}>{name}</span>
        </span>
      </div>
      <a
        href={ctaUrl}
        className="sm-btn-p"
        style={{ padding: "9px 22px", fontSize: 12 }}
      >
        HIRE ME →
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TERMINAL
// ─────────────────────────────────────────────────────────────────────────────
function TerminalCTA({ name, ctaUrl }) {
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);

  const lines = [
    { prefix: "$", text: "whoami", col: B.accent },
    {
      prefix: ">",
      text: `${name.toLowerCase()} — ui engineer & creative developer`,
      col: B.muted,
    },
    { prefix: "$", text: "cat services.txt", col: B.accent },
    {
      prefix: ">",
      text: "react apps · ui systems · portfolio builds · motion",
      col: "#6a7f2a",
    },
    { prefix: "$", text: "open --project", col: B.accent },
  ];

  useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 380);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => setReady(true), 380);
    }
  }, [step]);

  return (
    <div
      style={{
        background: B.bg,
        border: `0.5px solid ${B.border2}`,
        overflow: "hidden",
      }}
    >
      {/* title bar */}
      <div
        style={{
          background: B.surface,
          padding: "9px 14px",
          borderBottom: `0.5px solid ${B.border}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f57", "#febc2e", B.accent].map((col, i) => (
            <div
              key={i}
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: col,
                opacity: 0.85,
              }}
            />
          ))}
        </div>
        <span
          className="sm-mono"
          style={{
            fontSize: 9,
            color: B.faint,
            letterSpacing: 3,
            marginLeft: 6,
          }}
        >
          {name.toLowerCase()}@portfolio:~
        </span>
      </div>

      {/* body */}
      <div
        style={{
          padding: "22px 18px",
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11,
          lineHeight: 1.9,
          minHeight: 200,
        }}
      >
        {lines.slice(0, step).map((line, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 4,
              color: line.col,
            }}
          >
            <span style={{ flexShrink: 0 }}>{line.prefix}</span>
            <span style={{ color: i % 2 === 0 ? B.text : line.col }}>
              {line.text}
            </span>
          </div>
        ))}
        {step < lines.length && (
          <span className="sm-blink" style={{ color: B.accent, fontSize: 14 }}>
            ▮
          </span>
        )}
      </div>

      {/* CTA row — appears after typewriter */}
      {ready && (
        <div
          style={{
            padding: "14px 18px",
            borderTop: `0.5px solid ${B.border}`,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            animation: "sm-in .4s forwards",
          }}
        >
          <div
            className="sm-mono"
            style={{
              width: "100%",
              fontSize: 9,
              color: B.faint,
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            // READY TO BUILD SOMETHING?
          </div>
          <a
            href={ctaUrl}
            className="sm-btn-p"
            style={{ padding: "11px 26px", fontSize: 12 }}
          >
            START A PROJECT →
          </a>
          <a
            href="#work"
            className="sm-btn-g"
            style={{ padding: "11px 20px", fontSize: 12 }}
          >
            MY WORK ↗
          </a>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FLOAT — fixed corner widget, toggle open/close, mobile-friendly
// ─────────────────────────────────────────────────────────────────────────────
function FloatCTA({ name, ctaUrl }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 16,
        zIndex: 9000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 8,
      }}
    >
      {/* Panel */}
      {open && (
        <div
          className="sm-panel-in"
          style={{
            background: B.surface,
            border: `0.5px solid ${B.border2}`,
            width: "min(300px,calc(100vw - 32px))",
            boxShadow: "0 24px 48px rgba(0,0,0,.75)",
            position: "relative",
          }}
        >
          <div className="sm-tl" />
          <div className="sm-tr" />
          {/* top accent line */}
          <div
            style={{
              height: 2,
              background: `linear-gradient(90deg,transparent,${B.accent},transparent)`,
            }}
          />

          <div style={{ padding: "16px 18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <Logo size={22} />
              <div style={{ flex: 1 }}>
                <div
                  className="sm-bb"
                  style={{
                    fontSize: 15,
                    letterSpacing: 2,
                    color: B.text,
                    lineHeight: 1,
                  }}
                >
                  {name.toUpperCase()} ⚡
                </div>
                <div
                  className="sm-mono"
                  style={{
                    fontSize: 8,
                    letterSpacing: 2,
                    color: B.accent,
                    marginTop: 2,
                  }}
                >
                  AVAILABLE FOR PROJECTS
                </div>
              </div>
              {/* close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  background: "transparent",
                  border: `0.5px solid ${B.border}`,
                  color: B.muted,
                  cursor: "pointer",
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  lineHeight: 1,
                  flexShrink: 0,
                  transition: "border-color .15s,color .15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = B.accent;
                  e.currentTarget.style.color = B.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = B.border;
                  e.currentTarget.style.color = B.muted;
                }}
              >
                ✕
              </button>
            </div>

            <p
              style={{
                fontSize: 12,
                color: B.muted,
                lineHeight: 1.7,
                marginBottom: 14,
              }}
            >
              Need a custom app, portfolio, or product built? Let's make it
              sharp.
            </p>

            <a
              href={ctaUrl}
              className="sm-btn-p"
              style={{
                padding: "11px 0",
                width: "100%",
                justifyContent: "center",
                display: "flex",
                fontSize: 12,
              }}
            >
              LET'S TALK →
            </a>
          </div>
        </div>
      )}

      {/* Toggle pill — always visible on all screen sizes */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="sm-btn-p sm-pulse"
        aria-label={open ? "Close" : "Open contact panel"}
        style={{
          padding: "12px 20px",
          fontSize: 13,
          clipPath: "none",
          minWidth: 148,
          justifyContent: "center",
        }}
      >
        {open ? "✕ CLOSE" : "⚡ LET'S BUILD"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────────────────────────────────────────
function NewsletterCTA({ name }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div
      style={{
        background: `linear-gradient(135deg,${B.surface} 0%,${B.surf2} 100%)`,
        border: `0.5px solid ${B.border2}`,
        padding: "52px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridBg opacity={0.35} />
      <div className="sm-tl" />
      <div className="sm-tr" />
      <div className="sm-bl" />
      <div className="sm-br" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className="sm-label"
          style={{ justifyContent: "center", marginBottom: 16 }}
        >
          Building in Public
        </div>

        <h3
          className="sm-bb sm-glow-txt"
          style={{
            fontSize: "clamp(32px,5vw,52px)",
            letterSpacing: 2,
            color: B.text,
            marginBottom: 8,
          }}
        >
          STAY IN THE <span className="sm-accent">LOOP</span>
        </h3>

        <p
          className="sm-mono"
          style={{
            fontSize: 10,
            color: B.faint,
            letterSpacing: 2,
            marginBottom: 14,
            textTransform: "uppercase",
          }}
        >
          Dev tips · project updates · honest takes
        </p>

        <p
          style={{
            fontSize: 13,
            color: B.muted,
            maxWidth: 400,
            margin: "0 auto 28px",
            lineHeight: 1.85,
          }}
        >
          New projects, write-ups, and the occasional build-in-public update —
          no noise.
        </p>

        {sent ? (
          <div
            className="sm-bb"
            style={{ fontSize: 28, color: B.accent, letterSpacing: 3 }}
          >
            ⚡ YOU'RE IN. STAY SHARP.
          </div>
        ) : (
          <div style={{ maxWidth: 440, margin: "0 auto", display: "flex" }}>
            <input
              className="sm-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && email && setSent(true)}
              style={{ padding: "13px 18px", borderRight: "none", flex: 1 }}
            />
            <button
              className="sm-btn-p"
              onClick={() => email && setSent(true)}
              style={{ padding: "13px 28px", clipPath: "none", flexShrink: 0 }}
            >
              JOIN →
            </button>
          </div>
        )}

        <p
          className="sm-mono"
          style={{
            fontSize: 9,
            color: B.faint,
            letterSpacing: 3,
            marginTop: 14,
            textTransform: "uppercase",
          }}
        >
          No spam · unsubscribe anytime · {name}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO  (project showcase card)
// ─────────────────────────────────────────────────────────────────────────────
function VideoCTA({ name, ctaUrl }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        aspectRatio: "16/9",
        background: B.bg,
        border: `0.5px solid ${B.border2}`,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* placeholder gradient instead of image — swap src when ready */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg,${B.surf2},#111)`,
          transform: hov ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.7s ease",
        }}
      />
      <GridBg opacity={0.5} />

      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top,rgba(14,14,14,0.92),rgba(14,14,14,0.3),transparent)",
        }}
      />

      {/* play button */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            background: hov ? B.accent : "rgba(200,241,53,0.15)",
            border: `1.5px solid ${B.accent}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.25s",
          }}
        >
          <span
            style={{
              fontSize: 26,
              color: hov ? B.bg : B.accent,
              marginLeft: 3,
            }}
          >
            ▶
          </span>
        </div>
      </div>

      {/* bottom content */}
      <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
        <div className="sm-label" style={{ marginBottom: 8 }}>
          Latest Build
        </div>
        <div
          className="sm-bb"
          style={{
            fontSize: "clamp(20px,4vw,28px)",
            letterSpacing: 1,
            color: B.text,
            margin: "0 0 16px",
          }}
        >
          NOVATASK
        </div>
        <a
          href={ctaUrl}
          className="sm-btn-p"
          style={{ padding: "11px 26px", fontSize: 12 }}
        >
          VIEW PROJECT →
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function SharpmanCTA({
  variant = "banner",
  name = "SHARPMAN",
  ctaUrl = "#",
  secondaryUrl = "#",
}) {
  const map = {
    hero: <HeroCTA name={name} ctaUrl={ctaUrl} secondaryUrl={secondaryUrl} />,
    banner: (
      <BannerCTA name={name} ctaUrl={ctaUrl} secondaryUrl={secondaryUrl} />
    ),
    card: <CardCTA name={name} ctaUrl={ctaUrl} />,
    minimal: <MinimalCTA name={name} ctaUrl={ctaUrl} />,
    terminal: <TerminalCTA name={name} ctaUrl={ctaUrl} />,
    float: <FloatCTA name={name} ctaUrl={ctaUrl} />,
    newsletter: <NewsletterCTA name={name} />,
    video: <VideoCTA name={name} ctaUrl={ctaUrl} />,
  };

  return (
    <>
      <style>{css}</style>
      <div className="sm-root">{map[variant] || map.banner}</div>
    </>
  );
}
