import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Timothy Kariuki
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 mb-8">
            Software Engineer
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-200 mb-8">
            <MapPin className="h-5 w-5" />
            <span>Available for Remote & On-site Opportunities</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com/in/timothy-kariuki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="h-8 w-8 group-hover:text-blue-300" />
          </a>
          <a
            href="https://github.com/timothy-kariuki"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Github className="h-8 w-8 group-hover:text-blue-300" />
          </a>
          <a
            href="mailto:timothykariuki43@gmail.com"
            className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="h-8 w-8 group-hover:text-blue-300" />
          </a>
        </div>

        <div className="animate-bounce">
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <p className="mt-2 text-sm">Scroll Down</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;