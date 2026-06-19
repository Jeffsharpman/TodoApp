// import React, { useState, useEffect } from "react";

// /**
//  * BandCTA — Premium Band Call-to-Action System
//  * High-end music artist branding components
//  *
//  * Props:
//  *   variant       — "hero" | "banner" | "card" | "minimal" | "neon" | "merch" | "newsletter" | "video"
//  *   bandName      — Your band name (default: "VOID")
//  *   ctaUrl        — Primary action URL (tickets, merch, stream, etc.)
//  *   secondaryUrl  — Secondary action URL
//  */

// const BRAND = {
//   bg: "#0A0A0A",
//   surface: "#121212",
//   border: "#292929",
//   accent: "#00F5FF", // Neon Cyan
//   accent2: "#FF00AA", // Hot Magenta
//   text: "#F5F5F5",
//   muted: "#AAAAAA",
//   faint: "#555555",
//   gold: "#FFD700",
// };

// const css = `
//   @keyframes cta-pulse {
//     0%, 100% { box-shadow: 0 0 0 0 rgba(0, 245, 255, 0.3); }
//     50%       { box-shadow: 0 0 0 12px rgba(0, 245, 255, 0); }
//   }
//   @keyframes cta-glow {
//     0%, 100% { text-shadow: 0 0 8px #00F5FF; }
//     50%       { text-shadow: 0 0 20px #00F5FF, 0 0 30px #FF00AA; }
//   }
//   @keyframes cta-slide {
//     from { opacity: 0; transform: translateY(20px); }
//     to   { opacity: 1; transform: none; }
//   }
//   @keyframes cta-float {
//     0%, 100% { transform: translateY(0); }
//     50%       { transform: translateY(-6px); }
//   }
//   .band-cta-root {
//     font-family: 'Inter', system-ui, sans-serif;
//     animation: cta-slide 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//   }
//   .band-accent-btn {
//     background: linear-gradient(90deg, #00F5FF, #FF00AA);
//     color: #0A0A0A;
//     font-weight: 700;
//     letter-spacing: 1.5px;
//     text-transform: uppercase;
//     font-size: 13px;
//     border: none;
//     border-radius: 9999px;
//     cursor: pointer;
//     transition: all 0.2s ease;
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//   }
//   .band-accent-btn:hover {
//     transform: translateY(-2px) scale(1.03);
//     box-shadow: 0 10px 20px rgba(0, 245, 255, 0.3);
//   }
//   .band-ghost-btn {
//     background: transparent;
//     color: #AAAAAA;
//     border: 1px solid #444;
//     font-weight: 500;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     font-size: 13px;
//     border-radius: 9999px;
//     cursor: pointer;
//     transition: all 0.2s ease;
//   }
//   .band-ghost-btn:hover {
//     border-color: #00F5FF;
//     color: #00F5FF;
//   }
//   .band-pulse { animation: cta-pulse 2s infinite; }
//   .band-glow { animation: cta-glow 3s ease-in-out infinite; }
//   .band-float { animation: cta-float 4s ease-in-out infinite; }
// `;

// // ── Variant: Hero ─────────────────────────────────────────────────────────
// function HeroCTA({ bandName, ctaUrl }) {
//   return (
//     <div
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.bg}, #1A0033)`,
//         border: `1px solid ${BRAND.border}`,
//         borderRadius: 24,
//         padding: "64px 40px",
//         textAlign: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(circle at center, rgba(0,245,255,0.08) 0%, transparent 70%)",
//         }}
//       />

//       <div style={{ position: "relative", zIndex: 2 }}>
//         <p
//           style={{
//             textTransform: "uppercase",
//             letterSpacing: "4px",
//             fontSize: "13px",
//             color: BRAND.accent,
//             marginBottom: 12,
//           }}
//         >
//           Limited Tickets • 2026 Tour
//         </p>

