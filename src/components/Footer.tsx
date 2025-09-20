import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Hammer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Hammer className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">CraftWood</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting beautiful, functional furniture for over 15 years. We specialize in 
              modular kitchens, wardrobes, and custom woodwork that transforms your space 
              into something extraordinary.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors duration-200">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="/blogs" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">info@craftwood.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <span className="text-gray-300">123 Craft Street, Woodville, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 CraftWood. All rights reserved. | Built with passion for craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;