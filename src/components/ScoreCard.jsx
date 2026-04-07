export default function ScoreCard({ score, category, explanation, foodInput }) {
  const getTheme = () => {
    if (score <= 3) return { text: 'text-red-400', stroke: '#f87171', bg: 'bg-red-400/[0.08]', label: 'Poor Choice' };
    if (score <= 6) return { text: 'text-yellow-400', stroke: '#fbbf24', bg: 'bg-yellow-400/[0.08]', label: 'Fair Choice' };
    return { text: 'text-emerald-400', stroke: '#34d399', bg: 'bg-emerald-400/[0.08]', label: 'Excellent Choice' };
  };

  const theme = getTheme();
  
  // SVG Circle calculations
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 10) * circumference;

  return (
    <div className="card p-8 sm:p-10 animate-fade-in my-6">
      <div className="flex items-center justify-between mb-8 cursor-default">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium mb-1 block">Analysis Result</span>
          <h2 className="text-xl font-medium text-zinc-100 capitalize">{foodInput}</h2>
        </div>
        <div className={`px-3 py-1 rounded-full ${theme.bg} ${theme.text} text-xs font-medium border border-current`}>
          {theme.label}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        {/* Modern Circular Progress */}
        <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background track */}
            <circle
              className="text-white/[0.05]"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
            {/* Progress stroke */}
            <circle
              className="transition-all duration-1000 ease-out"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke={theme.stroke}
              fill="transparent"
              r={radius}
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold tracking-tight text-zinc-100">{score}</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">/ 10</span>
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-zinc-200">Nutritional Breakdown</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
