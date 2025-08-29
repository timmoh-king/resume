import React from 'react';
import { User, Briefcase, Building, Mail, Phone } from 'lucide-react';

const References: React.FC = () => {
  const references = [
    {
      name: 'Austin Kinara',
      title: 'Business Analyst',
      company: 'Creative Bits Company',
      email: 'austin.kinara@creativebits.com',
      phone: '+254 712 345 678',
      avatar: 'AK',
      description: 'Worked closely on multiple projects involving business process optimization and system analysis.'
    },
    {
      name: 'Steve Mwangi',
      title: 'Lead Software Engineer',
      company: 'Creative Bits AI',
      email: 'steve.mwangi@creativebitsai.com',
      phone: '+254 723 456 789',
      avatar: 'SM',
      description: 'Direct technical supervisor who mentored my growth in full-stack development and cloud architecture.'
    },
    {
      name: 'David Kariuki',
      title: 'CEO',
      company: 'Glowbal Digital',
      email: 'david@glowbaldigital.com',
      phone: '+254 734 567 890',
      avatar: 'DK',
      description: 'Collaborated on digital transformation projects and enterprise application development initiatives.'
    },
  ];

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional References
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted professionals who can speak to my technical abilities and work ethic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <div
              key={reference.name}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reference.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {reference.name}
                </h3>
                <div className="flex items-center justify-center text-blue-600 mb-1">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span className="font-medium">{reference.title}</span>
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="text-sm">{reference.company}</span>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                {reference.description}
              </p>

              <div className="space-y-3 border-t pt-6">
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Mail className="h-4 w-4 mr-3" />
                  <a href={`mailto:${reference.email}`} className="text-sm hover:underline">
                    {reference.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Phone className="h-4 w-4 mr-3" />
                  <a href={`tel:${reference.phone}`} className="text-sm hover:underline">
                    {reference.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;