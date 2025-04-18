import React, { useState, useEffect, useRef } from 'react';

const Meditation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(5 * 60); // default 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(duration);
  const [selectedBackground, setSelectedBackground] = useState('forest');
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const backgrounds = {
    forest: {
      name: 'Forest',
      description: 'Peaceful forest sounds with birds chirping',
      audioSrc: '/sounds/forest.mp3', // Path to your audio file
      bgClass: 'bg-green-100',
    },
    ocean: {
      name: 'Ocean',
      description: 'Calming ocean waves',
      audioSrc: '/sounds/ocean.mp3',
      bgClass: 'bg-blue-100',
    },
    rain: {
      name: 'Rain',
      description: 'Gentle rainfall',
      audioSrc: '/sounds/rain.mp3',
      bgClass: 'bg-gray-100',
    },
    silence: {
      name: 'Silence',
      description: 'Peaceful silence for deep focus',
      audioSrc: null,
      bgClass: 'bg-white',
    },
  };

  useEffect(() => {
    setTimeLeft(duration);
    
    // Store the current value of the ref in a variable
    const currentAudio = audioRef.current;
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Use the stored reference instead of audioRef.current
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    };
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0 && isPlaying) {
      handleStop();
      // Play completion sound or show notification
      alert('Meditation session completed!');
    }
  }, [timeLeft, isPlaying]);

  const handleStart = () => {
    setIsPlaying(true);
    
    // Start timer
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Play background sound if selected
    if (backgrounds[selectedBackground].audioSrc && audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioRef.current) audioRef.current.pause();
  };

  const handleReset = () => {
    setIsPlaying(false);
    setTimeLeft(duration);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value) * 60;
    setDuration(newDuration);
    setTimeLeft(newDuration);
  };

  const handleBackgroundChange = (bg) => {
    setSelectedBackground(bg);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    if (isPlaying && backgrounds[bg].audioSrc) {
      // Need to set a small timeout to allow the new audio source to load
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg ${backgrounds[selectedBackground].bgClass} transition-colors duration-500 min-h-screen`}>
      <h1 className="text-3xl font-bold mb-6 text-center">Mindful Meditation</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Take a moment to breathe, relax, and center yourself. Choose your preferred 
          meditation duration and background ambiance.
        </p>
      </div>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="text-center mb-6">
          <div className="text-6xl font-bold mb-4 text-indigo-600">
            {formatTime(timeLeft)}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Session Length:</label>
            <select 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={duration / 60}
              onChange={handleDurationChange}
              disabled={isPlaying}
            >
              <option value="1">1 minute</option>
              <option value="3">3 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
              <option value="30">30 minutes</option>
            </select>
          </div>
          
          <div className="flex justify-center space-x-4">
            {!isPlaying ? (
              <button 
                onClick={handleStart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full focus:outline-none"
              >
                Start
              </button>
            ) : (
              <button 
                onClick={handleStop}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full focus:outline-none"
              >
                Pause
              </button>
            )}
            
            <button 
              onClick={handleReset}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full focus:outline-none"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-3">Background Ambiance</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.keys(backgrounds).map((bg) => (
            <button
              key={bg}
              onClick={() => handleBackgroundChange(bg)}
              className={`p-4 rounded-lg border-2 text-left focus:outline-none transition-all ${
                selectedBackground === bg 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <div className="font-medium">{backgrounds[bg].name}</div>
              <div className="text-sm text-gray-600">{backgrounds[bg].description}</div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="max-w-md mx-auto mt-8 text-center">
        <h3 className="text-lg font-medium mb-2">Meditation Tips</h3>
        <ul className="text-left text-gray-700 list-disc pl-6">
          <li className="mb-1">Find a comfortable seated position</li>
          <li className="mb-1">Focus on your breath - inhale and exhale slowly</li>
          <li className="mb-1">When your mind wanders, gently bring it back to your breath</li>
          <li className="mb-1">Let go of any tension in your body</li>
        </ul>
      </div>
      
      {backgrounds[selectedBackground].audioSrc && (
        <audio
          ref={audioRef}
          src={backgrounds[selectedBackground].audioSrc}
          loop
        />
      )}
    </div>
  );
};

export default Meditation;