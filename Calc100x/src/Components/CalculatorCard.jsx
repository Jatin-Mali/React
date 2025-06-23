import React from 'react';
import './CalculatorCard.css';
import CalcData from '../Data/CalculatorsData.json';
import { useNavigate } from 'react-router-dom';
const CalculatorCard = () => {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`calculator/${id}`);
    };
    return (
        <>
            <div className="calculator-card"  >
                {CalcData.map((calc, index) => (
                    <div className="card-content" key={index} onClick={() => handleCardClick(calc.id)}>
                        <h2 className="card-title">{calc.name}</h2>
                        <p className="card-description">{calc.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CalculatorCard;