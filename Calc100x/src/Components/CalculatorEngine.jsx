import React, { useState } from 'react';
import { evaluate } from 'mathjs';     // ← safe evaluator

const CalculatorEngine = ({ config }) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError]  = useState('');

  /* keep input values in state */
  const handleChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  /* evaluate the expression in config.expression */
  const calculate = () => {
    try {
      setError('');
      /* build a scope object { A: 5, B: 3 } */
      const scope = {};
      config.fields.forEach(f => {
        const val = inputs[f.name];
        if (val === undefined || val === '') throw new Error('Missing inputs');
        scope[f.name] = Number(val);
      });

      const output = evaluate(config.expression, scope);
      setResult(output);
    } catch (err) {
      setError(err.message || 'Error in calculation');
      setResult(null);
    }
  };

  return (
    <div className="calc-box">
      <h2>{config.name}</h2>

      {/* dynamic inputs */}
      {config.fields.map(({ name, label, type, options }) => (
        <div key={name}>
          {type === 'select' ? (
            <select onChange={e => handleChange(name, e.target.value)}>
              <option value="">-- choose --</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              placeholder={label}
              onChange={e => handleChange(name, e.target.value)}
            />
          )}
        </div>
      ))}

      <button onClick={calculate}>Calculate</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && !error && (
        <p>Result: {result} {config.unit || ''}</p>
      )}
    </div>
  );
};

export default CalculatorEngine;
