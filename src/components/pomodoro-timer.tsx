import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface PomodoroTimerProps {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <>
      <div className="Pomodoro">
        <h2>You are working</h2>
        <Timer mainTimer={mainTime} />
        <Button text="Button" />
      </div>
    </>
  );
}
