import { useState, useEffect } from "react";

/**
 * SharpmanCTA — Premium Developer CTA System
 * Oyenuga Joshua · SHARPMAN Brand · Design. Code. Elevate.
 *
 * Props:
 *   variant      — "hero" | "banner" | "card" | "minimal" | "terminal" | "floating" | "newsletter" | "project"
 *   websiteType  — "portfolio" | "agency" | "ecommerce" | "saas" | "blog"
 *   ctaUrl       — Primary action URL
 *   secondaryUrl — Secondary action URL
 */

// ── BRAND TOKENS ────────────────────────────────────────────────────────────
const B = {
  black:   "#050607",
  surface: "#0a0c0e",
  surface2:"#0d1008",
  border:  "#1a1f12",
  border2: "#252b18",
  accent:  "#c8ff00",
  accent2: "#e8ff00",
  white:   "#f0ede6",
  muted:   "#4a4f3a",
  faint:   "#222618",
  glow:    "rgba(200,255,0,0.18)",
};

// ── GLOBAL STYLES ────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@1,700&display=swap');

  @keyframes sharp-pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(200,255,0,0.35); }
    50%      { box-shadow: 0 0 0 14px rgba(200,255,0,0); }
  }
  @keyframes sharp-glow {
    0%,100% { text-shadow: 0 0 10px rgba(200,255,0,0.5); }
    50%      { text-shadow: 0 0 28px rgba(200,255,0,0.9), 0 0 50px rgba(200,255,0,0.3); }
  }
  @keyframes sharp-slide {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:none; }
  }
  @keyframes sharp-float {
    0%,100% { transform:translateY(0); }
    50%      { transform:translateY(-6px); }
  }
  @keyframes sharp-scan {
    0%   { top: 0; opacity:0.6; }
    100% { top: 100%; opacity:0; }
  }
  @keyframes sharp-blink {
    0%,100% { opacity:1; }
    50%      { opacity:0; }
  }
  @keyframes sharp-marquee {
    from { transform:translateX(0); }
    to   { transform:translateX(-50%); }
  }
  @keyframes sharp-border {
    0%   { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .sharp-root {
    font-family: 'Syne', sans-serif;
    animation: sharp-slide 0.55s cubic-bezier(0.23,1,0.32,1) forwards;
  }

  /* Primary button */
  .sharp-btn-primary {
    background: ${B.accent};
    color: ${B.black};
    font-family: 'Bebas Neue', cursive;
    font-size: 15px;
    letter-spacing: 3px;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
    transition: transform 0.2s, box-shadow 0.2s;
    text-decoration: none;
  }
  .sharp-btn-primary:hover {
    transform: translate(-3px,-3px);
    box-shadow: 5px 5px 0 rgba(200,255,0,0.2), 0 0 30px rgba(200,255,0,0.15);
  }

  /* Ghost button */
  .sharp-btn-ghost {
    background: transparent;
    color: ${B.white};
    font-family: 'Bebas Neue', cursive;
    font-size: 15px;
    letter-spacing: 3px;
    border: 1px solid ${B.border2};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
    text-decoration: none;
  }
  .sharp-btn-ghost:hover {
    border-color: ${B.accent};
    color: ${B.accent};
    box-shadow: 0 0 20px rgba(200,255,0,0.08);
  }

  /* Accent text */
  .sharp-accent { color: ${B.accent}; }
  .sharp-glow-txt { animation: sharp-glow 3s ease-in-out infinite; }
  .sharp-pulse    { animation: sharp-pulse 2.2s infinite; }
  .sharp-float    { animation: sharp-float 4s ease-in-out infinite; }

  /* Label */
  .sharp-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    letter-spacing: 5px;
    color: ${B.accent};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sharp-label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background: ${B.accent};
    box-shadow: 0 0 6px ${B.accent};
  }

  /* Mono text */
  .sharp-mono {
    font-family: 'IBM Plex Mono', monospace;
  }
  .sharp-heading {
    font-family: 'Bebas Neue', cursive;
  }

  /* Card corners */
  .sharp-corner-tl { position:absolute; top:-1px; left:-1px; width:14px; height:14px; border-top:2px solid ${B.accent}; border-left:2px solid ${B.accent}; }
  .sharp-corner-tr { position:absolute; top:-1px; right:-1px; width:14px; height:14px; border-top:2px solid ${B.accent}; border-right:2px solid ${B.accent}; }
  .sharp-corner-bl { position:absolute; bottom:-1px; left:-1px; width:14px; height:14px; border-bottom:2px solid ${B.accent}; border-left:2px solid ${B.accent}; }
  .sharp-corner-br { position:absolute; bottom:-1px; right:-1px; width:14px; height:14px; border-bottom:2px solid ${B.accent}; border-right:2px solid ${B.accent}; }

  /* Scan line */
  .sharp-scan::after {
    content:'';
    position:absolute;
    left:0;right:0;height:1px;
    background:linear-gradient(to right,transparent,${B.accent},transparent);
    animation: sharp-scan 3s linear infinite;
    pointer-events:none;
  }

  /* Input */
  .sharp-input {
    background: rgba(200,255,0,0.04);
    border: 1px solid ${B.border2};
    color: ${B.white};
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    width: 100%;
  }
  .sharp-input:focus {
    border-color: ${B.accent};
    box-shadow: 0 0 0 2px rgba(200,255,0,0.07);
  }
  .sharp-input::placeholder { color: ${B.muted}; }
`;

// ── LOGO SVG ────────────────────────────────────────────────────────────────
const Logo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <polygon points="2,10 8,4 8,24 2,18" stroke="#c8ff00" strokeWidth="1.5" fill="none"/>
    <polygon points="26,10 20,4 20,24 26,18" stroke="#c8ff00" strokeWidth="1.5" fill="none"/>
    <polygon points="9,2 19,2 19,26 9,26" stroke="#c8ff00" strokeWidth="1" fill="none"/>
    <polyline points="17,4 12,14 16,14 11,24" stroke="#c8ff00" strokeWidth="2" fill="none" strokeLinejoin="round"/>
  </svg>
);

// ── WEBSITE TYPE CONFIG ──────────────────────────────────────────────────────
const siteConfig = {
  portfolio: {
    label:   "Available for Projects",
    headline:"LET'S BUILD SOMETHING SHARP",
    sub:     "I'm open to freelance work, collaborations, and full-time opportunities. If you have a project in mind — let's talk.",
    cta:     "Start a Project →",
    ghost:   "View My Work",
    tag:     "Web Developer · Brand Builder",
  },
  agency: {
    label:   "Digital Agency · Nigeria",
    headline:"DIGITAL SOLUTIONS THAT DELIVER RESULTS",
    sub:     "We help brands grow with powerful websites, web apps and digital experiences. Clean code. Powerful solutions.",
    cta:     "Get a Free Quote →",
    ghost:   "See Our Work",
    tag:     "Design. Code. Elevate.",
  },
  ecommerce: {
    label:   "New Collection · Live Now",
    headline:"BUILD YOUR ONLINE STORE",
    sub:     "Powerful e-commerce solutions that sell and scale. Fast, secure, and built for conversions that drive real revenue.",
    cta:     "Start Selling Now →",
    ghost:   "See Pricing",
    tag:     "E-Commerce · Laravel · Paystack",
  },
  saas: {
    label:   "SaaS Platform · Beta Open",
    headline:"SOFTWARE THAT WORKS AS HARD AS YOU DO",
    sub:     "Purpose-built tools for modern businesses. Fast, reliable, and built with the Laravel ecosystem you can trust.",
    cta:     "Start Free Trial →",
    ghost:   "See Features",
    tag:     "Clean Code · Scalable Systems",
  },
  blog: {
    label:   "Developer Blog · Updates",
    headline:"SHARP INSIGHTS. REAL CODE.",
    sub:     "Web development tips, Laravel tricks, and honest takes on the dev journey. Building in public from Nigeria.",
    cta:     "Read Latest Post →",
    ghost:   "Subscribe",
    tag:     "Web Dev · Laravel · Journey",
  },
};

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: HERO
// ══════════════════════════════════════════════════════════════════════════════
function HeroCTA({ websiteType, ctaUrl, secondaryUrl }) {
  const cfg = siteConfig[websiteType] || siteConfig.portfolio;
  return (
    <div style={{
      background:`linear-gradient(135deg, ${B.black} 0%, ${B.surface2} 60%, #0a1000 100%)`,
      border:`1px solid ${B.border2}`,
      borderRadius:4,
      padding:"72px 48px",
      textAlign:"center",
      position:"relative",
      overflow:"hidden",
    }}>
      {/* Bg glow */}
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(200,255,0,0.06) 0%,transparent 65%)",pointerEvents:"none"}}/>
      {/* Grid */}
      <div style={{position:"absolute",inset:0,backgroundImage:`linear-gradient(${B.faint} 1px,transparent 1px),linear-gradient(90deg,${B.faint} 1px,transparent 1px)`,backgroundSize:"60px 60px",opacity:.4,pointerEvents:"none"}}/>
      {/* Scan */}
      <div className="sharp-scan" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      {/* Corners */}
      <div className="sharp-corner-tl"/><div className="sharp-corner-tr"/>
      <div className="sharp-corner-bl"/><div className="sharp-corner-br"/>

      <div style={{position:"relative",zIndex:2}}>
        <div className="sharp-label" style={{justifyContent:"center",marginBottom:20}}>
          {cfg.label}
        </div>
        <h1 className="sharp-heading sharp-glow-txt" style={{
          fontSize:"clamp(44px,7vw,88px)",lineHeight:.88,color:B.accent,
          letterSpacing:1,marginBottom:8,
        }}>{cfg.headline}</h1>
        <p style={{
          fontFamily:"'Playfair Display',serif",fontStyle:"italic",
          fontSize:"clamp(16px,2vw,22px)",color:"rgba(240,237,230,.6)",marginBottom:14,
        }}>
          Design. Code. <span style={{color:B.accent,fontStyle:"normal",fontWeight:700}}>Elevate.</span>
        </p>
        <p style={{fontSize:14,color:B.muted,maxWidth:480,margin:"0 auto 44px",lineHeight:1.85}}>{cfg.sub}</p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href={ctaUrl} className="sharp-btn-primary sharp-pulse" style={{padding:"16px 44px"}}>{cfg.cta}</a>
          <a href={secondaryUrl||"#"} className="sharp-btn-ghost" style={{padding:"16px 36px"}}>{cfg.ghost}</a>
        </div>
        <div className="sharp-mono" style={{fontSize:9,letterSpacing:3,color:B.muted,marginTop:28,textTransform:"uppercase"}}>
          📍 Nigeria · buildwithsharpman@gmail.com · wa.link/tuzxmh
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: BANNER (top-of-page or section strip)
// ══════════════════════════════════════════════════════════════════════════════
function BannerCTA({ websiteType, ctaUrl, secondaryUrl }) {
  const cfg = siteConfig[websiteType] || siteConfig.portfolio;
  return (
    <div style={{
      background:B.surface,border:`1px solid ${B.border2}`,
      padding:"22px 32px",
      display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20,
      position:"relative",overflow:"hidden",
    }}>
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:B.accent,boxShadow:`0 0 12px ${B.accent}`}}/>
      <div style={{display:"flex",alignItems:"center",gap:18}}>
        <Logo size={32}/>
        <div>
          <div className="sharp-label" style={{marginBottom:4}}>{cfg.tag}</div>
          <div className="sharp-heading" style={{fontSize:22,letterSpacing:2,color:B.white}}>
            SHARPMAN ⚡ — {cfg.label.toUpperCase()}
          </div>
        </div>
      </div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        <a href={ctaUrl} className="sharp-btn-primary sharp-pulse" style={{padding:"13px 30px"}}>{cfg.cta}</a>
        <a href={secondaryUrl||"#"} className="sharp-btn-ghost" style={{padding:"13px 24px"}}>{cfg.ghost}</a>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: CARD (sidebar or grid card)
