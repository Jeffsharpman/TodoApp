import { useState, useEffect, useRef } from "react";

/* ─── FONTS ──────────────────────────────────────────────────── */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500;600&display=swap');`;

/* ─── TOKENS ─────────────────────────────────────────────────── */
const T = {
  /* backgrounds */
  bg:        "#0E0E0E",
  surface:   "#181818",
  raised:    "#212121",
  line:      "#2C2C2C",
  /* text */
  hi:        "#F2F0EB",
  mid:       "#888880",
  lo:        "#444440",
  /* accents */
  lime:      "#C8F135",      /* PRIMARY — electric lime */
  limeDim:   "#C8F13520",
  limeBorder:"#C8F13540",
  red:       "#FF4545",
  redDim:    "#FF454520",
  amber:     "#FFA827",
  amberDim:  "#FFA82720",
  blue:      "#5B9CF6",
  blueDim:   "#5B9CF620",
};

/* ─── GLOBAL CSS ─────────────────────────────────────────────── */
const CSS = `
${FONTS}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { background: ${T.bg}; color: ${T.hi}; font-family: 'DM Sans', sans-serif; min-height: 100vh; }
::selection { background: ${T.lime}; color: #000; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: ${T.line}; border-radius: 2px; }

@keyframes in-up   { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
@keyframes in-left { from { opacity:0; transform:translateX(-8px); } to { opacity:1; transform:translateX(0); } }
@keyframes strike  { from { width:0; } to { width:100%; } }
@keyframes pop     { 0%,100%{transform:scale(1)} 50%{transform:scale(1.18)} }
@keyframes shake   { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
@keyframes glow-in { from{box-shadow:0 0 0 0 ${T.lime}60} to{box-shadow:0 0 24px 4px ${T.lime}22} }

.anim-up   { animation: in-up   0.32s cubic-bezier(0.16,1,0.3,1) both; }
.anim-left { animation: in-left 0.28s cubic-bezier(0.16,1,0.3,1) both; }
.pop       { animation: pop 0.25s ease; }
.shake     { animation: shake 0.28s ease; }

/* task row */
.task-row {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${T.line};
  background: ${T.surface};
  transition: border-color 0.18s, background 0.18s, transform 0.18s, box-shadow 0.18s;
  position: relative; overflow: hidden;
  cursor: default;
}
.task-row::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
  border-radius:3px 0 0 3px;
  background: var(--accent, ${T.lime});
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.22s cubic-bezier(0.16,1,0.3,1);
}
.task-row:hover { border-color: ${T.raised}; background: ${T.raised}; transform: translateX(2px); }
.task-row:hover::before { transform: scaleY(1); }
.task-row.done { opacity: 0.44; }
.task-row.done:hover { opacity: 0.55; }

/* checkbox */
.cb {
  width: 20px; height: 20px; border-radius: 6px;
  border: 2px solid ${T.lo};
  background: transparent;
  cursor: pointer; flex-shrink: 0; margin-top: 1px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.18s, background 0.18s, transform 0.18s;
  position: relative;
}
.cb:hover { border-color: ${T.mid}; transform: scale(1.08); }
.cb.checked { border-color: var(--accent, ${T.lime}); background: var(--accent, ${T.lime}); }

/* input */
.task-input {
  background: ${T.raised}; border: 1px solid ${T.line};
  border-radius: 10px; padding: 12px 16px;
  font-family: 'DM Mono', monospace; font-size: 14px; color: ${T.hi};
  width: 100%; outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.task-input:focus { border-color: ${T.lime}; box-shadow: 0 0 0 3px ${T.limeDim}; }
.task-input::placeholder { color: ${T.lo}; font-style: italic; }

/* tag pill */
.tag-pill {
  font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
  padding: 2px 8px; border-radius: 20px; letter-spacing: 0.06em;
  border: 1px solid; white-space: nowrap;
}

/* filter tab */
.f-tab {
  font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
  padding: 6px 14px; border-radius: 8px; cursor: pointer;
  border: 1px solid transparent;
  color: ${T.mid}; background: transparent;
  transition: all 0.18s; letter-spacing: 0.04em;
}
.f-tab:hover { color: ${T.hi}; border-color: ${T.line}; }
.f-tab.active { color: #000; background: ${T.lime}; border-color: ${T.lime}; }

/* priority dot */
.p-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; margin-top:6px; }

/* add button */
.add-btn {
  background: ${T.lime}; color: #000;
  border: none; border-radius: 10px;
  padding: 12px 20px; font-family:'DM Sans',sans-serif;
  font-weight: 700; font-size: 14px; cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  white-space: nowrap; display: flex; align-items: center; gap: 6px;
}
.add-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px ${T.lime}40; }
.add-btn:active { transform: translateY(0); }

/* icon btn */
.icon-btn {
  width: 28px; height: 28px; border-radius: 7px;
  border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
  background: transparent; color: ${T.lo};
  transition: background 0.15s, color 0.15s;
}
.icon-btn:hover { background: ${T.raised}; color: ${T.mid}; }
.icon-btn.danger:hover { background: ${T.redDim}; color: ${T.red}; }

/* progress bar */
.prog-track { height: 3px; background: ${T.line}; border-radius: 2px; overflow: hidden; }
.prog-fill  { height: 100%; background: ${T.lime}; border-radius: 2px; transition: width 0.5s cubic-bezier(0.16,1,0.3,1); }

/* select */
.sel {
  background: ${T.raised}; border: 1px solid ${T.line};
  color: ${T.mid}; border-radius: 8px; padding: 8px 10px;
  font-family: 'DM Mono', monospace; font-size: 11px;
  cursor: pointer; outline: none;
  transition: border-color 0.18s;
}
.sel:focus { border-color: ${T.lime}; color: ${T.hi}; }

/* empty state */
.empty { text-align:center; padding: 64px 20px; }

/* strike through */
.strike-text { position:relative; }
.strike-text::after {
  content:''; position:absolute; top:50%; left:0; height:1.5px;
  background: ${T.mid}; border-radius:1px;
  animation: strike 0.25s ease forwards;
}
`;

