import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaChartLine,
  FaComments,
  FaSpa,
  FaBook,
  FaCalendarAlt,
  FaPenFancy,
  FaHeart,
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-50 to-teal-100 p-8 text-gray-800">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-24 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4 drop-shadow-xl">
          Welcome to <span className="text-green-600">WellnessHub</span>
        </h1>
        <p className="text-lg font-medium text-gray-700">
          A calm, supportive space to help you heal, grow, and thrive.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-28">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      {/* Divider */}
      <SectionDivider icon={<FaHeart />} text="How It Works" />

      {/* Steps */}
      <section className="max-w-5xl mx-auto mb-28 grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} step={index + 1} />
        ))}
      </section>

      {/* Divider */}
      <SectionDivider icon={<FaComments />} text="What People Say" />

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto mb-28 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Testimonial key={i} {...t} />
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Ready to Begin?</h2>
        <p className="text-lg text-gray-700 mb-6">Join thousands embracing their path to wellness.</p>
        <Link
          to="/signup"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition transform duration-300"
        >
          Get Started Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-10 border-t border-gray-300">
        <p>&copy; {new Date().getFullYear()} WellnessHub. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/terms" className="hover:text-blue-600">Terms</Link>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    to: '/dashboard',
    title: 'Dashboard',
    icon: <FaChartLine />,
    text: 'Visualize your progress and mood trends.',
  },
  {
    to: '/chat',
    title: 'Chat',
    icon: <FaComments />,
    text: 'Talk with a therapist or join group discussions.',
  },
  {
    to: '/meditation',
    title: 'Meditation',
    icon: <FaSpa />,
    text: 'Access calming meditations to center yourself.',
  },
  {
    to: '/resources',
    title: 'Resources',
    icon: <FaBook />,
    text: 'Articles, videos, and guides curated for your growth.',
  },
  {
    to: '/appointments',
    title: 'Appointments',
    icon: <FaCalendarAlt />,
    text: 'Easily schedule and manage your therapy sessions.',
  },
  {
    to: '/journal',
    title: 'Journal',
    icon: <FaPenFancy />,
    text: 'Reflect in private with a secure, easy-to-use journal.',
  },
];

const steps = [
  { title: 'Create Your Profile', description: 'Sign up and personalize your experience.' },
  { title: 'Explore & Connect', description: 'Use tools, join chats, and access resources.' },
  { title: 'Grow at Your Pace', description: 'Track your journey with insights and support.' },
];

const testimonials = [
  { name: '🌿 Alex M.', quote: 'The journaling tool keeps me grounded every day. A total game changer!' },
  { name: '🧘 Rita W.', quote: 'I love the meditation library. I use it every morning and sleep better now.' },
  { name: '💬 Daniel K.', quote: 'Real-time chat with a counselor helped me through tough moments.' },
];

const FeatureCard = ({ to, title, icon, text }) => (
  <Link
    to={to}
    className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
  >
    <div className="text-5xl text-green-500 mb-4">{icon}</div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600">{text}</p>
  </Link>
);

const StepCard = ({ step, title, description }) => (
  <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition">
    <div className="text-2xl font-bold text-blue-600 mb-2">Step {step}</div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonial = ({ name, quote }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-left">
    <p className="italic text-gray-700 mb-3">“{quote}”</p>
    <p className="font-semibold text-green-600">{name}</p>
  </div>
);

const SectionDivider = ({ icon, text }) => (
  <div className="flex items-center justify-center mb-16 gap-3">
    <div className="w-12 h-1 bg-blue-300 rounded" />
    <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
      {icon} {text}
    </div>
    <div className="w-12 h-1 bg-blue-300 rounded" />
  </div>
);

export default Home;
