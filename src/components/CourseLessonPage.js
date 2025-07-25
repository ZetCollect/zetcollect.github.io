import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import lessonContentData from '../data/lessonContent.json';
import coursesData from '../data/coursesData.json';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext'; // Import the language context hook

const CourseLessonPage = () => {
  const { t } = useLanguage(); // Access the translation function
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const foundLesson = lessonContentData.find(l => l.id === lessonId);
    setLesson(foundLesson);
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 bg-gray-50">
        <p className="text-xl font-medium">{t('courseLesson.notFound')}</p>
      </div>
    );
  }

  const parentCourse = coursesData.find(course => t(course.titleKey) === t(lesson.categoryKey));
  const backLinkPath = parentCourse ? `/training/${parentCourse.id}` : '/training-and-certification';
  const backLinkText = lesson.categoryKey ? t('courseLesson.backToCourse', { category: t(lesson.categoryKey) }) : t('courseLesson.backToAllCourses');

  return (
    <>
      <section className="min-h-screen font-sans antialiased bg-gray-50">
        <header className="px-4 py-8 text-white shadow-lg bg-secondary sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t('courseLesson.title', { lessonTitle: t(lesson.titleKey) })}
            </h1>
          </div>
        </header>

        <main className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="p-8 transition-transform duration-300 bg-white border border-gray-100 shadow-lg rounded-3xl sm:p-10 lg:p-12 hover:shadow-xl">
              <div
                className="leading-relaxed prose prose-lg text-gray-800 max-w-none"
                dangerouslySetInnerHTML={{ __html: t(lesson.contentKey) }}
              />
              <div className="pt-6 mt-10 text-left border-t border-gray-200">
                <Link
                  to={backLinkPath}
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out rounded-full shadow-md bg-primary hover:bg-secondary/90 hover:-translate-y-1"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {backLinkText}
                </Link>
              </div>
            </div>

            {lesson.relatedCourses && lesson.relatedCourses.length > 0 && (
              <div className="p-8 mt-12 bg-white border border-gray-100 shadow-lg rounded-3xl sm:p-10 lg:p-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">{t('courseLesson.relatedCourses')}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {lesson.relatedCourses.map((course, index) => (
                    <Link
                      key={index}
                      to={course.link}
                      className="block p-4 transition-colors duration-300 bg-gray-50 rounded-xl hover:bg-secondary/10"
                    >
                      <h3 className="text-lg font-semibold text-secondary hover:text-secondary/80">
                        {t(course.titleKey)}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default CourseLessonPage;