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
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row">
          <div className="mb-12 text-center lg:w-3/4 lg:pr-12 lg:text-left lg:mb-0">
            <h1 className="mb-6 text-4xl font-extrabold leading-normal text-gray-900 sm:text-5xl lg:text-6xl">
              {t(story.page.section1.titleKey)}
            </h1>
            <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700 lg:mx-0">
              {t(story.page.section1.descriptionKey)}
            </p>
            <div className="flex items-center justify-center space-x-4 lg:justify-start">
              <span className="text-sm font-semibold text-gray-600">{t(story.page.section1.shareTextKey)}</span>
              <a href="https://www.linkedin.com/showcase/zetcollect/about/" className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors border border-gray-300 rounded-full hover:bg-gray-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center h-500 lg:w-1/2">
            <img src={story.page.section1.image} alt={story.page.section1.imageAlt} className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Second Section: Impact and About */}
      <section className="px-4 py-16 text-white bg-secondary sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row">
          <div className="mb-12 text-center lg:w-1/2 lg:pr-12 lg:mb-0 lg:text-center">
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">{t(story.page.section2.impact.titleKey)}</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {story.page.section2.impact.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-center">
                  <p className="text-5xl font-extrabold text-primary">{t(stat.valueKey)}</p>
                  <p className="mt-2 text-sm text-white">{t(stat.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="self-stretch hidden h-auto mx-6 border-l border-white lg:block"></div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="mb-8 text-3xl font-bold text-center sm:text-4xl lg:text-left">
              {t(story.page.section2.about.titleKey)}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white">
              {t(story.page.section2.about.descriptionKey)}
            </p>
          </div>
        </div>
      </section>

      {/* Third Section: The Challenge */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(story.page.section3.titleKey)}
          </h2>
          {story.page.section3.descriptionKeys.map((key, index) => (
            <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
              {t(key)}
            </p>
          ))}
        </div>
      </section>

      {/* Fourth Section: The Solution */}
      <section className="px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(story.page.section4.titleKey)}
          </h2>
          {story.page.section4.descriptionKeys.map((key, index) => (
            <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
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
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(story.page.section5.titleKey)}
          </h2>
          {story.page.section5.descriptionKeys.map((key, index) => (
            <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
              {t(key)}
            </p>
          ))}
        </div>
      </section>

      {/* Sixth Section: Stats Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2">
          <div className="relative flex flex-col items-center justify-center h-64 p-6 bg-white rounded-lg shadow-md" style={{ backgroundImage: 'url(/top-stat-card-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20"></div>
            <div className="relative z-10 text-center">
              <p className="mb-2 text-6xl font-extrabold text-primary">{t('combined.section6.card1.value')}</p>
              <p className="text-lg text-primary">{t('combined.section6.card1.description')}</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center h-64 p-6 bg-white rounded-lg shadow-md" style={{ backgroundImage: 'url(/top-stat-card-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20"></div>
            <div className="relative z-10 text-center">
              <p className="mb-2 text-6xl font-extrabold text-primary">{t('combined.section6.card2.value')}</p>
              <p className="text-lg text-primary">{t('combined.section6.card2.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomerStory;