"use client";
// import React, { createContext } from "react";
//
// export const CartContext = createContext();
//
// const CartProvider = ({ children }) => {
//   return (
//     <CartContext.Provider value={"cart context"}>
//       {" "}
//       {children}{" "}
//     </CartContext.Provider>
//   );
// };
//
// export default CartProvider;

import React, { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={"cart context"}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};

export default CartProvider;
