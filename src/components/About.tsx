import {
  Database,
  BarChart3,
  FileText,
  Workflow,
  Send,
  Download,
} from 'lucide-react';

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiJupyter,
} from 'react-icons/si';

import Image from 'next/image';


type AboutProps = {
  isDark: boolean;
};

export default function About({ isDark }: AboutProps) {
  const fullstackSkills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ];

  const analyticsSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'SQL', icon: Database },
    { name: 'Excel', icon: FileText },
    { name: 'Looker Studio', icon: BarChart3 },
    { name: 'Selenium', icon: Workflow },
    { name: 'Jupyter Notebook', icon: SiJupyter },
  ];

  return (
    <section
      id="about"
      className={`py-16 sm:py-20 transition-colors duration-500 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight mb-10">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

<div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto">
  {/* Outer Ring - Gradient Spinning Quarters */}
  <div className="absolute inset-0 flex items-center justify-center animate-spin-slow z-0">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />      {/* blue-500 */}
          <stop offset="50%" stopColor="#8b5cf6" />     {/* purple-500 */}
          <stop offset="100%" stopColor="#ec4899" />    {/* pink-500 */}
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="url(#gradientStroke)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="78 70"
        strokeDashoffset="10"
      />
    </svg>
  </div>

  {/* Static Inner Border */}
<div className="absolute inset-[10px] rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10">
  <div className="w-full h-full rounded-full bg-gray-900 dark:bg-gray-50" />
</div>

  {/* Profile Image */}
  <div className="absolute inset-[14px] rounded-full overflow-hidden z-20">
    <Image
      src="/Ronen3.png"
      alt="Ronen Shilchikov"
      className="w-full h-full object-cover"
    />
  </div>
</div>





        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left: Summary */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-black'}`}>
              Who I Am
            </h3>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-black'}`}>
              I&apos;m Ronen Shilchikov, a <strong>Fullstack Developer</strong> and <strong>Data Analyst</strong> who builds scalable software and makes data useful.
              I specialize in combining clean code with meaningful data to improve product performance and user experience.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-black'}`}>
              I enjoy building web platforms, developing dashboards, and analyzing data to extract actionable insights.
              Outside of work, I enjoy music, training, and side projects that combine creativity with tech.
            </p>

            <div className="flex flex-col sm:flex-row justify-start sm:justify-end gap-4 mt-6">
              <a
                href="#contact"
                className="px-5 py-2 rounded-lg shadow transition font-medium flex items-center justify-center gap-2
                bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
              >
                <Send size={16} />
                Contact Me
              </a>

              <a
                href="/RonenShilchikov.pdf"
                target="_blank"
                className="px-5 py-2 rounded-lg font-medium border-2 transition flex items-center justify-center gap-2
                border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white
                dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-gray-100' : 'text-black'}`}>
              My Skills
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {fullstackSkills.map(({ name, icon: Icon }) => (
                <div key={name} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                  <Icon className="text-blue-500" size={20} />
                  <span className="text-sm sm:text-base">{name}</span>
                </div>
              ))}

              {analyticsSkills.map(({ name, icon: Icon }) => (
                <div key={name} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                  <Icon className="text-purple-500" size={20} />
                  <span className="text-sm sm:text-base">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
