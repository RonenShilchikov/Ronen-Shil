import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

useEffect(() => {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}, [isDark]);





  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
       <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Hero Section */}
        <section id="home">
          <Hero isDark={isDark} />
        </section>

      {/* About Section */}
       <section id="about">
          <About isDark={isDark} />
        </section>


      {/* Projects Section */}
      <section id="projects">
        <Projects isDark={isDark}  />
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to build something amazing? I'm always open to discussing new opportunities, 
            collaborations, or just having a chat about tech and data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@example.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a 
              href="#"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section> */}
        <section id="contact">
          <Contact isDark={isDark}/>
        </section>



    </div>
  );
}