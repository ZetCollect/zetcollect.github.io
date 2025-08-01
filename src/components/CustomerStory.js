import React from 'react';
import { Users, BarChart2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import ResponsiveBannner from '../components/ResponsiveBanner';

const CustomerStory = () => {
  const { t } = useLanguage();

  // Array for ZetCollect Capabilities
  const capabilities = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: t('combined.section2.capability1.title'),
      description: t('combined.section2.capability1.description'),
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-primary" />,
      title: t('combined.section2.capability2.title'),
      description: t('combined.section2.capability2.description'),
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: t('combined.section2.capability3.title'),
      description: t('combined.section2.capability3.description'),
    },
  ];

  // Array for Impact Statistics
  const impactStats = [
    {
      value: t('combined.section3.impact.stat1.value'),
      description: t('combined.section3.impact.stat1.description'),
    },
    {
      value: t('combined.section3.impact.stat2.value'),
      description: t('combined.section3.impact.stat2.description'),
    },
    {
      value: t('combined.section3.impact.stat3.value'),
      description: t('combined.section3.impact.stat3.description'),
    },
  ];

  const customerStories = [
    {
      id: "microfinances",
      logo: "/log_ACEP_NEW.png",
      logoAlt: "Kenya Farmers Cooperative Logo",
      title: t('combined.section9.story1.title'),
      description: t('combined.section9.story1.description'),
    },
  ];

  return (
    <>
      {/* First Section: ZetCollect Empowers Agents */}
      <section className="px-4 py-16 bg-gradient-to-br from-white to-secondary sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row">
          <div className="mb-12 text-center lg:w-3/4 lg:pr-12 lg:text-left lg:mb-0">
            <h1 className="mb-6 text-4xl font-extrabold leading-normal text-gray-900 sm:text-5xl lg:text-6xl">
              {t('combined.section1.title')}
            </h1>
            <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700 lg:mx-0">
              {t('combined.section1.description')}
            </p>
            <div className="flex items-center justify-center space-x-4 lg:justify-start">
              <span className="text-sm font-semibold text-gray-600">{t('combined.section1.share')}</span>
              <a href="https://www.linkedin.com/showcase/zetcollect/about/" className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors border border-gray-300 rounded-full hover:bg-gray-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/3">
            <img src="/group-business-people-analysis.jpg" alt="ZetCollect App Screenshot" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Second Section: ZetCollect Capabilities */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('combined.section2.title')}
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-gray-700">
            {t('combined.section2.description')}
          </p>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-24 h-24 mb-4 border border-blue-100 rounded-full bg-blue-50">
                  {capability.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">{capability.title}</h3>
                <p className="text-center text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section: About ZetCollect */}
      <section className="px-4 py-16 text-white bg-secondary/80 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row">
          {/* Left Side: Impact Statistics */}
          <div className="mb-12 text-center lg:w-1/2 lg:pr-12 lg:mb-0 lg:text-center">
            <h2 className="mb-10 text-3xl font-bold sm:text-4xl">{t('combined.section3.impact.title')}</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {impactStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                  <p className="text-5xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-white">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="self-stretch hidden h-auto mx-6 border-l border-white lg:block"></div>

          {/* Right Side: About ZetCollect and Table */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="mb-8 text-3xl font-bold text-center sm:text-4xl lg:text-left">
              {t('combined.section3.about.title')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white">
              {t('combined.section3.about.description')}
            </p>

            {/* Table */}
            <div className="w-full rounded-lg shadow-lg bg-primary">
              <table className="w-full table-auto">
                <thead className="bg-primary">
                  <tr>
                    <th scope="col" className="p-4 text-base font-medium tracking-wider text-left text-gray-300 uppercase sm:text-sm">
                      {t('combined.section3.table.header.feature')}
                    </th>
                    <th scope="col" className="p-4 text-base font-medium tracking-wider text-left text-gray-300 uppercase sm:text-sm">
                      {t('combined.section3.table.header.region')}
                    </th>
                    <th scope="col" className="p-4 text-base font-medium tracking-wider text-left text-gray-300 uppercase sm:text-sm">
                      {t('combined.section3.table.header.industry')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-4 text-base text-gray-300">
                      {t('combined.section3.table.row1.feature')}
                    </td>
                    <td className="p-4 text-base text-gray-300">
                      {t('combined.section3.table.row1.region')}
                    </td>
                    <td className="p-4 text-base text-gray-300">
                      {t('combined.section3.table.row1.industry')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Challenge for ZetCollect */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('combined.section4.title')}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section4.description1')}
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section4.description2')}
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section4.quote')} – {t('combined.section4.quote.author')}
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section4.description3')}
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            {t('combined.section4.description4')}
          </p>
        </div>
      </section>

      {/* Section: The Solution */}
      <section className="px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('combined.section5.title')}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section5.description1')}
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section5.description2')}
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            {t('combined.section5.description3')}
          </p>
        </div>
      </section>

      {/* Section: Impact Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2">
          <div className="relative flex flex-col items-center justify-center h-64 p-6 bg-white rounded-lg shadow-md" style={{ backgroundImage: 'url(top-stat-card-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20"></div>
            <div className="relative z-10 text-center">
              <p className="mb-2 text-6xl font-extrabold text-primary">{t('combined.section6.card1.value')}</p>
              <p className="text-lg text-primary">{t('combined.section6.card1.description')}</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center h-64 p-6 bg-white rounded-lg shadow-md" style={{ backgroundImage: 'url(top-stat-card-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-20"></div>
            <div className="relative z-10 text-center">
              <p className="mb-2 text-6xl font-extrabold text-primary">{t('combined.section6.card2.value')}</p>
              <p className="text-lg text-primary">{t('combined.section6.card2.description')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <ResponsiveBannner
        title={t('combined.actionBanner.title')}
        description={t('combined.actionBanner.description')}
        ctaText={t('combined.actionBanner.ctaButton')}
        ctaLink="/contact-page"
      />
      {/* Section: Transformation */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('combined.section8.title')}
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            {t('combined.section8.description1')}
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            {t('combined.section8.description2')}
          </p>
        </div>
      </section>

      {/* Section: Additional Customer Success Stories */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('combined.section9.title')}
          </h2>
          <Link to="/customer-stories" className="inline-block mb-12 text-primary hover:underline">
            {t('combined.section9.viewAll')}
          </Link>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            {customerStories.map((story, index) => (
              <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center h-48 p-8 bg-secondary">
                  <img src={story.logo} alt={story.logoAlt} className="max-w-full max-h-full" />
                </div>
                <div className="p-6 text-left">
                  <p className="mb-2 text-sm text-gray-500">{t('combined.section9.story1.label')}</p>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{story.title}</h3>
                  <p className="mb-4 leading-relaxed text-gray-700">{story.description}</p>
                  <Link
                    to={`/customer-story/${story.id}`}
                    className="font-medium text-primary hover:underline focus:outline-none"
                  >
                    {t('combined.section9.story1.link')}
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

export default CustomerStory;