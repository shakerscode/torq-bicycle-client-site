import React from 'react';
import bannerExperience from '../../images/experinece-bg-min-compressed.jpg'

const Experience = () => {
    return (
        <div style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            background:`url(${bannerExperience})`
        }}>
            
        </div>
    );
};

export default Experience;