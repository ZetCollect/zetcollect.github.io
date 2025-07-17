import React from 'react';
import { MapPin, Globe, Shield, Smartphone, Settings, Plug, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  const { t } = useLanguage();

  // Client logos for the animated section
  const clientLogos = [
    'SMEP Microfinance Bank logo.png',
    'CamCCUL Logo.jpg',
    'cropped-cropped-Logo-Croped logo.jpg',
    '(BHG) logo.png',
    'SMEP Microfinance Bank logo.png',
    'CamCCUL Logo.jpg',
    'cropped-cropped-Logo-Croped logo.jpg',
    '(BHG) logo.png',
  ];

  // Key Features
  const keyFeatures = [
    {
      title: t('about.keyFeatures.clientManagement.title'),
      description: t('about.keyFeatures.clientManagement.description'),
    },
    {
      title: t('about.keyFeatures.collectorManagement.title'),
      description: t('about.keyFeatures.collectorManagement.description'),
    },
    {
      title: t('about.keyFeatures.mobileCollection.title'),
      description: t('about.keyFeatures.mobileCollection.description'),
    },
    {
      title: t('about.keyFeatures.bookletSystem.title'),
      description: t('about.keyFeatures.bookletSystem.description'),
    },
    {
      title: t('about.keyFeatures.reportsAnalytics.title'),
      description: t('about.keyFeatures.reportsAnalytics.description'),
    },
    {
      title: t('about.keyFeatures.transactionHistory.title'),
      description: t('about.keyFeatures.transactionHistory.description'),
    },
    {
      title: t('about.keyFeatures.smsNotifications.title'),
      description: t('about.keyFeatures.smsNotifications.description'),
    },
    {
      title: t('about.keyFeatures.userAccessRoles.title'),
      description: t('about.keyFeatures.userAccessRoles.description'),
    },
    {
      title: t('about.keyFeatures.dailySynchronization.title'),
      description: t('about.keyFeatures.dailySynchronization.description'),
    },
    {
      title: t('about.keyFeatures.branchSetup.title'),
      description: t('about.keyFeatures.branchSetup.description'),
    },
  ];

  // Why ZetCollect Benefits (including Quality-Centric and Top-notch Security)
  const benefits = [
    {
      image: '/quality.png',
      alt: t('why.quality.alt'),
      title: t('why.quality.title'),
      description: t('why.quality.desc'),
    },
    {
      image: '/security.dbeca56dcb3f8cf76e08374baad55cd5.png',
      alt: t('why.security.alt'),
      title: t('why.security.title'),
      description: t('why.security.desc'),
    },
    {
      icon: Globe,
      title: t('why.africa.title'),
      description: t('why.africa.desc'),
    },
    {
      icon: Shield,
      title: t('why.fraud.title'),
      description: t('why.fraud.desc'),
    },
    {
      icon: Smartphone,
      title: t('why.mobile.title'),
      description: t('why.mobile.desc'),
    },
    {
      icon: Settings,
      title: t('why.customizable.title'),
      description: t('why.customizable.desc'),
    },
    {
      icon: Plug,
      title: t('why.integrable.title'),
      description: t('why.integrable.desc'),
    },
    {
      icon: BarChart3,
      title: t('why.data.title'),
      description: t('why.data.desc'),
    },
  ];

  return (
    <>
      <section className="min-h-screen py-16 bg-white lg:py-14" aria-label="About ZetCollect">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Header Section: About ZetCollect */}
          <div className="mb-12">
            <h1 className="mb-2 text-4xl font-bold text-gray-900 lg:text-5xl">
              {t('about.title')}
            </h1>
            {/* <p className="text-2xl font-bold text-gray-700">{t('about.subtitle')}</p> */}
            <p className="mt-6 mb-4 text-lg leading-relaxed text-gray-700">
              {t('about.description')}
            </p>
          </div>

          {/* ZetCollect Group in Numbers Section */}
          <div className="pt-12 mb-12 border-t border-gray-200">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {t('about.numbers.title')}
            </h2>
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <p className="mb-2 text-5xl font-extrabold text-primary">50+</p>
                <p className="text-lg text-gray-700">{t('about.numbers.teamExperience')}</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <p className="mb-2 text-5xl font-extrabold text-primary">5+</p>
                <p className="text-lg text-gray-700">{t('about.numbers.successStories')}</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <p className="mb-2 text-5xl font-extrabold text-primary">3+</p>
                <p className="text-lg text-gray-700">{t('about.numbers.industryCovers')}</p>
              </div>
            </div>
          </div>

          {/* Our Geography Section */}
          <div className="pt-12 border-t border-gray-500">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {t('about.geography.title')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {t('about.geography.description')}
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{t('about.geography.kenya')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <MapPin className="flex-shrink-0 w-5 h-5 mr-2 text-secondary" />
                    <span>{t('about.geography.kenyaOffice') || 'Office locations: Nairobi'}</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{t('about.geography.rwanda')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <MapPin className="flex-shrink-0 w-5 h-5 mr-2 text-secondary" />
                    <span>{t('about.geography.rwandaOffice')}</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{t('about.geography.cameroon')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <MapPin className="flex-shrink-0 w-5 h-5 mr-2 text-secondary" />
                    <span>{t('about.geography.cameroonOffice')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Clients Section */}
          <div className="pt-12 mt-12 border-t border-gray-200">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {t('about.clients.title')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {t('about.clients.description')}
            </p>

            {/* Client Logos Animation */}
            <div className="relative w-full py-4 overflow-hidden">
              <style jsx>{`
                @keyframes scroll-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll-left {
                  animation: scroll-left 30s linear infinite;
                }
              `}</style>
              <div className="flex animate-scroll-left">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-8">
                    <img
                      src={logo}
                      alt={t('about.clients.logoAlt', { index: index + 1 }) || `Client Logo ${index + 1}`}
                      className="object-contain h-20 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Key Features Section */}
          <div className="pt-12 mt-12 border-gray-200" aria-label="Our Key Features">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {t('about.keyFeatures.title')}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg shadow-sm border-primary bg-gray-50 custom-shadow-strong hover:-translate-y-2 hover:shadow-3xl"
                >
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Pricing Policy Section */}
          <div className="pt-12 mt-12 border-t border-gray-200">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {t('about.pricingPolicy.title')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {t('about.pricingPolicy.description')}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 font-semibold text-center text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm hover:border-primary">
                {t('about.pricingPolicy.subscriptionBased')}
              </div>
              <div className="p-6 font-semibold text-center text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm hover:border-primary">
                {t('about.pricingPolicy.supportUpkeep')}
              </div>
              <div className="p-6 font-semibold text-center text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg shadow-sm hover:border-primary">
                {t('about.pricingPolicy.onSiteDedicated')}
              </div>
            </div>
          </div>

          {/* Why ZetCollect Section */}
          <div className="pt-12 mt-12 border-t border-gray-800 " aria-label="Why ZetCollect">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              {t('why.title2')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {t('why.subtitle')}
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-sm border-primary md:flex-row"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mb-4 mr-6 rounded-full md:mb-0">
                      {benefit.image ? (
                        <img
                          src={benefit.image}
                          alt={benefit.alt}
                          className="w-16 h-16"
                          aria-hidden="true"
                        />
                      ) : (
                        <Icon className="w-10 h-10 text-primary" aria-hidden="true" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="leading-relaxed text-gray-700">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Styles for Drop Shadow */}
          <style>{`
            .custom-shadow-strong {
              box-shadow: 0 25px 50px -12px rgba(0, 184, 148, 0.2);
            }
            .hover\\:shadow-3xl:hover {
              box-shadow: 0 35px 60px -15px rgba(59, 130, 246, 0.3);
            }
          `}</style>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUsPage;