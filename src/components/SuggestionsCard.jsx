export default function SuggestionsCard({ suggestions, category }) {
  const isHealthy = category === 'high';

  return (
    <div className="card p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <h3 className="text-sm font-medium text-zinc-100">
          {isHealthy ? 'Maintain the Habit' : 'Actionable Improvements'}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-[#121214] border border-white/[0.04] hover:bg-white/[0.02] transition-colors"
          >
            <div className="text-lg mt-0.5 opacity-80">{suggestion.icon}</div>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              {suggestion.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
