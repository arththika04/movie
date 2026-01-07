export default function MovieItem({ movie, onToggle, onRemove }) {
  return (
    <li className="flex justify-between items-center py-2">
      <span
        className={
          "flex-1 mr-3 rounded-full px-3 py-2 bg-white shadow " +
          (movie.watched ? "line-through text-gray-400" : "text-slate-800")
        }
      >
        {movie.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(movie.id)}
          className={
            "px-3 py-1 text-xs font-semibold rounded-full text-white " +
            (movie.watched
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-amber-500 hover:bg-amber-600")
          }
        >
          {movie.watched ? "Unwatch" : "Watched"}
        </button>
        <button
          onClick={() => onRemove(movie.id)}
          className="px-3 py-1 text-xs font-semibold rounded-full 
                     bg-rose-500 hover:bg-rose-600 text-white"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
