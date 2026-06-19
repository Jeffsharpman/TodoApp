import React, { useState, useEffect } from "react";

/**
 * SharpmanCTA — Portfolio Call-to-Action System
 * Drop into NovaTask, your portfolio, or any project to link back to your work
 *
 * Props:
 *   variant      — "hero" | "banner" | "card" | "minimal" | "terminal" | "float" | "newsletter" | "video"
 *   name         — Your brand name (default: "SHARPMAN")
 *   ctaUrl       — Primary action URL (portfolio contact, project page, etc.)
 *   secondaryUrl — Secondary action URL
 */

const BRAND = {
  bg: "#0E0E0E",
  surface: "#1A1A1A",
  border: "#2C2C2C",
  accent: "#C8F135",
  text: "#F2F0EB",
  muted: "#888880",
  faint: "#444440",
};

const css = `
  @keyframes cta-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(200, 241, 53, 0.25); }
    50%       { box-shadow: 0 0 0 10px rgba(200, 241, 53, 0); }
  }
  @keyframes cta-blink {
    0%, 100% { opacity: 1; } 50% { opacity: 0; }
  }
  @keyframes cta-slide {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes cta-float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-5px); }
  }
  .sm-cta-root {
    font-family: 'JetBrains Mono', monospace;
    animation: cta-slide 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  .sm-accent-btn {
    background: #C8F135;
    color: #0E0E0E;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 11px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  .sm-accent-btn:hover { background: #d4f54a; }
  .sm-accent-btn:active { transform: scale(0.97); }
  .sm-ghost-btn {
    background: transparent;
    color: #888880;
    border: 0.5px solid #2C2C2C;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 11px;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .sm-ghost-btn:hover { border-color: #C8F135; color: #C8F135; }
  .sm-pulse { animation: cta-pulse 2.2s infinite; }
  .sm-blink { animation: cta-blink 1s step-end infinite; }
  .sm-float { animation: cta-float 4s ease-in-out infinite; }
`;

// ── Variant: Hero ─────────────────────────────────────────────────────────
function HeroCTA({ name, ctaUrl }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${BRAND.bg}, #161A0C)`,
        border: `0.5px solid ${BRAND.border}`,
        borderRadius: 20,
        padding: "64px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(200,241,53,0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "11px",
            color: BRAND.accent,
            marginBottom: 14,
          }}
        >
          // OPEN FOR PROJECTS — 2026
        </p>

        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 8vw, 72px)",
            letterSpacing: "2px",
            lineHeight: 1,
            color: BRAND.text,
            marginBottom: 24,
          }}
        >
          BUILD SOMETHING <span style={{ color: BRAND.accent }}>SHARP</span>
        </h1>

        <p
          style={{
            color: BRAND.muted,
            maxWidth: 420,
            margin: "0 auto 32px",
            fontSize: 13,
            lineHeight: 1.7,
            letterSpacing: 0.5,
          }}
        >
          Design, code, and ship a product that actually looks like it was built
          on purpose.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={ctaUrl}
            className="sm-accent-btn sm-pulse"
            style={{ padding: "16px 40px", fontSize: "12px" }}
          >
            START A PROJECT →
          </a>
          <a
            href="#work"
            className="sm-ghost-btn"
            style={{ padding: "14px 30px" }}
          >
            VIEW THE WORK ↗
          </a>
        </div>

        <p
          style={{
            color: BRAND.faint,
            fontSize: "10px",
            letterSpacing: 1.5,
            marginTop: 28,
          }}
        >
          {name} · DESIGN. CODE. ELEVATE.
        </p>
      </div>
    </div>
  );
}

