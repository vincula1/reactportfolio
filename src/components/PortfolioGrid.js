import React from 'react';
import PortfolioItem from './PortfolioItem';
import '../styles/PortfolioGrid.css';

function PortfolioGrid() {
    const portfolioItems = [
        { title: 'Connect 4 AI', imageUrl: 'https://www.hasbro.com/common/productimages/en_US/80FB5BCA50569047F5F45EB5DF88DAF4/16522e18bdd7c982a51711270822bee0d9d779e8.jpg' },
        { title: 'Rizz-O-Matic', imageUrl: 'https://art.pixilart.com/8d266200ab7fe5a.png'},
    ];

    return (
        <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
                <PortfolioItem key={index} title={item.title} imageUrl={item.imageUrl} />
            ))}
        </div>
    );
}

export default PortfolioGrid;
