import React, { useReducer } from 'react';
import { storeProducts } from './data';
export const ProductContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let newCartItem = state.products.find((item) => item.id === action.payload);
    newCartItem.inCart = true;
    const newCartProducts = [...state.cartProducts, newCartItem];
    return { ...state, cartProducts: newCartProducts };
  }
  if (action.type === 'REMOVE_ALL') {
    for (let i = 0; i < state.products.length; i++) {
      state.products[i].inCart = false;
    }
    return { ...state, cartProducts: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    const removedProduct = state.products.find(
      (item) => item.id === action.payload
    );
    removedProduct.inCart = false;

    const newCartProducts = state.cartProducts.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cartProducts: newCartProducts };
  }
};
const defaultState = {
  products: storeProducts,
  cartProducts: [],
};

export default function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
