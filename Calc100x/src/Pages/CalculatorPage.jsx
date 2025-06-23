import React from 'react';
import { useParams } from 'react-router-dom';
import CalcData from '../Data/CalculatorsData.json';
import './CalculatorPage.css';
const CalculatorPage = () => {
    const { id } = useParams();
    const calculator = CalcData.find((calc) => calc.id === id);

    if (!calculator) return <h2>Calculator not found</h2>;

    return (
        <div className='calculator-page'>
            <h1 className='calculator-title'>{calculator.name}</h1>
            <p className='calculator-description'>{calculator.description}</p>
            <div className="left-bar">
                <div className="formula">
                    <p><strong>Formula Used:</strong> {Array.isArray(calculator.formula) ? calculator.formula.join(', ') : calculator.formula}</p>
                </div>
                <div className='example'>
                    <p><strong>Example:</strong> {calculator.example}</p>
                </div>
                <div className="steps">
                    <h3>Steps:</h3>
                    <ol>
                        {calculator.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default CalculatorPage;
