import { useRef, useEffect, useState, useCallback } from "react";

export default function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title.trim()) return;
      onAdd(title.trim());
      setTitle("");
    },
    [title, onAdd]
  );

  return (
   <form
  onSubmit={handleSubmit}
  className="flex gap-2 mb-4"
>
  <input
    ref={inputRef}
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="flex-1 rounded-full px-3 py-2 border border-slate-300 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Add a movie..."
  />
  <button
    type="submit"
    className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium
               hover:bg-blue-700"
  >
    Add
  </button>
</form>

  );
}
