'use client';

import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        isDark ? 'bg-gray-900/80' : 'bg-white/80 shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between md:hidden relative">
          {/* Left: Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Center: Logo */}
          <a
            href="#home"
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Ronen.
          </a>

          {/* Right: Menu toggle */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left: Logo */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Ronen.
          </a>

          {/* Center: Nav Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-200 ${
                  isDark
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 pt-2 flex flex-col space-y-3 transition-all duration-300 ${
            isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`py-2 text-lg transition-colors duration-200 border-b ${
                isDark
                  ? 'border-gray-700 hover:text-blue-400'
                  : 'border-gray-200 hover:text-blue-600'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
