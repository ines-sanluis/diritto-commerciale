import { QuizResultsType } from "../types";
import { topics } from "../data/topics";
import {
  Trophy,
  Clock,
  Target,
  Frown,
  PartyPopper,
  Smile,
  Laugh,
} from "lucide-react";
interface QuizResultsProps {
  results: QuizResultsType;
}

export default function QuizResults({ results }: QuizResultsProps) {
  const percentage =
    (results.correctAnswers.length / results.totalQuestions) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          {percentage < 50 && <Frown className="w-8 h-8 text-blue-500" />}
          {percentage < 70 && percentage >= 50 && (
            <Smile className="w-8 h-8 text-blue-500" />
          )}
          {percentage < 80 && percentage >= 70 && (
            <Laugh className="w-8 h-8 text-blue-500" />
          )}
          {percentage < 100 && percentage > 80 && (
            <PartyPopper className="w-8 h-8 text-blue-500" />
          )}
          {percentage === 100 && <Trophy className="w-8 h-8 text-blue-500" />}
        </div>
        <h2 className="text-2xl font-bold mb-2">Quiz completato!</h2>
        <div className="text-gray-600">
          Hai risposto correttamente a {results.correctAnswers.length} domande
          su {results.totalQuestions}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Precisione</h3>
          </div>
          <div className="text-2xl font-bold">{percentage.toFixed(1)}%</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Tempo impiegato</h3>
          </div>
          <div className="text-2xl font-bold">
            {Math.floor(results.timeSpent / 60)}m{" "}
            {Math.round(results.timeSpent % 60)}s
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Prestazioni per argomento
        </h3>
        <div className="space-y-4">
          {Object.entries(results.topicPerformance).map(
            ([topic, performance]) => {
              const category = topics.find((c) => c.id === topic);
              return (
                <div key={topic} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{category?.name}</h4>
                    <span className="text-sm text-gray-500">
                      {performance.correct}/{performance.total} corrette
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${performance.percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {results.wrongAnswers.length > 0 && (
        <div className="mb-4">
          {/* Show wrong answers */}
          <h3 className="text-lg font-semibold mb-4">Risposte errate</h3>
          <div className="space-y-4">
            {results.wrongAnswers.map((answer, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="mb-2">
                  <h4 className="font-medium">{answer.text}</h4>
                  <div className="text-sm text-red-500">
                    {answer.userAnswer}
                  </div>
                  <div className="text-sm text-green-500">
                    {answer.correctAnswer}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {answer.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
