"use client";
import { useRef, useState } from "react";

const tracks = [
  {
    title: "Exemple 1",
    src: "/audio/exemple1.mp3",
  },
  {
    title: "Exemple 2",
    src: "/audio/exemple2.mp3",
  },
];

export default function CustomAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
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

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = (Number(e.target.value) / 100) * duration;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-1 py-1 text-white">
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="flex w-full items-center gap-2">
        <span className="text-xs font-bold tabular-nums">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="h-1 flex-1 accent-brand-500"
          aria-label="Progression de la lecture"
        />
        <span className="text-xs font-bold tabular-nums">
          {duration ? formatTime(duration) : "-:--"}
        </span>
      </div>
      <div className="mt-1 flex items-center gap-6">
        <button
          onClick={handlePrev}
          aria-label="Précédent"
          className="text-2xl text-brand-500 transition-transform hover:scale-110"
        >
          &#9198;
        </button>
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause" : "Lecture"}
          className="text-3xl text-brand-500 transition-transform hover:scale-110"
        >
          {isPlaying ? "❚❚" : "►"}
        </button>
        <button
          onClick={handleNext}
          aria-label="Suivant"
          className="text-2xl text-brand-500 transition-transform hover:scale-110"
        >
          &#9197;
        </button>
      </div>
      <div className="mt-1 text-xs text-brand-500">{tracks[currentTrack].title}</div>
    </div>
  );
}
