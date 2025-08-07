import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import ResponsiveBanner from '../../components/ResponsiveBanner';
import { useLanguage } from '../../context/LanguageContext';
import customerStoriesData from '../../data/customerStories.json';

const CustomerStory = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const story = customerStoriesData.stories.find(story => story.id === id);

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <>
      {/* First Section: Hero */}
      <section className="bg-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-8 text-center sm:mb-10 lg:w-1/2 lg:pr-12 lg:text-left lg:mb-0">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-6xl">
                {t(story.page.section1.titleKey)}
              </h1>
              <p className="max-w-lg mx-auto mb-6 text-sm text-gray-700 sm:max-w-xl sm:text-base lg:mx-0">
                {t(story.page.section1.descriptionKey)}
              </p>
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 lg:justify-start">
                <span className="text-xs font-semibold text-gray-600 sm:text-sm">
                  {t(story.page.section1.shareTextKey)}
                </span>
                <a
                  href="https://www.linkedin.com/showcase/zetcollect/about/"
                  className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors border border-gray-300 rounded-full sm:w-10 sm:h-10 hover:bg-gray-100"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center max-w-lg sm:max-w-xl lg:w-1/2 lg:pl-12 lg:max-w-none">
              <img src={story.page.section1.image} alt={t(story.page.section1.imageAlt)} className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Impact and About */}
      <section className="text-white bg-secondary">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-8 text-center sm:mb-10 lg:w-1/2 lg:pr-12 lg:mb-0 lg:text-center">
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl lg:text-4xl">{t(story.page.section2.impact.titleKey)}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {story.page.section2.impact.stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <p className="text-4xl font-extrabold text-primary sm:text-5xl">{t(stat.valueKey)}</p>
                    <p className="mt-2 text-xs text-white sm:text-sm">{t(stat.descriptionKey)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="self-stretch hidden h-auto mx-4 border-l border-white sm:mx-6 lg:block"></div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl lg:text-4xl lg:text-left">
                {t(story.page.section2.about.titleKey)}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-white sm:text-base">
                {t(story.page.section2.about.descriptionKey)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: The Challenge */}
      <section className="bg-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {t(story.page.section3.titleKey)}
          </h2>
          {story.page.section3.descriptionKeys.map((key, index) => (
            <p key={index} className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              {t(key)}
            </p>
          ))}
        </div>
      </section>

      {/* Fourth Section: The Solution */}
      <section className="bg-gray-50">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {t(story.page.section4.titleKey)}
          </h2>
          {story.page.section4.descriptionKeys.map((key, index) => (
            <p key={index} className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              {t(key)}
            </p>
          ))}
        </div>
      </section>

      <ResponsiveBanner
        title={t('combined.actionBanner.title')}
        description={t('combined.actionBanner.description')}
        ctaText={t('combined.actionBanner.ctaButton')}
        ctaLink="/contact-page"
      />

      {/* Fifth Section: The Transformation */}
      <section className="bg-white">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {t(story.page.section5.titleKey)}
          </h2>
          {story.page.section5.descriptionKeys.map((key, index) => (
            <p key={index} className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              {t(key)}
            </p>
          ))}
        </div>
      </section>

      {/* Sixth Section: Stats Cards */}
      <section>
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            <div
              className="relative flex flex-col items-center justify-center h-56 p-4 bg-white rounded-lg shadow-md sm:h-64 sm:p-6"
              style={{ backgroundImage: 'url(/top-stat-card-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20"></div>
              <div className="relative z-10 text-center">
                <p className="mb-2 text-5xl font-extrabold text-primary sm:text-6xl">{t('combined.section6.card1.value')}</p>
                <p className="text-sm text-primary sm:text-lg">{t('combined.section6.card1.description')}</p>
              </div>
            </div>
            <div
              className="relative flex flex-col items-center justify-center h-56 p-4 bg-white rounded-lg shadow-md sm:h-64 sm:p-6"
              style={{ backgroundImage: 'url(/top-stat-card-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20"></div>
              <div className="relative z-10 text-center">
                <p className="mb-2 text-5xl font-extrabold text-primary sm:text-6xl">{t('combined.section6.card2.value')}</p>
                <p className="text-sm text-primary sm:text-lg">{t('combined.section6.card2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomerStory;