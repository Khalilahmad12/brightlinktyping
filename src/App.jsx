import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.jsx';
import { ConsultationModal } from './components/ConsultationModal.jsx';
import { VisaCalculatorModal } from './components/VisaCalculatorModal.jsx';
import { MedicalFinderModal } from './components/MedicalFinderModal.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';

import { HomePage } from './pages/HomePage.jsx';
import { FamilyVisaPage } from './pages/FamilyVisaPage.jsx';
import { GoldenVisaPage } from './pages/GoldenVisaPage.jsx';
import { VisaCalculatorPage } from './pages/VisaCalculatorPage.jsx';
import { MedicalFinderPage } from './pages/MedicalFinderPage.jsx';
import { PassportServicesPage } from './pages/PassportServicesPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
        {/* Sticky Header with all navbar page links */}
        <Header
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenConsultation={handleOpenConsultation}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                  onSelectService={(service) => setSelectedService(service)}
                />
              }
            />

            <Route
              path="/family-visa"
              element={
                <FamilyVisaPage
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />

            <Route
              path="/golden-visa"
              element={
                <GoldenVisaPage
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />

            <Route
              path="/visa-calculator"
              element={
                <VisaCalculatorPage
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />

            <Route
              path="/medical-finder"
              element={
                <MedicalFinderPage
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />

            <Route
              path="/passport-services"
              element={
                <PassportServicesPage
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenConsultation={handleOpenConsultation}
                  onOpenCalculator={() => setIsCalculatorOpen(true)}
                  onSelectService={(service) => setSelectedService(service)}
                />
              }
            />
          </Routes>
        </main>

        {/* Multi-Column Footer */}
        <Footer
          onOpenConsultation={handleOpenConsultation}
          onOpenService={handleOpenServiceById}
        />

        {/* Floating WhatsApp Action */}
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
    </BrowserRouter>
  );
}
