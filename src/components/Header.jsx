import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-semibold">Favorite Movies</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-1 rounded-full text-sm font-medium 
                   bg-emerald-500 text-white hover:bg-emerald-600"
      >
        {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </button>
    </header>
  );
}
