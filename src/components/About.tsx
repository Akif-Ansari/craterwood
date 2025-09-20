import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Projects Completed", value: "1200+" },
    { icon: Heart, label: "Customer Satisfaction", value: "98%" }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "Master Craftsman & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "With 15 years of experience in fine woodworking, Michael founded CraftWood with a vision to bring artisanal quality to modern furniture."
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Sarah brings 8 years of interior design expertise, ensuring every piece perfectly complements your space and lifestyle."
    },
    {
      name: "David Kumar",
      role: "Installation Manager",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "David oversees all installations with meticulous attention to detail, ensuring flawless finishing on every project."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Crafting Excellence Since 2009
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At CraftWood, we believe that furniture is more than just functional pieces—it's 
              an extension of your personality and lifestyle. For over 15 years, we've been 
              transforming houses into homes with our bespoke modular furniture solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our journey started in a small workshop with a simple philosophy: combine 
              traditional craftsmanship with modern design to create furniture that lasts 
              generations. Today, we're proud to serve clients across the region with our 
              comprehensive range of services.
            </p>
            
            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Craftsmanship</h4>
                  <p className="text-gray-600">Every piece is handcrafted with precision and attention to detail.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sustainable Materials</h4>
                  <p className="text-gray-600">We source eco-friendly materials to protect our planet.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Customer-Centric Approach</h4>
                  <p className="text-gray-600">Your satisfaction is our priority, from design to installation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5974074/pexels-photo-5974074.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Craftsman at work"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-200 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate craftsmen bring decades of combined experience to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Let's discuss your vision and bring it to life with our expertise and passion for craftsmanship.
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;