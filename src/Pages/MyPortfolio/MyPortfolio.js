import React from 'react';
import Experience from './Experience';
import MyDescription from './MyDescription';
import MyInformation from './MyInformation';
import Quality from './Quality';

const MyPortfolio = () => {
    return (
        <div>
            <MyDescription></MyDescription>
            <Quality></Quality>
            <Experience></Experience>
            <MyInformation></MyInformation>
        </div>
    );
};

export default MyPortfolio;