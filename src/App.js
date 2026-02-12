import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import StatusNavbar from './components/ZetCollectStatus/StatusNavbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import WhyZetCollectSection from './components/WhyZetCollectSection';
import DemoSection from './components/DemoSection';
import UpcomingFeaturesSection from './components/UpcomingFeaturesSection';
import {ContactUs, ContactPage} from './components/ContactPage';
import FAQPage from './components/FAQPage';
import ReleaseNotesPage from './components/ReleaseNotesPage';
import WorkInProgressPage from './components/WorkInProgressPage';
import CustomerSupportPage from './components/CustomerSupport/CustomerSupportPage';
import Articles from './components/Articles/Articles';
import BlogPost from './components/Articles/BlogPost';
import EventsPage from './components/EventsandWebinars/Events';
import AboutUsPage from './components/AboutUsPage';
import TrainingAndCertificationPage from './components/Training/TrainingAndCertificationPage';
import OnboardingCoursePage from './components/Training/OnboardingCoursePage';
import ProductKnowledgeCoursePage from './components/Training/ProductKnowledgeCoursePage';
import CourseLessonPage from './components/Training/CourseLessonPage';
import Pricing from './components/Pricing';
import CustomerStory from './components/CustomerStory/CustomerStory';
import CustomerSuccessStories from './components/CustomerStory/CustomerSuccessStories';
import SecurityCoursePage from './components/Training/SecurityCoursePage';
import ZetCollectStatus from './components/ZetCollectStatus/ZetCollectStatus';
import StatusMaintainance from './components/ZetCollectStatus/StatusMaintainance';
import Error404 from './components/Error404';

// Component to handle scrolling for section routes
const HomeWithScroll = ({ sectionId }) => {
  const location = useLocation();

  useEffect(() => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId, location]);

  return (
    <>
      <Hero id="hero" />
      <KeyFeatures id="features" />
      <WhyZetCollectSection id="why-zetcollect" />
      <DemoSection id="demo" />
      <UpcomingFeaturesSection id="upcoming" />
      <ContactUs id="contactUs" />
    </>
  );
};

// Main App Content with conditional navbar
const AppContent = () => {
  const location = useLocation();
  // Use StatusNavbar for both status page and upcoming maintenance page
  const isStatusNavbar = location.pathname === '/zetcollect-status' || 
                        location.pathname === '/upcoming-maintainance';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditional Navbar */}
      {isStatusNavbar ? <StatusNavbar /> : <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeWithScroll sectionId="hero" />} />
          <Route path="/features" element={<HomeWithScroll sectionId="features" />} />
          <Route path="/why-zetcollect" element={<HomeWithScroll sectionId="why-zetcollect" />} />
          <Route path="/demo" element={<HomeWithScroll sectionId="demo" />} />
          <Route path="/upcoming" element={<HomeWithScroll sectionId="upcoming" />} />
          <Route path="/contactUs" element={<HomeWithScroll sectionId="contactUs" />} />
          <Route path="/contact-page" element={<ContactPage id="ContactPage" />} />
          <Route path="/faq-page" element={<FAQPage id="FAQPage" />} />
          <Route path="/release-notes-page" element={<ReleaseNotesPage id="ReleaseNotesPage" />} />
          <Route path="/work-in-progress-page" element={<WorkInProgressPage id="WorkInProgressPage" />} />
          <Route path="/customer-support-page" element={<CustomerSupportPage id="CustomerSupportPage" />} />
          <Route path="/articles" element={<Articles id="ArticlesPage" />} />
          <Route path="/articles/:id" element={<BlogPost id="BlogPost" />} />
          <Route path="/events" element={<EventsPage id="Events" />} />
          <Route path="/about-us" element={<AboutUsPage id="AboutUs" />} />
          <Route path="/pricing" element={<Pricing id="Pricing" />} />
          <Route path="/zetcollect-status" element={<ZetCollectStatus id="ZetCollectStatus" />} />
          <Route path="/upcoming-maintainance" element={<StatusMaintainance id="StatusMaintainance" />} />
          <Route path="/training-and-certification" element={<TrainingAndCertificationPage id="TrainingAndCertificationPage" />} />
          <Route path="/training/onboarding" element={<OnboardingCoursePage />} />
          <Route path="/training/product-knowledge" element={<ProductKnowledgeCoursePage />} />
          <Route path="/training/security" element={<SecurityCoursePage />} />
          <Route path="/course-lesson/:lessonId" element={<CourseLessonPage />} />
          <Route path="/customer-story" element={<CustomerSuccessStories />} />
          <Route path="/customer-story/:id" element={<CustomerStory />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      
      {/* Footer - same for all pages */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;