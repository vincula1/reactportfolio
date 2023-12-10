import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Header.css';

function Header() {
    return (
        <>
            <title>My Portfolio</title>
            <link rel="stylesheet" type="text/css" href="Header.css" />
            <header>
                <div className="logo">
                    <h1>Laith Khireiwish</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
