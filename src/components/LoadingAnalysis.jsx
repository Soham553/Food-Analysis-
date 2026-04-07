export default function LoadingAnalysis() {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in mt-12">
      <div className="card p-8 sm:p-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-zinc-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-zinc-100">Analyzing nutritional profile...</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Please wait while we process</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Main Score Skeleton */}
          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 rounded-full skeleton" />
            <div className="flex-1 space-y-3">
              <div className="h-5 skeleton rounded-md w-1/3" />
              <div className="h-4 skeleton rounded-md w-3/4" />
              <div className="h-4 skeleton rounded-md w-2/3" />
            </div>
          </div>

          <div className="h-px bg-white/[0.05] w-full my-6" />

          {/* Suggestions Skeleton */}
          <div className="space-y-4">
            <div className="h-4 skeleton rounded-md w-1/4 mb-2" />
            <div className="h-12 skeleton rounded-xl w-full" />
            <div className="h-12 skeleton rounded-xl w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
