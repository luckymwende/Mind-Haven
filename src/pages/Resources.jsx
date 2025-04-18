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
        return <FaPlay className="text-blue-500 text-xl mr-2" />;
      case 'article':
        return <FaBook className="text-green-500 text-xl mr-2" />;
      case 'audio':
        return <FaHeadphones className="text-purple-500 text-xl mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510074377623-8cf13fb90f58?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-4">
          Mental Health Resources
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Explore curated videos, articles, and audio tools to support your wellness journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 flex flex-col"
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
                  <div className="flex items-center mb-3">
                    {getIcon(resource.type)}
                    <h2 className="text-lg font-semibold text-blue-700">{resource.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
                  <Link
                    to={resource.url}
                    className="mt-auto inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
