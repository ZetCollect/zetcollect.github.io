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
import '../App.css'

const KeyFeatures = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Users, title: t('features.client.title'), description: t('features.client.desc'), color: 'orange' },
    { icon: UserCheck, title: t('features.collector.title'), description: t('features.collector.desc'), color: 'green' },
    { icon: Building, title: t('features.branch.title'), description: t('features.branch.desc'), color: 'blue' },
    { icon: Smartphone, title: t('features.mobile.title'), description: t('features.mobile.desc'), color: 'purple' },
    { icon: BookOpen, title: t('features.booklet.title'), description: t('features.booklet.desc'), color: 'yellow' },
    { icon: Clock, title: t('features.history.title'), description: t('features.history.desc'), color: 'red' },
    { icon: BarChart3, title: t('features.reports.title'), description: t('features.reports.desc'), color: 'orange' },
    { icon: Shield, title: t('features.access.title'), description: t('features.access.desc'), color: 'green' },
    { icon: MessageSquare, title: t('features.sms.title'), description: t('features.sms.desc'), color: 'blue' },
    { icon: RefreshCw, title: t('features.sync.title'), description: t('features.sync.desc'), color: 'purple' },
  ];

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
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];

            return (
              <div key={index} className="w-full h-64 flip-card group">
                <div className="w-full h-full flip-card-inner group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className={`flip-card-front w-full h-full bg-white rounded-xl p-6 border border-gray-200 ${colors.border} ${colors.hover} transition-all duration-300`}>
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-secondary">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div className={`flip-card-back w-full h-full bg-white rounded-xl p-6 border border-gray-200 ${colors.border} ${colors.hover} transition-all duration-300 flex items-center justify-center`}>
                    <p className="text-sm leading-relaxed text-center text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;