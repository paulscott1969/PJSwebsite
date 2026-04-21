import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StructuredData from './components/StructuredData';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const BoilerRepairServicing = lazy(() => import('./pages/BoilerRepairServicing'));
const EmergencyPlumberLiverpool = lazy(() => import('./pages/EmergencyPlumberLiverpool'));
const GasSafetyCertificateLiverpool = lazy(() => import('./pages/GasSafetyCertificateLiverpool'));
const Heating = lazy(() => import('./pages/Heating'));
const Plumbing = lazy(() => import('./pages/Plumbing'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const EmergencyPlumberHuyton = lazy(() => import('./pages/EmergencyPlumberHuyton'));
const EmergencyPlumberPrescot = lazy(() => import('./pages/EmergencyPlumberPrescot'));
const BoilerRepairKnowsley = lazy(() => import('./pages/BoilerRepairKnowsley'));
const BoilerRepairHuyton = lazy(() => import('./pages/BoilerRepairHuyton'));

// Simple loading fallback
const PageLoader = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-white">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent shadow-lg"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <StructuredData />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="service-areas" element={<ServiceAreas />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="boiler-repair-servicing" element={<BoilerRepairServicing />} />
            <Route path="emergency-plumber-liverpool" element={<EmergencyPlumberLiverpool />} />
            <Route path="gas-safety-certificate-liverpool" element={<GasSafetyCertificateLiverpool />} />
            <Route path="heating" element={<Heating />} />
            <Route path="plumbing" element={<Plumbing />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="emergency-plumber-huyton" element={<EmergencyPlumberHuyton />} />
            <Route path="emergency-plumber-prescot" element={<EmergencyPlumberPrescot />} />
            <Route path="boiler-repair-knowsley" element={<BoilerRepairKnowsley />} />
            <Route path="boiler-repair-huyton" element={<BoilerRepairHuyton />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
