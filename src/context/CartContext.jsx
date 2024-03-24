import React, { createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = () => {};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
const useCart = () => {
  const result = useContext(CartContext);
  console.log(result);
};
export default CartProvider;
export {useCart}
