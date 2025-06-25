
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: 42,
    condition: "Chronic Lower Back Pain",
    rating: 5,
    text: "After 3 years of chronic back pain that affected my work and family life, Dr. Sushravya's comprehensive treatment approach gave me my life back. Her detailed assessment, personalized exercise program, and manual therapy techniques worked wonders. I'm now pain-free and back to playing cricket with my son!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    treatment: "8 weeks of manual therapy + exercise program",
    profession: "IT Manager"
  },
  {
    name: "Priya Sharma",
    age: 28,
    condition: "ACL Injury Recovery",
    rating: 5,
    text: "As a professional badminton player, my ACL injury was devastating. Dr. Sushravya's sports-specific rehabilitation program not only helped me recover completely but made me stronger than before. Her understanding of sports biomechanics and return-to-sport protocols is exceptional. I'm now back competing at national level!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b293?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    treatment: "12 weeks specialized sports rehabilitation",
    profession: "Professional Athlete"
  },
  {
    name: "Arjun Patel",
    age: 35,
    condition: "Tech Neck & Shoulder Pain",
    rating: 5,
    text: "Working 12-hour days as a software developer gave me severe neck and shoulder pain. Dr. Sushravya not only treated my pain but taught me ergonomics and exercise routines I could do at my desk. Her holistic approach addressing both treatment and prevention is remarkable. My productivity has increased significantly!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    treatment: "6 weeks postural correction + ergonomic training",
    profession: "Software Developer"
  },
  {
    name: "Meera Reddy",
    age: 58,
    condition: "Post-Knee Replacement Recovery",
    rating: 5,
    text: "After my knee replacement surgery, I was worried about mobility and independence. Dr. Sushravya's patient and encouraging approach helped me regain full function. Her expertise in post-surgical rehabilitation and geriatric care is outstanding. I'm now walking 5km daily and feeling more confident than ever!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    treatment: "10 weeks post-surgical rehabilitation",
    profession: "Retired Teacher"
  },
  {
    name: "Ananya Singh",
    age: 31,
    condition: "Pregnancy-Related Back Pain",
    rating: 5,
    text: "During my pregnancy, severe back pain was making daily activities difficult. Dr. Sushravya's prenatal physiotherapy approach was gentle yet effective. She provided safe exercises and techniques that not only relieved my pain but prepared me for labor. Her women's health expertise is truly exceptional!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    treatment: "Prenatal physiotherapy through 2nd & 3rd trimester",
    profession: "Marketing Executive"
  },
  {
    name: "Vikram Joshi",
    age: 45,
    condition: "Frozen Shoulder",
    rating: 5,
    text: "My frozen shoulder was so painful I couldn't sleep or work properly. Dr. Sushravya's combination of manual therapy, specific exercises, and patient education gradually restored my shoulder mobility. Her detailed explanations helped me understand my condition and stay motivated throughout recovery. Highly recommended!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    treatment: "14 weeks manual therapy + mobility program",
    profession: "Business Owner"
  }
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#004F71] mb-6">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto">
            Don't just take my word for it. Here are some inspiring stories from patients who have transformed 
            their lives through personalized physiotherapy care.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-[#F7F9FC] to-white shadow-2xl border-0 min-h-[400px]">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Patient Photo */}
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                  />
                  <h4 className="text-2xl font-bold text-[#004F71]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#8EC9DC] font-medium">
                    {testimonials[currentTestimonial].profession}, Age {testimonials[currentTestimonial].age}
                  </p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gradient-to-r from-[#004F71] to-[#8EC9DC] text-white p-6 rounded-2xl">
                    <h5 className="font-semibold text-lg mb-2">Condition Treated:</h5>
                    <p className="text-xl">{testimonials[currentTestimonial].condition}</p>
                  </div>

                  <blockquote className="text-lg text-[#1C1C1C] italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="bg-[#F7F9FC] p-4 rounded-xl">
                    <p className="text-sm text-[#8EC9DC] font-medium">
                      <strong>Treatment Duration:</strong> {testimonials[currentTestimonial].treatment}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#8EC9DC] hover:bg-[#004F71] text-white p-3 rounded-full transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#8EC9DC] hover:bg-[#004F71] text-white p-3 rounded-full transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-[#004F71]' : 'bg-[#8EC9DC]'
              }`}
            />
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-[#004F71] to-[#8EC9DC] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Treatment Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-lg opacity-90">Patient Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <p className="text-lg opacity-90">Successful Treatments</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-lg opacity-90">Return to Full Activity</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <p className="text-lg opacity-90">Average Patient Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
