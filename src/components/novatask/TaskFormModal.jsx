import React, { useRef, useContext } from "react";
import { Menu, Plus } from "lucide-react";
import { PageContext } from "../context/PageContext";

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
      {/* 02 — TaskInput */}
      <section id="input">
        {/* <p className="comp-label">02 — TASK INPUT</p> */}
        <div className="showcase-card">
          <div className="p-8">
            <div className="flex gap-3">
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
                ADD TASK
              </button>
            </div>

            <div className="mt-8 flex gap-12">
              <div>
                <p className="text-xs font-mono text-[#888880] mb-3 tracking-widest">
                  CATEGORY
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.map((c) => (
                    <button
                      key={c}
                      className={`tag-pill ${c === cat ? "active" : ""}`}
                      style={{ color: getCategoryColor(c) }}
                      onClick={() => setCat(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-[#888880] mb-3 tracking-widest">
                  PRIORITY
                </p>
                <div className="flex gap-2">
                  {priority.map((p) => (
                    <button
                      key={p}
                      className={`tag-pill ${p === prio ? "active" : ""}`}
                      style={{ color: getPriorityColor(p) }}
                      onClick={() => setPrio(p)}
                    >
                      {p}
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
