import React from 'react';
import { useParams } from 'react-router-dom';
import CalcData from '../Data/CalculatorsData.json';
import './CalculatorPage.css';
import BasicCalc from '../Calculators/BasicCalc';
import SquareRootCalc from '../Calculators/SquareRootCalc';
import PercentageCalc from '../Calculators/PercentageCalc';
import ShapeCalculator from '../Calculators/ShapeCalculator';
import SimpleInterestCalc from '../Calculators/SimpleInterestCalc';
import BMICalc from '../Calculators/BMICalc';
import TemperatureConverterCalc from '../Calculators/TemperatureConverterCalc';
import SpeedCalc from '../Calculators/SpeedCalc';
const CalculatorPage = () => {
    const { id } = useParams();
    const calculator = CalcData.find((calc) => calc.id === id);
    const componentMap = {
        BasicCalc,
        SquareRootCalc,
        PercentageCalc,
        ShapeCalculator,
        SimpleInterestCalc,
        BMICalc,
        TemperatureConverterCalc,
        SpeedCalc,
    };
    if (!calculator) return <h2>Calculator not found</h2>;
    const Component = componentMap[calculator?.component] || (() => <div style={{display:'flex',justifyContent:'center',fontSize:'24px',fontWeight:'bold',color:'grey'}}>
        Calculator not Available.</div>);



    return (
        <div className='calculator-page'>
            <div className="header">
                <h1 className='calculator-title'>{calculator.name}</h1>
                <p className='calculator-description'>{calculator.description}</p>
            </div>

            <div className="main-content">
                {/* Left Section */}
                <div className="left-section">
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

                {/* Center Section (Calculator UI) */}
                <div className="center-section">
                    <Component />
                </div>

                {/* Right Section (Optional — leave empty or add suggestions/hints later) */}
                <div className="right-section">
                    {/* You can place ads, tips, or related tools here later */}
                </div>
            </div>
        </div>
    );
};

export default CalculatorPage;
