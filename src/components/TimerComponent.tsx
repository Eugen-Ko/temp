import React, { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const TimerComponent: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE ? decrementedWhiteTime : decrementedBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  function decrementedBlackTime() {
    setBlackTime(prev => prev - 1);
  }

  function decrementedWhiteTime() {
    setWhiteTime(prev => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart Game</button>
      </div>
      <h2>Black time - {blackTime}</h2>
      <h2>White time - {whiteTime}</h2>
    </div>
  );
};

export default TimerComponent;
