
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SQL', level: 70 },
        { name: 'MongoDB', level: 65 },
      ]
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'Canva', level: 75 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-lime-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-lime-500/40 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-lime-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-lime-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Icons Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'Git', 'Tailwind', 'Bootstrap', 'Java', 'SQL', 'Canva'].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 group"
              >
                <p className="text-gray-300 text-sm font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
