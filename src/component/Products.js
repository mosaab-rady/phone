import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import SingleProduct from './SingleProduct';

export default function Products() {
  const { products } = useContext(ProductContext);
  return (
    <section className='products'>
      {products.map((item) => {
        return (
          <SingleProduct
            key={item.id}
            img={item.img}
            title={item.title}
            id={item.id}
            inCart={item.inCart}
          />
        );
      })}
    </section>
  );
}
