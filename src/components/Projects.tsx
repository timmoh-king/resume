import React from 'react';
import { ExternalLink, Github, Shield, Activity, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'MFAuth',
      description: 'A comprehensive multi-factor authentication application with advanced security features including SMS, email, and authenticator app integration.',
      icon: <Shield className="h-8 w-8" />,
      technologies: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
      features: ['Two-Factor Authentication', 'SMS Integration', 'Email Verification', 'Security Dashboard'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Hospital Management System',
      description: 'A full-featured hospital management system designed to streamline operations for doctors, patients, staff members, and medical records with comprehensive analytics.',
      icon: <Activity className="h-8 w-8" />,
      technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'AWS RDS'],
      features: ['Patient Management', 'Medical Records', 'Staff Scheduling', 'Analytics Dashboard'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      title: 'Archer Roofing',
      description: 'A fully functional role-based application enabling administrators to efficiently assign tasks and forms to employees with comprehensive project management features.',
      icon: <Users className="h-8 w-8" />,
      technologies: ['React.js', 'Flask', 'Python', 'PostgreSQL', 'AWS EC2'],
      features: ['Role Management', 'Task Assignment', 'Form Builder', 'Project Tracking'],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world applications that demonstrate technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gradient-to-br ${project.bgColor} rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 group ${
                index % 2 === 1 ? 'md:ml-12' : 'md:mr-12'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-2`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <button className={`flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group`}>
                    <ExternalLink className="h-5 w-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
                    View Project
                  </button>
                  <button className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                    <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;