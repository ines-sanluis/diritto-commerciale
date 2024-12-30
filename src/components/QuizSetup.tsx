import React, { useState } from "react";
import { QuizSettings, TopicId } from "../types";
import { topics } from "../data/topics";
import { Settings } from "lucide-react";

interface QuizSetupProps {
  onStart: (settings: QuizSettings) => void;
}

export default function QuizSetup({ onStart }: QuizSetupProps) {
  const [selectedTopics, setSelectedTopics] = useState<TopicId[]>([]);
  const [questionCount, setQuestionCount] = useState(10);

  const handleStart = () => {
    if (selectedTopics.length === 0) return;
    onStart({
      selectedTopics,
      questionCount,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Configura il Quiz</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Seleziona gli Argomenti</h3>
        <div className="flex flex-col gap-3">
          {topics.map((topic) => (
            <label
              key={topic.id}
              className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600"
                checked={selectedTopics.includes(topic.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedTopics([...selectedTopics, topic.id]);
                  } else {
                    setSelectedTopics(
                      selectedTopics.filter((t) => t !== topic.id)
                    );
                  }
                }}
              />
              <div className="ml-3">
                <div className="font-medium">{topic.name}</div>
                <div className="text-sm text-gray-500">{topic.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Numero di Domande</h3>
        <input
          type="range"
          min="5"
          max="100"
          value={questionCount}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center mt-2">{questionCount} domande</div>
      </div>

      <button
        onClick={handleStart}
        disabled={selectedTopics.length === 0}
        className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Inizia il Quiz
      </button>
    </div>
  );
}
