import React, { useState, useEffect } from "react";
import Header from "../novatask/Header";
import Main from "../novatask/Main";
// import { input } from "framer-motion/client";
import EmptyState from "../novatask/EmptyState";
import Footer from "../novatask/Footer";
import { PageContext } from "../lib/PageContext";
import TaskFormModal from "../novatask/TaskFormModal";
import Modal from "../novatask/Modal";

export function useLocalStorage(key, initialValue) {
  // Initialize state function reads from localStorage on mount
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Watch state alterations to flash updates straight to storage disk
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

const Home = () => {
  const [input, setInput] = useState("");
  const [cat, setCat] = useState("Work");
  const [prio, setPrio] = useState("High");
  const [filter, setFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortFilter, setSortFilter] = useState("Newest first");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "Finish SwiftGo customer UI screens",
  //     cat: "Work",
  //     prio: "high",
  //     done: false,
  //     createdAt: new Date(Date.now() - 86400000 * 2), // 2 days ago
  //   },
  //   {
  //     id: 2,
  //     text: "Practice React hooks — useEffect & useContext",
  //     cat: "Learning",
  //     prio: "high",
  //     done: false,
  //     createdAt: new Date(Date.now() - 86400000 * 1), // 1 day ago
  //   },
  //   {
  //     id: 3,
  //     text: "30 min morning run",
  //     cat: "Health",
  //     prio: "medium",
  //     done: true,
  //     createdAt: new Date(Date.now() - 86400000 * 0.5), // 12 hours ago
  //   },
  //   {
  //     id: 4,
  //     text: "Review Node.js + Express tutorial",
  //     cat: "Learning",
  //     prio: "medium",
  //     done: false,
  //     createdAt: new Date(Date.now() - 3600000 * 6), // 6 hours ago
  //   },
  //   {
  //     id: 5,
  //     text: "Buy groceries — rice, palm oil, tomatoes",
  //     cat: "Shopping",
  //     prio: "low",
  //     done: false,
  //     createdAt: new Date(Date.now() - 3600000 * 2), // 2 hours ago
  //   },
  //   {
  //     id: 6,
  //     text: "Update portfolio with new projects",
  //     cat: "Personal",
  //     prio: "medium",
  //     done: false,
  //     createdAt: new Date(), // now
  //   },
  // ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useLocalStorage("todos_main", []);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.done).length;
  const activeTodos = totalTodos - completedTodos;
  const percentCompleted =
    totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  const category = [
    "Work",
    "Personal",
    "Health",
    "Learning",
    "Shopping",
    "Others",
  ];
  const priority = ["High", "Medium", "Low"];

  const getPriorityColor = (prio) => {
    switch (prio?.toLowerCase()) {
      case "high":
        return "#FF4545";
      case "medium":
        return "#FFAA00"; // or whatever color you want
      case "low":
        return "#4CAF50";
      default:
        return "#888";
    }
  };

  const getCategoryColor = (cat) => {
    switch (cat?.toLowerCase()) {
      case "work":
        return "#5B9CF6";
      case "personal":
        return "#9C6BFF";
      case "health":
        return "#4CAF50";
      case "learning":
        return "#FFAA00";
      case "shopping":
        return "#FF4545";
      case "others":
        return "#4CAF50";
      default:
        return "#666";
    }
  };

  return (
    <PageContext
      value={{
        input,
        setInput,
        todos,
        setTodos,
        cat,
        setCat,
        prio,
        setPrio,
        filter,
        setFilter,
        category,
        priority,
        getPriorityColor,
        getCategoryColor,
        categoryFilter,
        setCategoryFilter,
        priorityFilter,
        setPriorityFilter,
        sortFilter,
        setSortFilter,
        totalTodos,
        completedTodos,
        activeTodos,
        percentCompleted,
        isModalOpen,
        setIsModalOpen,
        showDeleteModal,
        setShowDeleteModal,
        todoToDelete,
        setTodoToDelete,
      }}
    >
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </PageContext>
  );
};

export default Home;
