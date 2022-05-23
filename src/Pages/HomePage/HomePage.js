import React from 'react';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import HomeProducts from './HomeProducts';
import ProductReview from './ProductReview';

const HomePage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
            <ProductReview></ProductReview>
        </div>
    );
};

export default HomePage;