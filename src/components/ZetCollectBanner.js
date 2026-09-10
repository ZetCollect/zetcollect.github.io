import { useState } from 'react';
import { Icon } from '@iconify/react';
import RequestDemoModal from './RequestDemoModal';

const ZetCollectBanner = () => {
  const [isRequestDemoModalOpen, setIsRequestDemoModalOpen] = useState(false);

  return (
    <section className="py-16 bg-primary">
      <div className="grid items-center grid-cols-12 px-4 mx-auto">
        <div className="flex flex-col items-center col-span-10 col-start-2 gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-6">
            <Icon
              icon="mdi:gift-outline"
              className="flex-shrink-0 hidden w-24 h-24 text-white sm:block"
            />
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-white md:text-4xl">
                Getting started with ZetCollect is easy.
                <br className="hidden md:block" />
                Sign up today and get{' '}
                <span className="font-bold text-secondary">2 Months FREE</span>
                {' '}plus a{' '}
                <span className="font-bold text-secondary">100,000 XAF</span> token.
              </h2>
              <p className="text-sm text-gray-200">
                See the <a href="/pricing" className="underline hover:text-white">terms and conditions</a>
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsRequestDemoModalOpen(true)}
              className="px-8 py-3 font-bold transition duration-300 bg-white rounded-lg text-secondary hover:bg-gray-100"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {isRequestDemoModalOpen && (
        <RequestDemoModal onClose={() => setIsRequestDemoModalOpen(false)} />
      )}
    </section>
  );
};

export default ZetCollectBanner;