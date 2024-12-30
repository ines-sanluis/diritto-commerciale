export type TopicId = "imprenditore" | "categorie_imprenditore";

export interface Topic {
  id: TopicId;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "facile" | "medio" | "difficile";
  topicId: TopicId;
  userAnswer?: string;
}
