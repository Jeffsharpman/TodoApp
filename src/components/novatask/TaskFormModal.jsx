import React, { useRef, useContext } from "react";
import { PageContext } from "../context/PageContext";
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
                className="task-input flex-1 bg-[#161616] border border-[#2C2C2C] focus:border-[#C8F135] text-white rounded-xl px-4 py-3 text-sm placeholder:text-[#555] font-medium outline-none transition-colors"
              />
              <button
                onClick={() => {
                  focusInput();
                  handleTask();
                }}
                className="add-btn bg-[#C8F135] hover:bg-[#d4f54a] text-black font-semibold px-4 md:px-5 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 text-xs tracking-wider"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span className="hidden sm:inline">ADD TASK</span>
              </button>
            </div>

            {/* Selection Configuration Grid */}
            <div className="space-y-4 pt-1">
              {/* Category Selector Block */}
              <div>
                <p className="text-[10px] font-mono text-[#666] mb-2 tracking-widest">
                  CATEGORY
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={`tag-pill px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        c === cat
                          ? "border-[#C8F135] bg-[#C8F135]/10"
                          : "border-[#222] bg-[#111] hover:border-[#444]"
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
                <p className="text-[10px] font-mono text-[#666] mb-2 tracking-widest">
                  PRIORITY
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {priority.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPrio(p)}
                      className={`tag-pill px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        p === prio
                          ? "border-[#C8F135] bg-[#C8F135]/10"
                          : "border-[#222] bg-[#111] hover:border-[#444]"
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
