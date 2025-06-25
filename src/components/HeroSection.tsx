
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Award, Users, Clock } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20Dr.%20Sushravya,%20I%20would%20like%20to%20book%20an%20appointment', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-gradient-to-br from-[#F7F9FC] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#004F71] leading-tight">
                Hi, I'm <span className="text-[#8EC9DC]">Dr. Sushravya</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1C1C1C] font-light leading-relaxed">
                Your Trusted <span className="font-semibold text-[#004F71]">Physiotherapy Expert</span> in Bangalore
              </h2>
              <p className="text-xl text-[#1C1C1C] leading-relaxed max-w-2xl">
                With over 15 years of clinical experience, I specialize in evidence-based physiotherapy treatments 
                that help you recover faster, move better, and live pain-free. From chronic back pain to sports injuries, 
                I'm here to guide you on your journey to optimal health.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">15+</div>
                <div className="text-sm text-[#1C1C1C]">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">2000+</div>
                <div className="text-sm text-[#1C1C1C]">Patients Treated</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <Clock className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">98%</div>
                <div className="text-sm text-[#1C1C1C]">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-[#004F71] hover:bg-[#8EC9DC] transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg px-8 py-4 h-auto"
              >
                Book Your Consultation
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-2 border-[#8EC9DC] text-[#004F71] hover:bg-[#8EC9DC] hover:text-white transition-all duration-300 hover:scale-105 text-lg px-8 py-4 h-auto"
              >
                WhatsApp Consultation
              </Button>
            </div>

            <div className="bg-gradient-to-r from-[#004F71] to-[#8EC9DC] p-6 rounded-2xl text-white shadow-xl">
              <blockquote className="text-xl font-medium italic mb-3">
                "Every patient deserves personalized care. My approach combines the latest physiotherapy techniques 
                with compassionate treatment to help you achieve your health goals."
              </blockquote>
              <cite className="text-[#F7F9FC] font-semibold">- Dr. Sushravya, BPT, MPT (Orthopedics)</cite>
            </div>
          </div>

          {/* Right Content - Professional Image Section */}
          <div className="animate-fade-in flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-gradient-to-br from-[#8EC9DC] to-[#004F71] p-2 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-[#F7F9FC] flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Dr. Sushravya - Professional Physiotherapist"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Professional Credentials Floating Card */}
              <div className="absolute -top-6 -right-6 bg-white shadow-2xl px-6 py-4 rounded-2xl text-center animate-float">
                <div className="text-sm font-semibold text-[#004F71]">Certified</div>
                <div className="text-xs text-[#8EC9DC]">BPT • MPT • Sports Specialist</div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#8EC9DC] text-white px-6 py-4 rounded-2xl text-center shadow-2xl">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Serving Bangalore</div>
              </div>
              
              {/* Success Rate Badge */}
              <div className="absolute top-1/2 -left-8 bg-white shadow-xl px-4 py-3 rounded-full text-center">
                <div className="text-lg font-bold text-[#004F71]">98%</div>
                <div className="text-xs text-[#1C1C1C]">Recovery Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <button 
            onClick={() => scrollToSection('services')}
            className="animate-bounce text-[#8EC9DC] hover:text-[#004F71] transition-colors group"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium group-hover:text-[#004F71]">Explore Services</span>
              <ArrowDown size={32} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
