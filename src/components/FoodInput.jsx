import { useState, useRef, useEffect } from 'react';

const quickFoods = [
  'Burger & Fries',
  'Caesar Salad',
  'Pizza',
  'Avocado Toast',
  'Grilled Salmon',
];

export default function FoodInput({ onAnalyze, isLoading }) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onAnalyze(input.trim());
    }
  };

  const handleQuickSelect = (label) => {
    setInput(label);
    if (!isLoading) {
      onAnalyze(label);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto pt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100 mb-3">
          Analyze your meal.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal">
          Type what you ate. We'll score it and suggest improvements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative group transition-all duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-[20px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center bg-[#121214] border border-white/[0.08] rounded-[20px] p-2 focus-within:border-white/20 transition-colors shadow-sm">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. 2 slices of pepperoni pizza and a diet coke"
              disabled={isLoading}
              className="flex-1 bg-transparent border-none text-zinc-100 placeholder-zinc-500 py-3.5 px-4 outline-none text-sm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-black" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing
                </>
              ) : (
                'Analyze →'
              )}
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-[11px] text-zinc-500 mr-1.5 uppercase tracking-wider font-medium">Suggestions</span>
        {quickFoods.map((label) => (
          <button
            key={label}
            onClick={() => handleQuickSelect(label)}
            disabled={isLoading}
            className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-all disabled:opacity-30 flex items-center gap-1.5"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
