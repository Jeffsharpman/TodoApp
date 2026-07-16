import { motion } from "framer-motion";
import { ClipboardList, CheckCircle, Search } from "lucide-react";
import { fadeIn } from "../lib/animations";
import Card from "../UI/Card";

const EmptyState = ({ state = "No Task" }) => {
  const iconMap = {
    "No Task": <ClipboardList size={72} className="text-muted" strokeWidth={1.5} />,
    "All Caught Up": <CheckCircle size={72} className="text-primary" strokeWidth={1.5} />,
    "No Result": <Search size={72} className="text-muted" strokeWidth={1.5} />,
  };

  const textMap = {
    "No Task": { title: "No tasks yet", sub: "Add your first task above" },
    "All Caught Up": { title: "All caught up!", sub: "Great work" },
    "No Result": { title: "No results", sub: "Try different filters" },
  };

  const icon = iconMap[state] || iconMap["No Task"];
  const { title, sub } = textMap[state] || textMap["No Task"];
  const titleColor = state === "All Caught Up" ? "text-primary" : "text-ink";

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      id="empty"
    >
      <Card
        variant={state === "All Caught Up" ? "accent" : "surface"}
        padding="p-8 md:p-12"
        className={state === "All Caught Up" ? "!border-primary/20 !bg-primary/5 !py-16 !px-8 text-center" : ""}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          {icon}
        </motion.div>
        <p className={`text-2xl font-medium ${titleColor}`}>{title}</p>
        <p className="text-muted mt-3 text-lg">{sub}</p>
      </Card>
    </motion.section>
  );
};

export default EmptyState;
