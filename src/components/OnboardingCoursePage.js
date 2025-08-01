import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData.json';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext'; // Import the language context hook

const OnboardingCoursePage = () => {
  const { t } = useLanguage(); // Access the translation function
  const [filter, setFilter] = useState('All');
  const [lessons, setLessons] = useState([]);
  const [activeTab] = useState('Onboarding and Issue Resolution');

  useEffect(() => {
    const onboardingCourse = coursesData.find(course => course.id === 'onboarding');
    if (onboardingCourse) {
      setLessons(onboardingCourse.lessons);
    }
  }, []);

  const filteredLessons = lessons.filter(lesson => {
    if (filter === 'All') return true;
    return lesson.status === filter;
  });

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="px-4 py-12 bg-secondary sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="pl-4 sm:pl-6 lg:pl-8">
              <h1 className="mb-6 text-4xl font-extrabold text-gray-900 lg:text-5xl">
                {t('onboarding.title')}
              </h1>

              {/* Navigation Tabs and Filter */}
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                <nav className="flex flex-wrap text-lg font-medium gap-x-6 gap-y-2">
                  <Link
                    to="/training-and-certification"
                    className={`pb-1 border-b-2 ${activeTab === 'All Courses' ? 'border-primary text-primary' : 'border-transparent text-gray-700 hover:text-primary'}`}
                  >
                    {t('onboarding.allCourses')}
                  </Link>
                  <Link
                    to="/training/product-knowledge"
                    className={`pb-1 border-b-2 ${activeTab === 'ZetCollect Product Knowledge' ? 'border-primary text-primary' : 'border-transparent text-gray-700 hover:text-primary'}`}
                  >
                    {t('onboarding.productKnowledge')}
                  </Link>
                  <Link
                    to="/training/onboarding"
                    className={`pb-1 border-b-2 ${activeTab === 'Onboarding and Issue Resolution' ? 'border-primary text-primary' : 'border-transparent text-gray-700 hover:text-primary'}`}
                  >
                    {t('onboarding.onboardingAndIssueResolution')}
                  </Link>
                  <Link
                    to="/training/security"
                    className={`pb-1 border-b-2 ${activeTab === 'ZetCollect Security' ? 'border-primary text-primary' : 'border-transparent text-gray-700 hover:text-primary'}`}
                  >
                    {t('onboarding.security')}
                  </Link>
                </nav>

                {/* Filter Dropdown */}
                <div className="relative w-full md:w-auto">
                  <select
                    className="w-full py-2 pl-4 pr-8 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="All">{t('onboarding.filter.all')}</option>
                    <option value="Completed">{t('onboarding.filter.completed')}</option>
                    <option value="In Progress">{t('onboarding.filter.inProgress')}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="px-4 py-16 mx-auto lg:py-24 max-w-7xl">
          {filteredLessons.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredLessons.map((lesson) => (
                <Link
                  to={`/course-lesson/${lesson.id}`}
                  key={lesson.id}
                  className="block overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={lesson.image}
                    alt={t(lesson.titleKey)} // Use translated title for alt text
                    className="object-cover w-full h-48"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x250/cccccc/000000?text=Lesson+Image'; }}
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                      {t(lesson.titleKey)}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {t(lesson.descriptionKey)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-lg text-center text-gray-600">
              {t('onboarding.noLessons')}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OnboardingCoursePage;