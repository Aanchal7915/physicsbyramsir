import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-200 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-slow blur-2xl opacity-40">
          <svg width="300" height="150">
            <ellipse cx="150" cy="75" rx="120" ry="50" fill="#a5b4fc" />
          </svg>
        </div>
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg animate-bounce">
          404
        </h1>
      </div>
      <h2 className="mt-4 text-3xl font-bold text-gray-800 animate-fade-in-up">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-500 animate-fade-in-up delay-100">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200"
      >
        Go Home
      </Link>
      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1.000);
          }
          .animate-fade-in-up.delay-100 {
            animation-delay: 0.1s;
          }
          .animate-fade-in-up.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-pulse-slow {
            animation: pulse 3s infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound