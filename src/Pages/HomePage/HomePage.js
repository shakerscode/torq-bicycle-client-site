import React from 'react';
import BusinessSummery from './BusinessSummery';
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
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default HomePage;