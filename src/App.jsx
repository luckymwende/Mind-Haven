import { Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Sidebar from './components/UI/sidebar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import ChatBox from './components/Chat/Chatbox';
import VideoPlayer from './components/VideoPlayer';
import Home from './pages/Home';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ Add this line */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route
              path="/video"
              element={
                <VideoPlayer
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://via.placeholder.com/640x360"
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
