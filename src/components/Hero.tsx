
import React from 'react';
import { ArrowDown } from 'lucide-react';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">
                  Senthil Kumar S
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-cyan-400 font-medium">
                JavaScript Developer | Frontend Developer | Full Stack Enthusiast
              </p>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I love designing beautiful, user-friendly websites. I enjoy turning ideas into clean, 
                functional designs that look great on any device. Let's create something amazing together!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-semibold rounded-full hover:from-cyan-400 hover:to-lime-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="text-cyan-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Hero;