// ── Variant: Banner ───────────────────────────────────────────────────────
function BannerCTA({ name, ctaUrl, secondaryUrl }) {
  return (
    <div
      style={{
        background: BRAND.surface,
        border: `0.5px solid ${BRAND.border}`,
        borderRadius: 14,
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${BRAND.accent}, transparent)`,
        }}
      />

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              background: BRAND.accent,
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: 9,
              color: BRAND.faint,
              letterSpacing: 3,
            }}
          >
            BUILT BY {name.toUpperCase()}
          </span>
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(20px, 4vw, 28px)",
            letterSpacing: 2,
            color: BRAND.text,
            lineHeight: 1,
          }}
        >
          WANT SOMETHING LIKE THIS?
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a
          href={ctaUrl}
          className="sm-accent-btn sm-pulse"
          style={{ padding: "12px 24px" }}
        >
          START A PROJECT →
        </a>
        <a
          href={secondaryUrl}
          className="sm-ghost-btn"
          style={{ padding: "12px 20px" }}
        >
          VIEW PORTFOLIO ↗
        </a>
      </div>
    </div>
  );
}

// ── Variant: Card ─────────────────────────────────────────────────────────
function CardCTA({ name, ctaUrl }) {
  return (
    <div
      className="sm-float"
      style={{
        background: BRAND.surface,
        border: `0.5px solid ${BRAND.border}`,
        borderRadius: 14,
        padding: "28px",
        maxWidth: 300,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            width: 48,
            height: 48,
            margin: "0 auto 14px",
            background: BRAND.accent,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: 16,
              fontWeight: 500,
              color: BRAND.bg,
            }}
          >
            JS
          </span>
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 20,
            letterSpacing: 2,
            color: BRAND.text,
          }}
        >
          {name.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 9,
            color: BRAND.faint,
            letterSpacing: 2,
            marginTop: 2,
          }}
        >
          DESIGN. CODE. ELEVATE.
        </div>
      </div>

      <p
        style={{
          color: BRAND.muted,
          lineHeight: 1.7,
          marginBottom: 24,
          fontSize: 12,
          letterSpacing: 0.5,
        }}
      >
        Need a custom app, portfolio, or product built? Let's make it sharp.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <a
          href={ctaUrl}
          className="sm-accent-btn"
          style={{
            padding: "12px 28px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          LET'S TALK →
        </a>
        <a
          href="#work"
          className="sm-ghost-btn"
          style={{
            padding: "11px 28px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          SEE MY WORK ↗
        </a>
      </div>
    </div>
  );
}

// ── Variant: Minimal ──────────────────────────────────────────────────────
function MinimalCTA({ name, ctaUrl }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        background: BRAND.surface,
        border: `0.5px solid ${BRAND.border}`,
        borderRadius: 9999,
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 5,
            height: 5,
            background: BRAND.accent,
            borderRadius: "50%",
          }}
        />
        <span style={{ color: BRAND.muted, fontSize: 11, letterSpacing: 1 }}>
          Built by <span style={{ color: BRAND.accent }}>{name}</span>
        </span>
      </div>
      <a
        href={ctaUrl}
        className="sm-accent-btn"
        style={{ padding: "8px 18px", fontSize: 10 }}
      >
        HIRE ME →
      </a>
    </div>
  );
}

// ── Variant: Terminal ─────────────────────────────────────────────────────
function TerminalCTA({ name, ctaUrl }) {
  const [step, setStep] = useState(0);

  const lines = [
    { prefix: "$", text: "whoami", color: BRAND.accent },
    {
      prefix: ">",
      text: `${name.toLowerCase()} — ui engineer & creative developer`,
      color: BRAND.muted,
    },
    { prefix: "$", text: "cat services.txt", color: BRAND.accent },
    {
      prefix: ">",
      text: "react apps · ui systems · portfolio builds · motion",
      color: BRAND.muted,
    },
    { prefix: "$", text: "open --project", color: BRAND.accent },
  ];

  useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 400);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div
      style={{
        background: "#0A0A0A",
        border: `0.5px solid ${BRAND.border}`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: BRAND.surface,
          padding: "8px 14px",
          borderBottom: `0.5px solid ${BRAND.border}`,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#FC8181",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#F6E05E",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: BRAND.accent,
            opacity: 0.5,
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: 9,
            color: BRAND.faint,
            letterSpacing: 2,
          }}
        >
          {name.toUpperCase()} TERMINAL
        </span>
      </div>

      <div
        style={{
          padding: "18px",
          fontSize: 11,
          minHeight: 140,
        }}
      >
        {lines.slice(0, step).map((line, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 6,
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: line.color, flexShrink: 0 }}>
              {line.prefix}
            </span>
            <span
              style={{
                color: i % 2 === 0 ? BRAND.text : BRAND.muted,
                letterSpacing: 0.5,
              }}
            >
              {line.text}
            </span>
          </div>
        ))}

        {step >= lines.length ? (
          <div
            style={{
              marginTop: 14,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: BRAND.faint,
                letterSpacing: 1,
                marginBottom: 2,
              }}
            >
              // READY TO BUILD SOMETHING?
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a
                href={ctaUrl}
                className="sm-accent-btn"
                style={{ padding: "10px 20px" }}
              >
                START A PROJECT →
              </a>
              <a
                href="#work"
                className="sm-ghost-btn"
                style={{ padding: "10px 16px" }}
              >
                MY WORK ↗
              </a>
            </div>
          </div>
        ) : (
          <span
            className="sm-blink"
            style={{ color: BRAND.accent, fontSize: 14 }}
          >
            ▋
          </span>
        )}
      </div>
    </div>
  );
}

// ── Variant: Float (corner widget) ──────────────────────────────────────────
function FloatCTA({ ctaUrl, show = true }) {
  if (!show) return null;

  return (
    <div
      className="sm-float"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: BRAND.surface,
          border: `0.5px solid ${BRAND.border}`,
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.6)",
          display: "flex",
          alignItems: "center",
          gap: 14,
          minWidth: "260px",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            background: BRAND.accent,
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono'",
              fontSize: 13,
              fontWeight: 500,
              color: BRAND.bg,
            }}
          >
            JS
          </span>
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{
              color: BRAND.text,
              fontSize: 12,
              fontWeight: 500,
              margin: 0,
              letterSpacing: 0.5,
            }}
          >
            Built by Sharpman
          </p>
          <p
            style={{
              color: BRAND.muted,
              fontSize: 10,
              margin: 0,
              letterSpacing: 0.5,
            }}
          >
            Need something like this?
          </p>
        </div>

        <a
          href={ctaUrl}
          className="sm-accent-btn"
          style={{
            padding: "10px 16px",
            fontSize: 10,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          TALK →
        </a>
      </div>
    </div>
  );
}

// ── Variant: Newsletter ───────────────────────────────────────────────────
function NewsletterCTA({ name }) {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${BRAND.surface}, ${BRAND.bg})`,
        border: `0.5px solid ${BRAND.border}`,
        borderRadius: "18px",
        padding: "44px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "26px",
          letterSpacing: 2,
          color: BRAND.text,
          marginBottom: 10,
        }}
      >
        STAY IN THE LOOP
      </h3>
      <p
        style={{
          color: BRAND.muted,
          maxWidth: "400px",
          margin: "0 auto 28px",
          fontSize: 12,
          lineHeight: 1.7,
        }}
      >
        New projects, write-ups, and the occasional build-in-public update — no
        noise.
      </p>

      <div style={{ maxWidth: "380px", margin: "0 auto", display: "flex" }}>
        <input
          type="email"
          placeholder="your@email.com"
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.04)",
            border: `0.5px solid ${BRAND.border}`,
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            padding: "13px 18px",
            color: BRAND.text,
            outline: "none",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
          }}
        />
        <button
          className="sm-accent-btn"
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            padding: "13px 28px",
          }}
        >
          JOIN
        </button>
      </div>

      <p
        style={{
          fontSize: "9px",
          color: BRAND.faint,
          letterSpacing: "2px",
          marginTop: 14,
        }}
      >
        NO SPAM · UNSUBSCRIBE ANYTIME
      </p>
    </div>
  );
}

