import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveBanner = ({ title, description, ctaText, ctaLink }) => {
  const bannerImageUrl = '/ZetCollect Banner.png'; 

  const backgroundStyle = {
    backgroundImage: `url('${bannerImageUrl}')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section 
      className="relative px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-8 lg:px-8 lg:py-16"               
      style={backgroundStyle}
      aria-labelledby="banner-title" 
    >
      <div className="absolute inset-0"></div> 

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Text and Button Block */}
        <div className="flex flex-col items-center max-w-2xl text-justify text-white md:items-end md:text-justify md:ml-auto">               
          <h2 id="banner-title" className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl drop-shadow-lg">
            {title}
          </h2>
          {description && (
            <p className="mb-6 text-lg leading-relaxed max-w-prose drop-shadow-md">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link to={ctaLink}>
              <button className="px-8 py-3 font-bold text-white transition-colors duration-300 rounded-lg shadow-lg bg-secondary hover:bg-blsecondary">
                {ctaText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveBanner;