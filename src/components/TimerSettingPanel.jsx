import TimerDisplay from './TimerDisplay';
import TimerSettingButton from './TimerSettingButton';
import { useContext } from 'react';
import { TimeContext } from '../App';

const TimerSettingPanel = () => {
  const { sessionTime, setSessionTime, breakTime, setBreakTime } =
    useContext(TimeContext);

  return (
    <div className='timer-settings'>
      <div className='session-setting'>
        <h2 id='session-label'>Session Length</h2>
        <div className='timer-setting-group'>
          <TimerSettingButton
            id={'session-decrement'}
            timeValue={-1 * 60}
            timer={'session'}
          />
          <TimerDisplay
            id={'session-length'}
            time={sessionTime}
            displaySeconds={false}
          />
          <TimerSettingButton
            id={'session-increment'}
            timeValue={1 * 60}
            timer={'session'}
          />
        </div>
      </div>

      <div className='break-setting'>
        <h2 id='break-label'>Break Length</h2>
        <div className='timer-setting-group'>
          <TimerSettingButton
            id={'break-decrement'}
            timeValue={-1 * 60}
            timer={'break'}
          />
          <TimerDisplay
            id={'break-length'}
            time={breakTime}
            displaySeconds={false}
          />
          <TimerSettingButton
            id={'break-increment'}
            timeValue={1 * 60}
            timer={'break'}
          />
        </div>
      </div>
    </div>
  );
};

export default TimerSettingPanel;
