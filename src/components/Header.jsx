import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-semibold">Movie Tracker</h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded border text-sm"
      >
        Theme: {theme}
      </button>
    </header>
  );
}
