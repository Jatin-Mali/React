import React from 'react';
import './CalculatorCard.css';
import CalcData from '../Data/CalculatorsData.json';
const CalculatorCard = () => {
    return (
        <>
            <div className="calculator-card" >
                {CalcData.map((calc, index) => (
                    <div className="card-content" key={index}>
                        <h2 className="card-title">{calc.name}</h2>
                        <p className="card-description">{calc.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CalculatorCard;