'use client';

import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Github, ExternalLink } from 'lucide-react';

type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  fork: boolean;
};

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    created() {
      setSliderReady(true);
    },
  });
  const [sliderReady, setSliderReady] = useState(false);

  // ✅ Define repos to display
  const includedRepos = ['portfolio', 'nlp-whatsapp-chat', 'ecommerce-dashboard'];

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/RonenShilchikov/repos');
        const data = await res.json();

        const filtered = data.filter(
          (repo: GitHubRepo) =>
            includedRepos.includes(repo.name.toLowerCase()) && !repo.fork
        );

        setRepos(filtered);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 transition-colors duration-500 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => slider.current?.prev()}
            disabled={!sliderReady}
            className="p-2 px-4 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white disabled:opacity-50"
          >
            ←
          </button>
          <button
            onClick={() => slider.current?.next()}
            disabled={!sliderReady}
            className="p-2 px-4 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white disabled:opacity-50"
          >
            →
          </button>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {repos.map((repo) => (
            <div key={repo.name} className="keen-slider__slide">
              <div className="h-full p-6 rounded-2xl border shadow-md flex flex-col justify-between transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{repo.name}</h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Github size={20} />
                  </a>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {repo.description || 'No description provided.'}
                </p>

                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-blue-500 hover:underline"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
