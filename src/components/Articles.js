import React, { useState } from 'react';
import { ArrowRight, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

const BlogPage = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const blogPosts = [
    {
      category: t('blog.category.financial'),
      title: t('blog.post1.title'),
      description: t('blog.post1.description'),
      author: 'ZetCollect Team',
      date: 'July 16, 2025',
      image: '/Finance.jpg',
    },
    {
      category: t('blog.category.financial'),
      title: t('blog.post2.title'),
      description: t('blog.post2.description'),
      author: 'ZetCollect Team',
      date: 'July 10, 2025',
      image: 'Security.jpg',
    },
    {
      category: t('blog.category.financial'),
      title: t('blog.post3.title'),
      description: t('blog.post3.description'),
      author: 'ZetCollect Team',
      date: 'July 3, 2025',
      image: 'Analytics.jpg',
    }
  ];

  const openModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({ title: '', description: '' });
  };

  return (
    <>
      <section className="min-h-screen py-16 bg-white lg:py-14">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Blog Header */}
          <div className="mb-12">
            <h1 className="mb-2 text-5xl font-extrabold text-gray-900">
              {t('blog.title')}
            </h1>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:scale-105 custom-shadow-blue hover:custom-shadow-blue-xl"
              >
                {/* Blog Post Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-52"
                />

                <div className="p-6">
                  {/* Category */}
                  <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                    {post.category}
                  </p>
                  {/* Title */}
                  <h2 className="mb-3 text-xl font-bold text-gray-900">
                    {post.title}
                  </h2>
                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                  {/* Author and Date */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  {/* Read More Button - now opens modal */}
                  <button
                    onClick={() => openModal(post.title, post.description)}
                    className="inline-flex items-center font-semibold transition-colors text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Modal Component --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
            <div
              className="relative w-full max-w-lg p-8 m-4 bg-white rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <button
                onClick={closeModal}
                className="absolute text-gray-500 top-4 right-4 hover:text-gray-700 focus:outline-none"
                aria-label="Close modal"
              >
                <XCircle className="w-6 h-6" />
              </button>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {modalContent.title}
              </h2>
              <p className="leading-relaxed text-gray-700">
                {modalContent.description}
              </p>
            </div>
          </div>
        )}

        {/* Custom Styles for More Visible Blue Drop Shadows */}
        <style>{`
          /* Define a custom shadow with a more visible blue tint */
          .custom-shadow-blue {
            box-shadow: 0 6px 12px -3px rgba(59, 130, 246, 0.25), 0 3px 6px -3px rgba(59, 130, 246, 0.2);
          }

          /* Define a custom hover shadow with a significantly stronger blue tint */
          .hover\\:custom-shadow-blue-xl:hover {
            box-shadow: 0 20px 30px -8px rgba(59, 130, 246, 0.4), 0 8px 12px -6px rgba(59, 130, 246, 0.3);
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;