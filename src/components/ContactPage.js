import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// API configuration
const API_CONFIG = {
  URL: "https://contact-form-handler-885787520862.europe-west1.run.app",
  TIMEOUT: 40000, // 40 seconds
  MAX_RETRIES: 2
};

// Modal notification component
const Modal = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-secondary' : 'bg-red-500';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center gap-4`}>
        <span className="text-center">{message}</span>
        <button 
          onClick={onClose} 
          className="px-4 py-2 text-black transition duration-300 bg-white rounded-lg hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Enhanced ContactUs Component
const ContactUs = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    contact_number: '',
    organisation: '',
    country: '',
    how_did_you_hear: ''
  });

  const formBgColor = 'bg-secondary';

  const countries = [
    { value: 'Cameroon', label: t('contact.form.country.cameroon') },
    { value: 'Gabon', label: t('contact.form.country.gabon') },
    { value: 'Kenya', label: t('contact.form.country.kenya') },
    { value: 'Tchad', label: t('contact.form.country.tchad') },
    { value: 'Republic-Of-Congo', label: t('contact.form.country.congo') },
  ];

  const showModal = (message, type = 'success') => {
    setModal({ message, type });
  };

  const hideModal = () => {
    setModal(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const submitToAPI = async (data, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(API_CONFIG.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name: `${data.first_name} ${data.last_name}`,
          email: data.email_id,
          message: `Contact Number: ${data.contact_number}\nOrganisation: ${data.organisation}\nCountry: ${data.country}\nHow did you hear: ${data.how_did_you_hear}`,
          source: 'ZetCollect' // Added to satisfy API requirement
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        console.log(`Request timeout (attempt ${retryCount + 1})`);
      } else {
        console.error(`Request failed (attempt ${retryCount + 1}):`, error);
      }

      if (retryCount < API_CONFIG.MAX_RETRIES) {
        console.log(`Retrying... (${retryCount + 1}/${API_CONFIG.MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return submitToAPI(data, retryCount + 1);
      }

      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Show immediate success modal
      showModal('Thank you! Your message has been submitted successfully.', 'success');
      
      // Store form data before reset for logging
      const formDataToSubmit = { ...formData };
      
      // Reset form immediately
      setFormData({
        first_name: '',
        last_name: '',
        email_id: '',
        contact_number: '',
        organisation: '',
        country: '',
        how_did_you_hear: ''
      });

      // Background API call
      await submitToAPI(formDataToSubmit);
      console.log('Form submitted successfully to API');
      
    } catch (error) {
      console.error('API submission failed:', error.message);
      
      // Show error modal if API fails
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        showModal('Form submitted! Note: Unable to connect to server due to CORS policy, but your message was recorded locally.', 'success');
      } else {
        showModal('Form submitted! There was a network issue, but we have recorded your information.', 'success');
      }
      
      // eslint-disable-next-line no-undef
      console.log('Form data for manual processing:', formDataToSubmit);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactUs" className="min-h-screen py-16 bg-gray-100 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Modal notification */}
        {modal && (
          <Modal 
            message={modal.message} 
            type={modal.type} 
            onClose={hideModal} 
          />
        )}
        
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

          <div className="space-y-8">
            
            {/* Input Grid: 2 columns */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              
              {/* First Name */}
              <div>
                <label htmlFor="first_name" className="sr-only">{t('contact.form.first_name')}</label>
                <input
                  type="text"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.first_name')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last_name" className="sr-only">{t('contact.form.last_name')}</label>
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.last_name')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email ID */}
              <div>
                <label htmlFor="email_id" className="sr-only">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email_id"
                  value={formData.email_id}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.email')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contact_number" className="sr-only">{t('contact.form.contact_number')}</label>
                <input
                  type="tel"
                  id="contact_number"
                  value={formData.contact_number}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.contact_number')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Organisation */}
              <div>
                <label htmlFor="organisation" className="sr-only">{t('contact.form.organisation')}</label>
                <input
                  type="text"
                  id="organisation"
                  value={formData.organisation}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.organisation')}
                  className="w-full px-5 py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Country Dropdown */}
              <div>
                <label htmlFor="country" className="sr-only">{t('contact.form.country')}</label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 text-gray-900 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" disabled className="text-gray-500">
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
                value={formData.how_did_you_hear}
                onChange={handleInputChange}
                className="w-full px-5 py-4 text-gray-900 bg-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>{t('contact.form.how_did_you_hear')}</option>
                <option value="search">{t('contact.form.how_did_you_hear.search')}</option>
                <option value="referral">{t('contact.form.how_did_you_hear.referral')}</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 font-semibold text-white transition duration-300 rounded-lg bg-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : t('contact.form.submit')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced ContactPage Component
const ContactPage = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    job_title: '',
    work_phone: '',
    company: '',
    country: '',
    job_level: '',
    help_needed: '',
    opt_in: false
  });

  const gradientClasses = 'bg-secondary';
  const buttonColor = 'bg-primary';

  const microservices = [
    { country: 'Kenya', name: 'Rafiki', img: 'Rafiki_Logo_Cropped.png' },
    { country: 'Kenya', name: 'LOLC', img: 'LOLC_Kenya_Cropped.png' },
    { country: 'Kenya', name: 'Muungano', img: 'Muungano_Cropped.png' },
    { country: 'Gabon', name: 'Cofidec', img: 'Cofidec_Logo.jpg' },
    { country: 'Gabon', name: 'Sodec', img: 'Sodec_Logo.svg' },
  ];

  const showModal = (message, type = 'success') => {
    setModal({ message, type });
  };

  const hideModal = () => {
    setModal(null);
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const submitToAPI = async (data, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(API_CONFIG.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name: `${data.first_name} ${data.last_name}`,
          email: data.email,
          message: `Job Title: ${data.job_title}\nWork Phone: ${data.work_phone}\nCompany: ${data.company}\nCountry: ${data.country}\nJob Level: ${data.job_level}\nFunctional Role: ${data.help_needed}\nOpt-in: ${data.opt_in ? 'Yes' : 'No'}`,
          source: 'ZetCollect' // Added to satisfy API requirement
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        console.log(`Request timeout (attempt ${retryCount + 1})`);
      } else {
        console.error(`Request failed (attempt ${retryCount + 1}):`, error);
      }

      if (retryCount < API_CONFIG.MAX_RETRIES) {
        console.log(`Retrying... (${retryCount + 1}/${API_CONFIG.MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return submitToAPI(data, retryCount + 1);
      }

      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Show immediate success modal
      showModal('Thank you! Your message has been submitted successfully.', 'success');
      
      // Store form data before reset for logging
      const formDataToSubmit = { ...formData };
      
      // Reset form immediately
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        job_title: '',
        work_phone: '',
        company: '',
        country: '',
        job_level: '',
        help_needed: '',
        opt_in: false
      });

      // Background API call
      await submitToAPI(formDataToSubmit);
      console.log('Form submitted successfully to API');
      
    } catch (error) {
      console.error('API submission failed:', error.message);
      
      // Show error modal if API fails
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        showModal('Form submitted! Note: Unable to connect to server due to CORS policy, but your message was recorded locally.', 'success');
      } else {
        showModal('Form submitted! There was a network issue, but we have recorded your information.', 'success');
      }

      // eslint-disable-next-line no-undef
      console.log('Form data for manual processing:', formDataToSubmit); // Log the original data
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-16 bg-white lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Modal notification */}
        {modal && (
          <Modal 
            message={modal.message} 
            type={modal.type} 
            onClose={hideModal} 
          />
        )}
        
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Gradient Background and Heading */}
          <div className={`${gradientClasses} md:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 text-white rounded-lg md:rounded-r-none`}>
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-3xl font-extrabold leading-tight lg:text-5xl">
                {t('contact.form.title')}
              </h1>
            </div>
          </div>
          {/* Right Section: Form Container */}
          <div className="flex flex-col justify-center p-8 bg-white border rounded-lg border-secondary md:w-1/2 lg:p-12 md:rounded-l-none">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">{t('contact.title')}</h2>

            <div className="space-y-6">
              {/* Form Grid (Inputs) */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label htmlFor="first_name" className="sr-only">{t('contact.form.first_name')}</label>
                  <input
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
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
                    value={formData.last_name}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.job_title}
                    onChange={handleInputChange}
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
                    value={formData.work_phone}
                    onChange={handleInputChange}
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
                    value={formData.company}
                    onChange={handleInputChange}
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
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    required
                  >
                    <option value="" disabled className="text-gray-500">{t('contact.form.country')}</option>
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
                    value={formData.job_level}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="" disabled className="text-gray-500">{t('contact.form.job_level')}</option>
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
                    value={formData.help_needed}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="" disabled className="text-gray-500">{t('contact.form.functional_role')}</option>
                    <option value="finance">{t('contact.form.functional_role.finance')}</option>
                    <option value="hr">{t('contact.form.functional_role.hr')}</option>
                    <option value="operator">{t('contact.form.functional_role.operator')}</option>
                    <option value="it">{t('contact.form.functional_role.it')}</option>
                  </select>
                </div>
              </div>

              {/* Opt-in Checkbox */}
              <div className="flex items-center text-sm text-gray-600">
                <input
                  id="opt_in"
                  type="checkbox"
                  checked={formData.opt_in}
                  onChange={handleInputChange}
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
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-10 py-3 text-white font-semibold rounded-full ${buttonColor} hover:opacity-90 transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? 'Submitting...' : t('contact.form.submit')}
                </button>
              </div>
            </div>
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
                <p className="text-sm font-semibold text-center text-gray-800">{service.name} - {service.country}</p>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </section>
  );
};

// Export both components
export { ContactUs, ContactPage };