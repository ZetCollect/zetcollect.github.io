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
import Articles from './components/Articles';
import EventsPage from './components/Events';
import AboutUsPage from './components/AboutUsPage';
import TrainingAndCertificationPage from './components/TrainingAndCertificationPage';
import OnboardingCoursePage from './components/OnboardingCoursePage';
import ProductKnowledgeCoursePage from './components/ProductKnowledgeCoursePage';
import CourseLessonPage from './components/CourseLessonPage';
import Pricing from './components/Pricing';
import CustomerStory from './components/CustomerStory';
import MicrofinancesStory from './components/MicrofinancesStory';

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
            <Route path="/contact-page" element={<ContactPage id="ContactPage" />} />
            <Route path="/faq-page" element={<FAQPage id="FAQPage" />} />
            <Route path="/release-notes-page" element={<ReleaseNotesPage id="ReleaseNotesPage" />} />
            <Route path="/work-in-progress-page" element={<WorkInProgressPage id="WorkInProgressPage" />} />
            <Route path="/customer-support-page" element={<CustomerSupportPage id="CustomerSupportPage" />} />
            <Route path="/articles" element={<Articles id="ArticlesPage" />} />
            <Route path="/events" element={<EventsPage id="Events" />} />
            <Route path="/about-us" element={<AboutUsPage id="AboutUs" />} />
            <Route path="/pricing" element={<Pricing id="Pricing" />} />
            <Route path="/training-and-certification" element={<TrainingAndCertificationPage id="TrainingAndCertificationPage" />} />
            <Route path="/training/onboarding" element={<OnboardingCoursePage />} />
            <Route path="/training/product-knowledge" element={<ProductKnowledgeCoursePage />} />
            <Route path="/course-lesson/:lessonId" element={<CourseLessonPage />} />
            <Route path="/customer-story" element={<CustomerStory />} />
            <Route path="/customer-story/microfinances" element={<MicrofinancesStory />} />
            <Route path="/customer-story/:id" element={<CustomerStory />} />
            {/* Catch-all route for any undefined paths (404 page) */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;