import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
    const [a, setA] = useState<number>(0);
    const [c, setC] = useState<number | undefined>(undefined);
    const [b, setB] = useState<number>(0);

    const handleOperation = (operation: string) => {
        switch (operation) {
            case '+':
                setC(a + b);
                setA(a + b);
                break;
            case '-':
                setC(a - b);
                setA(a - b);
                break;
            case '*':
                setC(a * b);
                setA(a * b);
                break;
            case '/':
                setC(a / b);
                setA(a / b);
                break;
            default:
                break;
        }
    };

    return (
        <div className="calculator">
            <div className="display">{a}</div>
            <div className="input-group">
                <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(parseInt(e.target.value))}
                />
            </div>
            <div className="buttons">
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
            </div>
            <div className="display">{c}</div>
        </div>
    );
};

export default Calculator;
