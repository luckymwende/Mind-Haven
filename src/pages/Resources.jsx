import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaBook, FaHeadphones } from 'react-icons/fa';
import VideoPlayer from '../components/VideoPlayer';

const Resources = () => {
  const resources = [
    {
      id: 1,
      type: 'video',
      title: 'Guided Meditation for Stress Relief',
      description: 'A 10-minute video to help you relax and reduce stress.',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://via.placeholder.com/640x360',
    },
    {
      id: 2,
      type: 'article',
      title: 'Understanding Anxiety',
      description: 'Learn about anxiety and coping strategies.',
      url: '#',
    },
    {
      id: 3,
      type: 'audio',
      title: 'Sleep Meditation Audio',
      description: 'A calming audio track to improve sleep quality.',
      url: '#',
    },
    {
      id: 4,
      type: 'video',
      title: 'Mindfulness Basics',
      description: 'An introduction to mindfulness practices.',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://via.placeholder.com/640x360',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'video':
        return <FaPlay className="text-blue-500 text-2xl mr-3" />;
      case 'article':
        return <FaBook className="text-green-500 text-2xl mr-3" />;
      case 'audio':
        return <FaHeadphones className="text-purple-500 text-2xl mr-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent mb-6">
          Mental Health Resources
        </h1>
        <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Explore our carefully selected videos, articles, and audio tools designed to support your mental wellness journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col"
            >
              {resource.type === 'video' ? (
                <>
                  <VideoPlayer src={resource.src} poster={resource.poster} />
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-blue-700">{resource.title}</h2>
                    <p className="text-gray-600 mt-2">{resource.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-4">
                    {getIcon(resource.type)}
                    <h2 className="text-xl font-bold text-blue-700">{resource.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                  <Link
                    to={resource.url}
                    className="inline-block text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
                  >
                    {resource.type === 'article' ? 'Read Article' : 'Listen Now'}
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
