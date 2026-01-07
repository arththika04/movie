import { useMemo } from "react";

export default function Stats({ movies }) {
  const { total, watched } = useMemo(() => {
    const total = movies.length;
    const watched = movies.filter((m) => m.watched).length;
    return { total, watched };
  }, [movies]);

  return (
    <p className="mt-4 text-sm">
      Total movies: <span className="font-semibold">{total}</span> | Watched:{" "}
      <span className="font-semibold">{watched}</span>
    </p>
  );
}
