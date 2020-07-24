import React from "react";
import { useStore } from "effector-react";
import { $counter, increment, decrement } from "./model";
import './Counter.css';

export const Counter: React.FC = () => {
  const count = useStore($counter);

  return (
    <div className="Counter">
      <button
        className="Counter-button"
        aria-label="Increment value"
        onClick={increment}
      >
        +
      </button>
      <span className="Counter-label">{count}</span>
      <button
        className="Counter-button"
        aria-label="Decrement value"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};
