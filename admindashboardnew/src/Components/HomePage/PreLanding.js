import React, { useEffect } from 'react';
import styles from './styles.css';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

function PreLanding() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    useEffect(() => {
        gsap.fromTo(
            ".loading-page",
            { opacity: 1 },
            {
                opacity: 0,
                display: "none",
                duration: 1.5,
                delay: 3.5,
            }
        );

        gsap.fromTo(
            ".logo-name",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                delay: 0.5,
            }
        );
    }, []);

    return (
        <div className={styles}>
            <div>
                <div className='bodyy1'>
                    <div className="containerr1">
                        <p style={{color:"white"}}>Welcome To CozyHaven!!!</p>
                    </div>
                    <div className="loading-page">
                    <div className="svg-container">
                        <svg id="svgg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 512">
                            <path d="M344 305.5c-17.5 31.6-57.4 54.5-96 54.5-56.6 0-104-47.4-104-104s47.4-104 104-104c38.6 0 78.5 22.9 96 54.5 13.7-50.9 41.7-93.3 87-117.8C385.7 39.1 320.5 8 248 8 111 8 0 119 0 256s111 248 248 248c72.5 0 137.7-31.1 183-80.7-45.3-24.5-73.3-66.9-87-117.8z"/>
                        </svg>
                        <svg id="svgg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#8bbe1b" d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"/>
                        </svg>
                    </div>
                        <div className="name-container">
                            <div className="logo-name">CozyHaven</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreLanding;
