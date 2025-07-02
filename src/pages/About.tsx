
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, education, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center">
            <div className="mx-auto w-64 h-64 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-6xl font-bold text-slate-900 shadow-2xl shadow-cyan-500/25 mb-6">
              S
            </div>
            <p className="text-gray-400 italic">Profile picture placeholder</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Education</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">B.Tech in Artificial Intelligence and Machine Learning</h3>
                <p className="text-gray-300">Recent Graduate | 2024</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/20">
              <h2 className="text-2xl font-bold text-lime-400 mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a fresh graduate with a strong foundation in AI/ML and web development, I'm eager to apply my 
                knowledge in creating innovative digital solutions. My passion lies in crafting clean, user-friendly 
                interfaces and robust full-stack applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I bring a creative mindset, strong adaptability, and a collaborative attitude to every project. 
                I'm excited to contribute to meaningful projects and continue learning in the ever-evolving 
                world of technology.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Key Strengths</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <h3 className="font-semibold text-white">Creative Mindset</h3>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <h3 className="font-semibold text-white">Adaptability</h3>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <h3 className="font-semibold text-white">Collaborative</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
