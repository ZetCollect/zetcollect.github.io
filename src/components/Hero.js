import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Shield, Smartphone, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative py-16 overflow-hidden bg-gradient-to-br from-white to-secondary lg:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row lg:justify-start">
              <Link
                to="https://www.youtube.com/watch?v=_zShxJofkjU"
                className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-200 rounded-lg shadow-lg bg-primary hover:bg-primary/80 hover:shadow-xl group"
              >
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                {t('hero.cta.demo')}
              </Link>
             
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-orange-100 rounded-lg">
                  <Shield className="w-6 h-6 text-Complementary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Fraud Prevention</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-green-100 rounded-lg">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">MFIs Served</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-yellow-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-Complementary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">Efficiency Boost</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-full">
            <div className="relative w-full h-full mx-auto">
              <div className="h-full">
                <img 
                  src='/group-afro-americans-working-together.jpg'
                  alt="Team working" 
                  className="object-cover w-full h-full rounded-lg shadow-xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute px-4 py-2 text-sm font-semibold text-gray-900 rounded-full shadow-lg bg-Complementary -bottom-6 -left-6 animate-pulse">
                🔒 Fraud Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;