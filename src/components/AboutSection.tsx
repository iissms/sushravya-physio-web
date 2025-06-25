
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const qualifications = [
  "Bachelor of Physiotherapy (BPT)",
  "Master of Physiotherapy (MPT) - Orthopedics",
  "Certified Manual Therapist",
  "Sports Physiotherapy Specialist",
  "Dry Needling Certification"
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "1000+", label: "Patients Treated" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F9FC]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#004F71] mb-6">
              About Dr. Sushravya
            </h2>
            <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
              With over 15 years of dedicated experience in physiotherapy, I am passionate about 
              helping individuals reclaim their mobility, strength, and quality of life. My approach 
              combines evidence-based treatments with personalized care to ensure the best outcomes 
              for each patient.
            </p>
            <p className="text-lg text-[#1C1C1C] mb-8 leading-relaxed">
              I specialize in orthopedic and sports physiotherapy, with additional expertise in 
              neurological rehabilitation and women's health. My goal is to not just treat symptoms, 
              but to address the root cause and empower you with knowledge for long-term wellness.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#004F71] mb-4">
                Qualifications & Certifications
              </h3>
              <div className="space-y-2">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#8EC9DC] rounded-full mr-3"></span>
                    <span className="text-[#1C1C1C]">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#004F71]">{stat.number}</div>
                  <div className="text-sm text-[#1C1C1C]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#004F71] mb-4">
                  My Philosophy
                </h3>
                <p className="text-[#1C1C1C] italic">
                  "Every patient is unique, and so should be their treatment. I believe in 
                  combining clinical expertise with compassionate care to help you achieve 
                  your health goals and live life to the fullest."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#8EC9DC] to-[#004F71] text-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Treatment Approach
                </h3>
                <ul className="space-y-2">
                  <li>• Comprehensive assessment and diagnosis</li>
                  <li>• Personalized treatment plans</li>
                  <li>• Patient education and empowerment</li>
                  <li>• Evidence-based interventions</li>
                  <li>• Ongoing support and follow-up</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
