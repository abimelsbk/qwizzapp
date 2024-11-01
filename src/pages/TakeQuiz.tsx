import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store';

export default function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const quiz = useQuizStore((state) => 
    state.quizzes.find(q => q.id === id)
  );
  const addAttempt = useQuizStore((state) => state.addAttempt);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  if (!quiz) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Quiz not found</h2>
      </div>
    );
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);

      addAttempt({
        id: crypto.randomUUID(),
        quizId: quiz.id,
        answers: newAnswers,
        score,
        completedAt: Date.now()
      });

      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / quiz.questions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Quiz Complete!</h2>
        
        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-6xl font-bold text-indigo-600 mb-4">
            {percentage.toFixed(0)}%
          </div>
          <p className="text-xl text-gray-600">
            You got {score} out of {quiz.questions.length} questions correct
          </p>
        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">{quiz.title}</h1>
        <div className="text-gray-600">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6">{question.text}</h2>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}