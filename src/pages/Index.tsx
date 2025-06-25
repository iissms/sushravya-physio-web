
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { MobileActionBar } from '@/components/MobileActionBar';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
