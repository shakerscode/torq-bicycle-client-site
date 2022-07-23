import React from 'react';
import BusinessSummery from './BusinessSummery';
import Contacts from './Contacts';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import HomeProducts from './HomeProducts';
import HomeSlider from './HomeSlider';
import ProductReview from './ProductReview';

const HomePage = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
            <BusinessSummery></BusinessSummery>
            <ProductReview></ProductReview> 
            <Contacts></Contacts>
        </div>
    );
};

export default HomePage;