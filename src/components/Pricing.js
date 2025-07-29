import React from 'react';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext'; // Import the language context hook

const Pricing = () => {
  const { t } = useLanguage(); // Access the translation function

  // Helper component for the checkmark icon
  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
  );

  // Define the features for comparison (use translation keys)
  const compareFeatures = [
    { name: t('pricing.compareFeatures.clientManagement'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.collectorManagement'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.branchSetup'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.mobileCollection'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.bookletSystem'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.transactionHistory'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.reportsAnalytics'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.userAccessRoles'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.smsNotifications'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.dailySynchronization'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.passwordPolicy'), business: true, enterprise: true },
    { name: t('pricing.compareFeatures.gpsTraceability'), business: false, enterprise: true },
    { name: t('pricing.compareFeatures.missedCollectionAlerts'), business: false, enterprise: true },
    { name: t('pricing.compareFeatures.clientRiskProfile'), business: false, enterprise: true },
    { name: t('pricing.compareFeatures.routeOptimization'), business: false, enterprise: true },
    { name: t('pricing.compareFeatures.clientSelfAccessPortal'), business: false, enterprise: true }
  ];

  return (
    <>
      {/* Section 1: Fair pricing Morte da fame per una crescita più rapida */}
      <section className="relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/workplace-team-cooperation-businesswoman-laptop-office.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 mx-auto text-white max-w-7xl md:px-24">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-left md:text-6xl">
            {t('pricing.section1.title')}
          </h1>
          <p className="max-w-lg mb-8 text-lg text-left md:text-xl">
            {t('pricing.section1.description')}
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 font-semibold text-white rounded-full bg-primary hover:bg-primary-dark">
              {t('pricing.section1.cta')}
            </button>
          </div>
          <div className="absolute bottom-10 right-10"></div>
        </div>
      </section>

      {/* Section 2: Flexible fees that suits your size */}
      <section className="px-8 py-16 bg-gray-100 md:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-left md:text-4xl">
            {t('pricing.section2.title')}
          </h2>

          <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row">
            {/* Business Plan Card */}
            <div className="flex flex-col justify-between flex-1 max-w-2xl p-8 bg-white rounded-lg shadow-lg">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-left">{t('pricing.section2.business.title')}</h3>
                <p className="mb-6 text-left text-gray-600">
                  {t('pricing.section2.business.description')}
                </p>
                <h4 className="mb-4 text-lg font-semibold text-left">{t('pricing.section2.business.features.title')}</h4>
                <ul className="mb-8 space-y-3">
                 
                  <li className="flex items-center text-gray-700">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.clientManagement')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.collectorManagement')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.branchSetup')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.mobileCollection')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.localBusinessHours')}
                  </li>
                </ul>
              </div>
              <button className="px-6 py-3 mt-6 font-semibold text-white rounded-full bg-primary hover:bg-secondary">
                {t('pricing.section2.business.cta')}
              </button>
            </div>

            {/* Enterprise Plan Card */}
            <div className="flex flex-col justify-between flex-1 max-w-2xl p-8 text-white bg-black rounded-lg shadow-lg">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-left">{t('pricing.section2.enterprise.title')}</h3>
                <p className="mb-6 text-left text-white">
                  {t('pricing.section2.enterprise.description')}
                </p>
                <h4 className="mb-4 text-lg font-semibold text-left">Everything from Business, Plus:</h4>
                <ul className="mb-8 space-y-3">                 
                  <li className="flex items-center text-white">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.gpsTraceability')}
                  </li>
                  <li className="flex items-center text-white">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.missedCollectionAlerts')}
                  </li>
                  <li className="flex items-center text-white">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.clientRiskProfile')}
                  </li>
                  <li className="flex items-center text-white">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.routeOptimization')}
                  </li>
                  <li className="flex items-center text-white">
                    <span className="inline-flex w-5 h-5 mr-2"><CheckIcon /></span>
                    {t('pricing.compareFeatures.enterpriseSupport')}
                  </li>
                </ul>
              </div>
              <button className="px-6 py-3 mt-6 font-semibold text-white rounded-full bg-primary hover:bg-secondary">
                {t('pricing.section2.enterprise.cta')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Compare features */}
      <section className="px-8 py-16 bg-white md:px-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-bold text-left md:text-4xl">
            {t('pricing.section3.title')}
          </h2>
          <p className="mb-12 text-left text-primary hover:underline">
            <a href="learn">{t('pricing.section3.link')}</a>
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="w-1/2 px-6 py-4 font-semibold text-left text-gray-600">{t('pricing.section3.title')}</th>
                  <th className="w-1/4 px-6 py-4 font-semibold text-center text-gray-600">{t('pricing.section2.business.title')}</th>
                  <th className="w-1/4 px-6 py-4 font-semibold text-center text-gray-600">{t('pricing.section2.enterprise.title')}</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="px-6 py-4 text-left text-gray-700">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        {feature.business ? <CheckIcon /> : null}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        {feature.enterprise ? <CheckIcon /> : null}
                      </div>
                    </td>
                  </tr>
                ))}
                 <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-left text-gray-700">
                   Custom Branding
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                     
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      On Demand
                    </div>
                  </td>
                </tr>
                   <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-left text-gray-700">
                    Storage
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                     5 GB of storage
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      Unlimited Storage
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-left text-gray-700">
                    Support
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                     Local Business Hours
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      24/7 Enterprise Support
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;