export default function FilterBar({ setSort }) {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => setSort("low")}
         className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 transition text-white"
      >
        Price: Low → High
      </button>

      <button
        onClick={() => setSort("high")}
         className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 transition text-white"
      >
        Price: High → Low
      </button>
    </div>
  );
}
