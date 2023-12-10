import React from 'react';
import '../styles/PortfolioItem.css';

function PortfolioItem({ title, imageUrl, githubUrl }) {
    return (
        <a href={githubUrl} className="portfolio-item" target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={title} />
            <div className="overlay">
                <div className="text">{title}</div>
            </div>
        </a>
    );
}


export default PortfolioItem;
