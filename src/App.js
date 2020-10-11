import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import CartProducts from './component/CartProducts';
import Error from './component/Error';
import NavBar from './component/NavBar';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route path='/cart'>
          <CartProducts />
        </Route>
        <Route path='/product/:id'>
          <ProductDetails />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
