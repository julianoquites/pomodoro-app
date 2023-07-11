'use client';
import React, { useState, useEffect } from 'react';

interface TimerProps {
  name: string;
  count: number;
}

const Timer = ({ name, count }: TimerProps) => {
  const [seconds, setSeconds] = useState(count);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleReset = () => {
    setSeconds(count);
    setIsActive(false);
    setIsPaused(false);
  };

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-semibold mb-4'>{name}</h2>
      <div className='text-4xl font-bold mb-4'>{formatTime(seconds)}</div>
      <div>
        {!isActive && seconds === count && (
          <button
            className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2'
            onClick={handleStart}
          >
            Start
          </button>
        )}
        {isActive && (
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2'
            onClick={handlePause}
          >
            Pause
          </button>
        )}
        {isPaused && (
          <button
            className='bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded mr-2'
            onClick={handleStart}
          >
            Return
          </button>
        )}
        {isPaused || isActive ? (
          <button
            className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded'
            onClick={handleReset}
          >
            Reset
          </button>
        ) : undefined}
      </div>
    </div>
  );
};

export default Timer;
