import React from 'react';
import { HeroSection } from '../components/HeroSection.jsx';
import { AboutSection } from '../components/AboutSection.jsx';
import { ServicesSection } from '../components/ServicesSection.jsx';
import { ProcessSection } from '../components/ProcessSection.jsx';
import { TestimonialSection } from '../components/TestimonialSection.jsx';
import { FaqSection } from '../components/FaqSection.jsx';
import { ContactSection } from '../components/ContactSection.jsx';

export const HomePage = ({
  onOpenConsultation,
  onOpenCalculator,
  onSelectService
}) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        onOpenConsultation={() => onOpenConsultation('General Visa Inquiry')}
        onOpenCalculator={onOpenCalculator}
      />

      {/* About Section with Stats */}
      <AboutSection
        onOpenConsultation={() => onOpenConsultation('Comprehensive Assessment')}
        onExploreServices={scrollToServices}
      />

      {/* Services Section */}
      <ServicesSection
        onSelectService={onSelectService}
      />

      {/* Process Section with 3-Step Timeline */}
      <ProcessSection
        onOpenConsultation={() => onOpenConsultation('Step 1 Consultation')}
      />

      {/* Testimonials Review Section */}
      <TestimonialSection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Contact Section with Dubai Map & Lead Form */}
      <ContactSection />
    </>
  );
};
