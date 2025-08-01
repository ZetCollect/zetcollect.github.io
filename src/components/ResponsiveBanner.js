// src/components/ResponsiveBanner.jsx

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
      className="relative max-w-7xl mx-auto    
                 px-4 sm:px-6 lg:px-8          
                 py-12 md:py-16 lg:py-24         
                 flex items-center justify-center 
                 min-h-[250px] md:min-h-[200px] lg:min-h-[250px] 
                 overflow-hidden"               
      style={backgroundStyle}
      aria-labelledby="banner-title" 
    >
      <div className="absolute inset-0"></div> 

      <div className="relative z-10 flex justify-center w-full md:justify-end">
        
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