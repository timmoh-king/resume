import React from 'react';
import { Code, Server, Cloud, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-8 w-8" />,
      skills: ['React.js', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Backend',
      icon: <Server className="h-8 w-8" />,
      skills: ['Python', 'Flask', 'FastAPI', 'Node.js', 'Express', 'PostgreSQL'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      title: 'Cloud & AWS',
      icon: <Cloud className="h-8 w-8" />,
      skills: ['AWS EC2', 'AWS Lambda', 'AWS S3', 'AWS RDS', 'CloudFormation', 'API Gateway'],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100'
    },
    {
      title: 'DevOps',
      icon: <Settings className="h-8 w-8" />,
      skills: ['Docker', 'CI/CD', 'Git', 'Linux', 'Monitoring', 'Infrastructure as Code'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical skillset covering the full development lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-white/90 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;