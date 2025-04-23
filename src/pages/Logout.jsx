import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session/token
    localStorage.removeItem('user');

    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <LogOut size={40} className="text-red-500" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Logging Out...</h1>
        <p className="text-gray-500 mb-6 text-sm">
          Thank you for using our platform. Your session is ending securely.
        </p>
        <div className="flex justify-center">
          <span className="text-xs text-gray-400 animate-pulse">Redirecting to login...</span>
        </div>
      </div>
    </div>
  );
};

export default Logout;
