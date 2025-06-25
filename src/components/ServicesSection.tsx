
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Chronic Back Pain Treatment",
    description: "Comprehensive assessment and treatment for lower back pain, disc problems, sciatica, and spinal conditions using manual therapy, exercise prescription, and advanced rehabilitation techniques.",
    icon: "🏥",
    features: ["Manual Therapy", "Spinal Mobilization", "Core Strengthening", "Postural Training"],
    duration: "45-60 minutes",
    price: "₹800-1200"
  },
  {
    title: "Sports Injury Rehabilitation",
    description: "Specialized care for athletes and active individuals including ACL injuries, shoulder dislocations, tennis elbow, and performance enhancement programs with return-to-sport protocols.",
    icon: "⚽",
    features: ["Injury Assessment", "Performance Analysis", "Biomechanical Correction", "Return-to-Sport Training"],
    duration: "60-90 minutes",
    price: "₹1000-1500"
  },
  {
    title: "Workplace Ergonomics & Posture",
    description: "Address modern lifestyle issues including tech neck, rounded shoulders, and repetitive strain injuries with ergonomic assessments and corrective exercise programs.",
    icon: "🧘",
    features: ["Workstation Assessment", "Postural Analysis", "Ergonomic Training", "Micro-break Protocols"],
    duration: "45 minutes",
    price: "₹700-1000"
  },
  {
    title: "Joint Mobility & Arthritis Care",
    description: "Specialized treatment for joint stiffness, osteoarthritis, rheumatoid arthritis, and age-related mobility issues using gentle mobilization and therapeutic exercises.",
    icon: "🦴",
    features: ["Joint Mobilization", "Pain Management", "Flexibility Training", "Adaptive Equipment"],
    duration: "45-60 minutes",
    price: "₹800-1200"
  },
  {
    title: "Neurological Rehabilitation",
    description: "Comprehensive care for stroke recovery, Parkinson's disease, multiple sclerosis, and spinal cord injuries focusing on functional improvement and quality of life.",
    icon: "🧠",
    features: ["Gait Training", "Balance Rehabilitation", "Motor Relearning", "Functional Training"],
    duration: "60-90 minutes",
    price: "₹1200-1800"
  },
  {
    title: "Women's Health Physiotherapy",
    description: "Specialized care for pelvic floor dysfunction, pregnancy-related pain, postpartum recovery, and women's specific musculoskeletal issues throughout all life stages.",
    icon: "🤱",
    features: ["Pelvic Floor Therapy", "Prenatal Care", "Postpartum Recovery", "Hormonal Pain Management"],
    duration: "45-60 minutes",
    price: "₹900-1400"
  }
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#004F71] mb-6">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-xl text-[#1C1C1C] max-w-4xl mx-auto leading-relaxed">
            I offer evidence-based physiotherapy treatments tailored to your specific needs. Each treatment plan 
            is personalized based on thorough assessment, your lifestyle, and recovery goals to ensure optimal outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 shadow-lg group h-full bg-gradient-to-br from-white to-[#F7F9FC]"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:animate-pulse">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-[#004F71] mb-2">
                  {service.title}
                </CardTitle>
                <div className="flex justify-between text-sm text-[#8EC9DC] font-semibold">
                  <span>{service.duration}</span>
                  <span>{service.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#1C1C1C] text-center leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#004F71] text-sm">Treatment Includes:</h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-[#1C1C1C]">
                      <span className="w-2 h-2 bg-[#8EC9DC] rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-4 bg-[#004F71] hover:bg-[#8EC9DC] transition-all duration-300"
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="bg-gradient-to-r from-[#004F71] to-[#8EC9DC] rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose My Physiotherapy Services?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">1:1</div>
              <h4 className="text-lg font-semibold mb-2">Personalized Care</h4>
              <p className="text-sm opacity-90">Individual attention throughout your treatment journey</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <h4 className="text-lg font-semibold mb-2">Support Available</h4>
              <p className="text-sm opacity-90">WhatsApp consultation for urgent queries</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <h4 className="text-lg font-semibold mb-2">Years Experience</h4>
              <p className="text-sm opacity-90">Extensive clinical experience across all age groups</p>
            </div>
          </div>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-[#004F71] hover:bg-[#F7F9FC] transition-all duration-300 hover:scale-105"
          >
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
};
