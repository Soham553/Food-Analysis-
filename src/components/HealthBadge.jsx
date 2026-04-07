export default function HealthBadge({ score }) {
  const getStatus = () => {
    if (score <= 3)
      return {
        label: 'Needs Work',
        emoji: '⚠️',
        gradient: 'from-red-500 to-orange-500',
        glow: 'shadow-red-500/15',
        bg: 'from-red-500/[0.06] to-orange-500/[0.02]',
        pillBg: 'bg-red-500/10 text-red-400 border-red-500/20',
        message: "Let's aim for a healthier next meal — small changes add up!",
      };
    if (score <= 6)
      return {
        label: 'On Track',
        emoji: '📊',
        gradient: 'from-amber-400 to-yellow-400',
        glow: 'shadow-amber-500/15',
        bg: 'from-amber-500/[0.06] to-yellow-500/[0.02]',
        pillBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        message: 'Good progress — a few smart swaps can level you up!',
      };
    return {
      label: 'Thriving',
      emoji: '🏆',
      gradient: 'from-emerald-400 to-cyan-400',
      glow: 'shadow-emerald-500/15',
      bg: 'from-emerald-500/[0.06] to-cyan-500/[0.02]',
      pillBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      message: "You're crushing it! Keep up the incredible choices!",
    };
  };

  const status = getStatus();

  return (
    <div
      id="health-badge"
      className={`glass-card rounded-3xl p-6 sm:p-7 animate-fade-in-up shadow-2xl ${status.glow} relative overflow-hidden`}
      style={{ animationDelay: '0.1s' }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${status.bg} rounded-3xl`} />
      
      {/* Decorative line */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${status.gradient} rounded-l-3xl`} />

      <div className="relative z-10 flex items-center gap-5">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${status.gradient} flex items-center justify-center text-2xl shadow-xl ${status.glow} relative`}>
            <div className="absolute inset-[2px] rounded-[14px] bg-black/20" />
            <span className="relative z-10">{status.emoji}</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em]">
              Today's Health Status
            </span>
          </div>
          <h4 className={`font-display text-xl font-bold bg-gradient-to-r ${status.gradient} bg-clip-text text-transparent tracking-tight`}>
            {status.label}
          </h4>
          <p className="text-xs text-slate-400/80 mt-1.5 font-light leading-relaxed">{status.message}</p>
        </div>

        {/* Score pill */}
        <div className="flex-shrink-0 hidden sm:block">
          <div className={`px-4 py-2 rounded-2xl text-xs font-bold border ${status.pillBg} tabular-nums tracking-wide`}>
            {score}/10
          </div>
        </div>
      </div>
    </div>
  );
}
