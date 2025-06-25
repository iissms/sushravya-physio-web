
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const qualifications = [
  "Bachelor of Physiotherapy (BPT) - Rajiv Gandhi University of Health Sciences",
  "Master of Physiotherapy (MPT) - Orthopedics & Sports Medicine",
  "Certified Manual Therapist - Kaltenborn-Evjenth Concept",
  "Sports Physiotherapy Specialist - Indian Association of Physiotherapists",
  "Dry Needling & IMS Certification - Western Dry Needling Institute",
  "Mulligan Concept Certification - Brian Mulligan Academy",
  "Ergonomics Assessment Certification - OHSAC"
];

const specializations = [
  "Orthopedic & Musculoskeletal Disorders",
  "Sports Injury Management & Prevention",
  "Workplace Ergonomics & Rehabilitation",
  "Chronic Pain Management",
  "Neurological Rehabilitation",
  "Women's Health & Pelvic Floor Therapy",
  "Geriatric Physiotherapy"
];

const achievements = [
  "Featured Speaker at Karnataka Physiotherapy Conference 2023",
  "Published Research on 'Ergonomics in IT Professionals'",
  "Volunteer Physiotherapist - Bangalore Marathon (2019-2024)",
  "Corporate Wellness Consultant for 50+ Companies",
  "Patient Choice Award - Best Physiotherapist Bangalore 2022"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#F7F9FC]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#004F71] mb-6">
            Meet Dr. Sushravya
          </h2>
          <p className="text-xl text-[#1C1C1C] max-w-3xl mx-auto">
            Your dedicated partner in health and wellness, committed to providing exceptional physiotherapy care with a personal touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#004F71] mb-6 flex items-center">
                <Heart className="mr-3 text-[#8EC9DC]" />
                My Journey & Philosophy
              </h3>
              <div className="space-y-4 text-[#1C1C1C] leading-relaxed">
                <p>
                  Welcome! I'm Dr. Sushravya, and I've dedicated over 15 years of my life to helping people 
                  overcome pain, regain mobility, and achieve their health goals through evidence-based physiotherapy.
                </p>
                <p>
                  My journey began with a simple belief: every individual deserves personalized, compassionate care 
                  that addresses not just their symptoms, but their overall well-being. After completing my Master's 
                  in Orthopedic Physiotherapy, I've continuously pursued advanced certifications to stay at the 
                  forefront of modern rehabilitation techniques.
                </p>
                <p>
                  What sets my practice apart is the combination of clinical expertise with genuine care for each 
                  patient's unique story. Whether you're a weekend warrior dealing with a sports injury, a professional 
                  struggling with workplace-related pain, or someone seeking to age gracefully with optimal mobility, 
                  I'm here to guide you every step of the way.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">15+</div>
                <div className="text-sm text-[#1C1C1C]">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Users className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">2000+</div>
                <div className="text-sm text-[#1C1C1C]">Lives Transformed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <BookOpen className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">7</div>
                <div className="text-sm text-[#1C1C1C]">Specializations</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Heart className="w-8 h-8 text-[#8EC9DC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#004F71]">98%</div>
                <div className="text-sm text-[#1C1C1C]">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#004F71] mb-6">
                  Education & Qualifications
                </h3>
                <div className="space-y-3">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[#8EC9DC] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-[#1C1C1C] text-sm leading-relaxed">{qual}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#8EC9DC] to-[#004F71] text-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Areas of Specialization
                </h3>
                <div className="space-y-3">
                  {specializations.map((spec, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements Section */}
        <Card className="bg-white shadow-xl border-0 overflow-hidden">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold text-[#004F71] mb-8 text-center">
              Professional Achievements & Recognition
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-[#F7F9FC] p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                  <Award className="w-8 h-8 text-[#8EC9DC] mx-auto mb-3" />
                  <p className="text-[#1C1C1C] font-medium text-sm leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Personal Touch */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-[#004F71] to-[#8EC9DC] text-white shadow-2xl border-0 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <blockquote className="text-2xl font-medium italic mb-6">
                "My mission is simple: to help you live your life without limitations. Every treatment plan I create 
                is tailored specifically to your needs, lifestyle, and goals. Together, we'll not just address your 
                current concerns, but build a foundation for long-term wellness."
              </blockquote>
              <cite className="text-xl font-semibold">- Dr. Sushravya</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
