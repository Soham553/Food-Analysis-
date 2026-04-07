export default function TrendTracker({ history }) {
  if (history.length === 0) return null;

  // We only care about the last 3 meals maximum
  const recentMeals = history.slice(0, 3);
  
  // history[0] is the newest meal. 
  // Let's determine the trend between the newest and the oldest in this slice.
  let trendLabel = "Just Starting";
  let trendIcon = "🌱";
  let trendColor = "text-zinc-400";
  
  if (recentMeals.length > 1) {
    const newestScore = recentMeals[0].score;
    const oldestScore = recentMeals[recentMeals.length - 1].score;
    
    if (newestScore > oldestScore) {
      trendLabel = "Improving";
      trendIcon = "📈";
      trendColor = "text-emerald-400";
    } else if (newestScore < oldestScore) {
      trendLabel = "Declining";
      trendIcon = "📉";
      trendColor = "text-red-400";
    } else {
      trendLabel = "Holding Steady";
      trendIcon = "➡️";
      trendColor = "text-blue-400";
    }
  }

  // To display the flow logically (oldest on the left -> newest on the right),
  // we reverse the array for the visual render.
  const displayTimeline = [...recentMeals].reverse();

  // Helper to color the score node
  const getScoreColor = (score) => {
    if (score <= 3) return 'text-red-400 border-red-400/20 bg-red-400/[0.05]';
    if (score <= 6) return 'text-yellow-400 border-yellow-400/20 bg-yellow-400/[0.05]';
    return 'text-emerald-400 border-emerald-400/20 bg-emerald-400/[0.05]';
  };

  return (
    <div className="card p-6 sm:p-8 relative overflow-hidden">
      {/* Background glow behind the trend */}
      <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 rounded-full ${
        trendLabel === 'Improving' ? 'bg-emerald-500' : 
        trendLabel === 'Declining' ? 'bg-red-500' : 'bg-transparent'
      }`} />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-sm font-medium text-zinc-100">Nutrition Trend</h3>
          <p className="text-xs text-zinc-500 mt-0.5">Based on your last {recentMeals.length} meal{recentMeals.length > 1 ? 's' : ''}</p>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a0c] border border-white/[0.06]">
          <span>{trendIcon}</span>
          <span className={`text-[10px] font-semibold uppercase tracking-widest ${trendColor}`}>
            {trendLabel}
          </span>
        </div>
      </div>
      
      {/* Timeline visualization */}
      <div className="relative z-10 flex items-start gap-3 overflow-x-auto pb-2 custom-scroll">
        {displayTimeline.map((item, idx) => (
          <div key={`${item.foodInput}-${idx}`} className="flex items-center min-w-[70px]">
             <div className="flex flex-col items-center w-full">
                <div className={`flex flex-col items-center justify-center w-12 h-12 rounded-full border ${getScoreColor(item.score)} shadow-inner`}>
                  <span className="text-lg font-semibold tabular-nums">{item.score}</span>
                </div>
                <span className="text-[10px] font-medium text-zinc-400 mt-3 truncate w-[80px] text-center" title={item.foodInput}>
                  {item.foodInput}
                </span>
                <span className="text-[9px] text-zinc-600 mt-0.5 uppercase tracking-wider">
                  {idx === displayTimeline.length - 1 ? 'Latest' : `Meal ${idx + 1}`}
                </span>
             </div>
             
             {/* Connecting Line/Arrow */}
             {idx < displayTimeline.length - 1 && (
                <div className="flex-1 w-8 sm:w-12 h-px bg-white/[0.08] mx-2 self-start mt-6 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-white/[0.15] rotate-45 -mt-[0.5px]"></div>
                </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
}
