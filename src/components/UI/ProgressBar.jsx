import { motion } from "framer-motion";

const ProgressBar = ({
  percent = 0,
  color = "var(--primary)",
  height = "h-2.5",
  animated = true,
  className = "",
}) => (
  <div className={`${height} bg-line rounded-full overflow-hidden ${className}`}>
    {animated ? (
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      />
    ) : (
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${percent}%`, background: color }}
      />
    )}
  </div>
);

export default ProgressBar;