// ══════════════════════════════════════════════════════════════════════════════
function CardCTA({ websiteType, ctaUrl }) {
  const cfg = siteConfig[websiteType] || siteConfig.portfolio;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="sharp-float"
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      style={{
        background:B.surface,
        border:`1px solid ${hovered?B.accent:B.border2}`,
        borderRadius:2,
        padding:32,
        maxWidth:340,
        textAlign:"center",
        position:"relative",
        overflow:"hidden",
        transition:"border-color .25s,box-shadow .25s",
        boxShadow:hovered?`0 20px 50px rgba(200,255,0,0.07)`:"none",
      }}>
      <div className="sharp-corner-tl"/><div className="sharp-corner-tr"/>
      <div className="sharp-corner-bl"/><div className="sharp-corner-br"/>
      {/* Glow bg */}
      <div style={{position:"absolute",inset:0,background:hovered?"radial-gradient(circle at 50% 30%,rgba(200,255,0,0.05),transparent 70%)":"none",transition:"background .3s",pointerEvents:"none"}}/>

      <div style={{position:"relative",zIndex:1}}>
        <div style={{
          width:64,height:64,margin:"0 auto 20px",
          background:"rgba(200,255,0,0.07)",
          border:`1px solid ${B.border2}`,
          display:"flex",alignItems:"center",justifyContent:"center",
        }}>
          <Logo size={36}/>
        </div>
        <div className="sharp-heading" style={{fontSize:26,letterSpacing:3,color:B.white,marginBottom:4}}>SHARPMAN ⚡</div>
        <div className="sharp-label" style={{justifyContent:"center",marginBottom:16}}>{cfg.label}</div>
        <p style={{fontSize:12,color:B.muted,lineHeight:1.75,marginBottom:24}}>{cfg.sub}</p>
        <a href={ctaUrl} className="sharp-btn-primary" style={{padding:"14px 0",width:"100%",justifyContent:"center",display:"flex"}}>{cfg.cta}</a>
        <div className="sharp-mono" style={{fontSize:9,color:B.muted,marginTop:14,letterSpacing:2}}>+234 903 717 7992</div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: MINIMAL (slim top bar / nav CTA)
// ══════════════════════════════════════════════════════════════════════════════
function MinimalCTA({ websiteType, ctaUrl }) {
  const cfg = siteConfig[websiteType] || siteConfig.portfolio;
  return (
    <div style={{
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"12px 20px",
      background:B.surface,
      border:`1px solid ${B.border2}`,
      gap:16,flexWrap:"wrap",
    }}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:6,height:6,background:B.accent,borderRadius:"50%",boxShadow:`0 0 8px ${B.accent}`,flexShrink:0}}/>
        <Logo size={20}/>
        <span className="sharp-mono" style={{color:B.muted,fontSize:11,letterSpacing:2}}>{cfg.tag}</span>
      </div>
      <a href={ctaUrl} className="sharp-btn-primary" style={{padding:"9px 22px",fontSize:13}}>{cfg.cta}</a>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: TERMINAL (replaces "neon" — fits dev brand perfectly)
// ══════════════════════════════════════════════════════════════════════════════
function TerminalCTA({ websiteType, ctaUrl }) {
  const cfg = siteConfig[websiteType] || siteConfig.portfolio;
  const lines = [
    { text:`> whoami`, color:B.muted },
    { text:`  sharpman — web developer`, color:B.accent },
    { text:`> skills`, color:B.muted },
    { text:`  html css js php laravel livewire filament`, color:"#6a7f2a" },
    { text:`> status`, color:B.muted },
    { text:`  ✅ ${cfg.label.toLowerCase()}`, color:B.accent },
    { text:`> contact`, color:B.muted },
    { text:`  buildwithsharpman@gmail.com`, color:"#6a7f2a" },
    { text:`> _`, color:B.accent, blink:true },
  ];
  const [shown, setShown] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(()=>{
    if(shown<lines.length){const t=setTimeout(()=>setShown(s=>s+1),260);return()=>clearTimeout(t)}
    else setTimeout(()=>setReady(true),400);
  },[shown]);

  return (
    <div style={{background:B.black,border:`1px solid ${B.border2}`,borderRadius:2,overflow:"hidden",maxWidth:560}}>
      {/* Terminal title bar */}
      <div style={{background:B.surface,padding:"10px 16px",borderBottom:`1px solid ${B.border}`,display:"flex",alignItems:"center",gap:8}}>
        <div style={{display:"flex",gap:6}}>
          {["#ff5f57","#febc2e",B.accent].map((c,i)=>(
            <div key={i} style={{width:10,height:10,borderRadius:"50%",background:c}}/>
          ))}
        </div>
        <span className="sharp-mono" style={{fontSize:10,color:B.faint,letterSpacing:3,marginLeft:8}}>
          sharpman@portfolio:~
        </span>
      </div>
      {/* Terminal body */}
      <div style={{padding:"24px 20px",fontFamily:"'IBM Plex Mono',monospace",fontSize:12,lineHeight:1.9,minHeight:220}}>
        {lines.slice(0,shown).map((line,i)=>(
          <div key={i} style={{color:line.color}}>
            {line.blink
              ? <span style={{animation:"sharp-blink 1s step-end infinite",color:B.accent}}>▮</span>
              : line.text
            }
          </div>
        ))}
      </div>
      {/* CTA */}
      {ready && (
        <div style={{padding:"16px 20px",borderTop:`1px solid ${B.border}`,display:"flex",gap:10,flexWrap:"wrap",animation:"sharp-slide .4s forwards"}}>
          <a href={ctaUrl} className="sharp-btn-primary" style={{padding:"12px 28px",fontSize:13}}>{cfg.cta}</a>
          <a href="https://wa.link/tuzxmh" target="_blank" className="sharp-btn-ghost" style={{padding:"12px 20px",fontSize:13}}>💬 WhatsApp</a>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: FLOATING (fixed bottom-right)
// ══════════════════════════════════════════════════════════════════════════════
function FloatingCTA({ websiteType, ctaUrl }) {
  const cfg = siteConfig[websiteType] || siteConfig.portfolio;
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(()=>{const t=setTimeout(()=>setOpen(true),3000);return()=>clearTimeout(t)},[]);
  if(dismissed) return null;
  return (
    <div className="sharp-float" style={{position:"fixed",bottom:28,right:28,zIndex:9000}}>
      {open && (
        <div style={{
          background:B.surface,border:`1px solid ${B.border2}`,
          borderRadius:2,padding:20,maxWidth:280,marginBottom:10,
          boxShadow:"0 24px 48px rgba(0,0,0,.7)",
          position:"relative",animation:"sharp-slide .35s forwards",
        }}>
          <button onClick={()=>setDismissed(true)} style={{
            position:"absolute",top:10,right:12,
            background:"none",border:"none",color:B.muted,cursor:"pointer",fontSize:16,lineHeight:1,
          }}>×</button>
          <div className="sharp-corner-tl"/><div className="sharp-corner-tr"/>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <Logo size={24}/>
            <div>
              <div className="sharp-heading" style={{fontSize:16,letterSpacing:2,color:B.white}}>SHARPMAN ⚡</div>
              <div className="sharp-mono" style={{fontSize:8,letterSpacing:2,color:B.accent}}>{cfg.label.toUpperCase()}</div>
            </div>
          </div>
          <p style={{fontSize:12,color:B.muted,lineHeight:1.7,marginBottom:16}}>{cfg.sub.slice(0,90)}…</p>
          <a href={ctaUrl} className="sharp-btn-primary" style={{padding:"11px 0",width:"100%",justifyContent:"center",display:"flex",fontSize:13}}>{cfg.cta}</a>
        </div>
      )}
      {/* Toggle pill */}
      <button onClick={()=>setOpen(o=>!o)} className="sharp-btn-primary sharp-pulse" style={{
        padding:"13px 22px",fontSize:13,width:"100%",justifyContent:"center",
        borderRadius:0,
      }}>
        {open ? "✕ Close" : "⚡ Let's Build"}
      </button>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: NEWSLETTER
// ══════════════════════════════════════════════════════════════════════════════
function NewsletterCTA({ websiteType }) {
  const cfg = siteConfig[websiteType] || siteConfig.blog;
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div style={{
      background:`linear-gradient(135deg,${B.surface} 0%,${B.surface2} 100%)`,
      border:`1px solid ${B.border2}`,borderRadius:2,padding:"52px 44px",
      textAlign:"center",position:"relative",overflow:"hidden",
    }}>
      <div style={{position:"absolute",inset:0,backgroundImage:`linear-gradient(${B.faint} 1px,transparent 1px),linear-gradient(90deg,${B.faint} 1px,transparent 1px)`,backgroundSize:"50px 50px",opacity:.3,pointerEvents:"none"}}/>
      <div className="sharp-corner-tl"/><div className="sharp-corner-tr"/>
      <div className="sharp-corner-bl"/><div className="sharp-corner-br"/>
      <div style={{position:"relative",zIndex:1}}>
        <div className="sharp-label" style={{justifyContent:"center",marginBottom:16}}>Building in Public</div>
        <h3 className="sharp-heading" style={{fontSize:44,letterSpacing:2,color:B.white,marginBottom:8}}>
          STAY IN THE <span className="sharp-accent sharp-glow-txt">LOOP</span>
        </h3>
        <p style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",color:"rgba(240,237,230,.55)",marginBottom:10}}>
          Dev tips, project updates, and honest takes.
        </p>
        <p style={{fontSize:13,color:B.muted,maxWidth:400,margin:"0 auto 32px",lineHeight:1.8}}>{cfg.sub}</p>
        {sent ? (
          <div className="sharp-heading" style={{fontSize:28,color:B.accent,letterSpacing:3}}>⚡ YOU'RE IN. STAY SHARP.</div>
        ) : (
          <div style={{maxWidth:460,margin:"0 auto",display:"flex",gap:0}}>
            <input
              className="sharp-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              style={{padding:"14px 20px",borderRight:"none",maxWidth:300}}
            />
            <button
              className="sharp-btn-primary"
              onClick={()=>email&&setSent(true)}
              style={{padding:"14px 28px",clipPath:"none",flexShrink:0}}
            >
              SUBSCRIBE →
            </button>
          </div>
        )}
        <p className="sharp-mono" style={{fontSize:9,color:B.muted,letterSpacing:3,marginTop:16}}>
          NO SPAM · UNSUBSCRIBE ANYTIME · BUILDING IN PUBLIC FROM 🇳🇬
        </p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// VARIANT: PROJECT (replaces "video" — for dev portfolio project showcase)
// ══════════════════════════════════════════════════════════════════════════════
function ProjectCTA({ ctaUrl, secondaryUrl }) {
  const projects = [
    { num:"01", title:"SHARPMAN PORTFOLIO", sub:"Personal brand site", chip:"HTML · CSS · JS", live:true },
    { num:"02", title:"TODO APP", sub:"Live on Netlify", chip:"JavaScript", live:true },
    { num:"03", title:"NEXT PROJECT", sub:"Building in public", chip:"Laravel", live:false },
  ];
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <div style={{
      background:B.surface,border:`1px solid ${B.border2}`,borderRadius:2,
      overflow:"hidden",position:"relative",
    }}>
      {/* Header */}
      <div style={{
        padding:"14px 24px",borderBottom:`1px solid ${B.border}`,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        background:B.black,
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <Logo size={22}/>
          <span className="sharp-mono" style={{fontSize:10,letterSpacing:3,color:B.muted}}>SHARPMAN / WORKS</span>
        </div>
        <div style={{display:"flex",gap:6}}>
          {projects.map((_,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{
              width:8,height:8,borderRadius:"50%",border:"none",cursor:"pointer",
              background:i===active?B.accent:B.border2,transition:"background .2s",
            }}/>
          ))}
        </div>
      </div>
      {/* Project display */}
      <div style={{padding:32,minHeight:200,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",bottom:-20,right:-10,fontFamily:"'Bebas Neue',cursive",fontSize:120,color:"rgba(200,255,0,0.035)",lineHeight:1,pointerEvents:"none"}}>
          {p.num}
        </div>
        <div className="sharp-mono" style={{fontSize:9,color:B.accent,letterSpacing:3,marginBottom:12}}>
          {p.num} — {p.live?"🟢 LIVE":"⏳ COMING SOON"}
        </div>
        <div className="sharp-heading" style={{fontSize:36,letterSpacing:2,color:B.white,marginBottom:6}}>{p.title}</div>
        <div style={{fontSize:13,color:B.muted,marginBottom:20}}>{p.sub}</div>
        <span style={{
          display:"inline-block",padding:"4px 12px",
          background:"rgba(200,255,0,0.08)",border:"1px solid rgba(200,255,0,0.2)",
          fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:B.accent,letterSpacing:2,
          marginBottom:28,
        }}>{p.chip}</span>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <a href={ctaUrl} className="sharp-btn-primary" style={{padding:"12px 28px",fontSize:13}}>View Live →</a>
          <a href={secondaryUrl||"#"} className="sharp-btn-ghost" style={{padding:"12px 22px",fontSize:13}}>Source Code</a>
        </div>
      </div>
      {/* Project tabs */}
      <div style={{borderTop:`1px solid ${B.border}`,display:"flex"}}>
        {projects.map((proj,i)=>(
          <button key={i} onClick={()=>setActive(i)} style={{
            flex:1,padding:"12px 8px",background:i===active?"rgba(200,255,0,0.05)":B.black,
            border:"none",borderRight:i<2?`1px solid ${B.border}`:"none",
            color:i===active?B.accent:B.muted,cursor:"pointer",
            fontFamily:"'IBM Plex Mono',monospace",fontSize:9,letterSpacing:2,
            transition:"background .2s,color .2s",
          }}>
            {proj.num}
          </button>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SHOWCASE — All variants displayed
// ══════════════════════════════════════════════════════════════════════════════
function ShowcaseAll() {
  const [site, setSite] = useState("portfolio");
  const sites = ["portfolio","agency","ecommerce","saas","blog"];

  return (
    <div style={{background:B.black,minHeight:"100vh",padding:"40px 24px",fontFamily:"'Syne',sans-serif"}}>
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:48}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:10}}>
          <Logo size={36}/>
          <h1 className="sharp-heading" style={{fontSize:36,letterSpacing:4,color:B.white}}>
            SHARPMAN <span className="sharp-accent sharp-glow-txt">⚡</span> CTA SYSTEM
          </h1>
        </div>
        <p className="sharp-mono" style={{fontSize:9,letterSpacing:4,color:B.muted}}>
          DESIGN · CODE · ELEVATE · ALL VARIANTS
        </p>

        {/* Website type switcher */}
        <div style={{display:"flex",gap:2,justifyContent:"center",marginTop:28,flexWrap:"wrap"}}>
          {sites.map(s=>(
            <button key={s} onClick={()=>setSite(s)} style={{
              padding:"8px 18px",background:s===site?"rgba(200,255,0,0.12)":B.surface,
              border:`1px solid ${s===site?B.accent:B.border}`,
              color:s===site?B.accent:B.muted,
              fontFamily:"'IBM Plex Mono',monospace",fontSize:9,letterSpacing:2,
              cursor:"pointer",textTransform:"uppercase",transition:"all .2s",
            }}>{s}</button>
          ))}
        </div>
      </div>

      {/* Grid of variants */}
      <div style={{display:"flex",flexDirection:"column",gap:32,maxWidth:860,margin:"0 auto"}}>

        <Section label="01 — HERO">
          <HeroCTA websiteType={site} ctaUrl="#contact" secondaryUrl="#works"/>
        </Section>

        <Section label="02 — BANNER">
          <BannerCTA websiteType={site} ctaUrl="#contact" secondaryUrl="#works"/>
        </Section>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,flexWrap:"wrap"}}>
          <Section label="03 — CARD">
            <CardCTA websiteType={site} ctaUrl="#contact"/>
          </Section>
          <Section label="04 — TERMINAL">
            <TerminalCTA websiteType={site} ctaUrl="#contact"/>
          </Section>
        </div>

        <Section label="05 — MINIMAL (Nav Bar CTA)">
          <MinimalCTA websiteType={site} ctaUrl="#contact"/>
        </Section>

        <Section label="06 — NEWSLETTER">
          <NewsletterCTA websiteType={site}/>
        </Section>

        <Section label="07 — PROJECT SHOWCASE">
          <ProjectCTA ctaUrl="https://netlify.app" secondaryUrl="https://github.com"/>
        </Section>

        <Section label="08 — FLOATING (fixed bottom-right — appears after 3s)">
          <div style={{background:B.surface,border:`1px solid ${B.border}`,padding:20,position:"relative",minHeight:80}}>
            <p className="sharp-mono" style={{fontSize:10,color:B.muted,letterSpacing:2}}>
              👉 The floating CTA button is fixed to the bottom-right of the screen. It auto-opens after 3 seconds and can be dismissed. Check the bottom-right corner →
            </p>
          </div>
          <FloatingCTA websiteType={site} ctaUrl="#contact"/>
        </Section>

      </div>

      <div style={{textAlign:"center",marginTop:64,paddingTop:32,borderTop:`1px solid ${B.border}`}}>
        <div className="sharp-heading" style={{fontSize:18,letterSpacing:4,color:B.accent}}>SHARPMAN ⚡</div>
        <div className="sharp-mono" style={{fontSize:9,color:B.muted,letterSpacing:2,marginTop:6}}>
          © 2026 OYENUGA JOSHUA · DESIGN. CODE. ELEVATE.
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <div style={{
        fontFamily:"'IBM Plex Mono',monospace",fontSize:9,
        letterSpacing:4,color:"#2a3a00",textTransform:"uppercase",
        marginBottom:12,paddingBottom:8,borderBottom:"1px solid #0d1208",
      }}>{label}</div>
      {children}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ══════════════════════════════════════════════════════════════════════════════
export default function SharpmanCTA({
  variant     = "showcase",
  websiteType = "portfolio",
  ctaUrl      = "#",
  secondaryUrl= "#",
}) {
  const map = {
    hero:       <HeroCTA       websiteType={websiteType} ctaUrl={ctaUrl} secondaryUrl={secondaryUrl}/>,
    banner:     <BannerCTA     websiteType={websiteType} ctaUrl={ctaUrl} secondaryUrl={secondaryUrl}/>,
    card:       <CardCTA       websiteType={websiteType} ctaUrl={ctaUrl}/>,
    minimal:    <MinimalCTA    websiteType={websiteType} ctaUrl={ctaUrl}/>,
    terminal:   <TerminalCTA   websiteType={websiteType} ctaUrl={ctaUrl}/>,
    floating:   <FloatingCTA   websiteType={websiteType} ctaUrl={ctaUrl}/>,
    newsletter: <NewsletterCTA websiteType={websiteType}/>,
    project:    <ProjectCTA    ctaUrl={ctaUrl} secondaryUrl={secondaryUrl}/>,
    showcase:   <ShowcaseAll/>,
  };
  return (
    <>
      <style>{css}</style>
      <div className="sharp-root">{map[variant] || map.showcase}</div>
    </>
  );
}
