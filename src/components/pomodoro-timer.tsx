import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';

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
      <div>{mainTime}</div>
    </>
  );
}
