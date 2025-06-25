
import React from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#004F71] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dr. Sushravya</h3>
            <p className="text-[#8EC9DC] mb-6">
              Your Personal Physiotherapy Expert
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-[#8EC9DC]" />
                <span className="text-sm">123 Health Street, Bangalore, Karnataka 560001</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-[#8EC9DC]" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-3 text-[#8EC9DC]" />
                <span className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-sm hover:text-[#8EC9DC] transition-colors">Home</a>
              <a href="#about" className="block text-sm hover:text-[#8EC9DC] transition-colors">About</a>
              <a href="#services" className="block text-sm hover:text-[#8EC9DC] transition-colors">Services</a>
              <a href="#testimonials" className="block text-sm hover:text-[#8EC9DC] transition-colors">Testimonials</a>
              <a href="#contact" className="block text-sm hover:text-[#8EC9DC] transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-sm">Back Pain Treatment</p>
              <p className="text-sm">Sports Injury Recovery</p>
              <p className="text-sm">Posture Correction</p>
              <p className="text-sm">Joint Mobility</p>
              <p className="text-sm">Neurological Rehabilitation</p>
              <p className="text-sm">Women's Health Physiotherapy</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8EC9DC]/30 mt-8 pt-8 text-center">
          <p className="text-sm text-[#8EC9DC]">
            © 2024 Dr. Sushravya Physiotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
