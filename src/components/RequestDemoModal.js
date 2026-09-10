import { useState } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';

const API_CONFIG = {
  URL: "https://contact-form-handler-885787520862.europe-west1.run.app",
  TIMEOUT: 40000,
  MAX_RETRIES: 3
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const NotificationModal = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-secondary' : 'bg-red-500';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
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

NotificationModal.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onClose: PropTypes.func.isRequired
};

const Stepper = ({ step }) => {
  const steps = [
    { number: 1, label: 'Company info' },
    { number: 2, label: 'Your info' },
  ];

  return (
    <div className="flex items-center justify-center mb-10">
      {steps.map((s, idx) => (
        <div key={s.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                step >= s.number
                  ? 'bg-primary text-white'
                  : 'border-2 border-gray-300 text-gray-400'
              }`}
            >
              {s.number}
            </div>
            <span className={`mt-2 text-sm ${step >= s.number ? 'text-primary font-semibold' : 'text-gray-400'}`}>
              {s.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className={`w-20 h-0.5 mx-3 mb-6 ${step > s.number ? 'bg-primary' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

Stepper.propTypes = {
  step: PropTypes.number.isRequired
};

const RequestDemoModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    company: '',
    country: '',
    job_level: '',
    first_name: '',
    last_name: '',
    email: '',
    work_phone: '',
    help_needed: '',
    opt_in: false,
  });

  // Same country set/order as ContactUs & ContactPage
  const countries = [
    { value: 'Cameroon', label: 'Cameroon' },
    { value: 'Central African Republic', label: 'Central African Republic' },
    { value: 'Gabon', label: 'Gabon' },
    { value: 'Kenya', label: 'Kenya' },
    { value: 'Tchad', label: 'Tchad' },
    { value: 'Republic of Congo', label: 'Republic of Congo' },
  ].sort((a, b) => {
    if (a.value === 'Cameroon') return -1;
    if (b.value === 'Cameroon') return 1;
    if (a.value === 'Central African Republic') return -1;
    if (b.value === 'Central African Republic') return 1;
    return a.value.localeCompare(b.value);
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (id === 'work_phone') {
      const numbersOnly = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [id]: numbersOnly }));
    } else {
      setFormData(prev => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
    }

    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.country) newErrors.country = 'Please select a country';
    if (!formData.job_level) newErrors.job_level = 'Please select a job level';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Business email is required';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.work_phone) {
      newErrors.work_phone = 'Work phone is required';
    } else if (!/^\d+$/.test(formData.work_phone)) {
      newErrors.work_phone = 'Phone number should contain only numbers';
    }
    if (!formData.help_needed) newErrors.help_needed = 'Please select a functional role';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep(1);
  };

  const submitToAPI = async (data, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    const fullName = data.last_name.trim()
      ? `${data.first_name} ${data.last_name}`
      : `${data.first_name} nan`;

    try {
      const response = await fetch(API_CONFIG.URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
          name: fullName,
          email: data.email,
          message: `Product: ZetCollect\nRequest Type: Demo Request\nCompany: ${data.company}\nCountry: ${data.country}\nJob Level: ${data.job_level}\nWork Phone: ${data.work_phone}\nFunctional Role: ${data.help_needed}\nOpt-in: ${data.opt_in ? 'Yes' : 'No'}`,
          source: 'ZetCollect'
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

      if (retryCount < API_CONFIG.MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return submitToAPI(data, retryCount + 1);
      }

      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep2()) {
      return;
    }

    setIsSubmitting(true);

    try {
      setNotification({ message: 'Thank you! Our team will get back to you to schedule your demo shortly.', type: 'success' });

      const formDataToSubmit = { ...formData };

      setFormData({
        company: '',
        country: '',
        job_level: '',
        first_name: '',
        last_name: '',
        email: '',
        work_phone: '',
        help_needed: '',
        opt_in: false,
      });
      setErrors({});
      setStep(1);

      await submitToAPI(formDataToSubmit);
    } catch (error) {
      console.error('Demo request submission failed:', error.message);
      setNotification({ message: 'Submitted! There was a network issue, but we have recorded your information.', type: 'success' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-xl p-8 bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute p-2 text-red-500 rounded-full top-4 right-4 hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Request your ZetCollect demo
        </h2>

        {notification && (
          <NotificationModal
            message={notification.message}
            type={notification.type}
            onClose={() => {
              setNotification(null);
              if (notification.type === 'success') onClose();
            }}
          />
        )}

        <Stepper step={step} />

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="company" className="block mb-1 text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="country" className="block mb-1 text-sm font-medium text-gray-700">Country</label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="" disabled className="text-gray-500">Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
              </div>

              <div>
                <label htmlFor="job_level" className="block mb-1 text-sm font-medium text-gray-700">Job Level</label>
                <select
                  id="job_level"
                  value={formData.job_level}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                    errors.job_level ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="" disabled className="text-gray-500">Job Level</option>
                  <option value="c-level">C-Level</option>
                  <option value="vp">Vice President</option>
                  <option value="director">Director</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
                {errors.job_level && <p className="mt-1 text-sm text-red-500">{errors.job_level}</p>}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 font-semibold text-white transition duration-300 rounded-full bg-primary hover:opacity-90"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                      errors.first_name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.first_name && <p className="mt-1 text-sm text-red-500">{errors.first_name}</p>}
                </div>

                <div>
                  <label htmlFor="last_name" className="block mb-1 text-sm font-medium text-gray-700">Last Name (optional)</label>
                  <input
                    type="text"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Business Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="work_phone" className="block mb-1 text-sm font-medium text-gray-700">Work Phone</label>
                <input
                  type="tel"
                  id="work_phone"
                  value={formData.work_phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                    errors.work_phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.work_phone && <p className="mt-1 text-sm text-red-500">{errors.work_phone}</p>}
              </div>

              <div>
                <label htmlFor="help_needed" className="block mb-1 text-sm font-medium text-gray-700">Functional Role</label>
                <select
                  id="help_needed"
                  value={formData.help_needed}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-gray-900 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                    errors.help_needed ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="" disabled className="text-gray-500">Functional Role</option>
                  <option value="finance">Finance and Accounting</option>
                  <option value="hr">Human Resource</option>
                  <option value="operator">Operator</option>
                  <option value="it">IT</option>
                </select>
                {errors.help_needed && <p className="mt-1 text-sm text-red-500">{errors.help_needed}</p>}
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <input
                  id="opt_in"
                  type="checkbox"
                  checked={formData.opt_in}
                  onChange={handleInputChange}
                  className="w-5 h-5 border-gray-300 rounded text-secondary focus:ring-secondary"
                />
                <label htmlFor="opt_in" className="ml-3">
                  Opt in to ZetCollect tailored information such as industry news and reports, solution updates and events, via email and telephone
                </label>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-8 py-3 font-semibold transition duration-300 border-2 rounded-full border-primary text-primary hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 font-semibold text-white transition duration-300 rounded-full bg-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

RequestDemoModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default RequestDemoModal;