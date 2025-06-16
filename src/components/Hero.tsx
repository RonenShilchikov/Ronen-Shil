'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

type HeroProps = {
  isDark: boolean;
};

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      {/* Glowing background */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20'
            : 'bg-gradient-to-br from-blue-100/60 via-purple-100/60 to-pink-100/60'
        }`}
      />
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/3 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
          Ronen Shilchikov
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
          <Typewriter
            words={['Fullstack Developer', 'Data Analyst', 'AI/ML Enthusiast']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Bridging the gap between web development and data science to create intelligent,
          data-driven applications.
        </p>


        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/RonenShilchikov"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/ronenshil"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-200 ${
              isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:rshilchikov@gmail.com"
            className={`transition-colors duration-200 ${
              isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
