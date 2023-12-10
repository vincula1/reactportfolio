import React from 'react';
import '../styles/PortfolioItem.css';

function PortfolioItem({ title, imageUrl }) {
    return (
        <div className="portfolio-item">
            <img src={imageUrl} alt={title} />
            <div className="overlay">
                <div className="text">{title}</div>
            </div>
        </div>
    );
}

export default PortfolioItem;
