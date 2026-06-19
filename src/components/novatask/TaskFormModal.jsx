import React, { useRef, useContext } from "react";
import { PageContext } from "../lib/PageContext";
import { Plus } from "lucide-react";

const TaskFormModal = () => {
  const {
    input,
    setInput,
    todos,
    setTodos,
    cat,
    setCat,
    prio,
    setPrio,
    getCategoryColor,
    getPriorityColor,
    category,
    priority,
    setIsModalOpen,
  } = useContext(PageContext);
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const id = todos.length + 1;
  const handleTask = () => {
    if (input.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: id,
          text: input,
          cat: cat,
          prio: prio,
          done: false,
          createdAt: Date.now(),
        },
      ]);
      setInput("");
      setCat("Work");
      setPrio("High");
      setIsModalOpen(false);
    } else return;
  };

  return (
    <div>
      {/* TaskInput — Compact Modal Friendly Variation */}
      <section id="input">
        <div className="w-full bg-transparent">
          <div className="space-y-5">
            {/* Main Input & Action Row */}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="What needs to get done?"
                className="task-input flex-1"
              />
              <button
                onClick={() => {
                  focusInput();
                  handleTask();
                }}
                className="add-btn"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span className="hidden sm:inline">ADD TASK</span>
              </button>
            </div>

            {/* Selection Configuration Grid */}
            <div className="space-y-4 pt-1">
              {/* Category Selector Block */}
              <div>
                <p className="text-[10px] font-mono text-muted mb-2 tracking-widest">
                  CATEGORY
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={`tag-pill px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        c === cat
                          ? "border-primary bg-primary/10"
                          : "border-[var(--hover-bdr)] bg-card hover:border-[var(--hover-bdr)]"
                      }`}
                      style={{ color: getCategoryColor(c) }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority Selector Block */}
              <div>
                <p className="text-[10px] font-mono text-muted mb-2 tracking-widest">
                  PRIORITY
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {priority.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPrio(p)}
                      className={`tag-pill px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        p === prio
                          ? "border-primary bg-primary/10"
                          : "border-[var(--hover-bdr)] bg-card hover:border-[var(--hover-bdr)]"
                      }`}
                      style={{ color: getPriorityColor(p) }}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskFormModal;
