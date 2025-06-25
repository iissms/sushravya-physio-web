
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

export const MobileActionBar = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40">
      <div className="flex">
        <Button
          onClick={() => window.open('tel:+919876543210')}
          className="flex-1 bg-[#004F71] hover:bg-[#8EC9DC] rounded-none h-14 flex items-center justify-center space-x-2"
        >
          <Phone size={20} />
          <span>Call Now</span>
        </Button>
        <Button
          onClick={scrollToContact}
          className="flex-1 bg-[#8EC9DC] hover:bg-[#004F71] rounded-none h-14 flex items-center justify-center space-x-2"
        >
          <Calendar size={20} />
          <span>Book</span>
        </Button>
      </div>
    </div>
  );
};
