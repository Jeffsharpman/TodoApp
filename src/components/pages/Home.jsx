import { useState, useEffect } from "react";
import Nav from "../novatask/Nav";
import Main from "../novatask/Main";
import Footer from "../novatask/Footer";
import AboutDeveloper from "../seo/AboutDeveloper";
import LoadingScreen from "../UI/LoadingScreen";
import Particles from "../UI/Particles";
import Marquee from "../UI/Marquee";
import Contact from "../UI/Contact";
import { PageContext } from "../lib/PageContext";
import { useLocalStorage } from "../lib/useLocalStorage";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [cat, setCat] = useState("Work");
  const [prio, setPrio] = useState("High");
  const [filter, setFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortFilter, setSortFilter] = useState("Newest first");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useLocalStorage("todos_main", []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

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
      <LoadingScreen done={!loading} />
      <div className="relative">
        <Particles />
        <Nav />
        <Main />
        <Marquee />
        <div className="max-w-6xl mx-auto px-4 mt-6 mb-6">
          <AboutDeveloper />
        </div>
        <Contact />
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <Footer />
        </div>
      </div>
    </PageContext>
  );
};

export default Home;