//         <h1
//           style={{
//             fontSize: "clamp(42px, 8vw, 72px)",
//             fontWeight: 900,
//             letterSpacing: "-2px",
//             lineHeight: 1,
//             color: BRAND.text,
//             marginBottom: 24,
//           }}
//         >
//           JOIN THE{" "}
//           <span
//             className="band-glow"
//             style={{
//               background: `linear-gradient(to right, ${BRAND.accent}, ${BRAND.accent2})`,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             LEGACY
//           </span>
//         </h1>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 16,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <a
//             href={ctaUrl}
//             className="band-accent-btn band-pulse"
//             style={{ padding: "18px 48px", fontSize: "15px" }}
//           >
//             GET TICKETS NOW →
//           </a>
//           <a
//             href="#listen"
//             className="band-ghost-btn"
//             style={{ padding: "18px 36px" }}
//           >
//             LISTEN NOW
//           </a>
//         </div>

//         <p style={{ color: BRAND.muted, fontSize: "14px", marginTop: 32 }}>
//           Only 2,847 tickets remaining • Prices increase in 48h
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Variant: Banner ───────────────────────────────────────────────────────
// function BannerCTA({ bandName, ctaUrl, secondaryUrl }) {
//   return (
//     <div
//       style={{
//         background: BRAND.surface,
//         border: `1px solid ${BRAND.border}`,
//         borderRadius: 16,
//         padding: "28px 32px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         flexWrap: "wrap",
//         gap: 24,
//       }}
//     >
//       <div>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 10,
//             marginBottom: 8,
//           }}
//         >
//           <div
//             style={{
//               width: 8,
//               height: 8,
//               background: BRAND.accent,
//               borderRadius: "50%",
//             }}
//           />
//           <span
//             style={{
//               fontSize: 12,
//               color: BRAND.accent,
//               letterSpacing: 3,
//               fontWeight: 600,
//             }}
//           >
//             OFFICIAL
//           </span>
//         </div>
//         <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.text }}>
//           {bandName} — LIVE ON STAGE
//         </div>
//       </div>

//       <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//         <a
//           href={ctaUrl}
//           className="band-accent-btn band-pulse"
//           style={{ padding: "14px 32px" }}
//         >
//           SECURE YOUR SPOT
//         </a>
//         <a
//           href={secondaryUrl}
//           className="band-ghost-btn"
//           style={{ padding: "14px 28px" }}
//         >
//           WATCH LIVE
//         </a>
//       </div>
//     </div>
//   );
// }

// // ── Variant: Card ─────────────────────────────────────────────────────────
// function CardCTA({ bandName, ctaUrl }) {
//   return (
//     <div
//       className="band-float"
//       style={{
//         background: BRAND.surface,
//         border: `1px solid ${BRAND.border}`,
//         borderRadius: 20,
//         padding: "32px",
//         maxWidth: 340,
//         textAlign: "center",
//       }}
//     >
//       <div style={{ marginBottom: 24 }}>
//         <div
//           style={{
//             width: 64,
//             height: 64,
//             margin: "0 auto 16px",
//             background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accent2})`,
//             borderRadius: 16,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: 28,
//           }}
//         >
//           ⚡
//         </div>
//         <div style={{ fontSize: 18, fontWeight: 700, color: BRAND.text }}>
//           {bandName}
//         </div>
//       </div>

//       <p style={{ color: BRAND.muted, lineHeight: 1.6, marginBottom: 28 }}>
//         Join the movement. Limited VIP tickets and exclusive merch available
//         now.
//       </p>

//       <a
//         href={ctaUrl}
//         className="band-accent-btn"
//         style={{
//           padding: "16px 40px",
//           width: "100%",
//           justifyContent: "center",
//         }}
//       >
//         BUY MERCH & TICKETS
//       </a>
//     </div>
//   );
// }

// // ── Variant: Minimal ──────────────────────────────────────────────────────
// function MinimalCTA({ bandName, ctaUrl }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "14px 20px",
//         background: BRAND.surface,
//         border: `1px solid ${BRAND.border}`,
//         borderRadius: 9999,
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//         <div
//           style={{
//             width: 6,
//             height: 6,
//             background: BRAND.accent,
//             borderRadius: "50%",
//           }}
//         />
//         <span style={{ color: BRAND.muted, fontSize: 13 }}>{bandName}</span>
//       </div>
//       <a
//         href={ctaUrl}
//         className="band-accent-btn"
//         style={{ padding: "9px 24px", fontSize: 12 }}
//       >
//         GET TICKETS →
//       </a>
//     </div>
//   );
// }

