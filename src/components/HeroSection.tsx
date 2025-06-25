
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#004F71] mb-6 leading-tight">
              Hi, I'm Dr. Sushravya
            </h1>
            <h2 className="text-2xl sm:text-3xl text-[#8EC9DC] mb-6 font-light">
              Your Personal Physiotherapy Expert
            </h2>
            <p className="text-lg text-[#1C1C1C] mb-8 leading-relaxed">
              Dedicated to helping you recover, strengthen, and achieve optimal physical wellness 
              through personalized physiotherapy treatments and evidence-based care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-[#004F71] hover:bg-[#8EC9DC] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Appointment
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-[#8EC9DC] text-[#004F71] hover:bg-[#8EC9DC] hover:text-white transition-all duration-300 hover:scale-105"
              >
                WhatsApp Chat
              </Button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <p className="text-[#004F71] font-medium italic text-lg">
                "Movement is medicine. Every step towards recovery is a step towards a better you."
              </p>
              <p className="text-[#1C1C1C] mt-2">- Dr. Sushravya</p>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="animate-fade-in flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#8EC9DC] to-[#004F71] p-1">
                <div className="w-full h-full rounded-full bg-[#F7F9FC] flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Dr. Sushravya - Physiotherapist"
                    className="w-72 h-72 lg:w-88 lg:h-88 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-[#8EC9DC] text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                15+ Years Experience
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg px-4 py-2 rounded-full text-sm font-medium text-[#004F71]">
                1000+ Happy Patients
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('services')}
            className="animate-bounce text-[#8EC9DC] hover:text-[#004F71] transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
