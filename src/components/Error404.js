import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Footer from './Footer';

const Error404 = () => {
  const { t } = useLanguage();

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img
          src="/404Error.jpg"
          alt={t('not404.imageAlt')}
          className="max-w-full mx-auto mb-4"
        />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Error404;