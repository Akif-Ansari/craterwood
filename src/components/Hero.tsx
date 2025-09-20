import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23D4A574%22 fill-opacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <span className="text-amber-700 font-medium">Rated 5/5 by 200+ clients</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting 
              <span className="text-amber-600"> Dreams</span> 
              <br />Into Reality
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your space with our premium modular furniture solutions. 
              From kitchens that inspire culinary creativity to wardrobes that 
              organize your life beautifully—we bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Our Work
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-600">15+</span>
                </div>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-600">500+</span>
                </div>
                <span>Projects Done</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Kitchen Design"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Project Completed</p>
                    <p className="text-sm text-gray-600">Modern Modular Kitchen</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-amber-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;