import React from 'react'
import { LiveStatus } from './LiveStatus';

export const Product = () => {
    const Product={
        name:'Beige Cotton color',
        price:399,

    }
  return (
    <>
    <div className='product-container'>
        <h5 className='title'>{Product.name}</h5>
        <span>{Product.price}</span>
        <button onClick={(e)=>{
          alert(Product.price); 
        }}>Add to Cart</button>
        <LiveStatus/>
    </div>
    </>
  )
}
