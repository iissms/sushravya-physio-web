
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';

export const ContactSection = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <section id="contact" className="py-20 bg-[#F7F9FC]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004F71] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#1C1C1C] max-w-2xl mx-auto">
            Ready to start your journey to better health? Contact me today to schedule your consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-[#004F71]">
                  <MapPin className="mr-3 text-[#8EC9DC]" />
                  Clinic Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#1C1C1C] mb-4">
                  123 Health Street, Medical Complex<br />
                  Bangalore, Karnataka 560001<br />
                  India
                </p>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#004F71] text-lg">
                    <Phone className="mr-2 text-[#8EC9DC]" size={20} />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#1C1C1C]">
                    Phone: +91 98765 43210<br />
                    Email: dr.sushravya@example.com
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#004F71] text-lg">
                    <Clock className="mr-2 text-[#8EC9DC]" size={20} />
                    Timing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#1C1C1C]">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#004F71]">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-[#004F71] hover:bg-[#8EC9DC] transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    Book Appointment Online
                  </Button>
                  
                  <Button 
                    onClick={() => window.open('tel:+919876543210')}
                    variant="outline"
                    className="w-full border-[#8EC9DC] text-[#004F71] hover:bg-[#8EC9DC] hover:text-white transition-all duration-300"
                    size="lg"
                  >
                    Call Now
                  </Button>

                  <Button 
                    onClick={() => window.open('https://wa.me/919876543210?text=Hi%20Dr.%20Sushravya,%20I%20would%20like%20to%20book%20an%20appointment', '_blank')}
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
                    size="lg"
                  >
                    WhatsApp Chat
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-[#8EC9DC]/10 rounded-lg">
                  <h4 className="font-semibold text-[#004F71] mb-2">Emergency Contact</h4>
                  <p className="text-sm text-[#1C1C1C]">
                    For urgent consultations outside clinic hours, please call or WhatsApp. 
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} />
      )}
    </section>
  );
};
