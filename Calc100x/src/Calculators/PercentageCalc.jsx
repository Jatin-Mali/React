import React, { useState } from 'react';
import './CalcStyles.css';

const PercentageCalc = () => {
  const [percent, setPercent] = useState('');
  const [base, setBase] = useState('');
  const [part, setPart] = useState('');
  const [whole, setWhole] = useState('');
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);

  const calculateResults = () => {
    const p = parseFloat(percent);
    const b = parseFloat(base);
    const a = parseFloat(part);
    const w = parseFloat(whole);

    if (!isNaN(p) && !isNaN(b)) {
      const res1 = ((p / 100) * b).toFixed(2);
      setResult1(`${p}% of ${b} = ${res1}`);
    } else {
      setResult1(null);
    }

    if (!isNaN(a) && !isNaN(w) && w !== 0) {
      const res2 = ((a / w) * 100).toFixed(2);
      setResult2(`${a} is ${res2}% of ${w}`);
    } else {
      setResult2(null);
    }
  };

  const reset = () => {
    setPercent('');
    setBase('');
    setPart('');
    setWhole('');
    setResult1(null);
    setResult2(null);
  };

  return (
    <div className="calc-container green-theme">
      <h2>Percentage Calculator</h2>

      {/* Line 1 */}
      <div className="inline-form">
        <span>What is</span>
        <input
          type="number"
          placeholder="X"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
        />
        <span>% of</span>
        <input
          type="number"
          placeholder="Y"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <span>=</span>
        <span className="inline-result">{result1 || '---'}</span>
      </div>

      {/* Line 2 */}
      <div className="inline-form">
        <input
          type="number"
          placeholder="A"
          value={part}
          onChange={(e) => setPart(e.target.value)}
        />
        <span>is what % of</span>
        <input
          type="number"
          placeholder="B"
          value={whole}
          onChange={(e) => setWhole(e.target.value)}
        />
        <span>=</span>
        <span className="inline-result">{result2 || '---'}</span>
      </div>

      <div className="button-group">
        <button onClick={calculateResults}>Calculate</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default PercentageCalc;
