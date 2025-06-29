import React, { useState } from 'react';
import './CalcStyles.css';

const BMICalc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || h <= 0) {
      setResult('Please enter valid values.');
      return;
    }

    const bmi = (w / (h * h)).toFixed(2);
    let status = '';

    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obese';

    setResult(`BMI = ${bmi} (${status})`);
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <div className="calc-container green-theme">
      <h2>BMI Calculator</h2>

      <div className="form-group">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Height (m):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <div className="button-group">
        <button onClick={calculateBMI}>Calculate</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>

      {result && <div className="result-box"><strong>{result}</strong></div>}
    </div>
  );
};

export default BMICalc;
