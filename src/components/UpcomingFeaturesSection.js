import React from 'react';
import {
  MapPin,
  Bell,
  TrendingUp,
  Route,
  User,
  Landmark,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import upcomingFeatures from '../data/upcomingFeatures.json';

// Map string icon names to actual Lucide React components
const iconMap = {
  MapPin,
  Bell,
  TrendingUp,
  Route,
  User,
  Landmark,
};

const UpcomingFeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="upcoming" className="py-16 bg bg-gradient-to-br from-white via-white to-secondary lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl">
            {t('upcoming.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {t('upcoming.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {upcomingFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={index}
                className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl group"
              >
                {/* Coming Soon Badge */}
                <div className="absolute px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg -top-3 -right-3 bg-Complementary">
                  {t('common.comingSoon')}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.textColor}`} />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {t(feature.title)}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {t(feature.description)}
                </p>

                {/* Progress Indicator */}
                <div className="relative">
                  <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                    <div
                      className={`h-full bg-${feature.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">In Development</div>
                </div>

                {/* Future styling overlay */}
                <div className="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-gray-100/30 rounded-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeaturesSection;