import React, { useState } from 'react';
import './CalcStyles.css';

const SpeedCalc = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time);
    const s = parseFloat(speed);

    if (!isNaN(d) && !isNaN(t)) {
      if (t === 0) return setResult("Time can't be zero.");
      const calcSpeed = (d / t).toFixed(2);
      return setResult(`Speed = ${calcSpeed} km/h`);
    }

    if (!isNaN(s) && !isNaN(t)) {
      const calcDistance = (s * t).toFixed(2);
      return setResult(`Distance = ${calcDistance} km`);
    }

    if (!isNaN(d) && !isNaN(s)) {
      if (s === 0) return setResult("Speed can't be zero.");
      const calcTime = (d / s).toFixed(2);
      return setResult(`Time = ${calcTime} hours`);
    }

    setResult('Please enter any two valid values to calculate the third.');
  };

  const reset = () => {
    setDistance('');
    setTime('');
    setSpeed('');
    setResult(null);
  };

  return (
    <div className="calc-container green-theme">
      <h2>Speed / Distance / Time Calculator</h2>

      <div className="form-group">
        <label>Distance (km):</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Enter distance"
        />
      </div>

      <div className="form-group">
        <label>Time (hours):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time"
        />
      </div>

      <div className="form-group">
        <label>Speed (km/h):</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          placeholder="Enter speed"
        />
      </div>

      <div className="button-group">
        <button onClick={calculate}>Calculate</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>

      {result && (
        <div className="result-box">
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default SpeedCalc;
