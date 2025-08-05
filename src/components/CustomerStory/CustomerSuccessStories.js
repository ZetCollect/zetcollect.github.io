import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useLanguage } from '../../context/LanguageContext';

const CustomerSuccessStories = () => {
  const { t } = useLanguage();

  // Define customerStories array with eight unique stories
  const customerStories = [
    {
      id: "microfinances",
      logo: "/log_ACEP_NEW.png",
      logoAlt: "Microfinance Nairobi Logo",
      title: t('combined.section9.story1.title'),
      description: t('customerStories.microfinances.description'),
    },
    {
      id: "cooperative",
      logo: "/person-waiting-food-restaurant.jpg",
      logoAlt: "Cooperative Logo",
      title: t('customerStories.cooperative.title'),
      description: t('customerStories.cooperative.description'),
    },
    {
      id: "merchants-gabon",
      logo: "/medium-shot-smiley-man-with-smartphone.jpg",
      logoAlt: "Gabon Merchants Logo",
      title: t('customerStories.merchants-gabon.title'),
      description: t('customerStories.merchants-gabon.description'),
    },
    {
      id: "agents-Tchad",
      logo: "/delivery-african-american-man.jpg",
      logoAlt: "Tchad Agents Logo",
      title: t('customerStories.agents-Tchad.title'),
      description: t('customerStories.agents-Tchad.description'),
    },
    {
      id: "microfinances",
      logo: "/log_ACEP_NEW.png",
      logoAlt: "Microfinance Nairobi Logo",
      title: t('combined.section9.story1.title'),
      description: t('customerStories.microfinances.description'),
    },
    {
      id: "cooperative",
      logo: "/person-waiting-food-restaurant.jpg",
      logoAlt: "Cooperative Logo",
      title: t('customerStories.cooperative.title'),
      description: t('customerStories.cooperative.description'),
    },
    {
      id: "agents-Tchad",
      logo: "/delivery-african-american-man.jpg",
      logoAlt: "Tchad Agents Logo",
      title: t('customerStories.agents-Tchad.title'),
      description: t('customerStories.agents-Tchad.description'),
    },
  ];

  return (
    <>
      {/* First Section: ZetCollect delivers Customer Success (Hero) */}
      <section className="px-4 py-16 bg-gradient-to-br from-white to-secondary sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row">
          {/* Left Content */}
          <div className="mb-12 text-justify lg:w-1/2 lg:pr-12 lg:mb-0 lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
              {t('customerSuccessStories.section1.title')}
            </h1>
            <p className="text-base text-gray-700">
              {t('customerSuccessStories.section1.description')}
            </p>
          </div>

          {/* Right Video Player */}
          <div className="flex justify-center lg:w-1/2">
            <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl aspect-video">
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

      {/* Section: Additional Customer Success Stories 1 */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('customerSuccessStories.section2.title')}
          </h2>
          <Link to="/customer-stories" className="inline-block mb-12 text-primary hover:underline">
            {t('customerSuccessStories.section2.viewAll')}
          </Link>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {customerStories.slice(0, 4).map((story, index) => (
              <div key={`${story.id}-${index}`} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative w-full h-40">
                  <img 
                    src={story.logo} 
                    alt={story.logoAlt} 
                    className="object-cover object-center w-full h-full" 
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="mb-2 text-xs text-gray-500">{t('customerSuccessStories.section2.label')}</p>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{story.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 line-clamp-3">{story.description}</p>
                  <Link
                    to={`/customer-story/${story.id}`}
                    className="text-sm font-medium text-secondary hover:underline focus:outline-none"
                  >
                    {t('customerSuccessStories.section2.link')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Additional Customer Success Stories 2 */}
      <section className="px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('customerSuccessStories.section3.title')}
          </h2>
          <Link to="/customer-stories" className="inline-block mb-12 text-primary hover:underline">
            {t('customerSuccessStories.section3.viewAll')}
          </Link>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {customerStories.slice(4, 8).map((story, index) => (
              <div key={`${story.id}-${index}`} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative w-full h-40">
                  <img 
                    src={story.logo} 
                    alt={story.logoAlt} 
                    className="object-cover object-center w-full h-full" 
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="mb-2 text-xs text-gray-500">{t('customerSuccessStories.section3.label')}</p>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{story.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 line-clamp-3">{story.description}</p>
                  <Link
                    to={`/customer-story/${story.id}`}
                    className="text-sm font-medium text-secondary hover:underline focus:outline-none"
                  >
                    {t('customerSuccessStories.section3.link')}
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