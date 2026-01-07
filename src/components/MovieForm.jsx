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
        className="flex-1 border rounded px-2 py-1"
        placeholder="Add favorite movie"
      />
      <button
        type="submit"
        className="px-3 py-1 rounded bg-blue-600 text-white"
      >
        Add
      </button>
    </form>
  );
}
