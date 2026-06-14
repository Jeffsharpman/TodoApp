import React, { useContext, useRef, useState } from "react";
import { PageContext } from "../context/PageContext";
import EmptyState from "./EmptyState";
import { input } from "framer-motion/m";

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
            <EmptyState />
          ) : (
            getFilteredTodos().map((todo) => (
              <div key={todo.id} className="task-row">
                {/* Checkbox */}
                <div
                  className={`cb cursor-pointer transition-all flex items-center justify-center text-sm font-bold ${
                    todo.done
                      ? `bg-[${getPriorityColor(todo.prio)}] border-[${getPriorityColor(todo.prio)}] text-black`
                      : "border-gray-400 hover:border-white"
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                  style={
                    todo.done
                      ? { backgroundColor: getPriorityColor(todo.prio) }
                      : {}
                  }
                >
                  {todo.done && "✓"}
                </div>

                {/* Priority Dot */}
                <div
                  className="p-dot"
                  style={{ background: getPriorityColor(todo.prio) }}
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
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
                          style={{
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            width: "100%",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "13px",
                            borderBottom: `1px solid ${getPriorityColor(todo.prio)}`,
                            paddingBottom: "2px",
                            color: "inherit",
                          }}
                        />
                      ) : (
                        <p
                          className={`task-text ${todo.done ? "line-through text-gray-400" : ""}`}
                          onClick={() => toggleTodo(todo.id)}
                        >
                          {todo.text}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tags + Date Row - Updated */}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex gap-3">
                      <span
                        className="tag-pill"
                        style={{ color: getCategoryColor(todo.cat) }}
                      >
                        {todo.cat}
                      </span>
                      <span
                        className="tag-pill"
                        style={{ color: getPriorityColor(todo.prio) }}
                      >
                        {todo.prio.toUpperCase()}
                      </span>
                    </div>

                    <span className="text-xs text-gray-400 font-mono whitespace-nowrap">
                      {formatRelativeTime(todo.createdAt)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-1">
                  <button
                    className="icon-btn"
                    onClick={() => editTodo(todo.id)}
                  >
                    ✎
                  </button>
                  <button
                    className="icon-btn danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    🗑
                  </button>
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
