import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useLanguage } from '../../context/LanguageContext';
import customerStoriesData from '../../data/customerStories.json';

const CustomerSuccessStories = () => {
  const { t } = useLanguage();
  const customerStories = customerStoriesData.stories;

  return (
    <>
      {/* First Section: ZetCollect delivers Customer Success (Hero) */}
      <section className="px-4 py-8 bg-gradient-to-br from-white to-secondary sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row">
          <div className="mx-4 mb-8 text-justify sm:mx-6 lg:w-1/2 lg:pr-12 lg:mb-0 lg:text-left">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-6xl text-justify">
              {t('customerSuccessStories.section1.title')}
            </h1>
            <p className="text-sm text-gray-700 sm:text-base text-justify">
              {t('customerSuccessStories.section1.description') || 'Discover how ZetCollect empowers businesses with transformative solutions.'}
            </p>
          </div>
          <div className="flex justify-center mx-4 sm:mx-6 lg:w-1/2 lg:pl-12">
            <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl aspect-video sm:max-w-xl lg:max-w-none">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_zShxJofkjU?rel=0&autoplay=0&controls=1"
                title="ZetCollect Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Customer Success Stories */}
      <section className="px-4 py-8 bg-white sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl lg:text-4xl">
            {t('customerSuccessStories.section2.title') || 'Customer Success Stories'}
          </h2>
         
          <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 sm:gap-6 lg:mx-8 lg:grid-cols-4 max-w-7xl">
            {customerStories.map((story, index) => (
              <div
                key={`${story.id}-${index}`}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="relative w-full h-32 sm:h-40">
                  <img
                    src={story.logo}
                    alt={t(story.logoAlt) || story.logoAlt}
                    className="object-contain object-center w-full h-full"
                  />
                </div>
                <div className="p-3 text-left sm:p-4">
                  <p className="mb-1 text-xs text-gray-500 sm:mb-2">
                    {t('customerSuccessStories.section2.label') || 'Customer Story'}
                  </p>
                  <h3 className="mb-1 text-base font-semibold text-gray-900 sm:mb-2 sm:text-lg">
                    {t(story.titleKey) || story.titleKey}
                  </h3>
                  <p className="mb-2 text-xs leading-relaxed text-gray-700 line-clamp-3 sm:mb-3 sm:text-sm">
                    {t(story.descriptionKey) || story.descriptionKey}
                  </p>
                  <Link
                    to={`/customer-story/${story.id}`}
                    className="text-xs font-medium text-secondary hover:underline focus:outline-none sm:text-sm"
                  >
                    {t('customerSuccessStories.section2.link') || 'Read More'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CustomerSuccessStories;