import React, { useState } from 'react';
import './CalcStyles.css';

const TemperatureConverterCalc = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertFromC = () => {
    const c = parseFloat(celsius);
    if (isNaN(c)) return;
    setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
  };

  const convertFromF = () => {
    const f = parseFloat(fahrenheit);
    if (isNaN(f)) return;
    setCelsius(((f - 32) * 5 / 9).toFixed(2));
  };

  const reset = () => {
    setCelsius('');
    setFahrenheit('');
  };

  return (
    <div className="calc-container green-theme">
      <h2>Temperature Converter</h2>

      <div className="form-group">
        <label>Celsius (°C):</label>
        <input type="number" value={celsius} onChange={(e) => setCelsius(e.target.value)} onBlur={convertFromC} />
      </div>

      <div className="form-group">
        <label>Fahrenheit (°F):</label>
        <input type="number" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} onBlur={convertFromF} />
      </div>

      <div className="button-group">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default TemperatureConverterCalc;