// // ── Variant: Neon ─────────────────────────────────────────────────────────
// function NeonCTA({ bandName, ctaUrl }) {
//   const [step, setStep] = useState(0);

//   const lines = [
//     { prefix: "▶", text: "NOW PLAYING: ETERNAL VOID", color: BRAND.accent },
//     { prefix: "→", text: "Limited presale ends in 47h", color: BRAND.muted },
//     { prefix: "★", text: "VIP + Meet & Greet available", color: BRAND.accent2 },
//   ];

//   useEffect(() => {
//     if (step < lines.length) {
//       const t = setTimeout(() => setStep((s) => s + 1), 380);
//       return () => clearTimeout(t);
//     }
//   }, [step]);

//   return (
//     <div
//       style={{
//         background: "#0A0A0A",
//         border: `1px solid ${BRAND.border}`,
//         borderRadius: 16,
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           background: "#1A1A1A",
//           padding: "10px 16px",
//           borderBottom: `1px solid ${BRAND.border}`,
//           display: "flex",
//           alignItems: "center",
//           gap: 8,
//         }}
//       >
//         <div
//           style={{
//             width: 10,
//             height: 10,
//             borderRadius: "50%",
//             background: BRAND.accent,
//           }}
//         />
//         <span style={{ fontSize: 11, color: BRAND.faint, letterSpacing: 2 }}>
//           NEON TERMINAL
//         </span>
//       </div>

//       <div
//         style={{
//           padding: "24px",
//           fontFamily: "'JetBrains Mono', monospace",
//           fontSize: 13,
//         }}
//       >
//         {lines.slice(0, step).map((line, i) => (
//           <div key={i} style={{ marginBottom: 10, color: line.color }}>
//             {line.prefix} {line.text}
//           </div>
//         ))}

//         {step >= lines.length && (
//           <div style={{ marginTop: 20 }}>
//             <a
//               href={ctaUrl}
//               className="band-accent-btn band-pulse"
//               style={{ padding: "14px 36px" }}
//             >
//               ENTER THE VOID →
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ── Variant: Merch (Floating) ─────────────────────────────────────────────
// function MerchCTA({ ctaUrl, show = true }) {
//   if (!show) return null;

//   return (
//     <div
//       className="band-float"
//       style={{
//         position: "fixed",
//         bottom: "32px",
//         right: "32px",
//         zIndex: 50,
//         // Removed display: "none" — control visibility with the `show` prop or Tailwind classes
//       }}
//     >
//       <div
//         style={{
//           background: BRAND.surface,
//           border: `1px solid ${BRAND.border}`,
//           borderRadius: "24px",
//           padding: "12px",
//           boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.6)",
//           display: "flex",
//           alignItems: "center",
//           gap: 16,
//           minWidth: "280px",
//         }}
//       >
//         <div
//           style={{
//             width: 56,
//             height: 56,
//             background: "linear-gradient(135deg, #F59E0B, #EF4444)",
//             borderRadius: "16px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "28px",
//             flexShrink: 0,
//           }}
//         >
//           👕
//         </div>

//         <div style={{ flex: 1 }}>
//           <p style={{ color: BRAND.text, fontWeight: 600, margin: 0 }}>
//             Official Tour Merch
//           </p>
//           <p style={{ color: BRAND.muted, fontSize: "13px", margin: 0 }}>
//             New drop just landed
//           </p>
//         </div>

//         <a
//           href={ctaUrl}
//           className="band-accent-btn"
//           style={{
//             padding: "14px 28px",
//             whiteSpace: "nowrap",
//             flexShrink: 0,
//           }}
//         >
//           SHOP NOW
//         </a>
//       </div>
//     </div>
//   );
// }

// // ── Variant: Newsletter ───────────────────────────────────────────────────
// function NewsletterCTA() {
//   return (
//     <div
//       style={{
//         background: `linear-gradient(to right, ${BRAND.surface}, ${BRAND.bg})`,
//         border: `1px solid ${BRAND.border}`,
//         borderRadius: "24px",
//         padding: "48px",
//         textAlign: "center",
//       }}
//     >
//       <h3
//         style={{
//           fontSize: "28px",
//           fontWeight: 700,
//           color: BRAND.text,
//           marginBottom: 12,
//         }}
//       >
//         Stay in the Inner Circle
//       </h3>
//       <p
//         style={{ color: BRAND.muted, maxWidth: "420px", margin: "0 auto 32px" }}
//       >
//         Early access to new music, unreleased tracks, and VIP presale codes.
//       </p>

//       <div style={{ maxWidth: "420px", margin: "0 auto", display: "flex" }}>
//         <input
//           type="email"
//           placeholder="your@email.com"
//           style={{
//             flex: 1,
//             background: "rgba(255,255,255,0.08)",
//             border: `1px solid ${BRAND.border}`,
//             borderTopLeftRadius: "9999px",
//             borderBottomLeftRadius: "9999px",
//             padding: "16px 24px",
//             color: BRAND.text,
//             outline: "none",
//           }}
//         />
//         <button
//           className="band-accent-btn"
//           style={{
//             borderTopLeftRadius: 0,
//             borderBottomLeftRadius: 0,
//             padding: "16px 40px",
//           }}
//         >
//           JOIN
//         </button>
//       </div>

//       <p
//         style={{
//           fontSize: "10px",
//           color: BRAND.faint,
//           letterSpacing: "2px",
//           marginTop: 16,
//         }}
//       >
//         WE RESPECT YOUR INBOX • NO SPAM EVER
//       </p>
//     </div>
//   );
// }

// // ── Variant: Video ────────────────────────────────────────────────────────
// function VideoCTA({ ctaUrl }) {
//   return (
//     <div
//       style={{
//         position: "relative",
//         aspectRatio: "16 / 9",
//         background: BRAND.bg,
//         borderRadius: "24px",
//         overflow: "hidden",
//         cursor: "pointer",
//       }}
//     >
//       <img
//         src="your-band-live.jpg"
//         alt="Live Performance"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           transition: "transform 0.7s ease",
//         }}
//         onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
//         onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
//       />

//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(10,10,10,0.9), rgba(10,10,10,0.3), transparent)",
//         }}
//       />

//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             width: 80,
//             height: 80,
//             background: "rgba(255,255,255,0.9)",
//             borderRadius: "9999px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "transform 0.3s ease",
//           }}
//         >
//           <span
//             style={{ fontSize: "42px", color: "#0A0A0A", marginLeft: "4px" }}
//           >
//             ▶
//           </span>
//         </div>
//       </div>

//       <div
//         style={{
//           position: "absolute",
//           bottom: "32px",
//           left: "32px",
//           right: "32px",
//         }}
//       >
//         <p
//           style={{
//             textTransform: "uppercase",
//             fontSize: "12px",
//             letterSpacing: "3px",
//             color: BRAND.accent,
//           }}
//         >
//           NEW SINGLE
//         </p>
//         <h3
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             color: BRAND.text,
//             margin: "8px 0 20px",
//           }}
//         >
//           "ETERNAL FLAME"
//         </h3>
//         <a
//           href={ctaUrl}
//           className="band-accent-btn"
//           style={{ padding: "14px 32px" }}
//         >
//           STREAM EVERYWHERE →
//         </a>
//       </div>
//     </div>
//   );
// }

// // ── Main Export ─────────────────────────────────────────────────────────────
// export default function BandCTA({
//   variant = "hero",
//   bandName = "VOID",
//   ctaUrl = "#",
//   secondaryUrl = "#",
// }) {
//   const components = {
//     hero: HeroCTA,
//     banner: BannerCTA,
//     card: CardCTA,
//     minimal: MinimalCTA,
//     neon: NeonCTA,
//     merch: MerchCTA,
//     newsletter: NewsletterCTA,
//     video: VideoCTA,
//   };

//   const Component = components[variant] || HeroCTA;

//   return (
//     <>
//       <style>{css}</style>
//       <div className="band-cta-root">
//         <Component
//           bandName={bandName}
//           ctaUrl={ctaUrl}
//           secondaryUrl={secondaryUrl}
//         />
//       </div>
//     </>
//   );
// }

// {
/* <Cta variant="merch" ctaUrl="/tickets" />
    
    <div
        className="band-float merch-visible hidden lg:block"
        style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 50,
        }}
    >
        <Cta variant="merch" ctaUrl="/shop" show={true} />
    </div> */
