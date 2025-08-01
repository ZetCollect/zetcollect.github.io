import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from './Footer';

const ReleaseNotesPage = () => {
  const { t } = useLanguage();

  // Mobile Release Versions
  const mobileReleases = [
    { key: 'release.saas.systemVersion' },
    { key: 'release.saas.systemVersion2' },
  ];

  // Web Release Versions
  const webReleases = [
    { key: 'release.saas.systemVersionWeb' },
    { key: 'release.saas.systemVersionWeb2' },
    { key: 'release.saas.systemVersionWeb3' },
    { key: 'release.saas.systemVersionWeb4' },
  ];

  return (
    <>
      <section className="min-h-screen py-16 bg-white lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 lg:text-5xl">
              {t('release.title')}
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700">
              {t('release.description1')}
            </p>
            <p className="max-w-4xl mt-4 text-lg leading-relaxed text-gray-700">
              {t('release.description2')}
            </p>
          </div>

          {/* SaaS Release Schedule Section */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
              {t('release.saas.title')}
            </h2>
            {mobileReleases.map((release, index) => (
              <div
                key={index}
                className="max-w-4xl p-6 mb-5 border-l-4 rounded-lg border-Complementary bg-secondary/20"
              >
                <p
                  className="text-lg text-primary"
                  dangerouslySetInnerHTML={{ __html: t(release.key) }}
                />
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-primary lg:text-3xl">
              {t('release.saas.title2')}
            </h2>
            {webReleases.map((release, index) => (
              <div
                key={index}
                className="max-w-4xl p-6 mb-5 border-l-4 rounded-lg border-Complementary bg-secondary/20"
              >
                <p
                  className="text-lg text-primary"
                  dangerouslySetInnerHTML={{ __html: t(release.key) }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ReleaseNotesPage;