import React from 'react';
import { ChefHat, Home, Briefcase, Palette, Sofa, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      description: "Custom-designed kitchens that blend functionality with style. Premium materials and smart storage solutions.",
      features: ["L-shaped & U-shaped layouts", "Soft-close hinges", "Modular storage solutions", "Premium countertops"]
    },
    {
      icon: Home,
      title: "Wardrobes & Closets",
      description: "Spacious, organized storage solutions tailored to your lifestyle and space requirements.",
      features: ["Walk-in closets", "Sliding door systems", "Custom compartments", "LED lighting integration"]
    },
    {
      icon: Briefcase,
      title: "Office Furniture",
      description: "Productive workspaces with ergonomic design and professional aesthetics for modern offices.",
      features: ["Executive desks", "Meeting room tables", "Storage cabinets", "Reception counters"]
    },
    {
      icon: Sofa,
      title: "Living Room Sets",
      description: "Comfortable and stylish furniture pieces that create the perfect gathering space for your family.",
      features: ["Custom sofas", "Entertainment units", "Coffee tables", "Storage ottomans"]
    },
    {
      icon: Palette,
      title: "Home Décor",
      description: "Unique decorative pieces and custom installations that add character to your living spaces.",
      features: ["Wall panels", "Decorative shelving", "Room dividers", "Custom artwork frames"]
    },
    {
      icon: TreePine,
      title: "Outdoor Furniture",
      description: "Weather-resistant outdoor furniture that extends your living space to gardens and patios.",
      features: ["Garden benches", "Deck furniture", "Pergolas", "Outdoor dining sets"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Craftsmanship Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive woodworking services 
            that transform your space with quality, precision, and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-amber-200 group"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-amber-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;