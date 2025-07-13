import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const CustomerSupportPage = () => {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState('');

  // Define feature support with translated names
  const featureSupport = [
    {
      name: t('support.feature.client'),
      phone: '+237 677 123 456',
      email: 'support.client@zetcollect.com',
    },
    {
      name: t('support.feature.collector'),
      phone: '+237 677 234 567',
      email: 'support.collector@zetcollect.com',
    },
    {
      name: t('support.feature.branch'),
      phone: '+237 677 345 678',
      email: 'support.branch@zetcollect.com',
    },
    {
      name: t('support.feature.mobile'),
      phone: '+254 722 987 654',
      email: 'support.mobile@zetcollect.com',
    },
    {
      name: t('support.feature.booklet'),
      phone: '+241 077 876 543',
      email: 'support.booklet@zetcollect.com',
    },
    {
      name: t('support.feature.history'),
      phone: '+237 677 456 789',
      email: 'support.transactions@zetcollect.com',
    },
    {
      name: t('support.feature.reports'),
      phone: '+254 722 876 543',
      email: 'support.reports@zetcollect.com',
    },
    {
      name: t('support.feature.access'),
      phone: '+237 677 567 890',
      email: 'support.access@zetcollect.com',
    },
    {
      name: t('support.feature.sms'),
      phone: '+241 077 765 432',
      email: 'support.sms@zetcollect.com',
    },
    {
      name: t('support.feature.sync'),
      phone: '+254 722 765 432',
      email: 'support.sync@zetcollect.com',
    },
  ];

  // Find the currently selected feature's contact info
  const currentSupportInfo = featureSupport.find(
    (feature) => feature.name === selectedFeature
  );

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-secondary sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl lg:p-12 md:flex-row">
        {/* Left Section: Main Heading */}
        <div className="flex flex-col justify-center mb-8 md:w-1/2 md:pr-8 md:mb-0">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
            {t('support.title')}
          </h1>
        </div>

        {/* Right Section: Support Details */}
        <div className="md:w-1/2">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            {t('support.subtitle')}
          </h2>

          {/* Dropdown for selecting a feature */}
          <div className="mb-8">
            <label htmlFor="feature-select" className="block mb-2 text-sm font-medium text-gray-700">
              {t('support.selectLabel')}
            </label>
            <select
              id="feature-select"
              className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
            <div className="space-y-3">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">
                  {t('support.contactLabel').replace('{feature}', currentSupportInfo.name)}
                </span>
              </p>
              <p className="text-primary hover:underline">
                {t('support.phone')}: <a href={`tel:${currentSupportInfo.phone}`}>{currentSupportInfo.phone}</a>
              </p>
              <p className="text-primary hover:underline">
                {t('support.email')}: <a href={`mailto:${currentSupportInfo.email}`}>{currentSupportInfo.email}</a>
              </p>
            </div>
          ) : (
            <p className="text-gray-500">{t('support.noSelection')}</p>
          )}

          {/* Online Support Community Button */}
          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-colors border border-transparent rounded-full shadow-sm bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              onClick={() => window.open('https://zetcollect.com/', '_blank')}
            >
              {t('support.communityButton')} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportPage;