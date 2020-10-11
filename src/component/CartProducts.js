import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context';

export default function CartProducts() {
  const { cartProducts, dispatch } = useContext(ProductContext);
  const price = cartProducts.map((product) => product.price);
  let totalPrice = 0;
  for (let i = 0; i < price.length; i++) {
    totalPrice += price[i];
  }

  return (
    <section className='cart_products'>
      <div className='money_side'>
        <h3 className='detail'>
          <span>({cartProducts.length})</span> items
        </h3>
        <h3 className='detail'>
          <span>total price:</span> ${totalPrice}
        </h3>
        <button
          className='btn single_product_btn'
          onClick={() => dispatch({ type: 'REMOVE_ALL' })}
        >
          remove all
        </button>
      </div>

      <div className='products_side'>
        {cartProducts.map((item) => {
          return (
            <div className='product_side'>
              <Link to={`/product/${item.id}`}>
                <img src={item.img} alt='product' className='cart_image' />
              </Link>
              <div>
                <h1 className='detail'>{item.title}</h1>
                <h3 className='detail'>
                  <span>price:</span> ${item.price}
                </h3>
                <button
                  className='btn single_product_btn'
                  onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                  }
                >
                  remove from cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
