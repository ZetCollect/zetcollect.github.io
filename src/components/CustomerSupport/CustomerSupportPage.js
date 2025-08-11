import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Footer from '../Footer';

const CustomerSupportPage = () => {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState('');

  // Define feature support with translated names and categorized emails
  const featureSupport = [
    {
      name: t('support.feature.client'),
      phone: '+254 703 468 300',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.collector'),
      phone: '+254 703 468 300',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.branch'),
      phone: '+254 703 468 300',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.mobile'),
      phone: '+254 703 468 300',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.booklet'),
      phone: '+254 703 468 300',
      email: 'support.financial@zetcollect.com',
    },
    {
      name: t('support.feature.history'),
      phone: '+254 703 468 300',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.reports'),
      phone: '+254 703 468 300',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.access'),
      phone: '+254 703 468 300',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.sms'),
      phone: '+254 703 468 300',
      email: 'support.technical@zetcollect.com',
    },
    {
      name: t('support.feature.sync'),
      phone: '+254 703 468 300',
      email: 'support.technical@zetcollect.com',
    },
  ];

  // Find the currently selected feature's contact info
  const currentSupportInfo = featureSupport.find(
    (feature) => feature.name === selectedFeature
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-24 bg-secondary sm:px-6 lg:px-8">
        {/* Main Header: Customer Support */}
        <h1 className="w-full max-w-4xl mb-16 text-6xl font-extrabold leading-tight text-center text-white md:text-7xl">
          {t('support.title')}
        </h1>

        {/* Two-Column Card with Equal Widths */}
        <div className="flex flex-col w-full max-w-5xl bg-white shadow-xl rounded-2xl md:flex-row">
          {/* Left Section: Image */}
          <div className="md:w-1/2">
            <img
              src="/focused-african-american-man-with-headset.jpg"
              alt="Customer Support"
              className="object-cover w-full h-64 rounded-t-2xl md:h-full md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Right Section: Dropdown and Support Details */}
          <div className="flex flex-col justify-center p-12 md:w-1/2 lg:p-12">
            <h2 className="mb-8 text-2xl font-bold text-center text-gray-900">
              {t('support.subtitle')}
            </h2>

            {/* Dropdown for selecting a feature */}
            <div className="w-full max-w-md mb-2">
              <select
                id="feature-select"
                className="w-full px-2 py-2 text-xl text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}>
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
              <div className="space-y-5 mt-8">
                <p className="text-xl text-gray-900">
                  <span className="font-semibold">
                    {t('support.contactLabel').replace('{feature}', currentSupportInfo.name)}
                  </span>
                </p>
                <p className="text-l">
                  {t('support.phone')}: <a href={`tel:${currentSupportInfo.phone}`}>{currentSupportInfo.phone}</a>
                </p>
                <p className="text-l">
                  {t('support.email')}: <a href={`mailto:${currentSupportInfo.email}`}>{currentSupportInfo.email}</a>
                </p>
              </div>
            ) : (
              <p className="text-xl text-center text-gray-700">{t('support.noSelection')}</p>
            )}

            {/* Online Support Community Button */}
            <div className="flex mt-8">
              <button
                type="button"
                className="inline-flex items-center px-5 py-5 text-xl font-medium text-white transition-colors border border-transparent shadow-sm bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => window.open('https://zetcollect.com/', '_blank')}>
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