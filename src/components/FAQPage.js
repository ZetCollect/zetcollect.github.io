import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const FAQPage = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq.questions.product_infoA'),
      answer: t('faq.answers.product_infoA'),
    },
    {
      question: t('faq.questions.product_infoB'),
      answer: t('faq.answers.product_infoB'),
    },
    {
      question: t('faq.questions.product_infoC'),
      answer: t('faq.answers.product_infoC'),
    },
    {
      question: t('faq.questions.client_management'),
      answer: t('faq.answers.client_management'),
    },
    {
      question: t('faq.questions.collector_management'),
      answer: t('faq.answers.collector_management'),
    },
    {
      question: t('faq.questions.multi_branch'),
      answer: t('faq.answers.multi_branch'),
    },
    {
      question: t('faq.questions.booklet_system'),
      answer: t('faq.answers.booklet_system'),
    },
    {
      question: "How does ZetCollect's Transaction History feature work?",
      answer: t('features.history.desc'),
    },
    {
      question: "What does the Reports & Analytics feature offer?",
      answer: t('features.reports.desc'),
    },
    {
      question: "How does User Access & Roles ensure security?",
      answer: t('features.access.desc'),
    },
    {
      question: "What is the functionality of SMS Notifications?",
      answer: t('features.sms.desc'),
    },
    {
      question: "How does Daily Synchronization work in ZetCollect?",
      answer: t('features.sync.desc'),
    },
    {
      question: "What is GPS Traceability, and how will it benefit collectors?",
      answer: t('upcoming.gps.desc'),
    },
    {
      question: "What are Missed Collection Alerts?",
      answer: t('upcoming.alerts.desc'),
    },
    {
      question: "How does the Client Risk Profile & Rating system work?",
      answer: t('upcoming.risk.desc'),
    },
    {
      question: "What is Route & Schedule Optimization?",
      answer: t('upcoming.route.desc'),
    },
    {
      question: t('upcoming.portal.title'),
      answer: t('upcoming.portal.desc')
    }
  ];

  return (
    <>
      <section className="min-h-screen py-16 bg-gradient-to-br from-white to-secondary lg:py-24">
        {/* Header Section */}
        <div className="px-4 mx-auto mb-16 text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            {t('faq.title')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t('faq.subtitle')}
          </p>
          {/* Buttons for Contact Us */}
          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="/ContactPages"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-colors border border-transparent rounded-full shadow-sm bg-primary hover:bg-primary/80"
            >
              {t('common.contactUs')} →
            </a>
          </div>
        </div>

        {/* FAQ Items Section */}
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-lg rounded-xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gray-500" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQPage;