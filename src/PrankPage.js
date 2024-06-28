import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Prank.css';

function PrankPage(){
    return(
        <div className="prank-page-body">
            <Link to="/homepage" style={{ textDecoration: 'none' }}>
                <h2 className="prank">F***!</h2>
            </Link>
        </div>
    )
}

export default PrankPage;