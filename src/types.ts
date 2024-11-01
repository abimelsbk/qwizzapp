export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: number;
  authorId: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  answers: number[];
  score: number;
  completedAt: number;
}