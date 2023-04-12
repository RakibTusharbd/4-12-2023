import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,title,para} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
           <h4 className='product-name'>{title}</h4>
           <p className='jo'>{para}</p>
           </div>
        </div>
    );
};

export default Product;