import { create } from 'zustand';
import { User } from 'firebase/auth';
import { Quiz, QuizAttempt } from './types';

interface AuthStore {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

interface QuizStore {
  quizzes: Quiz[];
  attempts: QuizAttempt[];
  addQuiz: (quiz: Quiz) => void;
  addAttempt: (attempt: QuizAttempt) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));

export const useQuizStore = create<QuizStore>((set) => ({
  quizzes: [],
  attempts: [],
  addQuiz: (quiz) => set((state) => ({ 
    quizzes: [...state.quizzes, quiz] 
  })),
  addAttempt: (attempt) => set((state) => ({ 
    attempts: [...state.attempts, attempt] 
  })),
}));