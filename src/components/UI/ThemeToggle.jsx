import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";
import Button from "./Button";

const ThemeToggle = ({ className = "" }) => {
  const { dark, toggle } = useTheme();

  return (
    <Button
      variant="icon"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`!w-[30px] !h-[30px] !rounded-lg ${className}`}
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </Button>
  );
};

export default ThemeToggle;