// }

import React, { useState, useEffect } from "react";

/**
 * SharpmanCTA — Premium Terminal Call-to-Action System
 * Dark / Lime / Mono Terminal Aesthetic for Sharpman
 *
 * Props:
 * variant — "hero" | "banner" | "card" | "minimal" | "neon" | "merch" | "newsletter" | "video"
 * sharpmanName — Your brand name (default: "SHARPMAN")
 * ctaUrl — Primary action URL
 * secondaryUrl — Secondary action URL
 */

const BRAND = {
  bg: "#0A0A0A",
  surface: "#111111",
  border: "#1F1F1F",
  accent: "#BFFF00", // Sharp Lime
  accent2: "#00FFAA", // Terminal Teal
  text: "#E0E0E0",
  muted: "#888888",
  faint: "#444444",
  green: "#39FF14",
};

const css = `
  @keyframes cta-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(191, 255, 0, 0.4); }
    50% { box-shadow: 0 0 0 14px rgba(191, 255, 0, 0); }
  }
  @keyframes cta-glow {
    0%, 100% { text-shadow: 0 0 8px #BFFF00; }
    50% { text-shadow: 0 0 20px #BFFF00, 0 0 32px #00FFAA; }
  }
  @keyframes cta-slide {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: none; }
  }
  @keyframes cta-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .sharpman-cta-root {
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    animation: cta-slide 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  .sharpman-accent-btn {
    background: #111111;
    color: ${BRAND.accent};
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 13px;
    border: 1px solid ${BRAND.accent};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }
  .sharpman-accent-btn::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 40%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: 0.6s;
  }
  .sharpman-accent-btn:hover::before {
    left: 200%;
  }
  .sharpman-accent-btn:hover {
    background: ${BRAND.accent};
    color: #0A0A0A;
    box-shadow: 0 0 20px rgba(191, 255, 0, 0.5);
    transform: translateY(-1px);
  }
  .sharpman-ghost-btn {
    background: transparent;
    color: ${BRAND.muted};
    border: 1px solid ${BRAND.border};
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 13px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .sharpman-ghost-btn:hover {
    border-color: ${BRAND.accent};
    color: ${BRAND.accent};
  }
  .sharpman-pulse { animation: cta-pulse 2.2s infinite; }
  .sharpman-glow { animation: cta-glow 3s ease-in-out infinite; }
  .sharpman-float { animation: cta-float 3.5s ease-in-out infinite; }
`;

// ── Variant: Hero ─────────────────────────────────────────────────────────
function HeroCTA({ sharpmanName, ctaUrl }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${BRAND.bg}, #1A1A0F)`,
        border: `2px solid ${BRAND.border}`,
        borderRadius: 8,
        padding: "72px 48px",
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
            "repeating-linear-gradient(transparent, transparent 2px, rgba(191,255,0,0.03) 2px, rgba(191,255,0,0.03) 4px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "6px",
            fontSize: "12px",
            color: BRAND.faint,
            marginBottom: 16,
          }}
        >
          SYSTEM ONLINE • ACCESS LEVEL: ROOT
        </p>
        <h1
          style={{
            fontSize: "clamp(48px, 9vw, 78px)",
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1,
            color: BRAND.text,
            marginBottom: 32,
          }}
        >
          EXECUTE{" "}
          <span
            className="sharpman-glow"
            style={{
              color: BRAND.accent,
            }}
          >
            {sharpmanName}
          </span>
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={ctaUrl}
            className="sharpman-accent-btn sharpman-pulse"
            style={{ padding: "20px 56px", fontSize: "15px" }}
          >
            INITIALIZE ACCESS →
          </a>
          <a
            href="#terminal"
            className="sharpman-ghost-btn"
            style={{ padding: "20px 40px" }}
          >
            OPEN TERMINAL
          </a>
        </div>
        <p style={{ color: BRAND.muted, fontSize: "14px", marginTop: 40 }}>
          Only 847 slots remaining • Session expires in 48h
        </p>
      </div>
    </div>
  );
}

