import React from 'react';
import { Award, Calendar, Code2, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate Software Engineer with 3 years of hands-on experience in building scalable web applications 
                and cloud solutions. I specialize in full-stack development with a strong focus on modern technologies 
                and best practices.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across frontend frameworks, backend systems, cloud infrastructure, and DevOps practices. 
                I'm committed to writing clean, maintainable code and delivering exceptional user experiences.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Currently seeking opportunities to contribute to innovative projects and collaborate with dynamic teams 
                to solve complex technical challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 text-xl mb-2">3+ Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Code2 className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 text-xl mb-2">Full Stack</h3>
              <p className="text-gray-600">Developer</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 text-xl mb-2">AWS</h3>
              <p className="text-gray-600">Cloud Expert</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 text-xl mb-2">DevOps</h3>
              <p className="text-gray-600">Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;