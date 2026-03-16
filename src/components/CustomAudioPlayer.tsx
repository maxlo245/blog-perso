"use client";
import React, { useRef, useState } from 'react';

const tracks = [
  {
    title: 'Exemple 1',
    src: '/audio/exemple1.mp3',
  },
  {
    title: 'Exemple 2',
    src: '/audio/exemple2.mp3',
  },
];

export default function CustomAudioPlayer() {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const seekTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div style={{width:'100%',maxWidth:500,margin:'0 auto',padding:'8px 0',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />
      <div style={{width:'100%',display:'flex',alignItems:'center',gap:8}}>
        <span style={{fontWeight:'bold'}}>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          style={{flex:1}}
        />
        <span style={{fontWeight:'bold'}}>{duration ? formatTime(duration) : '-:--'}</span>
      </div>
      <div style={{marginTop:8,display:'flex',gap:24,alignItems:'center'}}>
        <button onClick={handlePrev} aria-label="Précédent" style={{fontSize:28,background:'none',border:'none',color:'#ff2a36',cursor:'pointer'}}>&#9198;</button>
        <button onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Lecture'} style={{fontSize:32,background:'none',border:'none',color:'#ff2a36',cursor:'pointer'}}>
          {isPlaying ? '❚❚' : '►'}
        </button>
        <button onClick={handleNext} aria-label="Suivant" style={{fontSize:28,background:'none',border:'none',color:'#ff2a36',cursor:'pointer'}}>&#9197;</button>
      </div>
      <div style={{marginTop:4,fontSize:14,color:'#ff2a36'}}>{tracks[currentTrack].title}</div>
    </div>
  );
}
