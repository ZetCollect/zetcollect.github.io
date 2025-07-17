import React, { useState } from 'react';
import {
  Globe,
  Shield,
  Smartphone,
  Settings,
  Plug,
  BarChart3,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  XCircle // Import XCircle for the close button
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyZetCollectSection = () => {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const differentiators = [
    {
      icon: Globe,
      title: t('why.africa.title') || 'Africa-Focused',
      description: t('why.africa.desc') || 'Designed specifically for African financial institutions, addressing unique regional challenges. ZetCollect understands the diverse economic landscapes and regulatory environments across Africa, ensuring that its features are not just functional but also culturally and economically relevant. This deep understanding allows for seamless integration into local financial ecosystems, making collections more efficient and secure in varied African contexts.',
      image: '🌍',
    },
    {
      icon: Shield,
      title: t('why.fraud.title') || 'Fraud Prevention',
      description: t('why.fraud.desc') || 'Advanced security features to protect your transactions and data. ZetCollect employs multi-layered encryption, real-time transaction monitoring, and biometric authentication options to safeguard against unauthorized access and fraudulent activities. Our robust security protocols are constantly updated to combat evolving cyber threats, providing financial institutions with peace of mind and ensuring the integrity of every collection.',
      image: '🛡️',
    },
    {
      icon: Smartphone,
      title: t('why.mobile.title') || 'Mobile-First',
      description: t('why.mobile.desc') || 'Optimized for mobile use, ensuring accessibility in low-connectivity areas. The intuitive mobile application allows agents to conduct transactions offline, with data syncing automatically once connectivity is restored. This design caters to the realities of varied network conditions in Africa, ensuring that collection operations remain uninterrupted and efficient, regardless of location or signal strength.',
      image: '📱',
    },
    {
      icon: Settings,
      title: t('why.customizable.title') || 'Customizable',
      description: t('why.customizable.desc') || 'Tailor the platform to meet your specific operational needs. ZetCollect offers a flexible architecture that allows financial institutions to customize workflows, reporting templates, and user roles. This adaptability ensures that the system aligns perfectly with existing business processes and can evolve as your operational requirements change, providing a truly bespoke solution.',
      image: '⚙️',
    },
    {
      icon: Plug,
      title: t('why.integrable.title') || 'Integrable',
      description: t('why.integrable.desc') || 'Seamlessly integrates with your existing systems and workflows. ZetCollect provides robust APIs and connector tools that facilitate smooth data exchange with core banking systems, accounting software, and CRM platforms. This reduces manual data entry, minimizes errors, and creates a unified operational view, enhancing overall efficiency and data accuracy.',
      image: '🔌',
    },
    {
      icon: BarChart3,
      title: t('why.data.title') || 'Data-Driven',
      description: t('why.data.desc') || 'Powerful analytics to drive informed decision-making. ZetCollect’s dashboard provides real-time insights into collection performance, agent productivity, and geographical trends. This data-driven approach empowers institutions to identify bottlenecks, optimize routes, forecast collection patterns, and make strategic decisions that enhance profitability and operational efficiency.',
      image: '📊',
    },
  ];

  const testimonials = [
    {
      quote: "ZetCollect has transformed our daily cash collection operations. The offline capability is crucial for our rural branches, and the fraud prevention features give us complete peace of mind.",
      author: "Jason Mwangi",
      title: "Operations Director, Kenya Microfinance",
      country: "Kenya",
      initials: "JM"
    },
    {
      quote: "The mobile interface of ZetCollect is a game-changer for our field agents. It’s intuitive and reliable, even in areas with poor connectivity.",
      author: "Marie Ndong",
      title: "Branch Manager, Gabon Savings Bank",
      country: "Gabon",
      initials: "MN"
    },
    {
      quote: "With ZetCollect, we’ve streamlined our collection process and reduced errors significantly. The analytics dashboard provides insights we never had before.",
      author: "Pauline Eto",
      title: "Finance Lead, Cameroon Credit Union",
      country: "Cameroon",
      initials: "PE"
    },
    {
      quote: "ZetCollect’s fraud prevention tools have protected our operations, and the customizable features allow us to tailor it to our needs.",
      author: "Samuel Ngu",
      title: "CEO, Cameroon Microfinance Co.",
      country: "Cameroon",
      initials: "SN"
    },
    {
      quote: "The real-time tracking in ZetCollect has improved our efficiency and accountability across multiple branches.",
      author: "Esther Mbi",
      title: "Operations Manager, Cameroon Rural Bank",
      country: "Cameroon",
      initials: "EM"
    }
  ];

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: '', description: '' }); // Clear content on close
  };

  return (
    <section id="why-zetcollect" className="py-16 bg-gray-50 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            {t('why.title') || 'Why Choose ZetCollect'}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {t('why.subtitle') || 'Discover how ZetCollect empowers financial institutions with cutting-edge solutions tailored for Africa.'}
          </p>
        </div>

        {/* Differentiators Grid - Modern Card Design */}
        <div className="grid grid-cols-1 gap-10 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-10 transition-all duration-300 bg-white shadow-2xl rounded-2xl hover:-translate-y-2 hover:shadow-3xl custom-shadow-strong"
              >
                {/* Icon and Title */}
                <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-primary bg-opacity-10">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                {/* Justify the description text in the card */}
                {/* Remove text-center if it was previously there, as text-justify will override or conflict */}
                <p className="mb-6 text-base leading-relaxed text-justify text-gray-600">
                  {item.description.length > 150 ? item.description.substring(0, 150) + '...' : item.description}
                </p>
                {/* Read More Button - now opens modal and is aligned right */}
                <div className="w-full text-right">
                  <button
                    onClick={() => openModal(item.title, item.description)}
                    className="inline-flex items-center space-x-2 font-semibold transition-colors text-secondary hover:text-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Carousel - Modern and Compact Design */}
        <div className="relative p-6 text-white shadow-lg lg:p-8 bg-secondary/80 rounded-xl">
          <div className="max-w-3xl mx-auto">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 mx-auto mb-6 text-Complementary opacity-70" />

            {/* Current Testimonial */}
            <div className="text-center transition-all duration-500 ease-in-out opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
              <blockquote className="mb-6 text-xl font-semibold leading-relaxed lg:text-2xl">
                {testimonials[activeTestimonial].quote}
              </blockquote>
              <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <div className="flex items-center justify-center w-12 h-12 text-base font-bold bg-white rounded-full shadow-sm text-primary">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-base font-semibold text-white">{testimonials[activeTestimonial].author}</div>
                  <div className="text-sm text-gray-600">{testimonials[activeTestimonial].title}</div>
                  <div className="text-xs text-gray-600">{testimonials[activeTestimonial].country}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 p-2 transition-colors -translate-y-1/2 bg-gray-800 rounded-full shadow-sm text-secondary sm:-left-8 top-1/2 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 p-2 transition-colors -translate-y-1/2 bg-gray-800 rounded-full shadow-sm text-secondary sm:-right-8 top-1/2 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-primary scale-125' : 'bg-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-Complementary`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Modal Component --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div
            className="relative w-full max-w-lg p-8 m-4 bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              onClick={closeModal}
              className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 focus:outline-none"
              aria-label="Close modal"
            >
              <XCircle className="w-6 h-6" />
            </button>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {modalContent.title}
            </h2>
            {/* Justify the description text in the modal */}
            <p className="leading-relaxed text-justify text-gray-700">
              {modalContent.description}
            </p>
          </div>
        </div>
      )}

      {/* Custom Styles for Drop Shadow and Fade-In */}
      <style>{`
        /* Defining a custom shadow with a blue tint for a visible drop shadow */
        .custom-shadow-strong {
          /* Using a blue color (e.g., from a standard blue-500) for the shadow */
          box-shadow: 0 25px 50px -12px rgba(0, 184, 148, 0.2);
        }

        /* Defining a custom hover shadow with a slightly stronger blue tint for a pronounced effect on hover */
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(59, 130, 246, 0.3);
        }

        /* Custom Animation for Fade-In */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default WhyZetCollectSection;