// ── Variant: Banner ───────────────────────────────────────────────────────
function BannerCTA({ sharpmanName, ctaUrl, secondaryUrl }) {
  return (
    <div
      style={{
        background: BRAND.surface,
        border: `1px solid ${BRAND.border}`,
        borderRadius: 6,
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: BRAND.green,
              boxShadow: `0 0 8px ${BRAND.green}`,
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: 12,
              color: BRAND.accent,
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            SHARPMAN PROTOCOL
          </span>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.text }}>
          {sharpmanName} — LIVE IN THE GRID
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href={ctaUrl}
          className="sharpman-accent-btn sharpman-pulse"
          style={{ padding: "14px 36px" }}
        >
          SECURE SESSION
        </a>
        <a
          href={secondaryUrl}
          className="sharpman-ghost-btn"
          style={{ padding: "14px 32px" }}
        >
          VIEW LOGS
        </a>
      </div>
    </div>
  );
}

// ── Variant: Card ─────────────────────────────────────────────────────────
function CardCTA({ sharpmanName, ctaUrl }) {
  return (
    <div
      className="sharpman-float"
      style={{
        background: BRAND.surface,
        border: `2px solid ${BRAND.border}`,
        borderRadius: 8,
        padding: "36px",
        maxWidth: 360,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            width: 72,
            height: 72,
            margin: "0 auto 20px",
            background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accent2})`,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            color: "#0A0A0A",
            boxShadow: `0 0 30px ${BRAND.accent}`,
          }}
        >
          ▶
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: BRAND.text }}>
          {sharpmanName}
        </div>
      </div>
      <p style={{ color: BRAND.muted, lineHeight: 1.6, marginBottom: 32 }}>
        Gain root access. Exclusive tools, private repos, and early drops
        available now.
      </p>
      <a
        href={ctaUrl}
        className="sharpman-accent-btn"
        style={{
          padding: "16px 48px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        DEPLOY TOOLS
      </a>
    </div>
  );
}

// ── Variant: Minimal ──────────────────────────────────────────────────────
function MinimalCTA({ sharpmanName, ctaUrl }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 24px",
        background: BRAND.surface,
        border: `1px solid ${BRAND.border}`,
        borderRadius: 6,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 7,
            height: 7,
            background: BRAND.accent,
            boxShadow: `0 0 6px ${BRAND.accent}`,
            borderRadius: "50%",
          }}
        />
        <span style={{ color: BRAND.muted, fontSize: 13 }}>{sharpmanName}</span>
      </div>
      <a
        href={ctaUrl}
        className="sharpman-accent-btn"
        style={{ padding: "9px 28px", fontSize: 12 }}
      >
        CONNECT →
      </a>
    </div>
  );
}

// ── Variant: Neon (now Terminal) ──────────────────────────────────────────
function TerminalCTA({ sharpmanName, ctaUrl }) {
  const [step, setStep] = useState(0);
  const lines = [
    { prefix: ">", text: "USER: root@sharpman", color: BRAND.accent },
    { prefix: ">", text: "Limited access window: 47h", color: BRAND.muted },
    {
      prefix: ">",
      text: "VIP tools + private repo unlocked",
      color: BRAND.accent2,
    },
  ];

  useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 420);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div
      style={{
        background: "#0A0A0A",
        border: `2px solid ${BRAND.border}`,
        borderRadius: 6,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#1A1A1A",
          padding: "10px 16px",
          borderBottom: `1px solid ${BRAND.border}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 12,
              height: 12,
              background: "#FF5F56",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              background: "#FFBD2E",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              background: "#27C93F",
              borderRadius: "50%",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 11,
            color: BRAND.faint,
            letterSpacing: 3,
            marginLeft: 12,
          }}
        >
          SHARPMAN://TERMINAL
        </span>
      </div>
      <div
        style={{
          padding: "28px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        {lines.slice(0, step).map((line, i) => (
          <div key={i} style={{ marginBottom: 12, color: line.color }}>
            {line.prefix} {line.text}
          </div>
        ))}
        {step >= lines.length && (
          <div style={{ marginTop: 24 }}>
            <a
              href={ctaUrl}
              className="sharpman-accent-btn sharpman-pulse"
              style={{ padding: "16px 48px" }}
            >
              BREACH THE GRID →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Variant: Merch (now Tools) ────────────────────────────────────────────
function ToolsCTA({ ctaUrl, show = true }) {
  if (!show) return null;
  return (
    <div
      className="sharpman-float"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: BRAND.surface,
          border: `2px solid ${BRAND.accent}`,
          borderRadius: 8,
          padding: "16px",
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.8)",
          display: "flex",
          alignItems: "center",
          gap: 20,
          minWidth: "300px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            background: `linear-gradient(135deg, ${BRAND.accent}, #00FFAA)`,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            flexShrink: 0,
            color: "#0A0A0A",
          }}
        >
          ⚡
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: BRAND.text, fontWeight: 700, margin: 0 }}>
            Sharp Tools Drop
          </p>
          <p style={{ color: BRAND.muted, fontSize: "13px", margin: 0 }}>
            New utilities just deployed
          </p>
        </div>
        <a
          href={ctaUrl}
          className="sharpman-accent-btn"
          style={{
            padding: "14px 32px",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          DEPLOY
        </a>
      </div>
    </div>
  );
}