/* ─── CONSTANTS ──────────────────────────────────────────────── */
const CATS = ["Work","Personal","Health","Learning","Shopping","Other"];
const PRIOS = ["low","medium","high"];
const PRIO_COLOR = { low: T.blue, medium: T.amber, high: T.red };
const PRIO_DIM   = { low: T.blueDim, medium: T.amberDim, high: T.redDim };
const CAT_ACCENT = {
  Work: T.blue, Personal: T.lime, Health: "#FF6B6B",
  Learning: T.amber, Shopping: "#A78BFA", Other: T.mid,
};

/* ─── ICONS ──────────────────────────────────────────────────── */
const Ic = ({ d, size=14, color="currentColor", sw=1.8, fill="none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);
const ICONS = {
  plus:    "M12 5v14 M5 12h14",
  trash:   "M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
  check:   "M20 6L9 17l-5-5",
  edit:    "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
  flag:    "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7",
  clear:   "M18 6L6 18 M6 6l12 12",
  sort:    "M3 6h18 M7 12h10 M11 18h4",
  moon:    "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  sun:     "M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6z",
  drag:    "M9 5h.01 M9 12h.01 M9 19h.01 M15 5h.01 M15 12h.01 M15 19h.01",
  tag:     "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z M7 7h.01",
};

/* ─── STORAGE ────────────────────────────────────────────────── */
const LS_KEY = "pf_todos_v2";
const load  = () => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; } };
const save  = d => localStorage.setItem(LS_KEY, JSON.stringify(d));

/* ─── SEED DATA ──────────────────────────────────────────────── */
const SEED = [
  { id:1, text:"Finish SwiftGo customer UI screens", cat:"Work",     prio:"high",   done:false, created: Date.now()-86400000*2 },
  { id:2, text:"Practice React hooks — useEffect & useContext", cat:"Learning", prio:"high", done:false, created: Date.now()-86400000 },
  { id:3, text:"30 min morning run", cat:"Health",   prio:"medium", done:true,  created: Date.now()-86400000*3 },
  { id:4, text:"Review Node.js + Express tutorial", cat:"Learning", prio:"medium", done:false, created: Date.now()-3600000*5 },
  { id:5, text:"Buy groceries — rice, palm oil, tomatoes", cat:"Shopping", prio:"low", done:false, created: Date.now()-3600000*2 },
  { id:6, text:"Update portfolio with new projects",  cat:"Personal",  prio:"medium", done:false, created: Date.now()-3600000 },
];

