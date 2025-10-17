import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {LanguageProvider} from "./contexts/LanguageContext";
import {LoadingProvider} from "./contexts/LoadingContext";
import PageWrapper from "./components/PageWrapper";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import LocalServices from "./pages/LocalServices.tsx";
import Privacy from './pages/Privacy.tsx';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import Terms from '@/pages/Terms.tsx';
import Imprint from '@/pages/Imprint.tsx';
import CookieConsent from "./components/CookieConsent";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, [pathname]);

  if (loading) {
    return <LoadingSpinner />;
  }
}

// Redirect .html URLs to their non-.html equivalents
const HtmlRedirect = () => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    
    // Handle index.html specifically - redirect to homepage
    if (path === '/index.html') {
      window.location.replace('/');
      return;
    }
    
    // Handle all other .html URLs
    if (path.endsWith('.html')) {
      const newPath = path.replace(/\.html$/, '') || '/';
      window.location.replace(newPath);
    }
  }, [location.pathname]);

  return null;
}

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden md:overflow-x-visible">
      <HtmlRedirect />
      <Navbar />
      <PageWrapper>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/location" element={<LocalServices />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </PageWrapper>
      <Footer />
      {/* <CookieConsent /> */}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <LoadingProvider>
            <AppContent />
          </LoadingProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
