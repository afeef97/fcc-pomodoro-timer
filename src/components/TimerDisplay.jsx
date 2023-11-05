import React from 'react';

const TimerDisplay = ({ id, time = 0, displaySeconds = true }) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  return (
    <span id={id} className='timer'>
      {displaySeconds ? (minutes < 10 ? '0' + minutes : minutes) : minutes}
      {displaySeconds ? (seconds < 10 ? ':0' + seconds : `:${seconds}`) : null}
    </span>
  );
};

export default TimerDisplay;
