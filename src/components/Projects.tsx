'use client';

import { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
    fork: boolean; // ✅ Add this line

};

type Props = {
  isDark: boolean;
};

 const includedRepos = ['NLP-Chat', 'text_analysis-', 'costManage', '-Flood_prediction'];

export default function Projects({ isDark }: Props) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

 

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/ronenshilchikov/repos');
        const data = await res.json();

        const filtered = data.filter(
          (repo: GitHubRepo) =>
            includedRepos.includes(repo.name) && !repo.fork
        );

        setRepos(filtered);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className={`relative py-16 sm:py-20 transition-colors duration-500 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
        }`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <p className={`text-center text-base sm:text-lg md:text-xl mb-12 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Take a look at some of the projects I’ve worked on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className={`p-6 rounded-2xl shadow-lg border transition ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold break-all">{repo.name}</h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-blue-500 transition-colors" />
                </a>
              </div>

              {repo.topics?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {repo.description || 'No description provided.'}
              </p>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
