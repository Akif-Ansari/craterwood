import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Map = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Workshop</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come see our craftsmanship firsthand. We'd love to show you our workshop 
            and discuss your project in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Craft Street, Woodville, CA 90210</p>
                    <p className="text-gray-600">Near Central Park, opposite City Mall</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568 (Workshop)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@craftwood.com</p>
                    <p className="text-gray-600">quotes@craftwood.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gray-300 rounded-xl h-[600px] flex items-center justify-center">
              {/* Placeholder for Google Maps */}
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-medium">Interactive Map</p>
                <p className="text-gray-500">Google Maps integration would go here</p>
                <p className="text-gray-500 mt-2">123 Craft Street, Woodville, CA 90210</p>
              </div>
            </div>
            
            {/* Map Overlay with Business Info */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <h5 className="font-semibold text-gray-900 mb-2">CraftWood Workshop</h5>
              <p className="text-sm text-gray-600 mb-2">123 Craft Street, Woodville</p>
              <div className="flex items-center space-x-2 text-sm text-amber-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Open Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;