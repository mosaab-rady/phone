import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../Context';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, dispatch } = useContext(ProductContext);

  const { company, img, info, price, title, inCart } = products.find(
    (item) => item.id === parseInt(id)
  );

  return (
    <section className='single_product'>
      <div className='single_product_img_container'>
        <img src={`../${img}`} alt='product' />
      </div>
      <div className='single_product_details'>
        <h1 className='detail'>{title}</h1>
        <h3 className='detail'>
          <span>made by:</span> {company}
        </h3>
        <h3 className='detail'>
          <span>price:</span> ${price}
        </h3>
        <p className='detail'>
          <span>some info: </span>

          {info}
        </p>

        <div className='single_product_link'>
          <Link to='/' className='btn single_product_btn'>
            back to broducts
          </Link>
          {inCart ? (
            <button className='btn single_product_btn'>in cart</button>
          ) : (
            <button
              className='btn single_product_btn'
              onClick={() =>
                dispatch({ type: 'ADD_TO_CART', payload: parseInt(id) })
              }
            >
              add to cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
