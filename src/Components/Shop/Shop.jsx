import React, { useEffect, useState } from 'react';
import './Shop.css'
import Gngor from '../Gngor/Gngor';

const Shop = () => {
    const [prank,setPrank] = useState([]);
    useEffect(() => {
        fetch('Prank.json')
        .then(res => res.json())
        .then(data => setPrank(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="last-product">
            {
                prank.map(pran => <Gngor key={pran.id} pran={pran}></Gngor>)
            }
            </div>
        </div>
    );
};

export default Shop;