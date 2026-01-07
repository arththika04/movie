import { useMemo } from "react";

export default function Stats({ movies }) {
  const { total, watched } = useMemo(() => {
    const total = movies.length;
    const watched = movies.filter((m) => m.watched).length;
    return { total, watched };
  }, [movies]);

  return (
    
  <p className="mt-4 text-sm text-center text-slate-700">
    Total Movies: <span className="font-semibold">{total}</span> | Watched Movies:{" "}
    <span className="font-semibold">{watched}</span>
  </p>
);
}
