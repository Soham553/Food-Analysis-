import { useState } from 'react';
import Header from './components/Header';
import FoodInput from './components/FoodInput';
import ScoreCard from './components/ScoreCard';
import SuggestionsCard from './components/SuggestionsCard';
import LoadingAnalysis from './components/LoadingAnalysis';
import TrendTracker from './components/TrendTracker';
import { analyzeFood } from './data/foodDatabase';

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleAnalyze = (input) => {
    setIsLoading(true);
    setResult(null);

    const delay = 1200 + Math.random() * 600;

    setTimeout(() => {
      const analysis = analyzeFood(input);
      setResult(analysis);
      setIsLoading(false);

      if (analysis) {
        // Keep only the last 3 meals for the trend tracker
        setHistory((prev) => [analysis, ...prev].slice(0, 3));
      }
    }, delay);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 pb-24 pt-16">
        <FoodInput onAnalyze={handleAnalyze} isLoading={isLoading} />

        {isLoading && <LoadingAnalysis />}

        {result && !isLoading && (
          <div className="mt-8 space-y-6">
            <ScoreCard
              score={result.score}
              category={result.category}
              explanation={result.explanation}
              foodInput={result.foodInput}
            />
            <SuggestionsCard
              suggestions={result.suggestions}
              category={result.category}
            />
          </div>
        )}

        {/* Trend Tracker Section */}
        {history.length > 0 && !isLoading && (
          <div className="mt-12 pt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <TrendTracker history={history} />
          </div>
        )}
      </main>
      
      {/* Minimal Footer */}
      <footer className="border-t border-white/[0.04] py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <p className="text-[11px] text-zinc-600">
            © 2026 Smart Food Coach.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
