
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import PageWrapper from "./components/PageWrapper";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import LocalServices from "./pages/LocalServices.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

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

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageWrapper>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/location" element={<LocalServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </PageWrapper>
      <Footer />
    </div>
  );
};

// Using HashRouter instead of BrowserRouter for mobile compatibility
const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <LoadingProvider>
            <AppContent />
          </LoadingProvider>
        </HashRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
