import React, { createContext, useState } from 'react';
import TimerSettingPanel from './components/TimerSettingPanel';
import TimerDisplayPanel from './components/TimerDisplayPanel';

export const TimeContext = createContext();

const App = () => {
  const [sessionTime, setSessionTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [currentTime, setCurrentTime] = useState(sessionTime);

  const handleSetTime = (event, timer, value) => {
    if (event.shiftKey) value *= 5;
    else if (event.altKey) value /= 2;
    else if (event.ctrlKey) value /= 60;

    if (timer === 'session') {
      if (sessionTime + value <= 0 || sessionTime + value > 3600) return;
      setSessionTime(sessionTime + value);
    } else if (timer === 'break') {
      if (breakTime + value <= 0 || breakTime + value > 3600) return;
      setBreakTime(breakTime + value);
    } else {
      if (currentTime + value < 0) return;
      setCurrentTime(currentTime + value);
    }
  };

  const value = {
    currentTime,
    setCurrentTime,
    sessionTime,
    setSessionTime,
    breakTime,
    setBreakTime,
    handleSetTime,
  };

  return (
    <main>
      <TimeContext.Provider value={value}>
        <TimerDisplayPanel />
        <TimerSettingPanel />
      </TimeContext.Provider>
    </main>
  );
};

export default App;
