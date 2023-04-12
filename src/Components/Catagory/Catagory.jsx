import React, { useEffect, useState } from 'react';
import './Catagory.css'
import Product from '../Product/Product';

const Catagory = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('Cart.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='icon-container'>
            <div className="wirtten">
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="Cart">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Catagory;