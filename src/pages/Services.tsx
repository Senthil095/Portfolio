
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and aesthetic user interfaces using modern frameworks.',
      icon: '🎨',
      features: ['React Applications', 'Responsive Design', 'Modern UI/UX', 'Cross-browser Compatibility']
    },
    {
      title: 'Full Stack Web Development',
      description: 'Creating complete web solutions from database to user interface.',
      icon: '🔧',
      features: ['MERN Stack', 'Database Design', 'API Development', 'Server Configuration']
    },
    {
      title: 'Software Development',
      description: 'Developing robust software solutions with clean, maintainable code.',
      icon: '💻',
      features: ['Custom Applications', 'Code Optimization', 'Version Control', 'Testing & Debugging']
    },
    {
      title: 'JavaScript Development',
      description: 'Specializing in JavaScript ecosystem for dynamic web applications.',
      icon: '⚡',
      features: ['ES6+ Features', 'Async Programming', 'Framework Integration', 'Performance Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive development services to bring your digital ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-lime-500/40 transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-cyan-400">Key Features:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-lime-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
