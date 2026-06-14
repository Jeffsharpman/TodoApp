import React, { useContext, useRef, useState } from "react";
import { PageContext } from "../context/PageContext";
import EmptyState from "./EmptyState";
import { Edit, Trash2 } from "lucide-react";
// import { input } from "framer-motion/m";

const formatRelativeTime = (createdAt) => {
  if (!createdAt) return "—";

  const date = createdAt instanceof Date ? createdAt : new Date(createdAt);

  if (isNaN(date.getTime())) return "—";

  const now = Date.now();
  const diff = Math.floor((now - date.getTime()) / 1000);

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

const TaskItem = () => {
  const {
    todos,
    setTodos,
    filter,
    getCategoryColor,
    getPriorityColor,
    categoryFilter,
    priorityFilter,
    sortFilter,
  } = useContext(PageContext);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  const getFilteredTodos = () => {
    let filtered = [...todos]; // important: work on a copy

    // Category filter
    if (categoryFilter !== "All") {
      filtered = filtered.filter((todo) => todo.cat === categoryFilter);
    }

    // Priority filter
    if (priorityFilter !== "All") {
      filtered = filtered.filter(
        (todo) => todo.prio.toLowerCase() === priorityFilter.toLowerCase(),
      );
    }

    // Status filter (Active / Done / All)
    switch (filter) {
      case "Active":
        filtered = filtered.filter((todo) => !todo.done);
        break;
      case "Done":
        filtered = filtered.filter((todo) => todo.done);
        break;
      // default: show all (no action needed)
    }

    // Sorting
    if (sortFilter !== "All") {
      filtered = filtered.sort((a, b) => {
        if (sortFilter === "Newest first") {
          return b.createdAt - a.createdAt;
        } else if (sortFilter === "Oldest first") {
          return a.createdAt - b.createdAt;
        } else if (sortFilter === "By priority") {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return (
            (priorityOrder[b.prio?.toLowerCase()] || 0) -
            (priorityOrder[a.prio?.toLowerCase()] || 0)
          );
        }
        return 0;
      });
    }

    return filtered;
  };

  const toggleTodo = (id) => {
    // Implement the logic to toggle the 'done' status of the todo item
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((t) => t.id === id);
    if (todoToEdit) {
      setEditId(id);
      setEditText(todoToEdit.text);
    }
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo,
      ),
    );
    setEditId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      {/* 04 — TaskList + 05 — TaskCard */}
      <section id="tasklist">
        {/* <p className="comp-label">04/05 — TASK LIST &amp; TASK CARD</p> */}
        <div className="showcase-card p-8 space-y-3">
          {todos.length === 0 ? (
            <EmptyState state="No Task" />
          ) : getFilteredTodos().length === 0 ? (
            <EmptyState state="No Result" />
          ) : (
            //   getFilteredTodos().every((todo) => todo.done) ? (
            // <EmptyState state="All Caught Up" />
            //   ) :
            getFilteredTodos().map((todo) => (
              <div
                key={todo.id}
                className="task-row group bg-[#0E0E0E] border border-[#2C2C2C] hover:border-[#444] rounded-2xl px-6 py-5 transition-all duration-200 flex items-start gap-5"
              >
                {/* Checkbox */}
                <div
                  className={`cb mt-0.5 cursor-pointer transition-all flex items-center justify-center w-6 h-6 rounded-lg border-2 text-lg font-bold flex-shrink-0 ${
                    todo.done
                      ? "text-black"
                      : "border-[#555] group-hover:border-[#777]"
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                  style={
                    todo.done
                      ? {
                          backgroundColor: getPriorityColor(todo.prio),
                          borderColor: getPriorityColor(todo.prio),
                        }
                      : {}
                  }
                >
                  {todo.done && "✓"}
                </div>

                {/* Priority Dot */}
                <div
                  className="p-dot mt-2.5 w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: getPriorityColor(todo.prio) }}
                />

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {editId === todo.id ? (
                        <input
                          autoFocus
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveEdit(todo.id);
                            if (e.key === "Escape") cancelEdit();
                          }}
                          onBlur={() => saveEdit(todo.id)}
                          className="bg-transparent border-b border-[#C8F135] focus:border-[#C8F135] outline-none w-full text-[15px] py-1 font-medium"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        />
                      ) : (
                        <p
                          className={`task-text text-[15px] leading-tight pr-4 ${todo.done ? "line-through text-gray-400" : "text-white"}`}
                          onClick={() => toggleTodo(todo.id)}
                        >
                          {todo.text}
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <button
                        className="icon-btn hover:text-[#C8F135] p-2 hover:bg-[#1F1F1F] rounded-xl transition-all"
                        onClick={() => editTodo(todo.id)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="icon-btn text-red-400 hover:text-red-500 p-2 hover:bg-[#1F1F1F] rounded-xl transition-all"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Tags + Date */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span
                        className="tag-pill text-xs px-3 py-1 rounded-full border"
                        style={{
                          color: getCategoryColor(todo.cat),
                          borderColor: `${getCategoryColor(todo.cat)}30`,
                        }}
                      >
                        {todo.cat}
                      </span>
                      <span
                        className="tag-pill text-xs px-3 py-1 rounded-full border"
                        style={{
                          color: getPriorityColor(todo.prio),
                          borderColor: `${getPriorityColor(todo.prio)}30`,
                        }}
                      >
                        {todo.prio.toUpperCase()}
                      </span>
                    </div>

                    <span className="text-xs text-gray-400 font-mono whitespace-nowrap">
                      {formatRelativeTime(todo.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default TaskItem;
