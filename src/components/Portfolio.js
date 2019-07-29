import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <ul>
                <li><Link to="/portfolio/1">Item One</Link></li>
                <li><Link to="/portfolio/2">Item Two</Link></li>
                <li><Link to="/portfolio/3">Item Three</Link></li>
            </ul>
        </div>
    )
}

export default Portfolio
