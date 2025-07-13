import React from 'react';
import { Construction, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const WorkInProgressPage = () => {
  const { t } = useLanguage();

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-center bg-cover sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('Page under Construction.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative w-full max-w-md p-8 space-y-8 text-center bg-white rounded-lg shadow-lg bg-opacity-95">
        <Construction className="w-16 h-16 mx-auto text-primary animate-bounce" />
        <h1 className="text-3xl font-bold text-gray-900">{t('wip.title')}</h1>
        <p className="text-lg text-gray-600">{t('wip.description')}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white transition-colors border border-transparent rounded-full shadow-lg bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Home className="w-6 h-6 mr-3" />
            {t('wip.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgressPage;