import React, { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Modular Kitchen",
      category: "kitchen",
      price: "$8,500",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Sleek L-shaped kitchen with quartz countertops and soft-close cabinets"
    },
    {
      id: 2,
      title: "Walk-in Wardrobe",
      category: "wardrobe",
      price: "$6,200",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Spacious walk-in closet with LED lighting and custom shelving"
    },
    {
      id: 3,
      title: "Executive Office Desk",
      category: "office",
      price: "$2,800",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Solid wood executive desk with built-in storage and cable management"
    },
    {
      id: 4,
      title: "Living Room Entertainment Unit",
      category: "living",
      price: "$4,500",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom entertainment center with hidden storage and LED backlighting"
    },
    {
      id: 5,
      title: "Minimalist Kitchen Design",
      category: "kitchen",
      price: "$12,000",
      image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Clean lines with handleless cabinets and marble countertops"
    },
    {
      id: 6,
      title: "Bedroom Storage Solutions",
      category: "wardrobe",
      price: "$3,800",
      image: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Built-in wardrobes with sliding doors and interior organizers"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'wardrobe', name: 'Wardrobes' },
    { id: 'office', name: 'Office' },
    { id: 'living', name: 'Living Room' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of beautiful furniture pieces that showcase our 
            commitment to quality craftsmanship and innovative design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-amber-100 transition-colors duration-200">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-amber-100 transition-colors duration-200">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-lg font-bold text-gray-900">{project.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                
                <button className="mt-4 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;