import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import WhyZetCollectSection from './components/WhyZetCollectSection';
import DemoSection from './components/DemoSection';
import UpcomingFeaturesSection from './components/UpcomingFeaturesSection';
import ContactUs from './components/ContactUs';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import ReleaseNotesPage from './components/ReleaseNotesPage';
import WorkInProgressPage from './components/WorkInProgressPage';
import CustomerSupportPage from './components/CustomerSupportPage';

const App = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach((anchor) => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero id="hero" />
                  <KeyFeatures id="features" />
                  <WhyZetCollectSection id="why-zetcollect" />
                  <DemoSection id="demo" />
                  <UpcomingFeaturesSection id="upcoming" />
                  <ContactUs id="contactUs" />
                  <Footer id="footer" />
                </>
              }
            />
            <Route path="/ContactPage" element={<ContactPage id="ContactPage" />} />
            <Route path="/FAQPage" element={<FAQPage id="FAQPage" />} />
            <Route path="/Release-notes-page" element={<ReleaseNotesPage id="ReleaseNotesPage" />} />
            <Route path="/Work-in-Progress-Page" element={<WorkInProgressPage id="ReleaseNotesPage" />} />
            <Route path="/Customer-Support-Page" element={<CustomerSupportPage id="CustomerSupportPage" />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;