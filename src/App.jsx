import { useReducer, useCallback, useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { moviesReducer, moviesInitialState } from "./reducers/moviesReducer";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Stats from "./components/Stats";
import Header from "./components/Header";

function AppInner() {
  const [movies, dispatch] = useReducer(moviesReducer, moviesInitialState);
  const { theme } = useContext(ThemeContext);

  const handleAdd = useCallback(
    (title) => dispatch({ type: "ADD", title }),
    []
  );

  const handleToggle = useCallback(
    (id) => dispatch({ type: "TOGGLE_WATCHED", id }),
    []
  );

  const handleRemove = useCallback(
    (id) => dispatch({ type: "REMOVE", id }),
    []
  );

  const rootClass =
    theme === "dark"
      ? "min-h-screen bg-slate-900 text-slate-100"
      : "min-h-screen bg-slate-100 text-slate-900";


return (
  <div className={rootClass}>
    
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-xl mx-auto rounded-xl shadow-lg bg-slate-100 px-6 py-6">
        <Header />
        <MovieForm onAdd={handleAdd} />
        <MovieList
          movies={movies}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
        <Stats movies={movies} />
      </div>
    </div>
  </div>
);

}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
