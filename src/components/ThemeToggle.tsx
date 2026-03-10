import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 font-heading text-[10px] tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      <span className="uppercase">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
