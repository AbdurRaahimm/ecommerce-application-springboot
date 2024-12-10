import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedItems = [...state.items, action.payload];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(filteredItems));
      return { ...state, items: filteredItems };
    case 'CLEAR_CART':
      localStorage.removeItem('cartItems');
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedItems) {
      dispatch({ type: 'SET_CART', payload: storedItems });
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return React.useContext(CartContext);
};
