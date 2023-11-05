import React, { useContext } from 'react';
import { TimeContext } from '../App';

const TimerSettingButton = ({ id, timeValue, timer }) => {
  const { handleSetTime } = useContext(TimeContext);
  return (
    <button id={id} onClick={(e) => handleSetTime(e, timer, timeValue)}>
      {timeValue > 0 ? '>' : '<'}
    </button>
  );
};

export default TimerSettingButton;
