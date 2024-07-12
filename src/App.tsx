import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';
import { secondsToTime } from './utils/seconds-to-time';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTimer={1500} />
      <h2>{secondsToTime(10)}</h2>
    </div>
  );
}

export default App;
