import React from 'react';
import { ExternalLink, Linkedin, BookOpen, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Building Scalable APIs with FastAPI',
      platform: 'LinkedIn',
      date: '2024-12-15',
      description: 'Exploring best practices for building high-performance APIs using Python FastAPI framework with async capabilities.',
      link: '#',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'AWS Lambda Performance Optimization',
      platform: 'AWS Community',
      date: '2024-11-28',
      description: 'Deep dive into optimizing AWS Lambda functions for better performance and cost efficiency in production environments.',
      link: '#',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'React Performance Patterns',
      platform: 'LinkedIn',
      date: '2024-11-10',
      description: 'Advanced React patterns and techniques for building performant user interfaces with optimal rendering strategies.',
      link: '#',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'DevOps Best Practices for Startups',
      platform: 'LinkedIn',
      date: '2024-10-22',
      description: 'Practical guide to implementing DevOps practices in startup environments with limited resources and team size.',
      link: '#',
      icon: <Linkedin className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge and insights from my journey in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${post.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {post.icon}
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-medium">{post.platform}</span>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {post.description}
              </p>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
              >
                Read More
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://linkedin.com/in/timothy-kariuki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            View All Articles on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;