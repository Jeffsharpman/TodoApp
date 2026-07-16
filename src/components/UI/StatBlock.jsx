import { motion } from "framer-motion";

const StatBlock = ({
  value,
  label,
  color = "var(--ink)",
  delay = 0.3,
  size = "text-5xl",
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className={`text-center ${className}`}
  >
    <div
      className={`${size} font-bold font-mono tracking-tighter`}
      style={{ color }}
    >
      {value}
    </div>
    <div className="mt-1.5 text-xs font-mono text-muted tracking-widest">
      {label}
    </div>
  </motion.div>
);

export default StatBlock;
