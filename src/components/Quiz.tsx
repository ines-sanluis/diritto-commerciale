import { useCallback, useEffect, useMemo, useState } from "react";
import { Question, QuizState, QuizResultsType } from "../types";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Timer } from "./Timer";
import { topics } from "../data/topics";

interface QuizProps {
  questions: Question[];
  onComplete: (results: QuizResultsType) => void;
}

const getTopicName = (topicId: string) => {
  return topics.find((topic) => topic.id === topicId)?.name;
};

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    questions,
    answers: {},
    startTime: Date.now(),
  });

  const currentQuestion = questions[state.currentQuestionIndex];
  const randomAnswers = useMemo(() => {
    return currentQuestion.options.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const handleAnswer = useCallback(
    (answer: string) => {
      setState((prev) => ({
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: answer,
        },
      }));
    },
    [currentQuestion]
  );

  const getCorrectQuestions = useCallback(() => {
    return questions
      .filter(
        (question) => state.answers[question.id] === question.correctAnswer
      )
      .map((question) => {
        return {
          ...question,
          userAnswer: state.answers[question.id],
        };
      });
  }, [questions, state.answers]);

  const getWrongQuestions = useCallback(() => {
    return questions
      .filter(
        (question) => state.answers[question.id] !== question.correctAnswer
      )
      .map((question) => {
        return {
          ...question,
          userAnswer: state.answers[question.id],
        };
      });
  }, [questions, state.answers]);

  const getResults = useCallback(
    (endTime: number) => {
      return {
        correctAnswers: getCorrectQuestions(),
        wrongAnswers: getWrongQuestions(),
        totalQuestions: questions.length,
        timeSpent: (endTime - state.startTime) / 1000,
        topicPerformance: questions.reduce((acc, question) => {
          const topic = question.topicId;
          if (!acc[topic]) {
            acc[topic] = { correct: 0, total: 0, percentage: 0 };
          }
          acc[topic].total++;
          if (state.answers[question.id] === question.correctAnswer) {
            acc[topic].correct++;
          }
          acc[topic].percentage = (acc[topic].correct / acc[topic].total) * 100;
          return acc;
        }, {} as Record<string, any>),
      };
    },
    [
      getCorrectQuestions,
      getWrongQuestions,
      questions,
      state.answers,
      state.startTime,
    ]
  );
  const handleNext = useCallback(() => {
    if (state.currentQuestionIndex < questions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      const endTime = Date.now();
      setState((prev) => ({ ...prev, endTime }));
      const results = getResults(endTime);
      onComplete(results);
    }
  }, [state.currentQuestionIndex, questions.length, getResults, onComplete]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "4") {
        handleAnswer(currentQuestion.options[parseInt(event.key) - 1]);
      } else if (event.key === "ArrowLeft") {
        setState((prev) => ({
          ...prev,
          currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
        }));
      } else if (event.key === "ArrowRight" || event.key === "Enter") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion, handleAnswer, handleNext, state.answers]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium text-gray-500">
          Domanda {state.currentQuestionIndex + 1} di {questions.length}
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <Timer startTime={state.startTime} />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-xl font-bold">{currentQuestion.text}</h2>
          <p className="text-sm font-medium text-gray-500">
            {getTopicName(currentQuestion.topicId)}
          </p>
        </div>
        <div className="space-y-3">
          {randomAnswers.map((option, index) => (
            <label
              key={index}
              className={`flex gap-4 p-4 border rounded-lg cursor-pointer hover:bg-blue-50 ${
                state.answers[currentQuestion.id] === option
                  ? "border-green-500 bg-green-50 font-bold"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <p className="text-green-500 bold">{index + 1}</p>
              <input
                type="radio"
                name="answer"
                className="hidden"
                checked={state.answers[currentQuestion.id] === option}
                onChange={() => handleAnswer(option)}
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() =>
            setState((prev) => ({
              ...prev,
              currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
            }))
          }
          disabled={state.currentQuestionIndex === 0}
          className="px-4 py-2 flex items-center gap-2 text-gray-600 disabled:text-gray-400"
        >
          <ChevronLeft className="w-4 h-4" />
          Precedente
        </button>
        <button
          onClick={handleNext}
          disabled={!state.answers[currentQuestion.id]}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {state.currentQuestionIndex === questions.length - 1
            ? "Completa"
            : "Prossima"}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
