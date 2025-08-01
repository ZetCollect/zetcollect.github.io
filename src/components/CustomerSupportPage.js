import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const CustomerSupportPage = () => {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState('');

  // Define feature support with translated names and categorized emails
  const featureSupport = [
    {
      name: t('support.feature.client'),
      phone: '+237 677 123 456',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.collector'),
      phone: '+237 677 234 567',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.branch'),
      phone: '+237 677 345 678',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.mobile'),
      phone: '+254 722 987 654',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.booklet'),
      phone: '+241 077 876 543',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.history'),
      phone: '+237 677 456 789',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.reports'),
      phone: '+254 722 876 543',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.access'),
      phone: '+237 677 567 890',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.sms'),
      phone: '+241 077 765 432',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.sync'),
      phone: '+254 722 765 432',
      email: 'support.technical@zetcollect.com',
    },
  ];

  // Find the currently selected feature's contact info
  const currentSupportInfo = featureSupport.find(
    (feature) => feature.name === selectedFeature
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-26 bg-secondary sm:px-6 lg:px-8">
        {/* Main Header: Customer Support */}
        <h1 className="w-full max-w-5xl mb-16 text-6xl font-extrabold leading-tight text-center text-white md:text-7xl">
          {t('support.title')}
        </h1>

        {/* Two-Column Card with Equal Widths */}
        <div className="flex flex-col w-full max-w-5xl bg-white shadow-xl rounded-2xl md:flex-row">
          {/* Left Section: Image */}
          <div className="md:w-1/2">
            <img
              src="focused-african-american-man-with-headset-looking-down.jpg"
              alt="Customer Support"
              className="object-cover w-full h-64 rounded-t-2xl md:h-full md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right Section: Dropdown and Support Details */}
          <div className="flex flex-col items-center justify-center p-12 md:w-1/2 lg:p-16">
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-900">
              {t('support.subtitle')}
            </h2>

            {/* Dropdown for selecting a feature */}
            <div className="w-full max-w-md mb-10">
              <label htmlFor="feature-select" className="block mb-4 text-xl font-medium text-center text-gray-700">
                {t('support.selectLabel')}
              </label>
              <select
                id="feature-select"
                className="w-full px-6 py-5 text-2xl text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
              >
                <option value="" disabled>{t('support.selectPlaceholder')}</option>
                {featureSupport.map((feature, index) => (
                  <option key={index} value={feature.name}>
                    {feature.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Display contact information based on selection */}
            {currentSupportInfo ? (
              <div className="space-y-4 text-center">
                <p className="text-2xl text-gray-700">
                  <span className="font-semibold">
                    {t('support.contactLabel').replace('{feature}', currentSupportInfo.name)}
                  </span>
                </p>
                <p className="text-xl text-primary hover:underline">
                  {t('support.phone')}: <a href={`tel:${currentSupportInfo.phone}`}>{currentSupportInfo.phone}</a>
                </p>
                <p className="text-xl text-primary hover:underline">
                  {t('support.email')}: <a href={`mailto:${currentSupportInfo.email}`}>{currentSupportInfo.email}</a>
                </p>
              </div>
            ) : (
              <p className="text-xl text-center text-gray-500">{t('support.noSelection')}</p>
            )}

            {/* Online Support Community Button */}
            <div className="flex justify-center mt-10">
              <button
                type="button"
                className="inline-flex items-center px-10 py-5 text-xl font-medium text-white transition-colors border border-transparent rounded-full shadow-sm bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => window.open('https://zetcollect.com/', '_blank')}
              >
                {t('support.communityButton')} →
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerSupportPage;