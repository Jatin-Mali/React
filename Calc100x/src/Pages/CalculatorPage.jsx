import React from 'react';
import { useParams } from 'react-router-dom';
import CalcData from '../Data/CalculatorsData.json';
import './CalculatorPage.css';

import CalculatorEngine from '../Components/CalculatorEngine';
const CalculatorPage = () => {
    const { id } = useParams();
    const calculator = CalcData.find((calc) => calc.id === id);
    
    if (!calculator) return <h2>Calculator not found</h2>;
  



    return (
        <div className='calculator-page'>
            <div className="header">
                <h1 className='calculator-title'>{calculator.name}</h1>
                <p className='calculator-description'>{calculator.description}</p>
            </div>

            <div className="main-content">
                {/* Left Section */}

                {/* Center Section (Calculator UI) */}
                <div className="center-section">
                   <CalculatorEngine calcId={id} />
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
