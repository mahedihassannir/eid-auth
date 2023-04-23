import React from 'react';
import { Link } from 'react-router-dom';

const Heaer = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Heaer;