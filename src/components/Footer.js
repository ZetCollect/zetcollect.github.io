import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube } from "react-icons/fa"; 
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="font-sans text-gray-700 bg-white border-t border-gray-200">
      {/* Main Footer Content Area (Top Section) */}
      <div className="container px-4 py-16 mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row">
          <div className="flex flex-col w-full gap-6 lg:w-1/3">
            <img
              className="w-[200px] h-auto"
              src='applogo.png'
              alt={t('footer.logo_alt')}
            />
            
            <div className="mt-4 text-xl leading-relaxed">
              <p>{t('footer.help_text')}</p>
            </div>
            
            <div className="flex items-center mt-4 transition duration-300 text-primary hover:text-secondary">
              <Link to="/contactPage" className="mr-2 text-base font-semibold">
                {t('common.contactUs')}
              </Link>
              <svg className="w-6 h-6 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </div>
            
            {/* Social Icons (LinkedIn, YouTube) */}
            <div className="flex mt-8 space-x-4">
              <a href="https://www.linkedin.com/company/zetscore" target="_blank" rel="noopener noreferrer" className="p-2 text-black transition duration-300 bg-white border border-black rounded-full hover:bg-gray-100" aria-label={t('footer.social.linkedin')}>
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/zetscore" target="_blank" rel="noopener noreferrer" className="p-2 text-black transition duration-300 bg-white border border-black rounded-full hover:bg-gray-100" aria-label={t('footer.social.youtube')}>
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Columns: Navigation Links */}
          <div className="grid w-full grid-cols-2 gap-12 mt-10 sm:grid-cols-3 lg:w-2/3 lg:mt-0">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="font-bold ">{t('footer.about')}</p>
              <Link to="/about-us" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('footer.about_us')}</Link>
              <Link to="/work-in-progress-page" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('footer.resource_center')}</Link>
              <Link to="/contact-page" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('common.contactUs')}</Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <p className="font-bold ">{t('footer.newsroom')}</p>
              <Link to="/articles" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('footer.articles')}</Link>
              <Link to="/events" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('footer.events_webinars')}</Link>
              <Link to="/release-notes-page" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('release.title')}</Link>
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="font-bold ">{t('footer.support')}</p>
              <Link to="/faq-page" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('footer.faq')}</Link>
              <Link to="/customer-support-page" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('support.title')}</Link>
              <Link to="/work-in-progress-page" className="text-base text-gray-700 transition duration-200 hover:text-primary">{t('footer.training_certification')}</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Section (Copyright and Legal Links) */}
      <div className="py-4 text-sm text-gray-600 border-t border-gray-200 bg-gray-50">
        <div className="container items-center px-4 mx-auto space-y-4 text-center max-w-7xl md:flex-row md:space-y-0">
          <div className="space-y-2 tems-center sm:flex-row sm:space-y-0 sm:space-x-4">
            <span>
              <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;