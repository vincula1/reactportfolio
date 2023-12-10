import React from 'react';
import PortfolioItem from './PortfolioItem';
import '../styles/PortfolioGrid.css';

function PortfolioGrid() {
    const portfolioItems = [
        { title: 'Connect 4 AI', imageUrl: 'https://www.hasbro.com/common/productimages/en_US/80FB5BCA50569047F5F45EB5DF88DAF4/16522e18bdd7c982a51711270822bee0d9d779e8.jpg', githubUrl: 'https://github.com/vincula1/connect4' },
        { title: 'Rizz-O-Matic', imageUrl: 'https://art.pixilart.com/8d266200ab7fe5a.png', githubUrl: 'https://github.com/AllieStewart/Rizz-o-matic'},
        { title: 'Weather Dashboard', imageUrl: 'https://play-lh.googleusercontent.com/4LVcW1MTvnxkw3Qjj-x8xMi61eZjRfUnZBr_CGjK32U1heM7vdsow3dSDW_l-oYQFg=w240-h480-rw', githubUrl: 'https://github.com/vincula1/weatherdash' },
        { title: 'NBA Live Schedule', imageUrl: 'https://logo.com/image-cdn/images/kts928pd/production/87f7ea9c02c3d00e1763891534c6d2bd5846f5a7-731x731.png?w=1080&q=72', githubUrl: 'https://github.com/vincula1/nbaproject'},
    ];

    return (
        <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
                <PortfolioItem key={index} title={item.title} imageUrl={item.imageUrl} githubUrl={item.githubUrl} />
            ))}
        </div>
    );
}

export default PortfolioGrid;
