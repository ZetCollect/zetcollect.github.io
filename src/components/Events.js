import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const EventsPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const events = [
    {
      date: {
        month: t('events.event1.month'),
        day: '4',
      },
      type: t('events.event1.type'),
      title: t('events.event1.title'),
      description: t('events.event1.description'),
      dateTime: t('events.event1.dateTime'),
      time: t('events.event1.time'),
      link: '#',
    },
    {
      date: {
        month: t('events.event2.month'),
        day: '6',
      },
      type: t('events.event2.type'),
      title: t('events.event2.title'),
      description: t('events.event2.description'),
      dateTime: t('events.event2.dateTime'),
      time: t('events.event2.time'),
      link: '#',
    },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.type === filter);

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Section with Gradient Background */}
        <div className="px-4 py-20 text-white bg-secondary sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-2 text-5xl font-extrabold">{t('events.title')}</h1>
            <p className="text-lg opacity-90">{t('events.subtitle') }</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Top Bar: Event Type dropdown aligned to the right */}
          <div className="flex items-center justify-end mb-8">
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label={t('events.filterType') }
                className="px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="all">{t('events.filter.all')}</option>
                <option value={t('events.type.webinar') }>{t('events.type.webinar') }</option>
                <option value={t('events.type.inperson') }>{t('events.type.inperson') }</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <h2 className="mb-8 text-3xl font-bold text-gray-900">{t('events.upcoming')}</h2>

          {/* Events List */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start p-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl md:flex-row md:items-center custom-shadow-blue hover:custom-shadow-blue-xl"
              >
                {/* Date Column */}
                <div className="flex-shrink-0 mb-4 mr-8 text-center md:text-left md:mb-0">
                  <p className="text-sm font-semibold text-gray-500 uppercase">{event.date.month}</p>
                  <p className="text-5xl font-extrabold leading-none text-primary">{event.date.day}</p>
                </div>

                {/* Event Details */}
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-green-100 rounded-full text-secondary">
                    {event.type}
                  </span>
                  <h3 className="flex items-center mb-2 text-2xl font-bold text-gray-900">
                    {event.title}
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </h3>
                  <p className="mb-4 text-gray-700">{event.description}</p>
                  <p className="text-sm font-medium text-gray-600">{event.dateTime}</p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Styles for More Visible Blue Drop Shadows */}
        <style>{`
          .custom-shadow-blue {
            box-shadow: 0 25px 50px -12px rgba(0, 184, 148, 0.2);
          }
          .hover\\:custom-shadow-blue-xl:hover {
            box-shadow: 0 35px 60px -15px rgba(59, 130, 246, 0.3);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default EventsPage;