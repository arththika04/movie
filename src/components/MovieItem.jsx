export default function MovieItem({ movie, onToggle, onRemove }) {
  return (
    <li className="flex justify-between items-center py-1">
      <span
        className={
          movie.watched ? "line-through text-gray-400" : "text-gray-900"
        }
      >
        {movie.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(movie.id)}
          className="px-2 py-1 text-xs bg-emerald-500 text-white rounded"
        >
          {movie.watched ? "Unwatch" : "Watched"}
        </button>
        <button
          onClick={() => onRemove(movie.id)}
          className="px-2 py-1 text-xs bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