/* ─── MAIN COMPONENT ─────────────────────────────────────────── */
export default function TodoApp() {
  const [todos,    setTodos]    = useState(() => { const d = load(); return d.length ? d : SEED; });
  const [input,    setInput]    = useState("");
  const [cat,      setCat]      = useState("Work");
  const [prio,     setPrio]     = useState("medium");
  const [filter,   setFilter]   = useState("all");
  const [catFilter,setCatFilter]= useState("all");
  const [sortBy,   setSortBy]   = useState("created");
  const [editId,   setEditId]   = useState(null);
  const [editText, setEditText] = useState("");
  const [shakeAdd, setShakeAdd] = useState(false);
  const inputRef = useRef(null);

  /* persist */
  useEffect(() => save(todos), [todos]);

  /* keyboard shortcut: Ctrl+Enter to add */
  useEffect(() => {
    const h = e => { if((e.ctrlKey||e.metaKey)&&e.key==="Enter") inputRef.current?.focus(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  /* ── derived ── */
  const total     = todos.length;
  const doneCount = todos.filter(t => t.done).length;
  const progress  = total ? Math.round((doneCount/total)*100) : 0;

  let visible = todos.filter(t => {
    if (filter === "active" && t.done)  return false;
    if (filter === "done"   && !t.done) return false;
    if (catFilter !== "all" && t.cat !== catFilter) return false;
    return true;
  });
  visible = [...visible].sort((a,b) => {
    if (sortBy === "prio")    return PRIOS.indexOf(b.prio) - PRIOS.indexOf(a.prio);
    if (sortBy === "alpha")   return a.text.localeCompare(b.text);
    if (sortBy === "cat")     return a.cat.localeCompare(b.cat);
    return b.created - a.created; // newest first
  });

  /* ── actions ── */
  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) { setShakeAdd(true); setTimeout(()=>setShakeAdd(false),300); return; }
    setTodos(prev => [{
      id: Date.now(), text: trimmed, cat, prio, done: false, created: Date.now()
    }, ...prev]);
    setInput("");
    inputRef.current?.focus();
  };

  const toggle = id => setTodos(t => t.map(x => x.id===id ? {...x,done:!x.done} : x));
  const remove = id => setTodos(t => t.filter(x => x.id!==id));
  const clearDone = () => setTodos(t => t.filter(x => !x.done));

  const saveEdit = id => {
    if (!editText.trim()) return;
    setTodos(t => t.map(x => x.id===id ? {...x, text:editText.trim()} : x));
    setEditId(null);
  };

  /* ─── RENDER ─────────────────────────────────────────────── */
  return (
    <>
      <style>{CSS}</style>
      <div style={{ minHeight:"100vh", background:T.bg, padding:"0 0 80px" }}>

        {/* ── HEADER ── */}
        <header style={{ borderBottom:`1px solid ${T.line}`, padding:"0 max(16px, calc(50% - 400px))" }}>
          <div style={{ maxWidth:800, margin:"0 auto", padding:"28px 0 22px", display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16 }}>
            <div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:T.lime, letterSpacing:"0.14em", fontWeight:500, marginBottom:6 }}>
                TASK MANAGER — v2.0
              </div>
              <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(44px,8vw,72px)", letterSpacing:"0.03em", lineHeight:0.9, color:T.hi }}>
                GET IT<br/>
                <span style={{ color:T.lime }}>DONE.</span>
              </h1>
            </div>

            {/* progress ring-ish */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, lineHeight:1, color:T.hi }}>
                {progress}<span style={{ fontSize:22, color:T.mid }}>%</span>
              </div>
              <div style={{ width:160 }}>
                <div className="prog-track">
                  <div className="prog-fill" style={{ width:`${progress}%` }}/>
                </div>
              </div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:T.mid }}>
                {doneCount} / {total} tasks complete
              </div>
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main style={{ maxWidth:800, margin:"0 auto", padding:"0 max(16px, calc(50% - 400px))" }}>

          {/* ── ADD TASK ── */}
          <div style={{ padding:"24px 0 20px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:10, flexWrap:"wrap" }}>
              <input
                ref={inputRef}
                className={`task-input${shakeAdd?" shake":""}`}
                style={{ flex:"1 1 280px", minWidth:0 }}
                placeholder="What needs to get done? (Ctrl+Enter to focus)"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if(e.key==="Enter") addTodo(); }}
              />
              <button className="add-btn" onClick={addTodo} style={{ flexShrink:0 }}>
                <Ic d={ICONS.plus} size={16} color="#000" sw={2.5}/>
                Add Task
              </button>
            </div>

            {/* meta row */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:T.lo, marginRight:4 }}>Category:</span>
              {CATS.map(c => (
                <button key={c} onClick={()=>setCat(c)} style={{
                  fontFamily:"'DM Mono',monospace", fontSize:11, padding:"5px 12px", borderRadius:20,
                  border:`1px solid ${cat===c?(CAT_ACCENT[c]||T.lime):T.line}`,
                  background: cat===c ? (CAT_ACCENT[c]||T.lime)+"22" : "transparent",
                  color: cat===c ? (CAT_ACCENT[c]||T.lime) : T.lo,
                  cursor:"pointer", transition:"all 0.16s",
                }}>{c}</button>
              ))}
              <div style={{ width:1, height:20, background:T.line, margin:"0 4px" }}/>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:T.lo, marginRight:4 }}>Priority:</span>
              {PRIOS.map(p => (
                <button key={p} onClick={()=>setPrio(p)} style={{
                  fontFamily:"'DM Mono',monospace", fontSize:11, padding:"5px 12px", borderRadius:20,
                  border:`1px solid ${prio===p?PRIO_COLOR[p]:T.line}`,
                  background: prio===p ? PRIO_DIM[p] : "transparent",
                  color: prio===p ? PRIO_COLOR[p] : T.lo,
                  cursor:"pointer", transition:"all 0.16s", textTransform:"capitalize",
                }}>{p}</button>
              ))}
            </div>
          </div>

          {/* ── FILTERS + SORT ── */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12, marginBottom:16, paddingBottom:16, borderBottom:`1px solid ${T.line}` }}>
            <div style={{ display:"flex", gap:4, flexWrap:"wrap" }}>
              {[["all","All"],["active","Active"],["done","Done"]].map(([v,l])=>(
                <button key={v} className={`f-tab${filter===v?" active":""}`} onClick={()=>setFilter(v)}>{l}</button>
              ))}
              <div style={{ width:1, height:28, background:T.line, margin:"0 4px", alignSelf:"center" }}/>
              <select className="sel" value={catFilter} onChange={e=>setCatFilter(e.target.value)}>
                <option value="all">All categories</option>
                {CATS.map(c=><option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div style={{ display:"flex", gap:8, alignItems:"center" }}>
              <select className="sel" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
                <option value="created">Newest first</option>
                <option value="prio">By priority</option>
                <option value="alpha">A → Z</option>
                <option value="cat">By category</option>
              </select>
              {doneCount > 0 && (
                <button onClick={clearDone} style={{ fontFamily:"'DM Mono',monospace", fontSize:11, padding:"6px 12px", borderRadius:8, border:`1px solid ${T.redDim}`, background:"transparent", color:T.red, cursor:"pointer", transition:"all 0.16s", whiteSpace:"nowrap" }}
                  onMouseEnter={e=>{ e.target.style.background=T.redDim; }}
                  onMouseLeave={e=>{ e.target.style.background="transparent"; }}>
                  Clear done ({doneCount})
                </button>
              )}
            </div>
          </div>

          {/* ── TASK LIST ── */}
          {visible.length === 0 ? (
            <div className="empty">
              <div style={{ fontSize:48, marginBottom:16 }}>{filter==="done"?"✅":"📋"}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:T.lo, letterSpacing:"0.06em" }}>
                {filter==="done" ? "Nothing completed yet" : filter==="active" ? "All caught up!" : "No tasks here"}
              </div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:T.lo, marginTop:8 }}>
                {filter==="active" ? "Add a task above to get started" : "Tasks you complete will appear here"}
              </div>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {visible.map((todo, i) => {
                const accent = CAT_ACCENT[todo.cat] || T.lime;
                const isEditing = editId === todo.id;
                return (
                  <div
                    key={todo.id}
                    className={`task-row anim-up${todo.done?" done":""}`}
                    style={{ "--accent": accent, animationDelay:`${i*0.04}s` }}
                  >
                    {/* Checkbox */}
                    <div
                      className={`cb${todo.done?" checked":""}`}
                      style={{ "--accent": PRIO_COLOR[todo.prio] }}
                      onClick={() => toggle(todo.id)}
                    >
                      {todo.done && <Ic d={ICONS.check} size={11} color="#000" sw={3}/>}
                    </div>

                    {/* Priority dot */}
                    <div className="p-dot" style={{ background: PRIO_COLOR[todo.prio] }}/>

                    {/* Text / Edit */}
                    <div style={{ flex:1, minWidth:0 }}>
                      {isEditing ? (
                        <input
                          autoFocus
                          value={editText}
                          onChange={e=>setEditText(e.target.value)}
                          onKeyDown={e=>{ if(e.key==="Enter") saveEdit(todo.id); if(e.key==="Escape") setEditId(null); }}
                          onBlur={()=>saveEdit(todo.id)}
                          style={{ background:"transparent", border:"none", outline:"none", width:"100%", fontFamily:"'DM Mono',monospace", fontSize:13, color:T.hi, borderBottom:`1px solid ${T.lime}`, paddingBottom:2 }}
                        />
                      ) : (
                        <div>
                          <div
                            className={todo.done?"strike-text":""}
                            style={{ fontFamily:"'DM Mono',monospace", fontSize:13, fontWeight:400, color:todo.done?T.mid:T.hi, lineHeight:1.5, wordBreak:"break-word" }}
                          >
                            {todo.text}
                          </div>
                          {/* tags */}
                          <div style={{ display:"flex", gap:6, marginTop:6, flexWrap:"wrap", alignItems:"center" }}>
                            <span className="tag-pill" style={{ color:accent, borderColor:accent+"44", background:accent+"12" }}>{todo.cat}</span>
                            <span className="tag-pill" style={{ color:PRIO_COLOR[todo.prio], borderColor:PRIO_COLOR[todo.prio]+"44", background:PRIO_COLOR[todo.prio]+"12", textTransform:"capitalize" }}>
                              {todo.prio}
                            </span>
                            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:T.lo }}>
                              {new Date(todo.created).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div style={{ display:"flex", gap:2, flexShrink:0, opacity:0, transition:"opacity 0.15s" }} className="task-actions">
                      <button className="icon-btn" title="Edit" onClick={()=>{ setEditId(todo.id); setEditText(todo.text); }}>
                        <Ic d={ICONS.edit} size={13}/>
                      </button>
                      <button className="icon-btn danger" title="Delete" onClick={()=>remove(todo.id)}>
                        <Ic d={ICONS.trash} size={13}/>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── FOOTER STATS ── */}
          {todos.length > 0 && (
            <div style={{ marginTop:40, paddingTop:20, borderTop:`1px solid ${T.line}`, display:"flex", gap:24, flexWrap:"wrap" }}>
              {[
                ["Total", total, T.hi],
                ["Active", total-doneCount, T.lime],
                ["Done",   doneCount, T.mid],
                ...CATS.filter(c=>todos.some(t=>t.cat===c)).map(c => [
                  c, todos.filter(t=>t.cat===c).length, CAT_ACCENT[c]||T.mid
                ]),
              ].map(([label, val, color]) => (
                <div key={label} style={{ display:"flex", flexDirection:"column", gap:3 }}>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color, lineHeight:1 }}>{val}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:T.lo, letterSpacing:"0.08em" }}>{label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          )}

          {/* ── BUILT WITH BADGE ── */}
          <div style={{ marginTop:32, display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ flex:1, height:1, background:T.line }}/>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:T.lo, letterSpacing:"0.1em", whiteSpace:"nowrap" }}>
              BUILT WITH REACT · localStorage · NO DEPENDENCIES
            </span>
            <div style={{ flex:1, height:1, background:T.line }}/>
          </div>
        </main>
      </div>

      {/* hover style — reveals action buttons */}
      <style>{`
        .task-row:hover .task-actions { opacity: 1 !important; }
        @media (max-width: 480px) { .task-actions { opacity: 1 !important; } }
      `}</style>
    </>
  );
}
