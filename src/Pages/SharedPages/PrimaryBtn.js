import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="btn btn-primary text-white btn-md  block md:inline-block  mx-auto bg-gradient-to-r from-sky-500 to-blue-700">{children}</button>
    );
};

export default PrimaryBtn;