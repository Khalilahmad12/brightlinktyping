import React, { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.jsx';
import { ConsultationModal } from './components/ConsultationModal.jsx';
import { VisaCalculatorModal } from './components/VisaCalculatorModal.jsx';
import { MedicalFinderModal } from './components/MedicalFinderModal.jsx';

import { HeroSection } from './components/HeroSection.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { ProcessSection } from './components/ProcessSection.jsx';
import { TestimonialSection } from './components/TestimonialSection.jsx';
import { FaqSection } from './components/FaqSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';

import { SERVICES_DATA } from './data/servicesData.js';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isMedicalFinderOpen, setIsMedicalFinderOpen] = useState(false);
  const [consultationDefaultService, setConsultationDefaultService] = useState('Golden Visa');

  const handleOpenConsultation = (serviceName = 'Golden Visa') => {
    setConsultationDefaultService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleOpenServiceById = (serviceId) => {
    const found = SERVICES_DATA.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* Sticky Top Header with Single Page Nav */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenMedicalFinder={() => setIsMedicalFinderOpen(true)}
      />

      {/* Single Home Page Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation('General Visa Inquiry')}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation('Comprehensive Assessment')}
          onExploreServices={scrollToServices}
        />

        {/* Complete Services Showcase (All 12 UAE Services) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 3-Step Process Flow with Skyline Background */}
        <ProcessSection
          onOpenConsultation={() => handleOpenConsultation('Streamlined Process')}
        />

        {/* Client Testimonials */}
        <TestimonialSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact Section with Map & Form */}
        <ContactSection />
      </main>

      {/* Multi-Column Footer with Section Links */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenService={handleOpenServiceById}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenMedicalFinder={() => setIsMedicalFinderOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modals & Interactive Tools */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={(serviceName) => {
          setSelectedService(null);
          handleOpenConsultation(serviceName);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationDefaultService}
      />

      <VisaCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSelectServiceConsultation={(serviceName) => {
          handleOpenConsultation(serviceName);
        }}
      />

      <MedicalFinderModal
        isOpen={isMedicalFinderOpen}
        onClose={() => setIsMedicalFinderOpen(false)}
        onBookMedical={(serviceName) => {
          handleOpenConsultation(serviceName);
        }}
      />
    </div>
  );
}
