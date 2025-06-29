import React, { useState } from 'react';
import './CalcStyles.css';

const SquareRootCalc = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const value = parseFloat(number);
    if (isNaN(value) || value < 0) {
      setResult('Please enter a valid non-negative number');
      return;
    }
    const sqrt = Math.sqrt(value).toFixed(4);
    setResult(`√${value} = ${sqrt}`);
  };

  const handleReset = () => {
    setNumber('');
    setResult(null);
  };

  return (
    <div className="calc-container">
      <h2>Square Root Calculator</h2>
      <div className="form-group">
        <label htmlFor="number">Enter a number:</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="e.g., 49"
        />
      </div>

      <div className="button-group">
        <button onClick={handleCalculate}>Calculate</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>

      {result && (
        <div className="result-box">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default SquareRootCalc;
