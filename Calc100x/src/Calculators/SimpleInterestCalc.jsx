import React, { useState } from 'react';
import './CalcStyles.css';

const SimpleInterestCalc = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      setResult('Please enter valid numeric values.');
      return;
    }

    const interest = ((P * R * T) / 100).toFixed(2);
    const total = (parseFloat(P) + parseFloat(interest)).toFixed(2);
    setResult(`Simple Interest = ₹${interest} | Total Amount = ₹${total}`);
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setResult(null);
  };

  return (
    <div className="calc-container green-theme">
      <h2>Simple Interest Calculator</h2>

      <div className="form-group">
        <label>Principal Amount (₹):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="e.g., 10000"
        />
      </div>

      <div className="form-group">
        <label>Interest Rate (% per annum/Year):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="e.g., 5"
        />
      </div>

      <div className="form-group">
        <label>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="e.g., 2"
        />
      </div>

      <div className="button-group">
        <button onClick={calculateInterest}>Calculate</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>

      {result && (
        <div className="result-box">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalc;
