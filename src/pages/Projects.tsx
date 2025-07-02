// import React from 'react';
// import { Link } from 'react-router-dom';

// const projects = [
//   {
//     title: 'Contact Management System',
//     description: 'A simple full-stack CRUD system for managing personal or client contacts.',
//     tech: ['React', 'Node.js', 'MongoDB', 'Express'],
//     image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
//     category: 'Full Stack'
//   },
//   {
//     title: 'Personal Portfolio Website (MERN Stack)',
//     description: 'A complete personal branding project showcasing design and full-stack skills.',
//     tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
//     image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
//     category: 'Portfolio'
//   },
//   {
//     title: 'Traffic Management System (DL Model)',
//     description: 'A deep learning-based system for analyzing traffic flow using computer vision models.',
//     tech: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
//     image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
//     category: 'AI/ML'
//   },
//   {
//     title: 'Vector Borne Disease Prediction Model',
//     description: 'A machine learning-based solution that predicts disease outbreaks using environmental data.',
//     tech: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
//     image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
//     category: 'AI/ML'
//   }
// ];

// const Projects = () => {
//   return (
//     <div className="min-h-screen bg-slate-900 pt-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             My <span className="text-lime-400">Projects</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Here are some of the projects I've worked on, showcasing my skills in web development, AI/ML, and software engineering.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.title}
//               className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-lime-500/40 transform hover:scale-105 transition-all duration-300 group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <span className="px-3 py-1 bg-cyan-500/80 text-slate-900 text-xs font-semibold rounded-full">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 bg-slate-700/50 text-lime-400 text-xs rounded-md border border-lime-500/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex space-x-3">
//                   <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-lime-400 transition-all duration-300">
//                     View Project
//                   </button>
//                   {project.title === 'Contact Management System' ? (
//                     <a
//                       href="https://github.com/Senthil095/Contact-Management-System-Mern-Stack"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
//                     >
//                       Code
//                     </a>
//                   ) : project.title === 'Traffic Management System (DL Model)' ? (
//                     <a
//                       href="https://github.com/Senthil095/Deep-Learning-Model-Traffic-Management"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
//                     >
//                       Code
//                     </a>
//                   ) : project.title === 'Personal Portfolio Website (MERN Stack)' ? (
//                     <a
//                       href="https://github.com/Senthil095/Portfolio"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
//                     >
//                       Code
//                     </a>
//                   ) : (
//                     <button className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300">
//                       Code
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/contact"
//             className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-semibold rounded-full hover:from-cyan-400 hover:to-lime-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
//           >
//             Let's Work Together
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default Projects;

import React from 'react';

const projects = [
  {
    title: 'Contact Management System',
    description: 'A simple full-stack CRUD system for managing personal or client contacts.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
    category: 'Full Stack'
  },
  {
    title: 'Personal Portfolio Website (MERN Stack)',
    description: 'A complete personal branding project showcasing design and full-stack skills.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    category: 'Portfolio'
  },
  {
    title: 'Traffic Management System (DL Model)',
    description: 'A deep learning-based system for analyzing traffic flow using computer vision models.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
    category: 'AI/ML'
  },
  {
    title: 'Vector Borne Disease Prediction Model',
    description: 'A machine learning-based solution that predicts disease outbreaks using environmental data.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
    category: 'AI/ML'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-lime-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development, AI/ML, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-lime-500/40 transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500/80 text-slate-900 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-lime-400 text-xs rounded-md border border-lime-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-lime-400 transition-all duration-300">
                    View Project
                  </button>
                  {project.title === 'Contact Management System' ? (
                    <a
                      href="https://github.com/Senthil095/Contact-Management-System-Mern-Stack"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      Code
                    </a>
                  ) : project.title === 'Traffic Management System (DL Model)' ? (
                    <a
                      href="https://github.com/Senthil095/Deep-Learning-Model-Traffic-Management"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      Code
                    </a>
                  ) : project.title === 'Personal Portfolio Website (MERN Stack)' ? (
                    <a
                      href="https://github.com/Senthil095/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      Code
                    </a>
                  ) : (
                    <button className="px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300">
                      Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-slate-900 font-semibold rounded-full hover:from-cyan-400 hover:to-lime-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;