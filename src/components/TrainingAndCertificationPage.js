import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer'; 

const TrainingAndCertificationPage = () => {
  const { t } = useLanguage();

  const courses = [
    {
      title: t('training.courses.onboarding.title'),
      image: 'onboarding.png',
      link: '/training/onboarding',
    },
    {
      title: t('training.courses.productKnowledge.title'),
      image: 'product knowledge.png',
      link: '/training/product-knowledge',
    },
  ];

  return (
    <>
    <section className="min-h-screen bg-white">
      <div className="relative px-4 py-20 overflow-hidden text-white bg-secondary sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
        }}></div>
        <div className="absolute bottom-0 right-0 w-full h-full opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          transform: 'rotate(180deg)'
        }}></div>

        <div className="relative z-10 flex flex-col items-center justify-between mx-auto md:flex-row max-w-7xl">
          {/* Left Content */}
          <div className="mb-10 text-center md:w-1/2 md:text-left md:mb-0">
            <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              {t('training.title') || 'Take your career to the next level'}
            </h1>
            <p className="max-w-lg mx-auto text-lg text-white opacity-90 lg:text-xl md:mx-0">
              {t('training.subtitle') || 'Get the product knowledge you need to become successful in your field'}
            </p>
          </div>
        </div>
      </div>

      {/* Courses Section - Modified to fit the second image design */}
      <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24" aria-label="Courses">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900"> 
          {t('training.courses.title') || 'Courses'}
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
          {t('training.courses.subtitle') || 'A collection of learning resources empowering the Offline Distribution Team'}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> {/* Changed from flex to grid for better responsiveness */}
          {courses.map((course, index) => (
            <Link
              to={course.link}
              key={index}
              className="block p-6 transition-transform duration-300 bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl group" // Added group for hover effects on children
            >
              <div className="flex items-center justify-center mb-6"> {/* Centered image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-contain w-36 h-36"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/cccccc/000000?text=Course+Icon'; }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-primary"> {/* Added group-hover effect */}
                {course.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default TrainingAndCertificationPage;
