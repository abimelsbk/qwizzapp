import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <Brain className="mx-auto h-16 w-16 text-indigo-600" />
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Welcome to QuizCraft
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Create, share, and take quizzes on any topic. Test your knowledge and challenge others.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
            <BookOpen className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Create Quizzes</h3>
            <p className="mt-2 text-gray-500">
              Design engaging quizzes with multiple choice questions on any topic you're passionate about.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
            <Trophy className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Take Challenges</h3>
            <p className="mt-2 text-gray-500">
              Test your knowledge with quizzes created by the community and track your progress.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
            <Brain className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Learn Together</h3>
            <p className="mt-2 text-gray-500">
              Join a community of learners and share your knowledge through interactive quizzes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/signup"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}