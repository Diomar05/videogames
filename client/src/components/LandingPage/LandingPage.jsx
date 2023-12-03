import React from 'react';
import Landing from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={Landing.container}>
            <div className={Landing.wrapper}>
                <a href="/home" className={Landing.btn}>
                    <span>Comencemos</span>
                    <div className={Landing.transition}></div>
                </a>
            </div>
        </div>
    )
}

export default LandingPage;