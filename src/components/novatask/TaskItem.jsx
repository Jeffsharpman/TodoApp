import React, { useContext, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageContext } from "../lib/PageContext";
import EmptyState from "./EmptyState";
import { Edit, Trash2 } from "lucide-react";
import Confirmation from "./Confirmation";
import Modal from "./Modal";
import { staggerContainer, taskItemVariant } from "../lib/animations";

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
    showDeleteModal,
    setShowDeleteModal,
    todoToDelete,
    setTodoToDelete,
  } = useContext(PageContext);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const getFilteredTodos = () => {
    let filtered = [...todos];

    if (categoryFilter !== "All") {
      filtered = filtered.filter((todo) => todo.cat === categoryFilter);
    }

    if (priorityFilter !== "All") {
      filtered = filtered.filter(
        (todo) => todo.prio?.toLowerCase() === priorityFilter.toLowerCase(),
      );
    }

    switch (filter) {
      case "Active":
        filtered = filtered.filter((todo) => !todo.done);
        break;
      case "Done":
        filtered = filtered.filter((todo) => todo.done);
        break;
      default:
        break;
    }

    filtered = filtered.sort((a, b) => {
      if (a.done !== b.done) {
        return a.done ? 1 : -1;
      }

      if (sortFilter === "Newest first") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortFilter === "By priority") {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        const priorityDiff =
          (priorityOrder[b.prio?.toLowerCase()] || 0) -
          (priorityOrder[a.prio?.toLowerCase()] || 0);

        if (priorityDiff !== 0) return priorityDiff;
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

    return filtered;
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const handleDeleteClick = (todo) => {
    setTodoToDelete(todo);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
    }
    setShowDeleteModal(false);
    setTodoToDelete(null);
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

  const filteredTodos = getFilteredTodos();

  return (
    <div>
      <section id="tasklist">
        <div className="showcase-card p-8 space-y-3">
          {todos.length === 0 ? (
            <EmptyState state="No Task" />
          ) : filteredTodos.length === 0 ? (
            <EmptyState state="No Result" />
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredTodos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    variants={taskItemVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="task-row group"
                  >
                    {/* Checkbox */}
                      <div
                        className={`cb mt-0.5 cursor-pointer transition-all flex items-center justify-center w-6 h-6 rounded-lg border-2 text-lg font-bold flex-shrink-0 ${
                          todo.done
                            ? "text-black"
                            : "border-[var(--line)] group-hover:border-[var(--inksoft)]"
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
                              className="bg-transparent border-b border-primary outline-none w-full text-[15px] py-1 font-medium text-ink"
                              style={{ fontFamily: "'DM Mono', monospace" }}
                            />
                          ) : (
                            <p
                              className={`task-text text-[15px] leading-tight pr-4 cursor-pointer ${
                                todo.done
                                  ? "line-through text-muted"
                                  : "text-ink"
                              }`}
                              onClick={() => toggleTodo(todo.id)}
                            >
                              {todo.text}
                            </p>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="icon-btn hover:text-primary p-2 hover:bg-[var(--hover-row)] rounded-xl transition-all"
                            onClick={() => editTodo(todo.id)}
                          >
                            <Edit size={18} />
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="icon-btn text-rose p-2 hover:bg-[var(--hover-row)] rounded-xl transition-all"
                            onClick={() => handleDeleteClick(todo)}
                          >
                            <Trash2 size={18} />
                          </motion.button>
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
                            {todo.prio?.toUpperCase()}
                          </span>
                        </div>

                        <span className="text-xs text-muted font-mono whitespace-nowrap">
                          {formatRelativeTime(todo.createdAt)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setTodoToDelete(null);
        }}
        title="Delete Todo"
      >
        <Confirmation
          message={`Are you sure you want to delete "${todoToDelete?.text || "this task"}"? This action cannot be undone.`}
          confirmText="Yes, Delete"
          confirmVariant="danger"
          onConfirm={handleConfirmDelete}
          onCancel={() => {
            setShowDeleteModal(false);
            setTodoToDelete(null);
          }}
        />
      </Modal>
    </div>
  );
};

export default TaskItem;