// ── Variant: Video ────────────────────────────────────────────────────────
function VideoCTA({ ctaUrl }) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16 / 9",
        background: BRAND.bg,
        borderRadius: "18px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src="your-project-preview.jpg"
        alt="Project preview"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.7s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(14,14,14,0.92), rgba(14,14,14,0.3), transparent)",
        }}
      />

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
            background: BRAND.accent,
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
          }}
        >
          <span
            style={{ fontSize: "30px", color: BRAND.bg, marginLeft: "3px" }}
          >
            ▶
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "28px",
          right: "28px",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "10px",
            letterSpacing: "3px",
            color: BRAND.accent,
          }}
        >
          LATEST BUILD
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "26px",
            letterSpacing: 1,
            color: BRAND.text,
            margin: "6px 0 18px",
          }}
        >
          NOVATASK
        </h3>
        <a
          href={ctaUrl}
          className="sm-accent-btn"
          style={{ padding: "12px 28px" }}
        >
          VIEW PROJECT →
        </a>
      </div>
    </div>
  );
}

// ── Main Export ─────────────────────────────────────────────────────────────
export default function SharpmanCTA({
  variant = "banner",
  name = "SHARPMAN",
  ctaUrl = "#",
  secondaryUrl = "#",
}) {
  const components = {
    hero: HeroCTA,
    banner: BannerCTA,
    card: CardCTA,
    minimal: MinimalCTA,
    terminal: TerminalCTA,
    float: FloatCTA,
    newsletter: NewsletterCTA,
    video: VideoCTA,
  };

  const Component = components[variant] || BannerCTA;

  return (
    <>
      <style>{css}</style>
      <div className="sm-cta-root">
        <Component name={name} ctaUrl={ctaUrl} secondaryUrl={secondaryUrl} />
      </div>
    </>
  );
}
