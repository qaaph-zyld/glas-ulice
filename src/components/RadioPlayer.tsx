'use client';

import { useEffect, useRef, useState } from 'react';
import './RadioPlayer.css';

export default function RadioPlayer() {
  const defaultVolume = 0.8;
  const streamUrl = process.env.NEXT_PUBLIC_RADIO_STREAM_URL ?? '';
  const hasStream = streamUrl.length > 0;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);
  const [currentTrack, setCurrentTrack] = useState('Signal standby');

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
      audio.volume = defaultVolume;
    }

    // Handle audio errors
    const handleError = () => {
      console.error('Audio error:', audio.error);
      setCurrentTrack('Signal unavailable');
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('error', handleError);
    };
  }, [defaultVolume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasStream) {
      setCurrentTrack('Stream URL not configured');
      return;
    }

    if (audio.paused) {
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        setCurrentTrack('Playback blocked by browser');
      });
      setIsPlaying(true);
      setCurrentTrack('Live stream active');
    } else {
      audio.pause();
      setIsPlaying(false);
      setCurrentTrack('Signal standby');
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
        <div className="radio-player__heading">
          <h3>Glas Ulice Radio</h3>
          <span className="radio-player__live-pill">Live</span>
        </div>
        <audio 
          ref={audioRef} 
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={streamUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="now-playing">
          <span className={`status ${isPlaying ? 'status--active' : ''}`}>
            <span className="status__dot" aria-hidden="true" />
            <span>{isPlaying ? 'ON AIR' : 'IDLE'}</span>
          </span>
          <span className="track-info">{currentTrack}</span>
        </div>
        <div className="player-controls">
          <button 
            id="play-btn" 
            className="control-btn" 
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="volume-control">
            <label htmlFor="volume-slider">Volume</label>
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
        {!hasStream && (
          <p className="radio-player__hint">Set NEXT_PUBLIC_RADIO_STREAM_URL to enable live playback.</p>
        )}
      </div>
    </div>
  );
}
