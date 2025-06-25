
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Back Pain Treatment",
    description: "Comprehensive care for chronic and acute back pain using manual therapy and exercise prescription.",
    icon: "🏥",
    features: ["Manual Therapy", "Exercise Prescription", "Postural Training"]
  },
  {
    title: "Sports Injury Recovery",
    description: "Specialized rehabilitation for athletes and active individuals to return to peak performance.",
    icon: "⚽",
    features: ["Injury Assessment", "Performance Enhancement", "Return to Sport"]
  },
  {
    title: "Posture Correction",
    description: "Address postural imbalances caused by modern lifestyle and work habits.",
    icon: "🧘",
    features: ["Ergonomic Assessment", "Strengthening", "Flexibility Training"]
  },
  {
    title: "Joint Mobility",
    description: "Restore and maintain optimal joint function through targeted interventions.",
    icon: "🦴",
    features: ["Manual Mobilization", "Range of Motion", "Pain Management"]
  },
  {
    title: "Neurological Rehabilitation",
    description: "Specialized care for neurological conditions to improve function and quality of life.",
    icon: "🧠",
    features: ["Motor Retraining", "Balance Training", "Functional Recovery"]
  },
  {
    title: "Women's Health Physiotherapy",
    description: "Specialized care for women's unique physiotherapy needs throughout all life stages.",
    icon: "🤱",
    features: ["Pelvic Floor", "Prenatal Care", "Postpartum Recovery"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004F71] mb-4">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-lg text-[#1C1C1C] max-w-2xl mx-auto">
            Personalized treatment plans designed to address your unique needs and help you achieve optimal health and mobility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 shadow-lg group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:animate-pulse">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-[#004F71]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#1C1C1C] mb-4 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-[#8EC9DC]">
                      <span className="w-2 h-2 bg-[#8EC9DC] rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
