'use client';

import { useEffect, useRef, useState } from 'react';
import './RadioPlayer.css';

export default function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTrack, setCurrentTrack] = useState('Loading...');

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Load saved volume preference
    const savedVolume = localStorage.getItem('radioVolume');
    if (savedVolume !== null) {
      const volumeValue = parseFloat(savedVolume);
      setVolume(volumeValue);
      audio.volume = volumeValue;
    } else {
      audio.volume = volume;
    }

    // Handle audio errors
    const handleError = () => {
      console.error('Audio error:', audio.error);
      setCurrentTrack('Error: Could not load stream');
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        alert('Error: Could not play the stream. Please check your connection.');
      });
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    // Save volume preference
    localStorage.setItem('radioVolume', newVolume.toString());
  };

  return (
    <div className="radio-player-container">
      <div className="radio-player">
        <h3>Glas Ulice Radio</h3>
        <audio 
          ref={audioRef} 
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="YOUR_STREAM_URL_HERE" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="now-playing">
          <span className="status">🔴 LIVE</span>
          <span className="track-info">Now Playing: <span id="current-track">{currentTrack}</span></span>
        </div>
        <div className="player-controls">
          <button 
            id="play-btn" 
            className="control-btn" 
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <div className="volume-control">
            <span className="volume-icon">🔊</span>
            <input 
              type="range" 
              id="volume-slider" 
              min="0" 
              max="1" 
              step="0.1" 
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume control" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
