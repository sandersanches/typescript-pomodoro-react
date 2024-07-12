import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface PomodoroTimerProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <>
      <div className="pomodoro">
        <h2>You are working</h2>
        <Timer mainTimer={mainTime} />
        <div className="controls">
          <Button className="bottom" text="Button" />
          <Button className="bottom" text="Button" />
          <Button className="bottom" text="Button" />
        </div>
        <div className="details">
          <p>Testando: aklçsdfjçlkadsfjçlaskdfj </p>
          <p>Testando: aklçsdfjçlkadsfjçlaskdfj </p>
          <p>Testando: aklçsdfjçlkadsfjçlaskdfj </p>
        </div>
      </div>
    </>
  );
}
