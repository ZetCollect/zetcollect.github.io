import React from 'react';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const gradientClasses = 'bg-secondary';
  const buttonColor = 'bg-primary';

  const microservices = [
    { country: 'Kenya', name: 'SMEP Microfinance Bank', img: 'SMEP Microfinance Bank logo.png' },
    { country: 'Cameroon', name: 'Cameroon Cooperative Credit Union League Ltd', img: 'CamCCUL Logo.jpg' },
    { country: 'Cameroon', name: 'CRCCU', img: 'cropped-cropped-Logo-Croped logo.jpg' },
    { country: 'Gabon', name: 'Banque de l’Habitat du Gabon (BHG)', img: '(BHG) logo.png' },
  ];

  return (
    <>
      <section className="min-h-screen py-16 bg-white lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Left Section: Gradient Background and Heading */}
            <div className={`${gradientClasses} md:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 text-white rounded-lg md:rounded-r-none`}>
              <div className="max-w-xl text-center md:text-left">
                <p className="mb-4 text-sm font-semibold tracking-widest uppercase opacity-80">
                  {t('contact.header')}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight lg:text-5xl">
                  {t('contact.form.title')}
                </h1>
              </div>
            </div>

            {/* Right Section: Form Container */}
            <div className="flex flex-col justify-center p-8 bg-white rounded-lg md:w-1/2 lg:p-12 md:rounded-l-none">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">{t('contact.title')}</h2>

              <form className="space-y-6">
                {/* Form Grid (Inputs) */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label htmlFor="first_name" className="sr-only">{t('contact.form.first_name')}</label>
                    <input
                      type="text"
                      id="first_name"
                      placeholder={t('contact.form.first_name')}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="sr-only">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      placeholder={t('contact.form.email')}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Job title */}
                  <div>
                    <label htmlFor="job_title" className="sr-only">{t('contact.form.job_title')}</label>
                    <input
                      type="text"
                      id="job_title"
                      placeholder={t('contact.form.job_title')}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Work phone */}
                  <div>
                    <label htmlFor="work_phone" className="sr-only">{t('contact.form.work_phone')}</label>
                    <input
                      type="tel"
                      id="work_phone"
                      placeholder={t('contact.form.contact_number')}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="sr-only">{t('contact.form.company')}</label>
                    <input
                      type="text"
                      id="company"
                      placeholder={t('contact.form.organisation')}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Country (Dropdown) */}
                  <div>
                    <label htmlFor="country" className="sr-only">{t('contact.form.country')}</label>
                    <select
                      id="country"
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    >
                      <option value="" disabled selected className="text-gray-500">{t('contact.form.country')}</option>
                      <option value="Cameroon">{t('contact.form.country.cameroon')}</option>
                      <option value="Kenya">{t('contact.form.country.kenya')}</option>
                      <option value="Gabon">{t('contact.form.country.gabon')}</option>
                      <option value="Tchad">{t('contact.form.country.tchad')}</option>
                      <option value="Republic of Congo">{t('contact.form.country.congo')}</option>
                    </select>
                  </div>
                    {/* Job Level (Dropdown) */}
                  <div>
                    <label htmlFor="job_level" className="sr-only">{t('contact.form.job_level')}</label>
                    <select
                      id="job_level"
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="" disabled selected className="text-gray-500">{t('contact.form.job_level')}</option>
                      <option value="c-level">{t('contact.form.job_level.c_level')}</option>
                      <option value="vp">{t('contact.form.job_level.vp')}</option>
                      <option value="director">{t('contact.form.job_level.director')}</option>
                      <option value="manager">{t('contact.form.job_level.manager')}</option>
                      <option value="other">{t('contact.form.job_level.other')}</option>
                    </select>
                  </div>

                  {/* Functional Role (Dropdown) */}
                  <div>
                    <label htmlFor="help_needed" className="sr-only">{t('contact.form.functional_role')}</label>
                    <select
                      id="help_needed"
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="" disabled selected className="text-gray-500">{t('contact.form.functional_role')}</option>
                      <option value="finance">{t('contact.form.functional_role.finance')}</option>
                      <option value="hr">{t('contact.form.functional_role.hr')}</option>
                      <option value="operator">{t('contact.form.functional_role.operator')}</option>
                      <option value="it">{t('contact.form.functional_role.it')}</option>
                    </select>
                  </div>
                  {/* How did you hear about ZetCollect? (Dropdown) */}
                  {/* <div className="md:col-span-2">
                    <label htmlFor="how_did_you_hear" className="sr-only">{t('contact.form.how_did_you_hear')}</label>
                    <select
                      id="how_did_you_hear"
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="" disabled selected className="text-gray-500">{t('contact.form.how_did_you_hear')}</option>
                      <option value="search">{t('contact.form.how_did_you_hear.search')}</option>
                      <option value="referral">{t('contact.form.how_did_you_hear.referral')}</option>
                    </select>
                  </div> */}
                </div>

                {/* Opt-in Checkbox */}
                <div className="flex items-center text-sm text-gray-600">
                  <input
                    id="opt_in"
                    type="checkbox"
                    className="w-5 h-5 border-gray-300 rounded text-secondary focus:secondary"
                  />
                  <label htmlFor="opt_in" className="ml-3">
                    {t('contact.form.opt_in')}
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className={`w-full md:w-auto px-10 py-3 text-white font-semibold rounded-full ${buttonColor} hover:opacity-90 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50`}
                  >
                    {t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Microservices Section */}
          <div className="px-8 py-12 mt-16 text-center text-white rounded-lg bg-gradient-to-r from-primary to-secondary">
            <h2 className="mb-8 text-3xl font-bold">
              {t('contact.microservices.title')}
            </h2>
            <div className="grid items-center justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {microservices.map((service, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                  <img 
                    src={service.img} 
                    alt={`${service.country} ${service.name} Logo`} 
                    className="object-contain h-20 mb-2"
                  />
                  <p className="text-sm font-semibold text-center text-gray-800">{service.country} - {service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div> 
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;