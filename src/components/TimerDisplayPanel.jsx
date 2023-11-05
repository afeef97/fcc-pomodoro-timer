import React, { useContext, useEffect, useRef, useState } from 'react';
import TimerDisplay from './TimerDisplay';
import { TimeContext } from '../App';

const TimerDisplayPanel = () => {
  const {
    currentTime,
    breakTime,
    sessionTime,
    setCurrentTime,
    setSessionTime,
    setBreakTime,
  } = useContext(TimeContext);
  const [start, setStart] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const audioRef = useRef();

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
        if (currentTime === 0) audioRef.current.play();
      }, 1000);

      return () => {
        clearInterval(interval);
        if (audioRef.current !== null) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };
    }
  }, [start]);

  useEffect(() => {
    if (currentTime < 0) {
      setIsSession((prevSession) => !prevSession);
      if (isSession) {
        setCurrentTime(breakTime);
      } else {
        setCurrentTime(sessionTime);
      }
    } else if (isSession && !start) {
      setCurrentTime(sessionTime);
    }
  }, [currentTime, breakTime, sessionTime]);

  return (
    <div className='time-left-panel'>
      <h1 id='timer-label'>{isSession ? 'Session' : 'Break'}</h1>
      <TimerDisplay id={'time-left'} time={currentTime} />

      <div>
        <button id='start_stop' onClick={() => setStart(!start)}>
          {start ? 'Stop' : 'Start'}
        </button>

        <button
          id='reset'
          onClick={() => {
            setCurrentTime(sessionTime);
            setStart(false);
            setIsSession(true);
            setSessionTime(1500);
            setBreakTime(300);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }}
        >
          Reset
        </button>
      </div>

      <audio
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
        id='beep'
        preload='auto'
        ref={audioRef}
      />
    </div>
  );
};

export default TimerDisplayPanel;
