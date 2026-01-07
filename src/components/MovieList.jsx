import MovieItem from "./MovieItem";

export default function MovieList({ movies, onToggle, onRemove }) {
  if (!movies.length)
    return <p className="text-sm text-gray-500">No movies yet.</p>;

  return (
    <ul className="space-y-1">
      {movies.map((m) => (
        <MovieItem
          key={m.id}
          movie={m}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
