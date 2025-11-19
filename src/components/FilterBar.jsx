export default function FilterBar({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3  justify-center mb-10">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition ${
            selected === cat
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
