import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const eighthNumber = Math.floor(counter / 10000000) % 10;
    const seventhNumber = Math.floor(counter / 1000000) % 10;
    const sixthNumber = Math.floor(counter / 100000) % 10;
    const fifthNumber = Math.floor(counter / 10000) % 10;
    const forthNumber = Math.floor(counter / 1000) % 10;
    const thirdNumber = Math.floor(counter / 100) % 10;
    const secondNumber = Math.floor(counter / 10) % 10;
    const firstNumber = Math.floor(counter / 1) % 10;

    return (
        <div className='chrono'>
            <div className='clockIcone'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
            </div>
            <div className='eighthNumber'>{eighthNumber}</div>
            <div className='seventhNumber'>{seventhNumber}</div>
            <div className='sixthNumber'>{sixthNumber}</div>
            <div className='fifthNumber'>{fifthNumber}</div>
            <div className='forthNumber'>{forthNumber}</div>
            <div className='thirdNumber'>{thirdNumber}</div>
            <div className='point'>,</div>
            <div className='secondNumber'>{secondNumber}</div>
            <div className='firstNumber'>{firstNumber}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    firstDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    forthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
    sixthDigit: PropTypes.number,
    seventhDigit: PropTypes.number,
    eighthDigit: PropTypes.number,
};

export default SimpleCounter;



// Espero que lo entiendas todo. Si no, me tienes por SLACK
