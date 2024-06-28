import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/WelcomePage.css';

function WelcomePage(){
    return(
        <div className="welcome-page-body">
            <Link to="/prank">
                <button className="button">From Digital...</button>
            </Link>
        </div>
    )
}

export default WelcomePage;