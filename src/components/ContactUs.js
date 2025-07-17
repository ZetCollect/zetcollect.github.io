import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();
  const formBgColor = 'bg-secondary';

  const countries = [
    { value: 'Cameroon', label: t('contact.form.country.cameroon') },
    { value: 'Gabon', label: t('contact.form.country.gabon') },
    { value: 'Kenya', label: t('contact.form.country.kenya') },
    { value: 'Tchad', label: t('contact.form.country.tchad') },
    { value: 'Republic-Of-Congo', label: t('contact.form.country.congo') },
  ];

  return (
    <section id="contactUs" className="min-h-screen py-16 bg-gray-100 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center text-gray-800">
          <p className="text-5xl font-bold text-black">{t('contact.title')}</p>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Form Container (Blue Card) */}
        <div className={`${formBgColor} text-white rounded-3xl shadow-2xl p-8 lg:p-16`}>
          
          <h2 className="mb-12 text-3xl font-bold text-white lg:text-4xl">
            {t('contact.form.title')}
          </h2>

          <form className="space-y-8">
            
            {/* Input Grid: 2 columns */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              
              {/* First Name */}
              <div>
                <label htmlFor="first_name" className="sr-only">{t('contact.form.first_name')}</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder={t('contact.form.first_name')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last_name" className="sr-only">{t('contact.form.last_name')}</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder={t('contact.form.last_name')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Email ID */}
              <div>
                <label htmlFor="email_id" className="sr-only">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email_id"
                  placeholder={t('contact.form.email')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contact_number" className="sr-only">{t('contact.form.contact_number')}</label>
                <input
                  type="tel"
                  id="contact_number"
                  placeholder={t('contact.form.contact_number')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Organisation */}
              <div>
                <label htmlFor="organisation" className="sr-only">{t('contact.form.organisation')}</label>
                <input
                  type="text"
                  id="organisation"
                  placeholder={t('contact.form.organisation')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Country Dropdown */}
              <div>
                <label htmlFor="country" className="sr-only">{t('contact.form.country')}</label>
                <select
                  id="country"
                  className="w-full px-5 py-4 text-gray-900 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="" disabled selected className="text-gray-500">
                    {t('contact.form.country')}
                  </option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* How did you hear */}
            <div>
              <label htmlFor="how_did_you_hear" className="sr-only">{t('contact.form.how_did_you_hear')}</label>
              <select
                id="how_did_you_hear"
                className="w-full px-5 py-4 text-gray-900 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled selected>{t('contact.form.how_did_you_hear')}</option>
                <option value="search">{t('contact.form.how_did_you_hear.search')}</option>
                <option value="referral">{t('contact.form.how_did_you_hear.referral')}</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-8 py-3 font-semibold text-white transition duration-300 rounded-lg bg-primary"
              >
                {t('contact.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;