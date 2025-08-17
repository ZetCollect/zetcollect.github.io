import React from 'react';
import {
  Users,
  UserCheck,
  Building,
  Smartphone,
  BookOpen,
  Clock,
  BarChart3,
  Shield,
  MessageSquare,
  RefreshCw,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import features from '../data/features.json';
import '../App.css';

// Map string icon names to actual Lucide React components
const iconMap = {
  Users,
  UserCheck,
  Building,
  Smartphone,
  BookOpen,
  Clock,
  BarChart3,
  Shield,
  MessageSquare,
  RefreshCw,
};

const KeyFeatures = () => {
  const { t } = useLanguage();

  const colorClasses = {
    orange: { bg: 'bg-orange-100', icon: 'text-orange-600', border: 'hover:border-orange-200', hover: 'hover:shadow-orange-100' },
    green: { bg: 'bg-green-100', icon: 'text-green-600', border: 'hover:border-green-200', hover: 'hover:shadow-green-100' },
    blue: { bg: 'bg-blue-100', icon: 'text-primary', border: 'hover:border-blue-200', hover: 'hover:shadow-blue-100' },
    purple: { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'hover:border-purple-200', hover: 'hover:shadow-purple-100' },
    yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600', border: 'hover:border-yellow-200', hover: 'hover:shadow-yellow-100' },
    red: { bg: 'bg-red-100', icon: 'text-red-600', border: 'hover:border-red-200', hover: 'hover:shadow-red-100' },
  };

  return (
    <section id="features" className="py-16 bg-white lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl">
            {t('features.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]; // Map string to component
            const colors = colorClasses[feature.color];

            return (
              <div key={index} className="w-full h-64 flip-card group">
                <div className="w-full h-full flip-card-inner group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className={`flip-card-front w-full h-full bg-white rounded-xl p-6 border border-gray-200 ${colors.border} ${colors.hover} transition-all duration-300 flex flex-col items-center justify-center text-center sm:flex-row sm:items-start sm:justify-start sm:text-left lg:flex-col lg:items-center lg:justify-center lg:text-center shadow-lg custom-shadow-blue hover:custom-shadow-blue-xl`}>
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 sm:justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-secondary">
                      {t(feature.title)}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div className={`flip-card-back w-full h-full bg-white rounded-xl p-6 border border-gray-200 ${colors.border} ${colors.hover} transition-all duration-300 flex items-center justify-center shadow-lg custom-shadow-blue hover:custom-shadow-blue-xl`}>
                    <p className="text-sm leading-relaxed text-center text-gray-600">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Styles for More Visible Blue Drop Shadows */}
      <style>{`
        /* Define a custom shadow with a more visible blue tint */
        .custom-shadow-blue {
          /* Increased opacity to 0.25 for more visibility */
          box-shadow: 0 6px 12px -3px rgba(59, 130, 246, 0.25), 0 3px 6px -3px rgba(59, 130, 246, 0.2); 
        }

        /* Define a custom hover shadow with a significantly stronger blue tint */
        .hover\\:custom-shadow-blue-xl:hover {
          /* Increased opacity to 0.4 and larger spread for a pronounced effect on hover */
          box-shadow: 0 20px 30px -8px rgba(59, 130, 246, 0.4), 0 8px 12px -6px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default KeyFeatures;