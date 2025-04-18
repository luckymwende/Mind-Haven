import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Sidebar from './components/UI/Sidebar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import ChatBox from './components/Chat/Chatbox';
import VideoPlayer from './components/VideoPlayer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Appointments from './pages/Appointments';
import Journal from './pages/Journal';
import Meditation from './pages/Meditation';
import Payment from './pages/Payment';



function App() {
  const location = useLocation();
  const hideSidebar = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {!hideSidebar && <Sidebar />}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/video"
              element={
                <VideoPlayer
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://via.placeholder.com/640x360"
                />
              }
            />
            <Route path="/resources" element={<Resources />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/journal" element={<Journal />} /> {/* ✅ ADD THIS LINE */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;