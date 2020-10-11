import React, { useContext } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ProductContext } from '../Context';

export default function NavBar() {
  const { cartProducts } = useContext(ProductContext);
  return (
    <section className='nav_container'>
      <Link to='/' className='nav_right'>
        <HomeIcon className='icon' />
        <h3>Products</h3>
      </Link>

      <Link to='/cart' className='nav_left'>
        <button className='btn'>
          <AddShoppingCartIcon className='shopping_icon'/>
          <h3>my cart</h3>
          <h4 className='nav_nb'>({cartProducts.length})</h4>
        </button>
      </Link>
    </section>
  );
}
