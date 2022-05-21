import React from 'react';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import HomeProducts from './HomeProducts';

const HomePage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default HomePage;