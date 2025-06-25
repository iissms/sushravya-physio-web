
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    condition: "Back Pain",
    rating: 5,
    text: "Dr. Sushravya completely transformed my chronic back pain experience. Her personalized approach and expert care helped me return to my active lifestyle within just 2 months.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Priya Sharma",
    condition: "Sports Injury",
    rating: 5,
    text: "As a professional athlete, finding the right physiotherapist was crucial. Dr. Sushravya's expertise in sports rehabilitation got me back to competition faster than I expected.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b293?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Arjun Patel",
    condition: "Posture Issues",
    rating: 5,
    text: "Working from home had severely affected my posture. Dr. Sushravya's corrective exercises and ergonomic advice have made a tremendous difference in my daily comfort.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Meera Reddy",
    condition: "Post-Surgery Recovery",
    rating: 5,
    text: "After my knee surgery, Dr. Sushravya guided me through a comprehensive recovery program. Her patience and expertise made the rehabilitation process smooth and effective.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004F71] mb-4">
            What My Patients Say
          </h2>
          <p className="text-lg text-[#1C1C1C] max-w-2xl mx-auto">
            Real stories from real people who have experienced transformation through personalized physiotherapy care.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#F7F9FC] to-white shadow-xl border-0 min-h-[300px]">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-[#1C1C1C] mb-8 italic leading-relaxed max-w-2xl">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xl font-semibold text-[#004F71]">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-[#8EC9DC]">
                      Treated for {testimonials[currentTestimonial].condition}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#8EC9DC] hover:bg-[#004F71] text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#8EC9DC] hover:bg-[#004F71] text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#004F71]' : 'bg-[#8EC9DC]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
