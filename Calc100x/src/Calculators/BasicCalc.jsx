import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './BasicCalc.css';

const BTN_ROWS = [
  ['Rad', 'Deg', 'x!', '(', ')', '%', 'AC'],
  ['Inv', 'sin', 'ln', '7', '8', '9', '/'],
  ['π',  'cos', 'log','4', '5', '6', '*'],
  ['e',  'tan', '√',  '1', '2', '3', '-'],
  ['Ans','EXP', '^',  '0', '.', '=', '+']
];

export default function ScientificCalculator() {
  const [expr, setExpr] = useState('');
  const [lastAns, setLastAns] = useState(0);
  const [isDeg, setIsDeg] = useState(false);
  const [isInv, setIsInv] = useState(false);

  const handleButtonPress = (btn) => {
    switch (btn) {
      case 'AC':
        setExpr('');
        break;
      
      case '=':
        try {
          // Prepare expression for evaluation
          let preparedExpr = expr
            .replace(/π/g, 'pi')
            .replace(/√/g, 'sqrt')
            .replace(/Ans/g, lastAns)
            .replace(/EXP/g, 'e')
            .replace(/(\d+)!/g, 'factorial($1)')
            .replace(/\)!/g, ')!'); // Handle parentheses with factorial

          // Handle trigonometry based on degree/radian mode
          if (isDeg) {
            preparedExpr = preparedExpr.replace(
              /(a?sin|a?cos|a?tan)\(([^)]+)\)/g, 
              (_, fn, arg) => isInv 
                ? `${fn}(${arg}) * ${fn.startsWith('a') ? 1 : 180 / Math.PI}` 
                : `${fn}(${arg} * pi / 180)`
            );
          }

          // Evaluate using math.js with custom functions
          const result = evaluate(preparedExpr, {
            factorial: (n) => evaluate(`factorial(${n})`)
          });
          
          setExpr(String(result));
          setLastAns(result);
        } catch (error) {
          setExpr('Error');
        }
        break;
      
      case 'Rad':
        setIsDeg(false);
        break;
      
      case 'Deg':
        setIsDeg(true);
        break;
      
      case 'Inv':
        setIsInv(!isInv);
        break;
      
      default:
        // Handle function buttons
        if (['sin', 'cos', 'tan', 'ln', 'log'].includes(btn)) {
          const prefix = isInv && ['sin', 'cos', 'tan'].includes(btn) ? 'a' : '';
          setExpr(expr + prefix + btn + '(');
        } else {
          setExpr(expr + btn);
        }
    }
  };

  return (
    <div className="calc-wrapper">
      <div className="display">{expr || '0'}</div>
      <div className="mode-indicators">
        {isDeg && <span>DEG</span>}
        {isInv && <span>INV</span>}
      </div>

      <div className="keys">
        {BTN_ROWS.flat().map(btn => (
          <button
            key={btn}
            className={`${btn === '=' ? 'eq' : ''} ${['Rad', 'Deg', 'Inv'].includes(btn) && (btn === 'Rad' ? !isDeg : btn === 'Deg' ? isDeg : isInv) ? 'active' : ''}`}
            onClick={() => handleButtonPress(btn)}
          >
            {btn === '/' ? '÷' : 
             btn === '*' ? '×' : 
             btn === '-' ? '−' : btn}
          </button>
        ))}
      </div>
    </div>
  );
}