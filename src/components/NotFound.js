import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h2>404 - The page you requested is not found</h2>
            <div>Check out our <Link to="/">home</Link></div>
        </div>
    );
}