import React, { useState } from "react";
import { QuizSettings, QuizResultsType, Question } from "./types";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import QuizResults from "./components/QuizResults";
import { GraduationCap } from "lucide-react";
import { questions } from "./data/questions";

type AppState =
  | { stage: "setup" }
  | { stage: "quiz"; questions: Question[] }
  | { stage: "results"; results: QuizResultsType };

function App() {
  const [state, setState] = useState<AppState>({ stage: "setup" });

  const handleStart = (settings: QuizSettings) => {
    // Filter and randomize questions based on settings
    const filteredQuestions = questions
      .filter((q) => settings.selectedTopics.includes(q.topicId))
      .sort(() => Math.random() - 0.5)
      .slice(0, settings.questionCount);

    if (filteredQuestions.length === 0) {
      // Handle case when no questions match the criteria
      alert("Non ci sono domande disponibili per gli argomenti selezionati.");
      return;
    }

    setState({ stage: "quiz", questions: filteredQuestions });
  };

  const handleComplete = (results: QuizResultsType) => {
    setState({ stage: "results", results });
  };

  const handleRestart = () => {
    setState({ stage: "setup" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <header className="max-w-3xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz di Diritto Commerciale
        </h1>
        <p className="text-gray-600">
          Metti alla prova le tue conoscenze nel diritto commerciale italiano
        </p>
      </header>

      {state.stage === "setup" && <QuizSetup onStart={handleStart} />}

      {state.stage === "quiz" && state.questions.length > 0 && (
        <Quiz questions={state.questions} onComplete={handleComplete} />
      )}

      {state.stage === "results" && <QuizResults results={state.results} />}

      {state.stage !== "setup" && (
        <div className="mt-4 max-w-3xl mx-auto">
          <button
            onClick={handleRestart}
            className="py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Inizia un Nuovo Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
