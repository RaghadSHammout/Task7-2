import React, { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);
    const [isIncrementMode, setIsIncrementMode] = useState(true); 
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [bgColor, setBgColor] = useState('#121212');
    const increment = () => {
        if (count < 1000) {
            const newCount = count + incrementValue;
            setCount(newCount);

            if (newCount >= 1000) {
                setIsIncrementMode( false);
                setIncrementValue(100);
            } else if (newCount >= 100) {
                setIncrementValue(100);

            } else if (newCount >= 10 ) {
                setIncrementValue(10);
            }
        }
    };

    const decrement = () => {
        if (count > 0) {
            const newCount = count - incrementValue ;
            setCount(newCount);

            if (newCount <= 10) {
                setIncrementValue(1);
            } else if (newCount <= 100) {
                setIncrementValue(10 );
            } else if (newCount <= 1000) {

                setIncrementValue(100);
            }
        }
    };

    useEffect(() => {
        setPopupMessage('Welcome to the app 🤩');
        setShowPopup(true);
    }, []);


    useEffect(() => {
        if (count === 10) {
            setPopupMessage('You have reached number 10 😎');
            setShowPopup(true);
            setBgColor('#FF7DAC');
        } else if (count === 100) {
            setPopupMessage('You have reached number 100 😯');
            setShowPopup(true);
            setBgColor('#9C79CC');
        } else if (count === 1000) {
            setPopupMessage('You have reached number 1000 🤯');
            setShowPopup(true);
            setBgColor('#E63C73');
        } else {
            setBgColor('#121212');
        }
    }, [count]);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="counter-container" style={{ backgroundColor: bgColor }}>
            <h1>Count: {count}</h1>
            {isIncrementMode ? (
                <buttonc className="btn" onClick={increment}>Increase Count</buttonc>
            ) : (
                <button className="btn" onClick={decrement}>Decrease Count</button>
            )}

            {showPopup && (
                <div className="popup">
                    <p>{popupMessage}</p>
                    <button onClick={closePopup} className="close-button">Close</button>
                </div>
            )}
        </div>
    );
};

