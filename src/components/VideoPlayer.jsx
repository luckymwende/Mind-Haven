import React, { useState } from 'react';

const VideoPlayer = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('video-player');
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Video Player</h2>
      <div className="relative">
        <video
          id="video-player"
          className="w-full rounded-md"
          src={src}
          poster={poster}
          controls={false}
        />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            onClick={handlePlayPause}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;