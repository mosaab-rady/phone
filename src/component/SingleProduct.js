import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { ProductContext } from '../Context';

export default function SingleProduct({ img, title, id, inCart }) {
  const { dispatch } = useContext(ProductContext);
  return (
    <article className='product_container'>
      <div className='img_container'>
        <img src={img} alt='product' />
        {inCart ? (
          <button className='btn product_btn'>in cart</button>
        ) : (
          <button
            className='btn product_btn'
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: id })}
          >
            add to cart
          </button>
        )}

        <Link to={`/product/${id}`} className='product_link'>
          <button className='btn'>learn more</button>
        </Link>
      </div>

      <h2>{title}</h2>
    </article>
  );
}