// ── Variant: Newsletter ───────────────────────────────────────────────────
function NewsletterCTA() {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${BRAND.surface}, ${BRAND.bg})`,
        border: `2px solid ${BRAND.border}`,
        borderRadius: 8,
        padding: "52px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: BRAND.text,
          marginBottom: 16,
        }}
      >
        JOIN THE CORE NETWORK
      </h3>
      <p
        style={{ color: BRAND.muted, maxWidth: "440px", margin: "0 auto 36px" }}
      >
        Receive early drops, private repo access, and system alerts.
      </p>
      <div style={{ maxWidth: "440px", margin: "0 auto", display: "flex" }}>
        <input
          type="email"
          placeholder="root@yourdomain.com"
          style={{
            flex: 1,
            background: "#0A0A0A",
            border: `1px solid ${BRAND.border}`,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            padding: "18px 24px",
            color: BRAND.text,
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button
          className="sharpman-accent-btn"
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            padding: "18px 48px",
          }}
        >
          CONNECT
        </button>
      </div>
      <p
        style={{
          fontSize: "10px",
          color: BRAND.faint,
          letterSpacing: "3px",
          marginTop: 20,
        }}
      >
        ENCRYPTED • NO LOGS • NO LEAKS
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
        borderRadius: 8,
        overflow: "hidden",
        border: `2px solid ${BRAND.border}`,
        cursor: "pointer",
      }}
    >
      <img
        src="your-terminal-session.jpg"
        alt="Terminal Session"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.7s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.04)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,10,10,0.95), rgba(10,10,10,0.4), transparent)",
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
            width: 88,
            height: 88,
            background: "rgba(191,255,0,0.95)",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
          }}
        >
          <span
            style={{ fontSize: "48px", color: "#0A0A0A", marginLeft: "6px" }}
          >
            ▶
          </span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "36px",
          right: "36px",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            letterSpacing: "4px",
            color: BRAND.accent,
          }}
        >
          LATEST TRANSMISSION
        </p>
        <h3
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: BRAND.text,
            margin: "10px 0 24px",
          }}
        >
          "SHADOW PROTOCOL v2.3"
        </h3>
        <a
          href={ctaUrl}
          className="sharpman-accent-btn"
          style={{ padding: "14px 36px" }}
        >
          STREAM SESSION →
        </a>
      </div>
    </div>
  );
}

// ── Main Export ─────────────────────────────────────────────────────────────
export default function SharpmanCTA({
  variant = "hero",
  sharpmanName = "SHARPMAN",
  ctaUrl = "#",
  secondaryUrl = "#",
}) {
  const components = {
    hero: HeroCTA,
    banner: BannerCTA,
    card: CardCTA,
    minimal: MinimalCTA,
    neon: TerminalCTA, // renamed for clarity
    merch: ToolsCTA,
    newsletter: NewsletterCTA,
    video: VideoCTA,
  };

  const Component = components[variant] || HeroCTA;

  return (
    <>
      <style>{css}</style>
      <div className="sharpman-cta-root">
        <Component
          sharpmanName={sharpmanName}
          ctaUrl={ctaUrl}
          secondaryUrl={secondaryUrl}
        />
      </div>
    </>
  );
}