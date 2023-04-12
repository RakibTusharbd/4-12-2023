import React from 'react';
import './Man.css'


const Man = () => {
    return (
        <div className='man-container'>
            <div className="man-infromation">
                <h1>One Step <br /> Closer To Your <br /> <span className='job'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn'>Get Started</button>
            </div>
            <div className="man-pic">
                <img src="https://pixart.pro/wp-content/uploads/2023/04/P3OLGJ1-copy-1.png" alt="" />
            </div>
        </div>
    );
};

export default Man;