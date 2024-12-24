import { TopicId, Topic, Question } from "./domain";

export interface QuizSettings {
  selectedTopics: TopicId[];
  questionCount: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  answers: Record<string, string>;
  startTime: number;
  endTime?: number;
}

export interface QuizResultsType {
  correctAnswers: Question[];
  wrongAnswers: Question[];
  totalQuestions: number;
  timeSpent: number;
  topicPerformance: Record<TopicId, TopicPerformance>;
}

export interface TopicPerformance {
  correct: number;
  total: number;
  percentage: number;
}
