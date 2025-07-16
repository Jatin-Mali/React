import React, { useState } from 'react';
import calculators from '../Data/CalculatorsList'; // Import your calc objects

const CalculatorEngine = ({ calcId }) => {
  const calculator = calculators[calcId];

  if (!calculator) {
    return <div style={{ fontSize: '18px', color: 'gray' }}>Calculator not found.</div>;
  }

  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (id, value) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const output = calculator.calculate(inputs);
      setResult(output);
    } catch (err) {
      setResult({ value: 'Error', interpretation: 'Invalid input or formula' });
    }
  };

  return (
    <form className="calculator-box" onSubmit={handleSubmit}>
      {calculator.inputs.map(input => (
        <div key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            value={inputs[input.id] || ''}
            onChange={(e) => handleChange(input.id, e.target.value)}
          />
        </div>
      ))}

      <button type="submit">Calculate</button>

      {result && (
        <div className="calculator-output">
          {result.unit
            ? `${result.value} ${result.unit}`
            : result.value}
          <br />
          {result.interpretation && (
            <small style={{ color: '#555' }}>{result.interpretation}</small>
          )}
        </div>
      )}
    </form>
  );
};

export default CalculatorEngine;
