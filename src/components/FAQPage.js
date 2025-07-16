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
      question: t('faq.questions.mobile_collection'),
      answer: t('faq.answers.mobile_collection'),
    },
    {
      question: t('faq.questions.booklet_system'),
      answer: t('faq.answers.booklet_system'),
    },
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