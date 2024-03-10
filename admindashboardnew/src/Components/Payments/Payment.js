import React, { useState,useEffect } from 'react';
import styles from '../Payments/Payment.css';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const navigate=useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleCardNumberInput = (e) => {
        setCardNumber(e.target.value);
    };

    const handleCardHolderInput = (e) => {
        setCardHolder(e.target.value);
    };

    const handleMonthInput = (e) => {
        setExpMonth(e.target.value);
    };

    const handleYearInput = (e) => {
        setExpYear(e.target.value);
    };

    const handleCvvInput = (e) => {
        setCvv(e.target.value);
    };

    const handleCvvMouseEnter = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    };

    const handleCvvMouseLeave = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); // Set isLoading to true when form is submitted
    
        const bookingData = {
            userId: parseInt(sessionStorage.getItem('userId')),
            roomId: parseInt(sessionStorage.getItem('roomId')),
            checkInDate: sessionStorage.getItem('checkIn'),
            checkOutDate: sessionStorage.getItem('checkOut'),
            adults: parseInt(sessionStorage.getItem('adults')),
            children: parseInt(sessionStorage.getItem('children')),
            //totalPrice: parseFloat(sessionStorage.getItem('totalPrice')),
            status: '' // Replace 'string' with the actual status value
        };
    
        console.log(bookingData);
    
        fetch(`http://localhost:5272/api/Booking/AddBooking?username=${sessionStorage.getItem('username')}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => {
            if(response.ok){
                // Show alert after 5 seconds and navigate
                setTimeout(() => {
                    setIsLoading(false); // Hide preloader
                    alert("Booking Successful!");
                    navigate('/bookingHistory');
                }, 5000);
            }
            if (!response.ok) {
                throw new Error('Error adding booking');
            }
            // If the response is not ok, the catch block will handle it
        })
        .catch(error => {
            console.error('Error adding booking:', error.message);
            setIsLoading(false); // Set isLoading to false if there's an error
        });
    };
    
    
    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false); // Set isLoading to false after the delay
        }, 2000); // 2000 milliseconds = 2 seconds
    }, []);
    return (
        <div>
            <div className={styles} id="/payment">
            {isLoading ? (
                    <div className="overlay4">
                    <div className="preloader">
                    <img src="images/preloader2.gif" alt="Loading..." />
                </div>
                </div>
                ) : (
                <div className="container65">
                <input type="submit"  value={"Pay on Arrival"}className="submit-btn1" onClick={()=>navigate('/payment2')} ></input>
                    <label className="or" style={{color:"black",fontSize:"30px",marginBottom:"100px"}}>OR</label>
                    <div className="card-container">
                        <div className="front"onMouseEnter={handleCvvMouseEnter} onMouseLeave={handleCvvMouseLeave} >
                            <div className="imagie">
                                <img src="images/chip.png" alt="" />
                                <img src="images/visa.png" alt="" />
                            </div>
                            <div className="card-number-box">{cardNumber || '################'}</div>
                            <div className="flexbox">
                                <div className="box1">
                                    <span>card holder</span>
                                    <div className="card-holder-name">{cardHolder || 'full name'}</div>
                                </div>
                                <div className="box1">
                                    <span>expires</span>
                                    <div className="expiration">
                                        <span className="exp-month">{expMonth || 'mm'}</span>/
                                        <span className="exp-year">{expYear || 'yy'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="back">
                            <div className="stripe" />
                            <div className="box1">
                                <span>cvv</span>
                                <div className="cvv-box">{cvv}</div>
                                <img src="image/visa.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <span>card number</span>
                            <input type="text" maxLength={16} className="card-number-input" value={cardNumber} onChange={handleCardNumberInput} required/>
                        </div>
                        <div className="inputBox">
                            <span>card holder</span>
                            <input type="text" className="card-holder-input" value={cardHolder} onChange={handleCardHolderInput} required />
                        </div>
                        <div className="flexbox">
                            <div className="inputBox">
                                <span>expiration mm</span>
                                <select name="" id="" className="month-input" value={expMonth} onChange={handleMonthInput} >
                                    <option value="" selected disabled>month</option>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="inputBox">
                                <span>expiration yy</span>
                                <select name="" id="" className="year-input" value={expYear} onChange={handleYearInput}>
                                    <option value="" selected disabled>year</option>
                                    {Array.from({ length: 10 }, (_, i) => 2021 + i).map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="inputBox">
                                <span>cvv</span>
                                <input type="text" maxLength={4} className="cvv-input" value={cvv} onChange={handleCvvInput} onMouseEnter={handleCvvMouseEnter} onMouseLeave={handleCvvMouseLeave} required />
                            </div>
                        </div>
                        <input type="submit" defaultValue="submit"  className="submit-btn" />
                    </form>
                </div>
                )}
            </div>
        </div>
    );
}

export default Payment;
