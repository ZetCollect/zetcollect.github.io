import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';
import faqs from '../data/faq.json';

const FAQPage = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        {/* FAQ Sections */}
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* General Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {t('faq.sections.general')}
            </h2>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              {faqs.general.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleFAQ(`general-${index}`)}
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {t(faq.question)}
                    </span>
                    {openIndex === `general-${index}` ? (
                      <Minus className="w-6 h-6 text-gray-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {openIndex === `general-${index}` && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{t(faq.answer)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Free Plan Account Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {t('faq.sections.freePlan')}
            </h2>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              {faqs.freePlan.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleFAQ(`freePlan-${index}`)}
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {t(faq.question)}
                    </span>
                    {openIndex === `freePlan-${index}` ? (
                      <Minus className="w-6 h-6 text-gray-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {openIndex === `freePlan-${index}` && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{t(faq.answer)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Paid Plan Account Section */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {t('faq.sections.paidPlan')}
            </h2>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              {faqs.paidPlan.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleFAQ(`paidPlan-${index}`)}
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {t(faq.question)}
                    </span>
                    {openIndex === `paidPlan-${index}` ? (
                      <Minus className="w-6 h-6 text-gray-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {openIndex === `paidPlan-${index}` && (
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{t(faq.answer)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQPage;