import React, { useState } from 'react';
import './CalcStyles.css';

const shapeOptions = [
  { label: 'Select Shape', value: '' },
  { label: 'Square', value: 'square' },
  { label: 'Rectangle', value: 'rectangle' },
  { label: 'Circle', value: 'circle' },
  { label: 'Triangle', value: 'triangle' },
  { label: 'Cube', value: 'cube' },
  { label: 'Cuboid', value: 'cuboid' },
  { label: 'Sphere', value: 'sphere' },
  { label: 'Cylinder', value: 'cylinder' }
];

const ShapeCalculator = () => {
  const [shape, setShape] = useState('');
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState({});

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const vals = Object.fromEntries(
      Object.entries(inputs).map(([k, v]) => [k, parseFloat(v)])
    );

    let res = {};

    switch (shape) {
      case 'square':
        res.area = vals.side ** 2;
        res.perimeter = 4 * vals.side;
        break;

      case 'rectangle':
        res.area = vals.length * vals.width;
        res.perimeter = 2 * (vals.length + vals.width);
        break;

      case 'circle':
        res.area = Math.PI * vals.radius ** 2;
        res.perimeter = 2 * Math.PI * vals.radius;
        break;

      case 'triangle':
        const s = (vals.a + vals.b + vals.c) / 2;
        res.perimeter = vals.a + vals.b + vals.c;
        res.area = Math.sqrt(s * (s - vals.a) * (s - vals.b) * (s - vals.c));
        break;

      case 'cube':
        res.surfaceArea = 6 * vals.side ** 2;
        res.volume = vals.side ** 3;
        break;

      case 'cuboid':
        res.surfaceArea =
          2 * (vals.length * vals.width + vals.length * vals.height + vals.width * vals.height);
        res.volume = vals.length * vals.width * vals.height;
        break;

      case 'sphere':
        res.surfaceArea = 4 * Math.PI * vals.radius ** 2;
        res.volume = (4 / 3) * Math.PI * vals.radius ** 3;
        break;

      case 'cylinder':
        res.surfaceArea = 2 * Math.PI * vals.radius * (vals.radius + vals.height);
        res.volume = Math.PI * vals.radius ** 2 * vals.height;
        break;

      default:
        res = {};
    }

    // Round all results to 2 decimal places
    const rounded = {};
    for (let key in res) {
      rounded[key] = res[key] ? res[key].toFixed(2) : '-';
    }

    setResult(rounded);
  };

  const reset = () => {
    setInputs({});
    setResult({});
    setShape('');
  };

  const renderInputs = () => {
    switch (shape) {
      case 'square':
        return <InputField name="side" label="Side Length" />;
      case 'rectangle':
        return (
          <>
            <InputField name="length" label="Length" />
            <InputField name="width" label="Width" />
          </>
        );
      case 'circle':
        return <InputField name="radius" label="Radius" />;
      case 'triangle':
        return (
          <>
            <InputField name="a" label="Side A" />
            <InputField name="b" label="Side B" />
            <InputField name="c" label="Side C" />
          </>
        );
      case 'cube':
        return <InputField name="side" label="Side Length" />;
      case 'cuboid':
        return (
          <>
            <InputField name="length" label="Length" />
            <InputField name="width" label="Width" />
            <InputField name="height" label="Height" />
          </>
        );
      case 'sphere':
        return <InputField name="radius" label="Radius" />;
      case 'cylinder':
        return (
          <>
            <InputField name="radius" label="Radius" />
            <InputField name="height" label="Height" />
          </>
        );
      default:
        return null;
    }
  };

  const InputField = ({ name, label }) => (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="number"
        name={name}
        value={inputs[name] || ''}
        onChange={handleInputChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );

  return (
    <div className="calc-container shape-theme">
      <h2>Shape Calculator</h2>

      <div className="form-group">
        <label>Select Shape:</label>
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          {shapeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {renderInputs()}

      <div className="button-group">
        <button onClick={calculate}>Calculate</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>

      {Object.keys(result).length > 0 && (
        <div className="result-box">
          <h4>Results:</h4>
          <ul>
            {Object.entries(result).map(([key, val]) => (
              <li key={key}>
                <strong>{key}:</strong> {val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShapeCalculator;
